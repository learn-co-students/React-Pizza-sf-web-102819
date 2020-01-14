import React from "react"

const Pizza = (props) => {
  function onEditClick() {
    props.editPizza(props)

  }
  return(
    <tr>
      <td>{props.pizza.topping}</td>
      <td>{props.pizza.size}</td>
      <td>{props.pizza.vegetarian}</td>
      <td><button type="button" className="btn btn-primary" onClick={onEditClick}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
