import React from "react";
import { nanoid } from "nanoid";
import savedData from "../../savedData";
import additem from "../images/add-item.svg";

export default function ToDoList() {
  const [listData, setListData] = React.useState(savedData);
  const [newItemInput, setNewItemInput] = React.useState("");
  const [autoCompleteRequested, setAutoCompleteRequested] = React.useState(false);

  function handleCheckBoxChange(event) {
    setListData(prevList => {
      return prevList.map(item => {
        return item.id === event.target.name
          ? { ...item, complete: !item.complete }
          : item;
      });
    });
  }

  function handleNewItemInputChange(event) {
    setNewItemInput(event.target.value);
  }

  const div = document.querySelector(".to-do-list-container");

  React.useEffect(() => {
    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [listData]);

  /**** Most Relevant Code **************************************************************************/

  function handleEnter(event) {
    if (newItemInput.trim()) {
      if (event.key === "Enter") {
        setListData(prevList => {
          const newListItem = {
            text: event.target.value,
            complete: false,
            id: nanoid(),
          };
          return [...prevList, newListItem];
        });
        setNewItemInput(""); // Clear the input after adding a new item
      }
    }
  }

  function autoComplete() {
    setAutoCompleteRequested(true);
  }

  React.useEffect(() => {
    if (autoCompleteRequested) {
      let timeOut = setTimeout(() => {
        setAutoCompleteRequested(false);
        setListData(prevData => {
          return prevData.map(item => {
            return !item.complete ? { ...item, complete: true } : item;
          });
        });
      }, 2000);
    }
  }, [autoCompleteRequested]);

  // Add event handlers for focus and blur
  function handleFocus() {
    document.querySelector(".add-item-icon").classList.add("faded");
  }

  function handleBlur() {
    document.querySelector(".add-item-icon").classList.remove("faded");
  }

  const currentList = listData.map(item => {
    return (
      <div className="to-do-list-item-container" key={item.id}>
        <label className="checkbox-label">
          <input
            type="checkbox"
            name={item.id}
            onChange={handleCheckBoxChange}
          />
          <span className="checkmark"></span>
          <p className={`to-do-list-item-text ${item.complete && "crossed-out"}`}>
            {item.text}
          </p>
        </label>
        <div className="all-progress-bars-container">
          {!item.complete && autoCompleteRequested && (
            <div className="progress-bar-container">
              <div className="progress-bar-content"></div>
            </div>
          )}
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="to-do-list-container">
        {currentList}
        <label className="new-item-label">
          <img
            src={additem}
            className="add-item-icon"
          />
          <input
            className="new-item-input"
            type="text"
            onKeyDown={handleEnter}
            onChange={handleNewItemInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={newItemInput} // Add this line to bind input value to state
          />
        </label>
      </div>
      <div className="do-it-button-container">
        <button onClick={autoComplete}>AutoComplete</button>
      </div>
    </div>
  );
}
