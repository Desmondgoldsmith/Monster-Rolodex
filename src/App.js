import React, { Component } from 'react'; // import Component as default export
import './App.css'
import CardList from './components/CardList/CardList.component';
import SearchBox from './components/SearchBox/searchbox.component';

class App extends Component { 
 constructor(){
  super()

  this.state = {
    Monsters : [],
    searchString : '',
  }
 }

 componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((users) => this.setState(()=>
  {
    return {Monsters:users}
  }
  ),
  () => {console.log(this.state)}
  )
 }

//  onsearch change code
 onsearchChange = (e) =>{
  const searchString = e.target.value.toLocaleLowerCase();
   this.setState(()=>{
    return {searchString}
   })
  }


 render(){

  const {Monsters,searchString} = this.state
  const {onsearchChange} = this

  const filterSearch = Monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchString)
  })

  return(
    <div className='body-section'>
    <h1 className = "header-title">Monster Rolodex</h1>
    <SearchBox 
    onsearchChange = {onsearchChange}
    classname = 'searchMonster'
    placeholder = 'search your monster'
    />
    <CardList Monsters = {filterSearch}/>
    </div>
  )
 }

}

export default App;


// constructor(){
//   super()
//   this.state = {
//     Monsters : [],
//     searchField:'',
//   }
//  }

//  componentDidMount(){
//    fetch('https://jsonplaceholder.typicode.com/users')
//    .then((response)=>response.json())
//    .then((users)=>this.setState(()=>{
//     return {Monsters:users}
//    },
//    ()=>{console.log(this.state)}
//    ))
//  }

// render(){

//   const searchMonsters = this.state.Monsters.filter((monster) => {
//     return monster.name.toLocaleLowerCase().includes(this.state.searchField)
//   })

//    return(
//     <>
//     <input type = "text"
//      className = "monsterSearch" 
//      placeholder='search Monter' 
//      onChange = {(e)=>{
//       const searchField = e.target.value.toLocaleLowerCase();
     
//     this.setState(()=>
//      {return {searchField}}
//      )
//      }}
     
    
//     />
//      { searchMonsters.map((monster) => {
//       return <h1 key={monster.id}>{monster.name}</h1>
//      })}
//     </>
//    )
// }
