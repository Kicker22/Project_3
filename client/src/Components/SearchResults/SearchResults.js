import React from "react";

function SearchResults (props) {
  return (
    <div className="text-center">
      {/* <img alt={props.title} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} /> */}
      <h3>Name of Group: {props.name}</h3>
      <h3>Number of Groups: {props.group_count}</h3>
      <h3>Total Members: {props.member_count}</h3>
      <p>Description: {props.description}</p>
      <button href = "https://www.meetup.com/find/?allMeetups=false&keywords=moms=25&userFreeform=Salt+Lake+City%2C+UT&mcId=z84101&mcName=Salt+Lake+City%2C+UT&sort=default"></button>
    </div>
  );
}

export default SearchResults;