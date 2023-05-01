import {Component} from 'react'
import './searchbox.styles.css'

class SearchBox extends Component {
   render(){
    const {onsearchChange} = this.props
    return(
        <div>
            <input 
            type = "search" 
            className = {`search-bar ${this.props.classname}`}
            placeholder= {this.props.placeholder} 
            onChange={onsearchChange}
          />
     </div>
    )
   }
}

export default SearchBox