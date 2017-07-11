import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getFiltered, getAll, sortBy} from '../actions'
import ListItem from './list-item';
import SearchBar from './search-bar';

class List extends Component {
  componentWillMount(){
    this.props.getAll();
  }
  renderList(){
    if(!this.props.filtered.length){
      return(
        <h2>no phones to found..</h2>
      )
    };
    return this.props.filtered.map(phone=>{
      return (
        <ListItem key={phone.id} phone={phone} />
      )
    })
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-2 search-container">
          <SearchBar />
        </div>
        <div className="col-md-8 list-container">
          <ul className="list-group">
            { this.renderList()}
          </ul>
        </div>
      </div>
    );
  }
}

function stateToProps(state){
  return {
    filtered:state.filtered
  };
}
export default connect(stateToProps,{getFiltered,getAll, sortBy})(List)