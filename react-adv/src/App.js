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

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {temperature: ''}
  }

  handleChange(e) {
    this.setState({temperature: e.target.value})
  }

  render() {
    const temperature = this.state.temperature
    return (

    )
  }
}

export default App;


// API react components


