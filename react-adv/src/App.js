import React from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">so what</header>
    </div>
  );
}

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p> The water would boil</p>;
  }
  return <p>the water would not boil</p>;
}

export default App;
