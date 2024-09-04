import { Input } from "antd";
import React from "react";

const CustomInput = (props) => (
  <Input className={props.className} onChange={props.onChange} placeholder={props.placeholder}></Input>
);
export default CustomInput;
