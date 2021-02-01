import React, { Component } from "react";

class Filter extends Component {
  render() {
    const { onSearch } = this.props;
    return (
      <div className="filterContainer">
        <form>
          <label htmlFor="">Buscar: </label>
          <input type="text" placeholder="Escribe lo que quieras buscar..." />
          <button
            onClick={(e) => {
              onSearch(e, "ring");
            }}
          >
            Buscar
          </button>
        </form>
      </div>
    );
  }
}

export default Filter;
