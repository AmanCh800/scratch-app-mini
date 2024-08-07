import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";

export default function App() {
  const [actions, setActions] = useState([]);

  const handleDrop = (item) => {
    setActions((prevActions) => [...prevActions, item]);
  };

  const handleMove = () => {
    setActions((prevActions) => [
      ...prevActions,
      { type: "move", name: "Move 10 steps" },
    ]);
  };

  const handleTurn = () => {
    setActions((prevActions) => [
      ...prevActions,
      { type: "turn", name: "Turn 15 degrees" },
    ]);
  };

  return (
    <div className="bg-blue-100 pt-6 font-sans">
      <div className="h-screen overflow-hidden flex flex-row  ">
        <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
          <Sidebar
            handleDrop={handleDrop}
            handleMove={handleMove}
            handleTurn={handleTurn}
          />{" "}
          <MidArea actions={actions} />
        </div>
        <div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
          <PreviewArea actions={actions} />
        </div>
      </div>
    </div>
  );
}
