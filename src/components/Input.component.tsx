import React, { ChangeEvent } from 'react';
import {dataType} from '../Interfaces/Interface';

/*interface Props {
  handleInputChange(event: ChangeEvent<HTMLInputElement>): void;
}*/
interface Props {
  renderData: dataType[];
  setRenderData(newData: dataType[]): void;
}
function Input({renderData,setRenderData}: Props) {
  const originalData = renderData;
  const [value, setValue] = React.useState("");

  const handleInputChange = async(e: ChangeEvent<HTMLInputElement>)=> {
    setTimeout(() => {
    setValue(e.target.value);
    setRenderData(originalData);
    //check if input is given
    if(value!=='' && /[A-Z]/.test(value.charAt(0))) {
        console.log(value);
        let newData = originalData.filter((item)=> {return item.name.includes(value)});
        setRenderData(newData);
      }
      else{
        setRenderData(originalData);
      }
    }, 1000);
  }
  return (
    <form >
      <input type='text' name = 'nameSearch'
        onChange = {handleInputChange}
        //onKeyPress = { handleInputChange}
        //onKeyUp = {handleInputChange}
        placeholder={"Search Table ..."}
      />
    </form>
  );
};

export default Input;
