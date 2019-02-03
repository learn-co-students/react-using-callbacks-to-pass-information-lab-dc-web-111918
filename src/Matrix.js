import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      selectedColor : "",
    }
  }

  // handleColorSelector= (e) => {
  //   let color = e.target.style.backgroundColor
  //   this.setState({
  //     selectedColor : color
  //   })
  //   console.log(color)
  // }

  setSelectedColor = (newColor) => {
    this.setState({
      selectedColor: newColor
    })
  }

  getSelectedColor = () => (this.state.selectedColor)

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} getSelectedColor={this.getSelectedColor} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    return (
      <div id="app">
        <ColorSelector 
          setSelectedColor={this.setSelectedColor}
          />
        <div id="matrix"
          color={this.state.selectedColor}
          >
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
