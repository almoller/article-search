import React from "react";

const SavedArticles = props => (
  <div className="articleSection">

    <h3><a href={props.url}>{props.headline}</a></h3>

    <button 
        onClick={() => props.handleDeleteButton(props.id)} 
        className="deleteBtn btn btn-danger">
            Remove Article
    </button>

    <hr/>
    
   
  </div>
);

export default SavedArticles;
