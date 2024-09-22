import React, { createContext, useState } from "react";
import ComA from "./ComA";
import CompB from "./CompB";
import ComC from "./ComC";
import ComD from "./ComD";

export const userContext = createContext();
export default function App() {
  const [name, setName] = useState("Rohan Dutt");
  const [userName, setUserName] = useState("");
  const [todo, setTodo] = useState([]);
  const [item, setItem] = useState("");
  const [isAuthicate, setIsAuthicate] = useState("");
  function addItemHandler() {
    if (item.trim()) {
      setTodo([...todo, item]);
    }
  }
  return (
    <userContext.Provider value={{name}}>
      <h3>use Context Hook</h3>
      <h1>Hello {name}</h1>
      <ComA></ComA>
      <CompB></CompB>
      <ComC></ComC>
      <ComD></ComD>
      <h3>use reducer Hook</h3>
      <div className="container">
        <div className="">
          <p id="current-user">{isAuthicate}</p> <br />
          <button
            id="login-btn"
            onClick={() => {
              setIsAuthicate("Current user:rohan, isAuthenticated: Yes");
            }}
          >
            Login
          </button>
          <button
            id="signout"
            onClick={() => {
              setIsAuthicate("Current user:, isAuthenticated: No");
            }}
          >
            Signout
          </button>
        </div>

        <div className="">
          <input
            type="text"
            id="shopping-input"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <button onClick={addItemHandler}>Add Item</button>
          <button onClick={() => setTodo([])} id="clear-list">
            remove
          </button>
          {todo.map((item, index) => {
            return (
              <div key={index}>
                <ul>
                  <li id="item-{name_of_the_item_added_to_list}">
                    {item}{" "}
                    <button
                      onClick={() => {
                        setTodo(todo.filter((item, i) => i !== index));
                      }}
                      id="remove-{name_of_the_item_added_to_list}"
                    >
                      Delete
                    </button>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </userContext.Provider>
  );
}
