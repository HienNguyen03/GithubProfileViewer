import React, {Component} from 'react';

import Repo from './Repo.jsx';

class RepoList extends Component {
  render () {
    const {userRepos} = this.props;
    return (
      <ul className="list-group">
        {userRepos.map((repo) => {
          return (
            <Repo
              repo={repo}
              key={repo.id}
              {...this.props}
            />
          );
        })}
      </ul>
    );
  }
}

export default RepoList;
