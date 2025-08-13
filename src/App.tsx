import React from 'react';

interface State {
  pressedKey: string;
  message: string;
}

export class App extends React.Component {
  state: Readonly<State> = {
    pressedKey: '',
    message: '',
  };

  handleKeyPressing = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount() {
    this.setState({ message: 'Nothing was pressed yet' });
    document.addEventListener('keyup', this.handleKeyPressing);
  }

  componentDidUpdate(_prevProps: {}, prevState: State) {
    if (prevState.pressedKey !== this.state.pressedKey) {
      this.setState({
        message: `The last pressed key is [${this.state.pressedKey}]`,
      });
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyPressing);
  }

  render() {
    const { message } = this.state;

    return (
      <div className="App">
        <p className="App__message">{message}</p>
      </div>
    );
  }
}
