import { useCallback, useEffect, useState } from "react";

function Child({ progressLength }) {
  let progress = [];
  for (let i = 0; i < progressLength; i++) {
    progress.push(
      <span
        className="progress"
        style={{
          background: "blue",
          left: `${i * 10}%`,
          width: "10%",
          height: "13px",
          position: "absolute",
        }}
      ></span>
    );
  }
  console.log(progress);
  return progress;
}

function App() {
  const [progressLength, setProgress] = useState(1);
  const [id, setId] = useState("");

  const interval = () => {
    setId(
      setInterval(() => {
        setProgress((p) => p + 1);
      }, 1000)
    );
  };

  useEffect(() => {
    interval();
  }, []);

  const reload = () => {
    setProgress(1);
    interval();
  };

  useEffect(() => {
    if (progressLength > 9) clearInterval(id);
  }, [progressLength]);

  return (
    <div className="App">
      <button onClick={reload}>Reload</button>
      <div style={{ position: "relative", width: "100%" }}>
        <Child progressLength={progressLength} />
      </div>
    </div>
  );
}

export default App;
