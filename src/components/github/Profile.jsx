import React, {Component} from 'react';

import RepoList from './RepoList.jsx';

class Profile extends Component {
  render () {
    const {userData, userRepos} = this.props;
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">{userData.name}</h3>
        </div>
        <div className="panel-body">
          <div className="row">
            <div className="col-md-4">
              <img src={userData.avatar_url} className="thumbnail" style={{width: "80%"}}/>
            </div>

            <div className="col-md-8">
              <div className="row">
                <div className="col-md-12">
                  <span className="label label-primary">{userData.public_repos} Repos</span>
                  <span className="label label-info">{userData.public_gists} Public Gists</span>
                  <span className="label label-warning">{userData.followers} Followers</span>
                  <span className="label label-danger">{userData.following} Following</span>
                </div>
              </div>

              <hr />
              <div className="row">
                <div className="col-md-12">
                  <ul className="list-group">
                    <li className="list-group-item"><strong>Username: </strong> {userData.login}</li>
                    <li className="list-group-item"><strong>Location: </strong> {userData.location}</li>
                    <li className="list-group-item"><strong>Email: </strong> {userData.email}</li>
                  </ul>
                </div>
              </div>

              <br />
              <a type="button" className="btn btn-primary" target="_blank" href={userData.html_url}>Visit Profile</a>
            </div>
          </div>

          <br />
          <h3>User Repositories</h3>
          <RepoList userRepos={userRepos} />
        </div>
      </div>
    );
  }
}

export default Profile;
