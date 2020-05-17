import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";
import "./NewQuestion.css";

class NewQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
  };

  handleChange = (event) => {
    const value = event.currentTarget.value;
    if (event.currentTarget.name === "optionOne") {
      this.setState({ optionOne: value });
    } else {
      this.setState({ optionTwo: value });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { optionOne, optionTwo } = this.state;

    if (optionOne.trim() === "" || optionTwo.trim() === "") return;

    const { dispatch } = this.props;

    dispatch(handleAddQuestion(optionOne, optionTwo));
  };

  render() {
    return (
      <div className="new-question-container">
        <div className="new-question-header">Create a new question</div>
        <h4>Would you rather...</h4>
        <form className="option-form">
          <input
            name="optionOne"
            className="option-form-input"
            type="text"
            placeholder="Enter option one"
            value={this.state.optionOne}
            onChange={this.handleChange}
          />
          <h5>OR</h5>
          <input
            name="optionTwo"
            className="option-form-input"
            type="text"
            placeholder="Enter option two"
            value={this.state.optionTwo}
            onChange={this.handleChange}
          />
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser,
  };
};

export default connect(mapStateToProps)(NewQuestion);
