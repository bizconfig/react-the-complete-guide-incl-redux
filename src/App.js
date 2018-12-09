import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component { 
    state = {
      persons: [
        {
          id:1,
          name: 'raksh',
          age: '30'
        }, {
          id:2,
          name: 'filu',
          age: 31
        }
      ]
    } 
    deleteHandler=(id)=>{
     let persons=[...this.state.persons];
     let personIndex=persons.findIndex(p=>{
       return p.id === id;
     })
     persons.splice(personIndex,1);
     this.setState({persons:persons});
    } 
    onChangeHandler=(event,id)=>{
      let persons=[...this.state.persons];
      let personIndex=persons.findIndex(p=>{
        return p.id === id;
      })
      let person={...this.state.persons[personIndex]}
      person.name=event.target.value;
      persons[personIndex]=person;
      this.setState({persons:persons});

    }
  render() {
    return (
      <div className="App">
         <h1>This is headeing</h1>
        { 
          this.state.persons.map(person=>{
            return <Person key={person.id} name={person.name} age={person.age} 
            onDelete={()=>{this.deleteHandler(person.id)}} 
            onChange={(event)=>this.onChangeHandler(event,person.id)}/>
          })
        }
      </div>
       )
  }
}

export default App;
