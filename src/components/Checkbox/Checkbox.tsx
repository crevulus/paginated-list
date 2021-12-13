import React, { ChangeEvent, useContext } from "react";
import GlobalContext from "../../data/GlobalContext";
import {
  StyledCheckbox,
  StyledLabel,
  StyledCheckboxContainer,
} from "./Checkbox.styles";

type CheckboxPropsType = {
  label: string;
  id: string;
};

const Checkbox = ({ label, id }: CheckboxPropsType) => {
  const { selected, setSelected } = useContext(GlobalContext);

  const handleCheckboxChange = (event: ChangeEvent) => {
    const target = (event.target as HTMLInputElement).value;
    const shallowArrayCopy = [...selected];
    if (shallowArrayCopy.includes(target)) {
      const filteredArray = shallowArrayCopy.filter((id) => id !== target);
      setSelected(filteredArray);
    } else {
      shallowArrayCopy.push(target);
      setSelected(shallowArrayCopy);
    }
  };

  return (
    <StyledCheckboxContainer>
      <StyledCheckbox
        type="checkbox"
        id={id}
        value={id}
        onChange={handleCheckboxChange}
      />
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
    </StyledCheckboxContainer>
  );
};

export default Checkbox;
