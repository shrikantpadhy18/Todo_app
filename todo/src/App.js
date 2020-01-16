
import React,{Component} from 'react';
import Todos from './todos'
import AddComponent from './AddComponent.js'
class App extends Component{
  state={
    todos:[
      {id :1,content :'buy some milk'},
      {id :2,content :'play mario kart'}
    ]
  }
  deleteit=(id)=>{
    const tod=this.state.todos.filter(tos=>{
      return tos.id!==id
    });
    this.setState({
      todos:tod
    });

  }
  addIt=(nin)=>{
    nin.id=Math.random()*10
    let st=[...this.state.todos,nin]
    this.setState({
      todos:st
    })
  }

  render(){
  return (
    <div className="todo-app container">
    <h1 className="center blue-text">Todo's</h1>
    <Todos todos={this.state.todos} deleteit={this.deleteit} />
    <AddComponent addIt={this.addIt}/>

      </div>
  );
  }
}

export default App;
