import React from "react";

import PropTypes from "prop-types";

/**Текст */

export const Text = React.forwardRef((data, ref) => {
console.log(data, "text");
  if (!data) {
    return null;
  }
  return (
    <React.Fragment>
      <p className={data.className + "__text"}>{data.text}</p>
    </React.Fragment>
  );
});

/**Кнопка */
export const Button = (data) => {
  return (
    <React.Fragment>
      <button
        ref={data.btnRef}
        className={data.className + "__btn"}
        onClick={data.onClick ? () => data.onClick(data.id) : null}
      ></button>
    </React.Fragment>
  );
};

Button.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    btnRef: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  }),
};

/**Поле ввода в форме поиска */
export const Input = React.forwardRef((data, ref) => {
  //console.log(data);
  return (
    <React.Fragment>
      <div className="input-wrapper">
        <input
          ref={ref}
          className={data.className + "__input"}
          type={data.type}
          name={data.name}
          onChange={data.onChange}
        />
        <label className="label" name={data.label}>
          {data.label}
        </label>
      </div>
    </React.Fragment>
  );
});

/*Input.propTypes = {
  data: PropTypes.object.isRequired,
};*/

/**Поле ввода новой записи */

export const Textarea = React.forwardRef((data, ref) => {
  if (!data) {
    return null;
  }

  return (
    <React.Fragment>
      <div className="textarea-wrapper">
        <textarea
          ref={ref}
          rows={10}
          cols={50}
          className={data.className + "__input"}
          type={data.type}
          name={data.name}
          onChange={data.onChange}
        />
        <label className="label" name={data.name}>
          {data.label}
        </label>
      </div>
    </React.Fragment>
  );
});

/**Текстовая ссылка */

export const Link = (props) => {
  if (!props) {
    return null;
  }

  console.log(props, "link");

  const classes = props.className + "-link";
  let result = React.createElement(
    props.tag,
    { className: props.className + "-text" },
    props.text
  );

  return (
    <>
      <a className={classes} href={props.url} target="blanc">
        {result}
      </a>
    </>
  );
};
Link.propTypes = {
  props: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
  }),
};
