import React from "react";

const ArticlesDisplay = props => (
  <div className="text-center" id={props.id}>
    
    <h3>{props.title}<span className="text-muted">{props.date}</span></h3>
    <p>{props.url}</p>
  </div>
);

export default ArticlesDisplay;
