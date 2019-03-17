import React, {Component} from 'react';
import axios from "axios";

export default class Heroes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      heroes: []
    }
  }

  async getHeroes() {
    let res =  await axios.get('http://eastflag.co.kr:8080/api/heroes');
    this.setState({heroes: res.data});
  }

  componentDidMount() {
    this.getHeroes();
  }

  render() {
    return (
      <ul>
        {
          this.state.heroes.map(hero => (
            <li key={hero.hero_id}>
              <img src={hero.photo} alt={hero.name}/>
              <span>{hero.name}</span>
            </li>
          ))
        }
      </ul>
    );
  }
}