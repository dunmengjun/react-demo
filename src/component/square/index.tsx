/** @format */

import * as React from 'react'
import './index.css'

interface State {
  value: string
}

interface Props {
  value: number
}

export default class Square extends React.Component<Props, State> {
  public state = {
    value: null,
  }
  render() {
    return (
      <button className="square" onClick={() => this.setState({value: 'X'})}>
        {this.state.value}
      </button>
    )
  }
}
