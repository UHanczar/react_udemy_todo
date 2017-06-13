import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setSearchText, toggleShowCompleted } from './../actions/actions';

export class TodoSearch extends Component {
  constructor(props) {
    super(props);

    // again, we can use binding here, or arrow function in render
    // this.handleSearch = this.handleSearch.bind(this);
  }

  // handleSearch() {
  //   const showCompleted = this.completed.checked;
  //   const showSearchText = this.searchText.value;
  //   // console.log(showSearchText, showCompleted);
  //
  //   this.props.onSearch(showCompleted, showSearchText);
  // }

  render() {
    const { dispatch, showCompleted, searchText } = this.props;
    return (
      <div className='container__header'>
        <div>
          <input type='search' ref={text => this.searchText = text} placeholder='Search todos' value={searchText} onChange={() => dispatch(setSearchText(this.searchText.value))} />
        </div>
        <div>
          <label>
            <input type='checkbox' ref={check => this.completed = check} checked={showCompleted} onChange={() => dispatch(toggleShowCompleted())} />
            Show completed Todos
          </label>
        </div>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    showCompleted: state.showCompleted,
    searchText: state.searchText
  };
})(TodoSearch);
