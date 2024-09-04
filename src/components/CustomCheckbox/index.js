import { Checkbox } from "antd";
import React from "react";

const CustomCheckbox = (props) => (
  <Checkbox checked={props.checked} onChange={props.onChange} id={props.id}>
    {props.title}
  </Checkbox>
);
export default CustomCheckbox;
