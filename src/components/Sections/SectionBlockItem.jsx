import React from "react";
import { Text, Button } from "../Atoms/Atoms";


const USID = require("usid");
const usid = new USID();

const SectionBlockItem = (props) => {

  return (
    <div key={usid.rand()} data-id={props.id} className={props.className + "-card"}>
      <div key={usid.rand()} className={props.className + "-content"}>
        <Text
          key={usid.rand()}
          {...props}
          text={props.description}
          className={props.className}
        ></Text>
      </div>
      <div className={props.className + "__button-block"}>
      <Button
          id={props.id}
          key={usid.rand()}
          
          className={props.className + "-close"}
          onClick={props.onRemove}
        />
      </div>

    </div>
  );
};

export default SectionBlockItem;
