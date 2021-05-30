import React from 'react';
import PaginateBlock from './PaginateBlock';

class RepoList extends React.Component {
    render() {
        return (
            <div>
                <div className='pagBlock'>
                    <PaginateBlock repoList={this.props.repoNames} />
                </div>
            </div>
        );
    }

}

export default RepoList;