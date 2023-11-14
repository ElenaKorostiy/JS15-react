import React, { useState, useEffect } from "react";
import { arr } from "./utils/math";
import { Search } from "./sections/Search";
import "./App.css";

export const App = () => {
  const [count, setCount] = useState(0);
  const [authorised, setAuthorised] = useState(false);
  const [theme, setTheme] = useState("white");
  const [arrlist, setArrlist] = useState(arr);
  const [isTextVisible, setIsTextVisible] = useState(false);

  const handleButtonClick = () => {
    setIsTextVisible(!isTextVisible);
  };

  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    // Retrieve todo list from local storage when the component mounts
    const storedTodoList = localStorage.getItem("todoList");
    if (storedTodoList) {
      setTodoList(JSON.parse(storedTodoList));
    }
  }, []);

  useEffect(() => {
    // Save todo list to local storage whenever it changes
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodoList([...todoList, inputValue]);
      setInputValue("");
    }
  };

  return (
    <>
      <button onClick={() => setCount(count + 1)}>click{count}</button>
      <button onClick={() => setAuthorised(!authorised)}>
      {authorised ? "Log out" : "Log in"}
      </button>
      <button onClick={() => setTheme(theme === "white" ? "black" : "white")}>
        Change theme
      </button>
      <button
        onClick={() => {
          setArrlist((prevState) => {
            const nextState = [...prevState];
            nextState.sort((a, b) => a - b);
            return nextState;
          });
        }}
      >
        Sort list
      </button>
      <p>{arrlist.join(", ")}</p>
      <div
        style={{
          width: "100%",
          height: "200px",
          backgroundColor: theme === "white" ? "#aaaaaa" : "#000000",
        }}
      ></div>
    <Search />
     
     
    <div
        style={{
          width: "100%",
          height: "200px",
          backgroundColor: "yellowgreen",
        }}
    >
        <button className="too" onClick={handleButtonClick}>Toggle Text</button>
        {isTextVisible && (
          <p className="text">
            This is the text to show/hide. This is the text to show/hide. This
            is the text to show/hide.
          </p>
        )}
    </div>
    <div className="all">
        <input
          className="free"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter todo"
    />
        <button className="tree" onClick={handleAddTodo}>Add Todo</button>
        <ul>
          {todoList.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
    </div>
    </>
  );
};
