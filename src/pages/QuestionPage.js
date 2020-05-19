import React, { Component } from "react";
import { connect } from "react-redux";
import QuestionResult from "../components/QuestionResult";
import { handleAddAnswer } from "../actions/questions";
import "./QuestionPage.css";

class QuestionPage extends Component {
  state = {
    selectedOption: "optionOne",
  };

  handleOptionSelection = (event) => {
    this.setState({ selectedOption: event.currentTarget.value });
  };

  handleSubmit = () => {
    const { authedUser, question, dispatch } = this.props;
    dispatch(
      handleAddAnswer(authedUser, question.id, this.state.selectedOption)
    );
  };

  render() {
    const { authedUser, question, category } = this.props;

    if (category === "answered") {
      return <QuestionResult question={question} authedUser={authedUser} />;
    }

    const { authorName, authorAvatar, optionOne, optionTwo } = question;

    return (
      <div className="question-page-container">
        <div className="question-page-author">{`${authorName} asks`}</div>
        <div className="question-page-content">
          <img src={authorAvatar} alt={authorName} />
          <div className="question-page-info">
            <div>Would you rather</div>
            <form>
              <input
                type="radio"
                id="optionOne"
                name="gender"
                value="optionOne"
                onClick={this.handleOptionSelection}
                defaultChecked
              />
              <label htmlFor="optionOne">{optionOne.text}</label>
              <br />
              <input
                type="radio"
                id="optionTwo"
                name="gender"
                value="optionTwo"
                onClick={this.handleOptionSelection}
              />
              <label htmlFor="optionTwo">{optionTwo.text}</label>
              <br />
            </form>
            <button onClick={this.handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ users, questions, authedUser }, props) => {
  const id = props.match.params.id;
  const currentQuestion = questions[id];

  const question = {
    id,
    author: currentQuestion.author,
    authorName: users[currentQuestion.author].name,
    authorAvatar: users[currentQuestion.author].avatarURL,
    optionOne: currentQuestion.optionOne,
    optionTwo: currentQuestion.optionTwo,
  };

  let category = "unanswered";
  if (
    question.optionOne.votes.includes(authedUser) ||
    question.optionTwo.votes.includes(authedUser)
  ) {
    category = "answered";
  }

  return {
    authedUser,
    question,
    category,
  };
};

export default connect(mapStateToProps)(QuestionPage);
