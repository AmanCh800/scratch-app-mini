import React from "react";
import { useDrop } from "react-dnd";

export default function DropItem({ onDrop }) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "BOX",
    drop: (item) => onDrop(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`w-full h-32 border-2 border-dashed ${
        isOver ? "border-blue-500" : "border-gray-200"
      } flex justify-center items-center`}
    >
      Drop here
    </div>
  );
}
