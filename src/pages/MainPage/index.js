import { connect } from "react-redux";
import { Card, List } from "antd";
import {
  CustomButton,
  CustomCheckbox,
  CustomList,
  CustomInput,
} from "../../components";
import "antd/dist/antd.css";
import { DeleteOutlined } from "@ant-design/icons";
import { useState } from "react";
import styles from "./styles/mainPage.module.scss";

const App = ({ dispatch, todos }) => {
  const [todo, setTodo] = useState(null);

  const onTextChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = () => {
    dispatch({ type: "ADD", data: { title: todo } });
  };

  const deleteItem = (e) => {
    const id = e.currentTarget.id;
    dispatch({ type: "DELETE", id: id });
  };

  const updateItem = (e) => {
    const id = e.target.id;
    const data = e.target.checked;
    dispatch({ type: "UPDATE", id: id, data: { completed: data } });
  };

  return (
    <Card title="Todo List">
      <Card.Grid className={styles.gridStyle}>
        <CustomInput
          onChange={onTextChange}
          placeholder="Add Todo"
          className={styles.inputStyle}
        ></CustomInput>
        <CustomButton
          onClick={handleSubmit}
          type="primary"
          text="Add Todo"
          className={styles.buttonStyle}
        />
        <CustomList
          dataSource={todos.todos}
          itemLayout="horizontal"
          renderItem={(item) => (
            <List.Item
              key={item._id}
              actions={[
                <CustomButton
                  id={item._id}
                  onClick={deleteItem}
                  type="danger"
                  icon={<DeleteOutlined />}
                />,
              ]}
            >
              <CustomCheckbox
                checked={item.completed}
                onChange={updateItem}
                id={item._id}
                title={item.title}
              />
            </List.Item>
          )}
        />
      </Card.Grid>
    </Card>
  );
};

const mapStateToProps = (state, dispatch) => ({
  todos: state.todos,
  dispatch: dispatch,
});

export default connect(mapStateToProps)(App);
