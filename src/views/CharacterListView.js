import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { starwarChars } from "../actions";
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    // call our action
    this.props.dispatch(starwarChars())
  }
  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return <h1> Loading ....</h1>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state =>{
  console.log(state)
  return{
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching,
    error: state.charsReducer.error
  }
}
export default connect(
  mapStateToProps
)(CharacterListView);
