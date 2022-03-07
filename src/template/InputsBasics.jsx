import React from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const InputBasic = styled.input`
  width: 100%;
  height: 42px;
  font-size: 14px;
  border: 2px solid;
  border-color: ${(props) => props.activeColor};
  box-sizing: border-box;
  border-radius: 30px;
  outline: none;
  padding: 16px;
  font-family: 'Work Sans', sans-serif;

  ::placeholder {
    font-family: 'Work Sans', sans-serif;
    color: #cecece;
    font-weight: normal;
    opacity: 1;
  }

  :-ms-input-placeholder {
    font-family: 'Work Sans', sans-serif;
    color: #cecece;
    font-weight: normal;
  }

  ::-ms-input-placeholder {
    font-family: 'Work Sans', sans-serif;
    color: #cecece;
    font-weight: normal;
  }
`;

const InputErroMenssage = styled.label`
  color: #c50e29;
  font-size: 12px;
  margin-top: 1%;
  margin-left: 1%;
  font-family: "Roboto", sans-serif;
`;

// const Label = styled.label`
//   color: #555555;
//   margin-left: 1px;
//   margin-bottom: 8px;
//   font-size: 14px;
//   font-family: "Roboto", sans-serif;
//   font-weight: 500;
//   line-height: 16px;
// `;

function getColor(color) {
  return color === undefined ? "#222" : color;
}
const Input = (props) => {
  /* props para mudar cor do input
   * color='#999' ->  quando o input não foi selecionado
   * activeColor='#007bFF' -> quando o input for selecionado
   */
  return (
    <InputContainer>
      <InputBasic
        placeholder={props.label}
        color={props.invalid ? "#c50e29" : getColor(props.color)}
        type={props.type}
        activeColor={props.invalid ? "#c50e29" : "#cecece"}
        value={props.value}
        onChange={props.onChange}
        onKeyPress={props.onKeyPress}
        disabled={props.disabled}
      />
      {props.invalid && (
        <InputErroMenssage>Campo obrigatório</InputErroMenssage>
      )}
    </InputContainer>
  );
};
export default Input;
