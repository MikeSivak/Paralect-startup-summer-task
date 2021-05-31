import React from 'react';
import Paginate from 'react-paginate';
import axios from 'axios';

class PaginateBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            perPage: 4,
            currentPage: 0
        }
        this.handlePageClick = this
            .handlePageClick
            .bind(this);
    }

    receivedData() {
        axios
            .get(`https://api.github.com/users/repos`)
            .then(res => {
        const data = this.props.repoList;
        const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage);
        const postData = slice.map(repo =>
            <div className='ms-group-294'>
                <div className='ms-group-294-content'>
                    <label className='ms-lbl-repo-name'><a rel="noopener noreferrer" href={(repo.url).replace('api.', '').replace('repos/', '')} target='_blank'>{repo.name}</a></label>
                    <label className='ms-lbl-repo-descript'>{repo.description}</label>
                </div>
            </div>
        )
        this.setState({
            pageCount: Math.ceil(data.length / this.state.perPage),
            postData
        })
        });
    }

    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        },
            () => {
                this.receivedData()
            }
        );
    }

    componentDidMount() {
        this.receivedData()
    }

    render() {
        return (
            <div>
                <div className="postData">
                    {this.state.postData}
                </div>
                <div className="pagDiv">
                    <Paginate
                        previousLabel={
                            <svg width="25" height="30" style={{ marginTop: -4 }} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4141 13.0001L14.707 8.70718L13.2928 7.29297L7.58569 13.0001L13.2928 18.7072L14.707 17.293L10.4141 13.0001Z" fill="#0064EB" />
                            </svg>
                        }
                        nextLabel={
                            <svg width="25" height="30" style={{ marginTop: -4 }} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 8L15 13L10 18" stroke="#808080" stroke-width="2" />
                            </svg>
                        }
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageCount={this.state.pageCount}
                        marginPagesDisplayed={1}
                        pageRangeDisplayed={2}
                        onPageChange={this.handlePageClick}
                        containerClassName={"pagination"}
                        subContainerClassName={"pages pagination"}
                        activeClassName={"active"} />
                </div>
            </div>
        );
    }
}

export default PaginateBlock;