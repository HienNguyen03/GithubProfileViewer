import React, {Component} from 'react';

import Profile from './github/Profile.jsx';
import Search from './github/Search.jsx';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      username: 'HienNguyen03',
      userData: [],
      userRepos: [],
      perPage: 10
    };

    this.getUserData = this.getUserData.bind(this);
    this.getUserRepos = this.getUserRepos.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  getUserData () {
    $.ajax({
      url: 'https://api.github.com/users/' + this.state.username + '?client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret,
      dataType: 'json',
      cache: false,
      success: (data) => {
        this.setState({userData: data});
      },
      error: (xhr, status, err) => {
        this.setState({userData: null});
        alert(err);
      }.bind(this)
    })
  }
  getUserRepos () {
    $.ajax({
      url: 'https://api.github.com/users/' + this.state.username + '/repos?per_page='+ this.props.perPage + '&client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret + '&sorted=created',
      dataType: 'json',
      cache: false,
      success: (data) => {
        this.setState({userRepos: data});
      },
      error: (xhr, status, err) => {
        this.setState({userRepos: null});
        alert(err);
      }.bind(this)
    })
  }

  handleFormSubmit (username) {
    this.setState({username}, () => {
      this.getUserData();
      this.getUserRepos();
    });
  }

  componentDidMount () {
    this.getUserData();
    this.getUserRepos();
  }

  render () {
    const {userData} = this.state;
    return (
      <div>
        <Search onFormSubmit={this.handleFormSubmit}/>
        <Profile {...this.state}/>
      </div>
    );
  }
}

App.propTypes = {
  clientId: React.PropTypes.string,
  clientSecret: React.PropTypes.string
};

App.defaultProps = {
  clientId: '240b32e7fd8c5b63aa4b',
  clientSecret: '22bef9d53c5f8c049ccf102dc0362e6f2551b51d'
};

export default App;
