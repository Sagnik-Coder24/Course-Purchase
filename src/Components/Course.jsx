import React, { useEffect, useState } from "react";

function Course(props) {
  const [active, setActive] = useState(props.active);

  useEffect(() => {
    setActive(props.active);
  }, [props.active]);

  const clicker = () => {
    setActive((active) => !active);
    props.sumPrice(!active ? props.price : -props.price);
  };

  return (
    <div>
      <p className={active ? "active" : ""} onClick={clicker}>
        {props.name} <b>{props.price}</b>
      </p>
    </div>
  );
}

export default Course;
