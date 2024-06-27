import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragItem from "./DragItem";
import DropItem from "./DropItem";

export default function Sidebar({
  handleDrop,
  handleMove,
  handleTurn,
  handleShow,
  handleHide,
}) {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
        <div className="font-bold"> {"Motion"} </div>
        <DragItem name="Move 10 steps" category="motion" action={handleMove} />
        <DragItem
          name="Turn 15 degrees"
          category="motion"
          action={handleTurn}
        />
        <div className="font-bold"> {"Looks"} </div>
        <DragItem name="Show" category="looks" action={handleShow} />
        <DragItem name="Hide" category="looks" action={handleHide} />
        <DropItem onDrop={handleDrop} />
      </div>
    </DndProvider>
  );
}
