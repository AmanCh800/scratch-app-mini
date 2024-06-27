import React from "react";
import { useDrag } from "react-dnd";

export default function DragItem({ name, category, action }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "BOX",
    item: { name, category, action },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer ${
        isDragging ? "opacity-50" : "opacity-100"
      }`}
    >
      {name}
    </div>
  );
}
