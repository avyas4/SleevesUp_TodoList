import React, { Component } from 'react';
import TodoList from './TodoList/TodoList';
import AddTask from './TodoList/AddTask';


/*
  * Create App react component
*/
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      unfinishedItems: ['Unfinished Task One', 'Unfinished Task Two', 'Unfinished Task Three'],
      completedItems: ['completed Item One','completed Item Two','completed Item Three'],
      isunfinishedItemsList:true
    };
  }

  /*
    * Update state on change of input box 
    * @param string event - current value 
  */
  onChangeValue = event => {
    this.setState({ value: event.target.value });
  };

  /*
    * Delete List item on click of delete button 
    * @param string target,isunfinishedItemsList - current value and check for the list type
  */
  onDeleteTask = (target,isunfinishedItemsList) => {
    let item=[];
    isunfinishedItemsList ?  item=[...this.state.unfinishedItems] : item=[...this.state.completedItems];
    const filteredArray = item.filter(
    item => item !== target)
    isunfinishedItemsList?this.setState({unfinishedItems: filteredArray}) : this.setState({completedItems: filteredArray});
  }

  /*
    * Add list item on click of Add task button 
  */
  onAddTask = () => {
    this.setState(state => {
      const unfinishedItems = [...state.unfinishedItems, state.value];
      return {
        unfinishedItems,
        value: '',
      };
    });
  };

  /*
    * Move completed item from unfinished list to completed list
    * @param string value - current selected value
  */
  onCompleteTask = (value) =>{
    const completedItemsList = [...this.state.completedItems, value];
    this.setState({
      completedItems : completedItemsList
    });
    this.onDeleteTask(value, true);
  }

  render() {
    return (
      <div className="container">
        <h1>Todo List</h1>

        <div className="left-container">
          <h2>Unfinished Tasks:</h2>
            <ul>
              {this.state.unfinishedItems.map((item,index) => (
                  <TodoList key={index} item={item} isunfinishedItemsList={this.state.isunfinishedItemsList} onDeleteTask={this.onDeleteTask}  onCompleteTask={this.onCompleteTask}/>
              ))}
            </ul>
        </div>
        
        <div className="right-container">
          <h2>Completed Tasks:</h2>
            <ul>
              {this.state.completedItems.map((item,index) => (
                  <TodoList key={index} item={item} isunfinishedItemsList={!this.state.isunfinishedItemsList} onDeleteTask={this.onDeleteTask}  onCompleteTask={this.onCompleteTask}/>
              ))}
            </ul>
        </div>

        <AddTask onAddTask={this.onAddTask} onChangeValue={this.onChangeValue} currentValue={this.state.value}></AddTask>
      </div>
    );
  }
}

export default App;