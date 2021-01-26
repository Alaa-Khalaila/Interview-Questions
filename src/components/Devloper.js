import React, { useState } from "react";
import { devloperData } from "../Data/data";
import { Link } from "react-router-dom";

const Devloper = () => {
  const [Started, setStarted] = useState(false);
  const [Ran, setRan] = useState(0);
  const [Done, setDone] = useState([0]);
  const [End, setEnd] = useState(false);

  const go_in = () => {
    setStarted(true);
  };
  const nxt_question = () => {
    random();
  };
  const random = () => {
    let number = Math.floor(Math.random() * devloperData.length);
    if (Done.length === devloperData.length - 1) {
      setEnd(true);
      return "";
    }
    if (Done.includes(number)) {
      random();
      return "";
    }
    setRan(number);
    Done.push(number);
    console.log(number);
  };
  return (
    <div className="container">
      <div className="node-cont">
        {!Started ? (
          <button className="start" onClick={() => go_in()}>
            START
          </button>
        ) : (
          <div className="qa">
            <h2>{devloperData[Ran].question}</h2>
            <button className="next-btn" onClick={() => nxt_question()}>
              Next
            </button>
            {End ? (
              <Link to="/">
                <button className="start">Finished</button>
              </Link>
            ) : (
              ""
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Devloper;
