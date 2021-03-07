// Home.jsx
import React from "react";
import { WithoutSSR } from "../components/WithoutSSR";

const WindowWidth = () => (
  <div>{`Your window width is ${window.innerWidth}`}</div>
);

const Home = () => {
  console.log("Home Page Render");

  return (
    <>
      <button onClick={() => alert("Hello world")}>Click Me</button>
      <WithoutSSR>
        <WindowWidth />
      </WithoutSSR>
    </>
  );
};

export default Home;
