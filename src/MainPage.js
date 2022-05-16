import React from 'react'
import ReposList from './ReposList';
import SearchBar from './SearchBar';

export default class MainPage extends React.Component {

    render() {

        return (
            <div>
                <div>MainPage Component</div>
                <SearchBar />
                <ReposList />
            </div>
        )
    }
}