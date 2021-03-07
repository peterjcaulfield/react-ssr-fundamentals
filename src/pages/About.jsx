import React, { useEffect } from "react";
import { usePageContext } from "../components/PageContext";
import fetch from "cross-fetch";

const About = () => {
  console.log("About Page Render");

  const { data, setData } = usePageContext();

  useEffect(() => {
    // if we haven't hydrated with data from the server let's fetch it
    if (!data) {
      const initialise = async () => {
        const aboutData = await getAboutData();
        setData(aboutData);
      };
      initialise();
    }
  }, []);

  return (
    <>
      <h1>Hi From Random Cat</h1>
      {data ? <img src={`https://cataas.com${data.url}`} /> : "loading..."}
    </>
  );
};

export const getAboutData = async () => {
  const res = await fetch("https://cataas.com/cat?json=true");
  return res.json();
};

export default About;
