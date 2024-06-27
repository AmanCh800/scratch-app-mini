import React, { useState, useEffect } from "react";
import CatSprite from "./CatSprite";

export default function PreviewArea({ actions = [] }) {
  const [history, setHistory] = useState([]);
  const [position, setPosition] = useState({ x: 80, y: 50 });
  const [rotation, setRotation] = useState(0);
  const [spriteVisible, setSpriteVisible] = useState(true);

  useEffect(() => {
    const handleActions = () => {
      actions.forEach((action) => {
        if (action.type === "move") {
          const radians = rotation * (Math.PI / 180);
          const newX = position.x + 10 * Math.cos(radians);
          const newY = position.y + 10 * Math.sin(radians);
          setPosition({ x: newX, y: newY });
        } else if (action.type === "turn") {
          setRotation((prevRotation) => prevRotation + 15);
        } else if (action.type === "show") {
          setSpriteVisible(true);
        } else if (action.type === "hide") {
          setSpriteVisible(false);
        }
      });
    };
    handleActions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actions]);

  useEffect(() => {
    if (actions.length > 0) {
      setHistory((prevHistory) => [
        ...prevHistory,
        actions[actions.length - 1],
      ]);
    }
  }, [actions]);

  const playActions = () => {
    history.forEach((action) => {
      if (typeof action.action === "function") {
        action.action();
      }
    });
  };

  return (
    <div className="flex-none h-full overflow-y-auto p-2">
      {spriteVisible && (
        <CatSprite
          position={position}
          rotation={rotation}
          isVisible={spriteVisible}
        />
      )}
      <button
        onClick={playActions}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Play
      </button>
      <div className="mt-4">
        <h3 className="text-lg font-bold">Action History</h3>
        {history.map((action, index) => (
          <div key={index} className="bg-gray-200 p-2 my-2 rounded">
            {action.name}
          </div>
        ))}
      </div>
    </div>
  );
}
