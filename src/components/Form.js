import React from "react";

const Input = props => (
  <div className="form">
    <input
      className="input"
      placeholder="Type City Name..."
      onChange={props.onChange}
      required
    />
    <button type="submit" className="btn" onClick={props.onClick} ><i className="fa fa-search"></i>
    </button>
  </div>
);

export default Input;