import { Button } from "antd";
import React from "react";

const CustomButton = (props) => (
  <Button
    icon={props.icon}
    style={props.style}
    onClick={props.onClick}
    className={props.className}
    type={props.type}
  >
    {props.text}
  </Button>
);
export default CustomButton;
