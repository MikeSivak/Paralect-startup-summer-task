import React from 'react';
import '../styles/MainScreen.css';
import RepoList from './RepoList';
import PhotoCard from './PhotoCard';
import axios from 'axios';

class MainScreen extends React.Component {
    state = {
        repos: [],
        user: []
    }

    getData = () => {
        let username = this.props.match.params.username;
        axios.get(`https://api.github.com/users/${username}/repos`)
            .then(res => {
                const repos = res.data;
                this.setState({ repos });
            });
        axios.get(`https://api.github.com/users/${username}`)
            .then(res => {
                const user = res.data;
                this.setState({ user });
            })
    }

    componentDidMount() {
        this.getData();
    }



    render() {
        return (
            <div>
                <PhotoCard userProfile={this.state.user} />
                <label className='ms-lbl-repo-count'>Repositories ({(this.state.repos).length})</label>
                <RepoList repoNames={this.state.repos} />
            </div>
        );
    }
}

export default MainScreen;