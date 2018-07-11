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
    result: {response:{docs:[]}},
    search: "",
    startYear: "",
    endYear: ""
  };

  componentDidMount() {
    this.searchArticles("trump", "2017", "2017");
      
  };

  searchArticles = (query, start, end) => {
    API.search(query, start, end)
      .then(res => {this.setState({ result: res.data });
      console.log("pub_date: \n  --" + JSON.stringify(this.state.result.response.docs[0].pub_date));
      console.log("headline: \n  --" + JSON.stringify(this.state.result.response.docs[0].headline.main));
      console.log("url: \n  --" + JSON.stringify(this.state.result.response.docs[0].web_url));

  })
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
  };


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
            {this.state.result.response.docs.map(article => (
              <ArticlesDisplay
              title={article.headline.main}
              date={article.pub_date}
              url={article.web_url}
            />
            ))}
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
