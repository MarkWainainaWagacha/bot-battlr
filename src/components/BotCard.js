import React from "react";

function BotCard({ bot, handleClick, onDischarge }) {
  return (
    <div className="bot-card" onClick={handleClick}>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>Class: {bot.bot_class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>{bot.catchphrase}</p>
      {onDischarge && (
        <button
          className="discharge-btn"
          onClick={(e) => {
            e.stopPropagation();
            onDischarge(bot);
          }}
        >
          ❌ Discharge
        </button>
      )}
    </div>
  );
}

export default BotCard;
