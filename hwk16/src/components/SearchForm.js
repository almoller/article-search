import React from "react";

const SearchForm = props => (
  <form>
    <div className="form-group">
      <label htmlFor="search">Search:</label>
      <input
        onChange={props.handleInputChange}
        value={props.searchValue}
        name="search"
        type="text"
        className="form-control"
        placeholder="Search a Topic"
        id="search"
      />
      <label htmlFor="startYear">Start Year:</label>
      <input
        onChange={props.handleInputChange}
        value={props.startValue}
        name="startYear"
        type="text"
        className="form-control"
        placeholder="Input a Start Year"
        id="startYear"
      />
      <label htmlFor="endYear">End Year:</label>
      <input
        onChange={props.handleInputChange}
        value={props.endValue}
        name="endYear"
        type="text"
        className="form-control"
        placeholder="Input an End Year"
        id="endYear"
      />
      <br />
      <button onClick={props.handleFormSubmit} className="btn btn-secondary">
        Search
      </button>
    </div>
  </form>
);

export default SearchForm;
