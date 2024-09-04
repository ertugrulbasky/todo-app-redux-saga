import { List } from "antd";
import React from "react";

const CustomList = (props) => (
  <List
    dataSource={props.dataSource}
    itemLayout={props.itemLayout}
    renderItem={props.renderItem}
  />
);
export default CustomList;
