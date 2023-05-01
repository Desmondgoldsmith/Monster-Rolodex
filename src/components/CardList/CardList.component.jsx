import {Component} from 'react'
import './card-list.styles.css'

class CardList extends Component {
    constructor(){
        super()
        this.state = {
        }
    }

    render(){ 
           const {Monsters} = this.props 
        return(
            <div className = "card-list">
              {Monsters.map((monster)=>{
                const {name,email,id} = monster;

                return(
                    <div key = {monster.id} className = "card-container">
                        <img src = {`https://robohash.org/${id}?set=set27`} alt = "monster_image" />
                        <h2>{name}</h2>
                        <p>{email}</p>
                    </div>
                ) 
                  
              })}
            </div>
        )
    }
}

export default CardList