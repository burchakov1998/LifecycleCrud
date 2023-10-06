import React, { useRef } from "react";
import { Button, Textarea, Text } from "../../Atoms/Atoms";

const USID = require("usid");
const usid = new USID();

const Form = (data) => {
  const inputRef = useRef();
  const tooltipeRef = useRef();

  tooltipeRef.current = document.querySelector(".tooltipe__text");

  const { childData, onAdd } = data;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!inputRef.current || inputRef.current.value === "") {
      tooltipeRef.current.style["visibility"] = "visible";

      return null;
    }
    tooltipeRef.current.style["visibility"] = "hidden";
    onAdd(inputRef.current.value);
    inputRef.current.value = "";
  };

  const handleInput = (event) => {
    event.preventDefault();

    inputRef.current = event.target;
  };

  return (
    <React.Fragment>
      <div className="form-field-wrapper">
        <form onSubmit={handleSubmit} className={childData.type + "-forms"}>
          <Textarea
            key={usid.rand()}
            className={childData.name}
            name={childData.name}
            label={"New " + childData.name}
            type="text"
            onChange={handleInput}
            value=""
          />
          <Text
            ref={tooltipeRef}
            key={usid.rand()}
            className={data.type + "-form-tooltipe tooltipe"}
            text={"*Заполните поле!"}
          />
          <Button
            key={usid.rand()}
            id={usid.rand()}
            className="form-add"
            text={""}
          />
        </form>
      </div>
    </React.Fragment>
  );
};

export default Form;
