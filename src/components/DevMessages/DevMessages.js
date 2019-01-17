import React, { Component } from "react";
import "./DevMessages.css";

import { devMessages } from "../../content/devMessages";

class DevMessages extends Component {
  render() {
    const content = devMessages.text.map((message, index) => {
      return (
        <p key={`devMessage ${index}`} className="dev-message-text">
          {message}
        </p>
      );
    });

    return (
      <article className="dev-message">
        <button
          className="close-dev-message"
          onClick={this.props.closeDevMessage}
        />
        <h4 className="dev-message-title">{devMessages.title}</h4>
        <p className="dev-message-date">{devMessages.date}</p>
        {content}
        <div />
      </article>
    );
  }
}

export default DevMessages;
