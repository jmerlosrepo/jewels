import React, { Component } from "react";

class Filter extends Component {
  render() {
    const { onSearch } = this.props;
    return (
      <div className="filterContainer">
        <form>
          <input type="text" placeholder="Buscar productos..." />
          <button
            className="btn"
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
