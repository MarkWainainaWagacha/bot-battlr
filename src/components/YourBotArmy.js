import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ army, onRelease, onDischarge }) {
  return (
    <div className="bot-list">
      {army.map((bot) => (
        <BotCard
          key={bot.id}
          bot={bot}
          handleClick={() => onRelease(bot)}
          onDischarge={onDischarge}
        />
      ))}
    </div>
  );
}

export default YourBotArmy;
