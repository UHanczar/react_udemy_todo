import React, { Component } from 'react';

class TodoSearch extends Component {
  constructor(props) {
    super(props);

    // again, we can use binding here, or arrow function in render
    // this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch() {
    const showCompleted = this.completed.checked;
    const showSearchText = this.searchText.value;
    // console.log(showSearchText, showCompleted);

    this.props.onSearch(showCompleted, showSearchText);
  }

  render() {
    return (
      <div>
        <div>
          <input type='search' ref={text => this.searchText = text} placeholder='Search todos' onChange={() => this.handleSearch()} />
        </div>
        <div>
          <label>
            <input type='checkbox' ref={check => this.completed = check} onChange={() => this.handleSearch()} />
            Show completed Todos
          </label>
        </div>
      </div>
    );
  }
}

export default TodoSearch;
