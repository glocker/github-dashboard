import React from 'react'
import ReposList from './ReposList';

export default class MainPage extends React.Component {

    render() {

        return (
            <div>
                <div>MainPage Component</div>
                <div>SearchBar</div>
                <ReposList />
            </div>
        )
    }
}