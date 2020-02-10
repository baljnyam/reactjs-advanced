import React from "react";

function App() {
  return (
    <div>
      <Reverser />
      <br />
      <br />
      <Calculator />
    </div>
  );
}

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit"
};

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = { temperature: "", scale: "c" };
  }

  handleCelsiusChange(temperature) {
    this.setState({ scale: "c", temperature });
  }

  handleFahrenheitChange(temperature) {
    this.setState({ scale: "f", temperature });
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius =
      scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}
// Word reverser ----- practice
const lastWordsName = {
  a: "A field words",
  b: "B field words"
};

class WordInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onWordChange(e.target.value);
  }

  render() {
    const word = this.props.word;
    const lastWord = this.props.lastWord;
    return (
      <fieldset>
        <legend>Enter reversing words in {lastWordsName[lastWord]}:</legend>
        <input value={word} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

function reverseWords(word) {
  return word
    .split("")
    .reverse()
    .join("");
}

class Reverser extends React.Component {
  constructor(props) {
    super(props);
    this.handleAChange = this.handleAChange.bind(this);
    this.handleBChange = this.handleBChange.bind(this);
    this.state = { word: "", lastWord: "a" };
  }

  handleAChange(word) {
    this.setState({ lastWord: "a", word });
  }

  handleBChange(word) {
    this.setState({ lastWord: "b", word });
  }

  render() {
    const lastWord = this.state.lastWord;
    const word = this.state.word;
    const a = lastWord === "b" ? reverseWords(word) : word;
    const b = lastWord === "a" ? reverseWords(word) : word;

    return (
      <div>
        <WordInput lastWord="a" word={a} onWordChange={this.handleAChange} />
        <WordInput lastWord="b" word={b} onWordChange={this.handleBChange} />
      </div>
    );
  }
}

export default App;

// API react components
