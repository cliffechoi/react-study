import React, {Component} from 'react';
import axios from "axios";
import styles from '../../pages/heroes/Heroes.module.scss'

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
      <ul className={styles["img-box"]}>
        {
          this.state.heroes.map(hero => (
            <li key={hero.hero_id} className="row align-items-center m-0">
              <div className="col-1 py-2">
                <img src={hero.photo ? hero.photo : process.env.PUBLIC_URL + '/images/baseline-face-24px.svg'} alt={hero.name}
                   className="img-fluid rounded-circle" style={{width: '100%'}} />
              </div>
              <span className="col">{hero.name}</span>
            </li>
          ))
        }
      </ul>
    );
  }
}