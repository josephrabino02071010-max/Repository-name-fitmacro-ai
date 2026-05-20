import { useState } from "react";
import ChatBox from "./components/ChatBox";

function App() {
  const [mode, setMode] = useState("Workout Generator");

  return (
    <div className="app">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <div>
          <h1 className="logo">FitMacro AI</h1>

          <p className="subtitle">
            Your AI fitness coach powered by Llama 3
          </p>

          <div className="menu">
            <button
              className={
                mode === "Workout Generator"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setMode("Workout Generator")
              }
            >
              🏋 Workout Generator
            </button>

            <button
              className={
                mode === "Meal Planner"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setMode("Meal Planner")
              }
            >
              🍽 Meal Planner
            </button>

            <button
              className={
                mode === "Macro Calculator"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setMode("Macro Calculator")
              }
            >
              📊 Macro Calculator
            </button>

            <button
              className={
                mode === "Fat Loss Coach"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setMode("Fat Loss Coach")
              }
            >
              🔥 Fat Loss Coach
            </button>

            <button
              className={
                mode === "Muscle Builder"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setMode("Muscle Builder")
              }
            >
              💪 Muscle Builder
            </button>
          </div>
        </div>

        <div className="sidebar-footer">
          <p>Powered locally by Ollama + Llama 3</p>
        </div>
      </aside>

      {/* MAIN */}
      <main className="main">
        <ChatBox mode={mode} />
      </main>
    </div>
  );
}

export default App;