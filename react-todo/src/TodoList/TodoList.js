import React, { Component } from 'react';

/*
  * Create TodoList react component 
*/
class TodoList extends Component {

  constructor() {
    super();
    this.state={
        changeState:false
    }
  }
  
  /*
    * Delete item on click of delete button
    * @param string event - current target value 
  */ 
    onClick=(e) => {
        this.props.onDeleteTask(this.props.item,this.props.isunfinishedItemsList);
    }

  /*
    * Change state on mouse enter inside list
  */ 
    mouseEnter = () => {
        this.setState({ changeState: true });
    }

  /*
     * Change state on mouse leave inside list
  */ 
    mouseLeave = () => {
        this.setState({ changeState: false });
    }

  /*
    * On Complete
    * @param string event - current value 
  */ 
    onComplete = (e) => {
        this.props.onCompleteTask(this.props.item);
    }

  render() {
    const { item } = this.props
    return (
    <li onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} >
        {item}
        {this.state.changeState ?  <div><input className="actionButtons"
            type="text"
            value="DELETE"
            onClick={this.onClick}
          /> <input className="actionButtons completedButton"
          type="text"
          value="Completed"
          onClick={this.onComplete}
        /></div> : null}
      </li>
     
    )
  }
}

export default TodoList;
