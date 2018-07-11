import React from "react";

const ArticlesDisplay = props => (
  <div className="text-center" id="articleSection">
    <h3><a href={props.url}>{props.title}</a></h3>
    <p className="text-muted">{props.date}</p>
    <hr/>
    
    {/* <h3>{props.title}<span className="text-muted">{props.date}</span></h3>
    <p>{props.url}</p> */}
  </div>
);

export default ArticlesDisplay;
