import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

//create your first component
const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  return (
    <>
      <div>
        <h1 className="text-center">Todo List</h1>
        <ul>
          <li>
            <input
              type="text"
              onChange={(event) => setInputValue(event.target.value)}
              onKeyUp={(event) => {
                if (event.key === "Enter" && inputValue != "") {
                  setTodoList(todoList.concat(inputValue));
                  setInputValue("");
                }
              }}
              value={inputValue}
              placeholder="Write new task here"
            />
          </li>
          {todoList.map((item, index) => (
            <li
              className="d-flex justify-content-between"
              key={`todoList${index}`}
            >
              <div>{item}</div>
              <div className="icon-delete">
                <FontAwesomeIcon
                  icon={faXmark}
                  style={{ color: "#ff0000" }}
                  onClick={() =>
                    setTodoList(
                      todoList.filter(
                        (_e, currentIndex) => index != currentIndex
                      )
                    )
                  }
                />
              </div>
            </li>
          ))}
        </ul>
        <div className="d-flex justify-content-end">
          <div>
            {todoList.length === 0
              ? "No tasks pending"
              : `${todoList.length} ${
                  todoList.length === 1 ? "task" : "tasks"
                } pending`}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
