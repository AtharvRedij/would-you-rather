import React, { Component } from "react";
import UnansweredQuestionsList from "../components/UnansweredQuestionsList";
import AnsweredQuestionsList from "../components/AnsweredQuestionsList";
import "./HomePage.css";

class HomePage extends Component {
  state = {
    category: "unanswered",
  };

  CategorySelector = () => {
    const { category } = this.state;
    return (
      <div className="question-category-selector">
        <div
          className={`question-category ${
            category === "unanswered" ? "active-category" : ""
          }`}
          onClick={() => this.setState({ category: "unanswered" })}
        >
          Unanswered
        </div>
        <div
          className={`question-category ${
            category === "answered" ? "active-category" : ""
          }`}
          onClick={() => this.setState({ category: "answered" })}
        >
          Answered
        </div>
      </div>
    );
  };

  render() {
    const { category } = this.state;
    return (
      <div>
        {this.CategorySelector()}
        {category === "unanswered" ? (
          <UnansweredQuestionsList />
        ) : (
          <AnsweredQuestionsList />
        )}
      </div>
    );
  }
}

export default HomePage;
