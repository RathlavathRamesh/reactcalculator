import './App.css'
import {Component} from 'react'

// Replace your code here
class App extends Component {
  state = {
    first: '',
    second: '',
    compute: '',
    operation: '',
    result: '',
    answer: false,
  }

  clearbutton = () => {
    this.setState({
      first: '',
      second: '',
      compute: '',
      operation: '',
      result: '',
      answer: false,
    })
  }

  onebtn = () => {
    const {first, second, operation, answer} = this.state
    if (answer === true) {
      this.setState({
        first: '1',
        second: '',
        operation: '',
        result: '',
        answer: false,
      })
    } else if (operation === '') {
      this.setState({first: `${first}1`})
    } else {
      this.setState({second: `${second}1`})
    }
  }

  twobtn = () => {
    const {first, second, operation, answer} = this.state
    if (answer === true) {
      this.setState({
        first: '2',
        second: '',
        operation: '',
        result: '',
        answer: false,
      })
    } else if (operation === '') {
      this.setState({first: `${first}2`})
    } else {
      this.setState({second: `${second}2`})
    }
  }

  threebtn = () => {
    const {first, second, operation, answer} = this.state
    if (answer === true) {
      this.setState({
        first: '3',
        second: '',
        operation: '',
        result: '',
        answer: false,
      })
    } else if (operation === '') {
      this.setState({first: `${first}3`})
    } else {
      this.setState({second: `${second}3`})
    }
  }

  fourbtn = () => {
    const {first, second, operation, answer} = this.state
    if (answer === true) {
      this.setState({
        first: '4',
        second: '',
        operation: '',
        result: '',
        answer: false,
      })
    } else if (operation === '') {
      this.setState({first: `${first}4`})
    } else {
      this.setState({second: `${second}4`})
    }
  }

  fivebtn = () => {
    const {first, second, operation, answer} = this.state
    if (answer === true) {
      this.setState({
        first: '5',
        second: '',
        operation: '',
        result: '',
        answer: false,
      })
    } else if (operation === '') {
      this.setState({first: `${first}5`})
    } else {
      this.setState({second: `${second}5`})
    }
  }

  sixbtn = () => {
    const {first, second, operation, answer} = this.state
    if (answer === true) {
      this.setState({
        first: '6',
        second: '',
        operation: '',
        result: '',
        answer: false,
      })
    } else if (operation === '') {
      this.setState({first: `${first}6`})
    } else {
      this.setState({second: `${second}6`})
    }
  }

  sevenbtn = () => {
    const {first, second, operation, answer} = this.state
    if (answer === true) {
      this.setState({
        first: '7',
        second: '',
        operation: '',
        result: '',
        answer: false,
      })
    } else if (operation === '') {
      this.setState({first: `${first}7`})
    } else {
      this.setState({second: `${second}7`})
    }
  }

  eightbtn = () => {
    const {first, second, operation, answer} = this.state
    if (answer === true) {
      this.setState({
        first: '8',
        second: '',
        operation: '',
        result: '',
        answer: false,
      })
    } else if (operation === '') {
      this.setState({first: `${first}8`})
    } else {
      this.setState({second: `${second}8`})
    }
  }

  decimalbtn = () => {
    const {first, operation, second} = this.state
    const bool1 = first.includes('.')
    const bool2 = second.includes('.')
    if (first !== '' && operation === '' && bool1 === false) {
      this.setState({first: `${first}.`})
    } else if (second !== '' && bool2 === false) {
      this.setState({second: `${second}.`})
    }
  }

  ninebtn = () => {
    const {first, second, operation, answer} = this.state
    if (answer === true) {
      this.setState({
        first: '9',
        second: '',
        operation: '',
        result: '',
        answer: false,
      })
    } else if (operation === '') {
      this.setState({first: `${first}9`})
    } else {
      this.setState({second: `${second}9`})
    }
  }

  plusbtn = () => {
    const {first} = this.state
    if (first !== '') this.setState({operation: '+'})
  }

