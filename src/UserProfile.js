import "./UserProfile.css";
import ResourceCard from "./ResourceCard.js";

function UserProfile({resources}){

  // get resources where user = username

  console.log(resources[0].user_img);

  return (
    <div className="UserProfile">
      <div className="UserProfile-banner card">
        <img src="/ksnpr.jpg" alt={resources[0].user} className="img-fluid"/>
        <div className="card-body">
        <h1 className="card-title">{resources[0].user}</h1>
        <a href="/resources/upload" className="btn btn-outline-light add-resource-btn">add resource</a>
      </div>
      </div>
      <div className="UserProfile-resources">
        {resources.map(resource =>
          <ResourceCard id={resource.id} resource={resource} className="UserProfile-card" />)}
      </div>
    </div>
  )
}

export default UserProfile;