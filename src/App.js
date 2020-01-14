import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  constructor() {
    super()
    this.state = {
      pizzas: [],
      edit: {}
    }

  }

  componentDidMount() {
    fetch("http://localhost:3000/pizzas")
    .then(res => res.json())
    .then(json => this.setState({pizzas: json}))
  }

  editPizza = (pizzaProps) => {
    this.setState({edit: pizzaProps.pizza})

  }


  render() { 
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizza={this.state.edit}/>
        <PizzaList pizzas={this.state.pizzas} editPizza={this.editPizza}/>
      </Fragment>
    );
  }
}

export default App;
