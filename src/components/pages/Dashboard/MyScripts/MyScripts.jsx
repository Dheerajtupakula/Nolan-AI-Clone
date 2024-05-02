import React from "react";
import "./myscripts.css";
import { Scripts } from "./ScriptData";
import ScriptDetails from "./ScriptDetails";

const MyScripts = () => {
  
  
  return (
    <>
      {Scripts.map((script, index) => {
        return <ScriptDetails key={index} script={script} index={index} />;
      })}
    </>
  );
};

export default MyScripts;
