import React, { Component } from 'react'

export class AddTodoItem extends Component {
  state = {
    title: '',
    isCompleted: false
  }
  onChange = (e) => 
  
  {
    this.setState({
 title: e.target.value
    });
  }
  resetInput = () => {
    this.setState({
      title: ''
    })
  }
  render() {
    console.log(this.state.title)

    const { state, onChange, resetInput } = this
    const { title } = this.state;
    const { addTodoItem } = this.props;
    return (
      <div>
        <input type="text" value={title} onChange={onChange} />
        <button disabled={!!!title} onClick={addTodoItem.bind(this, state, resetInput)}>Button</button>
      </div>
    )
  }
}

export default AddTodoItem
