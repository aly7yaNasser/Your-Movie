var url = new URL(window.location)

var searchWord = url.searchParams.get("search");

$("#sr").text(searchWord.toString());

https://api.themoviedb.org/3/search/movie?api_key=bhcfhjb&language=en-US&query=jjjj&page=1&include_adult=false

var url = "https://api.themoviedb.org/3/search/movie?api_key="+apiKey+"&language=en-US&query="+searchWord+"&page=1&include_adult=false";

    
    axios.get(url)
  .then(function (response) {
    // handle success
    console.log(response.data);
    var res=response;
    var i=1;
    while (i<8){
        // var results=$("#results").html();
        var movie =response.data.results[i];
        console.log(movie);
        $("#img"+i).attr("src", "http://image.tmdb.org/t/p/w500/"+movie.poster_path);
        $("#title"+i).text( movie.original_title);
        var str = movie.overview.substring(0,150);
        $("#overview"+i).text( str+"...");
        $("#date"+i).text( movie.release_date );
        $("#rate"+i).text( movie.vote_average );
        $("#id"+i).attr("id",movie.id)




        // var resultsDiv=$("#results").html(results + ' <div class="grid grid-cols-4 "><div id="poster" class="col-span-1"><img src=http://image.tmdb.org/t/p/w500/'+movie.poster_path+'></img></div><div class="col-span-2"><div class="grid grid-rows-3"><div id="title">'+movie.original_title+'</div><div id="director"></div><div id="cast"></div></div></div></div>');

        
      i++;
    }
    $(".grid-cols-7").click(function (e) { 
      var url = new URL(location.origin+'/details.html');
      var search_params = url.searchParams;
      
      // new value of "id" is set to "101"
      search_params.set('id', $(this).attr("id"));
      search_params.set('type', "movie");

      
      // change the search property of the main url
      url.search = search_params.toString();
      
      // the new url string
      var new_url = url.toString();
  
      // alert(new_url);
      location.href =new_url;    });
    return res;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
   
  });


  $(document).ready(function () {
    
    $("#movies").click(function () { 
      location.href=location.origin+"/movies.html";
      
      
  });
  
  
  $("#series").click(function () { 
      alert("ser")
      location.href=window.origin+"/series.html";

  });

  $("#favorite").click(function () { 
      location.href=location.origin+"/favorite.html";
      
      
  });
  
  
  $("#watch").click(function () { 
      location.href=window.origin+"/watch.html";

  });
  });