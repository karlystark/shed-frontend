import "./UserCard.css";

function UserCard({ resources }) {

  return(
  <div className="UserCard card">
    <img src="/ksnpr.jpg" alt={resources[0].user} className="img-fluid" />
    <div className="card-body">
      <h1 className="card-title">{resources[0].user}</h1>
      <p className="card-text">{resources.length} resources </p>
      <a href="/resources/upload" className="btn btn-outline-light add-resource-btn">connect</a>
    </div>
  </div>
  )
}

export default UserCard;