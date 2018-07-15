import axios from "axios";
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
const APIKEY = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";


export default {
  search: function(query, start, end) {
    return axios.get(BASEURL
                    + APIKEY 
                    + "&q=" + query
                    + "&begin_date=" + start + "0101"
                    + "&end_date=" + end + "1231")
        
  },
  getArticles: function() {
    return axios.get("/api/articles");
  },
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  }
};