import React, { Component } from "react";
import { connect } from "react-redux";
import QuestionPreview from "./QuestionPreview";

class UnansweredQuestionsList extends Component {
  state = {};
  render() {
    const { ansQues } = this.props;

    return (
      <div>
        {ansQues.map((question) => (
          <QuestionPreview key={question.quesId} question={question} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ users, questions, authedUser }) => {
  let ansQues = [];

  Object.keys(questions).forEach((key) => {
    const question = questions[key];

    if (
      question.optionOne.votes.includes(authedUser) ||
      question.optionTwo.votes.includes(authedUser)
    ) {
      const ques = {
        category: "ans",
        quesId: key,
        author: question.author,
        authorName: users[question.author].name,
        authorAvatar: users[question.author].avatarURL,
        optionOne: question.optionOne.text,
        optionTwo: question.optionTwo.text,
      };
      ansQues.push(ques);
    }
  });
  return {
    ansQues,
  };
};

export default connect(mapStateToProps)(UnansweredQuestionsList);
