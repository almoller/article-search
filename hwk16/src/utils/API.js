import axios from "axios";
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
const APIKEY = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
// let articleCounter = 0;

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



// .then(function(NYTData) {

//   for (let i = 0; i < 5; i++) {
//     articleCounter++;

//     const articleWell = $("<div>");
//     articleWell.addClass("well");
//     articleWell.attr("id", "article-well-" + articleCounter);
//     $("articleSection").append(articleWell);

//     if (NYTData.response.docs[i].headline !== "null") {
//       articleWell.append(
//         "<h3 className='articleHeadline'><span>"
//         + articleCounter + ": </span> " 
//         + NYTData.response.docs[i].headline.main + "</h3>"
//       );
//       articleWell.append(
//         "<h5 className='text-muted'>"
//         + NYTData.response.docs[i].pub_date + "</h5>"
//       );
//       articleWell.append(
//         "<a href='" + NYTData.response.docs[i].web_url + "'>"
//         + NYTData.response.docs[i].web_url + "</a>"
//       );
//       articleWell.append("<hr>");
//     }
//   }

// });