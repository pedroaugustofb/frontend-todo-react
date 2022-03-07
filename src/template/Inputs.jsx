import React from "react";
import InputFloat from "react-floating-input";
import styled from "styled-components";

const InputContainer = styled.div`
  height: 55px;
  margin-top: 20px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 14px;
  position: relative;
  ${(props) =>
    props.marginTop &&
    `
      margin-top:  0px;
    `}
  label {
    font-weight: 400;
  }
`;

const InputErroMenssage = styled.label`
  color: #c50e29;
  font-size: 12px;
  position: absolute;
  left: 5px;
  bottom: -4px;
`;

function getColor(color) {
  return color === undefined ? "#505565" : color;
}
const Input = (props) => {
  /* props para mudar cor do input
   * color='#999' ->  quando o input não foi selecionado
   * activeColor='#007bFF' -> quando o input for selecionado
   */
  return (
    <InputContainer
      marginTop={props.marginTop}
      style={{ width: `${props.tamanho}` }}
    >
      <InputFloat
        name={props.name}
        color={props.invalid ? "#c50e29" : getColor(props.color)}
        type={props.type}
        activeColor={props.activeColor ? props.activeColor : "#759ebe"}
        value={props.value}
        onChange={props.onChange}
        onKeyPress={props.onKeyPress}
        placeholder={props.label}
        disabled={props.disabled}
      />
      <InputErroMenssage>
        {props.invalid
          ? props.errorMessage
            ? props.errorMessage
            : "Campo obrigatório"
          : ""}
      </InputErroMenssage>
    </InputContainer>
  );
};
export default Input;