import React, { useState } from "react";

export default function MidArea({ actions = [] }) {
  return (
    <div className="flex-1 h-full overflow-auto" name="midArea">
      {actions.map((action, index) => (
        <div key={index} className="bg-gray-200 p-2 my-2 rounded">
          {action.name}
        </div>
      ))}
    </div>
  );
}
