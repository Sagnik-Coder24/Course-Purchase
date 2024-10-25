import React, { useEffect, useState } from "react";
import Course from "./Course";

function Coursesales(props) {
  const [total, setTotal] = useState(0);
  const [active, setActive] = useState(false);
  const [butText, setButText] = useState("SELECT");
  const [maxTp, setMaxTp] = useState(0);

  const sumPrice = (price) => {
    setTotal((t) => t + price);
  };

  useEffect(() => {
    let total = 0;
    props.items.forEach((i) => {
      total += i.price;
    });
    setMaxTp(total);
  }, [props.items]);

  useEffect(() => {
    if (total === 0) {
      setButText("SELECT");
      setActive(false);
    } else if (total === maxTp) {
      setButText("CLEAR");
      setActive(true);
    }
  }, [total]);

  const adAll = () => {
    if (butText === "SELECT") {
      setButText("CLEAR");
      setActive(true);
      setTotal(maxTp);
    } else {
      setButText("SELECT");
      setTotal(0);
      setActive(false);
    }
  };

  let courses = props.items.map((item, i) => {
    return (
      <Course
        key={i}
        name={item.name}
        price={item.price}
        sumPrice={sumPrice}
        active={active}
      />
    );
  });

  return (
    <div className="sale">
      <h1>You can buy courses: </h1>
      <button onClick={adAll}>{butText} ALL</button>
      <div id="courses">
        {courses}
        <p id="total">
          Total <b>$ {total}</b>
        </p>
      </div>
      {/* <p>{active.toString()}</p> */}
    </div>
  );
}

export default Coursesales;
