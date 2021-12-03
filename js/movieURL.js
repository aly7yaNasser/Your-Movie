function getTrnding (apiKey){

    var url = " https://api.themoviedb.org/3/movie/now_playing?api_key="+apiKey+"&language=en-US";

    
    axios.get(url)
  .then(function (response) {
    // handle success
    console.log(response.data);
    var res=response;
    var i=1;
    while (i<11){
        
              https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=<<api_key>>&language=en-US
      var imgUrl="http://image.tmdb.org/t/p/w500"+res.data.results[i].poster_path;
      $("#purImg"+i).attr("src", imgUrl);
      $("#purImg"+i).attr("onClick", "getMovie("+res.data.results[i].id+")");

      $("#purTitle"+i).text(res.data.results[i].title);
      $("#purTitle"+i).closest("a").attr("href" , res.data.results[i].id);
      $("#purTitle"+i).attr("onClick", "getMovie("+res.data.results[i].id+")");
      $("#purRate"+i).text(res.data.results[i].vote_average);
    
      i++;
    }
    return res;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
   
  });
}

function getUpComing (apiKey){

  var url = "https://api.themoviedb.org/3/movie/upcoming?api_key="+apiKey;

  axios.get(url)
.then(function (response) {
  // handle success
  console.log(response.data);
  var res=response;
  var i=1;
  while (i<11){
    var imgUrl="http://image.tmdb.org/t/p/w500/"+res.data.results[i].poster_path;
    
    $("#inComImg"+i).attr("src", imgUrl);
    $("#inComImg"+i).attr("onClick", "getMovie("+res.data.results[i].id+")");
    $("#inComTitle"+i).attr("onClick", "getMovie("+res.data.results[i].id+")");

    $("#inComTitle"+i).text(res.data.results[i].title);

    $("#inComRate"+i).text(res.data.results[i].vote_average);    i++;
  }
  return res;
})
.catch(function (error) {
  // handle error
  console.log(error);
})
.then(function () {
  // always executed
 
});
}


function PurSeries (apiKey){

  var url = "https://api.themoviedb.org/3/tv/popular?api_key="+apiKey;

  axios.get(url)
.then(function (response) {
  // handle success
  console.log("ser",response.data);
  var res=response;
  var i=1;
  while (i<11){
    var imgUrl="http://image.tmdb.org/t/p/w500/"+res.data.results[i].poster_path;
    
    
    $("#purSImg"+i).attr("src", imgUrl);
    $("#purSImg"+i).attr("onClick", "getMovie("+res.data.results[i].id+")");
    $("#purSTitle"+i).attr("onClick", "getMovie("+res.data.results[i].id+")");

    $("#purSTitle"+i).text(res.data.results[i].name);
    $("#purSRate"+i).text(res.data.results[i].vote_average); 
       i++;
  }
  return res;
})
.catch(function (error) {
  // handle error
  console.log(error);
})
.then(function () {
  // always executed
 
});
}



function LatSeries (apiKey){

  var url = "https://api.themoviedb.org/3/tv/latest?api_key="+apiKey;

  axios.get(url)
.then(function (response) {
  // handle success
  console.log("ser",response.data);
  var res=response;
  var i=1;
  while (i<11){
    var imgUrl="http://image.tmdb.org/t/p/w500/"+res.data.results[i].poster_path;
    
    $("#LatSerImg"+i).attr("src", imgUrl);
    $("#LatSerTitle"+i).text(res.data.results[i].name);
    $("#LatSerRate"+i).text(res.data.results[i].vote_average); 
       i++;
  }
  return res;
})
.catch(function (error) {
  // handle error
  console.log(error);
})
.then(function () {
  // always executed
 
});
}

