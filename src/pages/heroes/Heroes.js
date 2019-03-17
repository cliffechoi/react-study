import React, {Component} from 'react';
import axios from "axios";
import Pagination from 'rc-pagination'
import 'rc-pagination/dist/rc-pagination.css';
import {Route} from "react-router-dom";
import Hero from "./hero/Hero";

//import styles from '../../pages/heroes/Heroes.module.scss'

export default class Heroes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      heroes: [],
      pageSize: 10,
      totalCount: 0,
      currentPage: 1,
    }
  }

  onChange = (page) => {
    this.setState({currentPage: page}, () => {
      this.getHeroes();
    });
  };

  handleClick = (event, hero_id) => {
    console.log(event, hero_id);
    event.preventDefault();
    this.props.history.push(`/heroes/hero/${hero_id}`);
  };

  // async getHeroes() {
  //   let res = await axios.get('http://eastflag.co.kr:8080/api/heroes');
  //   this.setState({heroes: res.data, totalCount: res.data.length});
  // }

  getHeroes = async () => {
    let response = await axios.get(`http://eastflag.co.kr:8080/api/paged_heroes?start_index=
      ${this.state.pageSize * (this.state.currentPage - 1)}&page_size=${this.state.pageSize}`);
    console.log(response);
    this.setState({
      heroes: response.data.data,
      totalCount: response.data.total
    });
    window.scrollTo(0, 0);
  };

  componentDidMount() {
    this.getHeroes();
  }

  render() {
    return (
      <>
        <switch>
          <Route path="/heroes/hero/:hero_id" component={Hero}/>
        </switch>
        <div className="card-columns">
          {this.state.heroes.map(hero => (
            <div className="card" key={hero.hero_id} onClick={(e) => {this.handleClick(e, hero.hero_id)}} style={{cursor: 'pointer'}}>
              <img
                src={(hero.photo && hero.photo !== 'undefined') ? hero.photo : process.env.PUBLIC_URL + '/images/baseline-face-24px.svg'}
                style={{width: '100%'}} alt={hero.name}/>
              <div className="card-body">
                <h5 className="card-title">{hero.name}</h5>
                <p className="card-text">email: {hero.email}</p>
                <p className="card-text">sex: {hero.sex}</p>
              </div>
            </div>
          ))}
        </div>
        <Pagination total={this.state.totalCount} current={this.state.currentPage} pageSize={this.state.pageSize}
                    onChange={this.onChange}
                    className="d-flex justify-content-center"
        />
      </>
    );
  }
}