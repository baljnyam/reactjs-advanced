const lastWordsName = {
  a: "aField",
  b: "bField"
};

class WordInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange(this);
  }

  handleChange(e) {
    this.props.onWordChange(e.target.value);
  }

  render() {
    const word = this.props.word;
    const lastWord = this.props.scale;
    return (
      <fieldset>
        <legend>Enter words in {lastWordsName[lastWord]}:</legend>
        <input value={word} onChange={this.handleChange} />
      </fieldset>
    );
  }
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
    const a = lastWord === "b" ? reverseString(word) : word;
    const b = lastWord === "a" ? reverseString(word) : word;

    return (
      <div>
        <WordInput lastWord="a" word={a} onWordChange={this.handleAChange} />
        <WordInput lastWord="b" word={a} onWordChange={this.handleBChange} />
      </div>
    );
  }
}
