import React, { useReducer, useEffect } from 'react';

import { validate } from './InputValidation';
import './Input.css';

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        isTouched: false,
        value: action.val,
        isValid: validate(action.val, action.validationList )
      };
    case 'TOUCH': {
      return {
        ...state,
        isTouched: true
      };
    }
    default:
      return state;
  }
};

const Input = (props) => {

  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.value || '',
    isTouched: false,
    isValid: props.valid || false
  });

  const { id, getState } = props;
  const { value, isTouched, isValid } = inputState;

  useEffect(() => {
    getState(id, value, isValid);
  }, [id, value, isValid, getState]);

  const changeHandler = event => {
    dispatch({
      type: 'CHANGE',
      val: event.target.value,
      validationList: props.validationList
    });
  };

  const touchHandler = () => {
    dispatch({
      type: 'TOUCH'
    });
  };

  const element =
    props.element === 'input' ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    );

  return (
    <div
      className={`form-control ${!isValid &&
        isTouched && 'form-control--invalid'}`} 
      style={{ alignItems: props.align }}  
      >

      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!isValid && isTouched && <p>{props.errorMsg}</p>}
    </div>
  );
};


export default Input;