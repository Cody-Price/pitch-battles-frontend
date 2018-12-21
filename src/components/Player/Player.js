import React, { Component } from "react";
import avatars from "../../utilities/avatars";
import "./Player.css";
import "./CharacterAnims/Char1.css";
import "./CharacterAnims/Char2.css";
import "./CharacterAnims/Char3.css";
import "./CharacterAnims/Char4.css";
import "./CharacterAnims/Char5.css";
import "./CharacterAnims/Char6.css";
import "./CharacterAnims/Char7.css";
import "./CharacterAnims/Char8.css";
import "./CharacterAnims/Char9.css";
import "./CharacterAnims/Char10.css";

class Player extends Component {
  render() {
    return (
      <div
        className={`player ${avatars[this.props.avatar]} ${this.props.status}`}
      />
    );
  }
}

export default Player;
