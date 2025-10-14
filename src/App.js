import React, { useEffect, useState } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import "./App.css";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then((res) => res.json())
      .then((data) => setBots(data))
      .catch((err) => console.error("Error fetching bots:", err));
  }, []);

  const addToArmy = (bot) => {
    if (!army.some((member) => member.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const releaseBot = (bot) => {
    setArmy(army.filter((member) => member.id !== bot.id));
  };

  const dischargeBot = (bot) => {
    fetch(`https://github.com/MarkWainainaWagacha/bot-battlr-db1/${bot.id}`, { method: "DELETE" })
      .then(() => {
        setArmy(army.filter((member) => member.id !== bot.id));
        setBots(bots.filter((b) => b.id !== bot.id));
      })
      .catch((err) => console.error("Error deleting bot:", err));
  };

  return (
    <div className="App">
      <h1>🤖 Bot Battlr</h1>
      <YourBotArmy
        army={army}
        onRelease={releaseBot}
        onDischarge={dischargeBot}
      />
      <BotCollection bots={bots} onAdd={addToArmy} />
    </div>
  );
}

export default App;

