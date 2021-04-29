import { Component } from "react";

export class TextInput extends Component{
  render() {
    const { searchValue, handleChange } = this.props;
      return (
        <input 
        onChange={handleChange}
        value={searchValue}
        type="search" className="input-search" /> 

      )
  }
}