  multiplybtn = () => {
    const {first} = this.state
    if (first !== '') this.setState({operation: '*'})
  }

  minusbtn = () => {
    const {first} = this.state
    if (first !== '') this.setState({operation: '-'})
  }

  zerobtn = () => {
    const {first, second, operation, answer} = this.state
    const bool1 = first.includes('0')
    const bool2 = second.includes('0')
    if (answer === true) {
      this.setState({
        first: '0',
        second: '',
        operation: '',
        result: '',
      })
    } else if ((bool1 === false || first.length !== 1) && operation === '')
      this.setState({first: `${first}0`})
    else if ((bool2 === false || second.length !== 1) && operation !== '')
      this.setState({second: `${second}0`})
  }

  divbtn = () => {
    const {first} = this.state
    if (first !== '') this.setState({operation: '÷'})
  }

  deletebtn = () => {
    const {first, second, operation, result, answer} = this.state
    const firstlength = first.length
    const secondlength = second.length
    const resultlength = result.length
    if (resultlength !== 0)
      this.setState({result: result.slice(0, resultlength - 1)})
    else if (answer === true) this.setState({answer: false})
    else if (secondlength !== 0)
      this.setState({second: second.slice(0, secondlength - 1)})
    else if (operation !== '') this.setState({operation: ''})
    else if (firstlength !== 0)
      this.setState({first: first.slice(0, firstlength - 1)})
  }

  calculateResult = () => {
    const {first, second, operation} = this.state
    if (first !== '' && second !== '' && first !== '') {
      const number1 = parseFloat(first)
      const number2 = parseFloat(second)
      let ans
      switch (operation) {
        case '+':
          ans = number1 + number2
          break
        case '-':
          ans = number1 - number2
          break
        case '*':
          ans = number1 * number2
          break
        case '÷':
          ans = number1 / number2
          break
        default:
          break
      }
      const finaloutput = ans.toString()
      this.setState({
        result: finaloutput,
        first: '',
        second: '',
        answer: true,
        operation: '',
      })
    }
  }

  render() {
    const {first, second, compute, operation, result} = this.state
    console.log(first, second, compute, operation)
    return (
      <div className="header-Container">
        <h1>Welcome To Calculator App</h1>
        <div className="calculator-grid">
          <div className="output">
            <div className="first-operand">{first}</div>
            <div className="first-operand">{operation}</div>
            <div className="second-operand">{second}</div>
            <div className="second-operand">{result}</div>
          </div>
          <button type="button" className="span-two" onClick={this.clearbutton}>
            AC
          </button>
          <button type="button" onClick={this.deletebtn}>
            DEL
          </button>
          <button type="button" onClick={this.divbtn}>
            ÷
          </button>
          <button type="button" onClick={this.onebtn}>
            1
          </button>
          <button type="button" onClick={this.twobtn}>
            2
          </button>
          <button type="button" onClick={this.threebtn}>
            3
          </button>
          <button type="button" onClick={this.multiplybtn}>
            *
          </button>
          <button type="button" onClick={this.fourbtn}>
            4
          </button>
          <button type="button" onClick={this.fivebtn}>
            5
          </button>
          <button type="button" onClick={this.sixbtn}>
            6
          </button>
          <button type="button" onClick={this.plusbtn}>
            +
          </button>
          <button type="button" onClick={this.sevenbtn}>
            7
          </button>
          <button type="button" onClick={this.eightbtn}>
            8
          </button>
          <button type="button" onClick={this.ninebtn}>
            9
          </button>
          <button type="button" onClick={this.minusbtn}>
            -
          </button>
          <button type="button" onClick={this.decimalbtn}>
            .
          </button>
          <button type="button" onClick={this.zerobtn}>
            0
          </button>
          <button
            className="span-two"
            type="button"
            onClick={this.calculateResult}
          >
            =
          </button>
        </div>
      </div>
    )
  }
}

export default App
