import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';



class SearchBar extends Component {

  submitHandler = (evt) => {
    evt.preventDefault();
    let { history } = this.props;
    history.push('/movies?searchText=' + this.refs.searchTf.value);
  }

  render() {
    return (
      
        <form onSubmit={this.submitHandler} className="">
          <input type="search"
            ref="searchTf"
            placeholder="Search..."
            className="form-control" />
        </form>
      
    );
  }
}
export default withRouter(SearchBar);
