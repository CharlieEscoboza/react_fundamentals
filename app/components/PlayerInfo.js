/**
 * Created by Charlie on 11/19/2016.
 */

import React from 'react';


function PlayerInfo({avatar_url, blog, company, index, label, login, location, name, followers, following, public_repos, score}) {
  return (
    <div className="col-sm-6">
      <p className="lead">{label}</p>
      PLAYER {index} INFO
      <ul>
        {!!score && <li className="list-group-item"><h3>Score: {score}</h3></li>}
        <li className="list-group-item"><img src={avatar_url} alt={name || ''} className="img-rounded img-responsive"/></li>
        {name && <li className="list-group-item">Name: {name}</li>}
        <li className="list-group-item">UserName: {login}</li>
        {location && <li className="list-group-item">Location: {location}</li>}
        {company && <li className="list-group-item">Company: {company}</li>}
        <li className="list-group-item">Followers: {followers}</li>
        <li className="list-group-item">Following: {following}</li>
        <li className="list-group-item">Public Repos: {public_repos}</li>
        {blog && <li className="list-group-item">Blog: {blog}</li>}
      </ul>
    </div>
  );
}


PlayerInfo.propTypes = {
  avatar_url: React.PropTypes.string.isRequired,
  blog: React.PropTypes.string,
  company: React.PropTypes.string,
  followers: React.PropTypes.number.isRequired,
  following: React.PropTypes.number.isRequired,
  location: React.PropTypes.string,
  login: React.PropTypes.string.isRequired,
  name: React.PropTypes.string,
  public_repos: React.PropTypes.number.isRequired,
  score: React.PropTypes.number
};

export default PlayerInfo;