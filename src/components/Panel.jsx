import React, { useState, useEffect } from "react";
import Form from "./Molecules/form/Form";
import Spinner from "./Molecules/loader/Spinner";
import SectionBlock from "./Sections/SectionBlock";
import SectionBlockItem from "./Sections/SectionBlockItem";
import AjaxManager from "../API/AjaxManager";

import { Button, Link } from "./Atoms/Atoms";

const USID = require("usid");
const usid = new USID();

const Panel = (data) => {
  const api = new AjaxManager();

  const [notes, setNotes] = useState([]);
  const [isLoader, setLoader] = useState(true);

  const refresh = () => {
    setLoader(true);
    setTimeout(() => {
      api.getAllNotes((response) => {
        setNotes([...response]);
        setLoader(false);
      });
    }, 2 * 1000);
  };

  const handleAdd = (note) => {
    api.createNotes(note);
    api.getAllNotes((response) => {
      setNotes([...response]);
    });
  };

  useEffect(() => {
    setLoader(true);
    const fetchData = async () => {
      refresh();
    };
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRemove = (id) => {
    api.delete(id, (response) => {
      if (response)
        setNotes((prevState) => prevState.filter((o) => o.id !== id));
    });
  };

  const props = {
    childData: data,
    onAdd: handleAdd,
  };
  return (
    <>
      <Spinner key={usid.rand()} data={{ type: "loader" }} visible={isLoader} />

      <div className="panel-container">
        <div className="panel-header">
          <Link
            key={usid.rand()}
            className="update"
            tag={"h3"}
            text={"Notes"}
          />
          <Button
            key={usid.rand()}
            id={usid.rand()}
            className="update"
            onClick={refresh}
          />
        </div>
        <Form key={usid.rand()} {...props} type={"notes"}></Form>
        <SectionBlock
          key={usid.rand()}
          className="notes"
          handleRemove={handleRemove}
        >
          {notes.map((item) => {
            return (
              <SectionBlockItem
                key={usid.rand()}
                {...item}
                className={"note"}
                onRemove={handleRemove}
              />
            );
          })}
        </SectionBlock>
      </div>
    </>
  );
};
export default Panel;
