import React, { ChangeEvent, useContext, useState, useEffect } from "react";
import GlobalContext from "../../data/GlobalContext";
import {
  StyledCheckbox,
  StyledLabel,
  StyledCheckboxContainer,
  StyledLogo,
} from "./Checkbox.styles";

type CheckboxPropsType = {
  label: string;
  country: string;
  id: string;
};

const Checkbox = ({ label, country, id }: CheckboxPropsType) => {
  const { selected, setSelected, page } = useContext(GlobalContext);
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (event: ChangeEvent) => {
    event.stopPropagation(); // IMPROVE: Glitch; propagation not stopping successfully
    const target = (event.target as HTMLInputElement).value;
    const shallowArrayCopy = [...selected];
    if (shallowArrayCopy.includes(target)) {
      const filteredArray = shallowArrayCopy.filter((id) => id !== target);
      setSelected(filteredArray);
    } else {
      shallowArrayCopy.push(target);
      setSelected(shallowArrayCopy);
    }
    setChecked(!checked);
  };

  useEffect(() => {
    if (!selected.length) {
      setChecked(false);
    }
  }, [selected]);

  useEffect(() => {
    if (!selected.includes(id)) {
      setChecked(false);
    } else {
      setChecked(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, selected]);

  return (
    <StyledCheckboxContainer>
      <StyledCheckbox
        type="checkbox"
        id={id}
        value={id}
        checked={checked}
        onChange={handleCheckboxChange}
      />
      <StyledLogo />
      <StyledLabel htmlFor={id}>
        {label}, {country}
      </StyledLabel>
    </StyledCheckboxContainer>
  );
};

export default Checkbox;
