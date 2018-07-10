import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from "./components/Grid";
import Jumbotron from './components/Jumbotron';
import Card from './components/Card';
import SearchForm from './components/SearchForm';
import ArticlesDisplay from './components/ArticlesDisplay';
import API from "./utils/API";


class App extends Component {
  state = {
    result: {},
    search: "",
    startYear: "",
    endYear: ""
  };

  componentDidMount() {
    this.searchArticles("trump", "2017", "2017");
      console.log("this.state.result: \n  --" + this.state.result);
      console.log("this.state.result.response: \n  --" + this.state.result.response);
  };

  searchArticles = (query, start, end) => {
    API.search(query, start, end)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));  
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchArticles(this.state.search, this.state.startYear, this.state.endYear);
    this.setState({
      search: "",
      startYear: "",
      endYear: ""
    });
      console.log("---------------------------")
      console.log("Search Term: \n   --" + this.state.search);
      console.log("Start/End Year: \n   --" + this.state.startYear + " - " + this.state.endYear);
      console.log("this.state.result.response.docs[0].headline.main:   \n  --" + this.state.result.response.docs[0].headline.main);
  };

  // handleResponse() {
  //     var answer3=this.state.result;
  //     console.log("Search Term_3: " + this.state.search);
  //     console.log("'answer3.response.docs[0].headline.main': " + answer3.response.docs[0].headline.main);
    
  // }


  render() {
    return (
      <Container fluid>
        <Jumbotron>
          <h1>New York Times Article Search</h1>
        </Jumbotron>
        <Row>
          <Col size="sm-6 md-4">
            <Card heading="Search a Topic">
              <SearchForm
                searchValue={this.state.search}
                startValue={this.state.startYear}
                endValue={this.state.endYear}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
          <Col size="sm-6 md-8">
            <Card heading="Articles">
              <ArticlesDisplay
                id="articleSection"
                // title="Pretend this is a Headline"
                title={this.state.result.cheesmonster}
                // date="1974-07-18T00:00:00Z"
                date={this.state.result.docs}
                url="https://www.headline-access-url"
                // title={this.state.result.headline}
                // startValue={this.state.startYear}
                // endValue={this.state.endYear}
                // handleInputChange={this.handleInputChange}
                // handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
