import React, { Component } from 'react';

/*
  * Add Task component to create task
*/
class AddTask extends Component{

    constructor(){
        super() 
        
      }

    render (){
        return (
         <div className="addTaskContainer">
            <input
            type="text"
            value={this.props.currentValue}
            onChange={this.props.onChangeValue}
            placeholder="Create Task..."
          />
          <button
            type="button"
            onClick={this.props.onAddTask}
            disabled={!this.props.currentValue}
          >
            Add Task
          </button>
          </div>
        )
    }
    
}

export default AddTask