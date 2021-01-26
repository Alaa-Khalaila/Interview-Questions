import React, { useState } from "react";
import { nodeData } from "../Data/data";
import { Link } from "react-router-dom";

const Node = () => {
  const [Started, setStarted] = useState(false);
  const [Solution, setSolution] = useState(false);
  const [Ran, setRan] = useState(0);
  const [Done, setDone] = useState([0]);
  const [End, setEnd] = useState(false);

  const go_in = () => {
    setStarted(true);
  };
  const get_solution = () => {
    setSolution(true);
  };
  const nxt_question = () => {
    setSolution(false);
    random();
  };
  const random = () => {
    let number = Math.floor(Math.random() * nodeData.length);
    if (Done.length === nodeData.length - 1) {
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
            <h2>{nodeData[Ran].question}</h2>
            <div className="ans-btn">
              {" "}
              {!Solution ? (
                <button className="sol-btn" onClick={() => get_solution()}>
                  Solution
                </button>
              ) : (
                <h4>{nodeData[Ran].answer}</h4>
              )}
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
          </div>
        )}
      </div>
    </div>
  );
};

export default Node;
