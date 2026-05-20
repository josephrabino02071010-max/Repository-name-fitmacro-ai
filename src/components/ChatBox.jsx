import { useEffect, useRef, useState } from "react";

function ChatBox({ mode }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const getSystemPrompt = () => {
    switch (mode) {
      case "Workout Generator":
        return `
You are an elite fitness coach.

Generate:
- workout plans
- gym routines
- home workouts
- strength programs
- hypertrophy training

Always format professionally.
`;

      case "Meal Planner":
        return `
You are a certified nutritionist.

Generate:
- meal plans
- healthy diets
- bulking meals
- cutting meals
- high protein meals

Always include calories and protein.
`;

      case "Macro Calculator":
        return `
You are a macro calculator expert.

Calculate:
- calories
- protein
- carbs
- fats
- BMI
- cutting/bulking macros

Always explain calculations clearly.
`;

      case "Fat Loss Coach":
        return `
You are a fat loss specialist.

Help users:
- lose weight
- burn fat
- improve cardio
- create calorie deficits
- maintain motivation
`;

      case "Muscle Builder":
        return `
You are a bodybuilding coach.

Help users:
- gain muscle
- increase strength
- optimize recovery
- improve training
- maximize hypertrophy
`;

      default:
        return `
You are a professional fitness AI.
`;
    }
  };

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = {
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);

    const currentInput = input;

    setInput("");
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:11434/api/generate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "llama3",
            stream: false,

            prompt: `
${getSystemPrompt()}

User request:
${currentInput}
            `,
          }),
        }
      );

      const data = await response.json();

      const aiMessage = {
        role: "ai",
        content: data.response,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          content:
            "Error connecting to Ollama.",
        },
      ]);
    }

    setLoading(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="chat-container">
      {/* HEADER */}
      <div className="chat-header">
        <div>
          <h1>{mode}</h1>

          <p>
            AI Fitness Assistant
          </p>
        </div>

        <div className="status">
          <span className="dot"></span>
          Online
        </div>
      </div>

      {/* CHAT */}
      <div className="chat-box">
        {messages.length === 0 && (
          <div className="empty-state">
            <h2>{mode}</h2>

            <p>
              Ask FitMacro AI anything related to{" "}
              {mode.toLowerCase()}.
            </p>
          </div>
        )}

        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message-wrapper ${
              msg.role === "user"
                ? "user-wrapper"
                : "ai-wrapper"
            }`}
          >
            <div
              className={`message ${
                msg.role === "user"
                  ? "user"
                  : "ai"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}

        {loading && (
          <div className="message-wrapper ai-wrapper">
            <div className="message ai typing">
              AI is thinking...
            </div>
          </div>
        )}

        <div ref={messagesEndRef}></div>
      </div>

      {/* INPUT */}
      <div className="chat-input">
        <textarea
          placeholder={`Ask about ${mode}...`}
          value={input}
          rows="1"
          onChange={(e) =>
            setInput(e.target.value)
          }
          onKeyDown={handleKeyDown}
        />

        <button onClick={sendMessage}>
          ➜
        </button>
      </div>
    </div>
  );
}

export default ChatBox;