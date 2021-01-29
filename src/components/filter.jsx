import React,{Component} from 'react';

class Filter extends Component{
    render(){
        return(
        <div className="filterContainer">
          <form>
            <label htmlFor="">Buscar: </label>
            <input type="text" placeholder="Escribe lo que quieras buscar..."/>
            <button>Buscar</button>
          </form>
        </div>
        );
    }
}

export default Filter;
