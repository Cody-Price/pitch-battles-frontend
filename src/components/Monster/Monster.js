import React, { Component } from "react";

import "./Monster.css";
import "./MonsterAnims/Boar.css";
import "./MonsterAnims/Bird.css";
import "./MonsterAnims/Phoenix.css";
import "./MonsterAnims/Minotaur.css";
import "./MonsterAnims/Demon.css";

import monsters from "../../utilities/monsters.js";

class Monster extends Component {
  render() {
    let currentMonster = monsters[this.props.level];

    return <div className={`monster ${currentMonster} ${this.props.status}`} />;
  }
  1;
}

export default Monster;
