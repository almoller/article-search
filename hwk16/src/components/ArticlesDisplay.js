import React from "react";

const ArticlesDisplay = props => (
  <div className="articleSection" key={props.id}>

    <p className="text-muted">{props.date}</p>

    <h3><a href={props.url} target="_blank">{props.title}</a></h3>
      <button onClick={() => props.handleSaveButton(props.title, props.url)} 
            className="saveBtn btn btn-success">
              Save Article
      </button>

    <hr/>
    
  </div>
);

export default ArticlesDisplay;
