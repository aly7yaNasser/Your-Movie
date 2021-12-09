

$(document).ready(function () {




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

    $(".grid-cols-7").click(function (e) { 
        if($(this).attr("id").lenght <0){
        var url = new URL(location.origin+'/details.html');
        var search_params = url.searchParams;
        
        // new value of "id" is set to "101"
        search_params.set('id', $(this).attr("id"));
        
        // change the search property of the main url
        url.search = search_params.toString();
        
        // the new url string
        var new_url = url.toString();
    
        // alert(new_url);
        location.href =new_url;  
      }  });
    
    var gActive=    $(".active").text();


    getMoviesByGenre("genre");

    

$(".border-red-600").click(function (e) { 
    $(".active").removeClass("bg-red-600");
    $(".active").removeClass("text-white");
    $(".active").removeClass("active");


    $(this).addClass("active");
    $(this).addClass("bg-red-600");
    $(this).addClass("text-white");
    var genre=$(this).attr("id");

    $("#moviesC").html("");

    getMoviesByGenre(genre);
    // $(this).removeClass(attributeName);
});

});

function getMoviesByGenre(g){
    // alert(g)
    var res
    axios.get("  https://api.themoviedb.org/3/discover/movie?api_key=a952fd258f7e77da897ce3bd96c75efe&page=1&include_adult=false&page=1&with_genres="+g)
  .then(function (response){
      console.log(response)
        res=response.data;
  }).catch(function(err){
      console.log("err",err);
  }).then(function(res1){
    //   var i =0
      $("#moviesC").html("");
      res.results.map(display)
   

    
// $(".border-red-600").click(function (e) { 
//     $(".active").removeClass("bg-red-600");
//     $(".active").removeClass("text-white");
//     $(".active").removeClass("active");


//     $(this).addClass("active");
//     $(this).addClass("bg-red-600");
//     $(this).addClass("text-white");
//     var genre=$(this).text();
//     $("#moviesC").html("");

//   getMoviesByGenre(genre);

//     // $(this).removeClass(attributeName);
// });


  })
}

function display(element){
    //    alert(element)
    var oldHtml=$("#moviesC").html();
    $("#moviesC").html(oldHtml+`        <div class="grid grid-cols-7 pt-10  " id="`+element.id+`">
    <div id="poster1" class="col-span-1   h-18">
        <img id="img1" src="http://image.tmdb.org/t/p/w500/`+element.poster_path+`" alt="" height="100px" width="100px" class="">
    </div>
    <div class="col-span-5 ">
        <div class="grid grid-rows-3">
            <div id="title1" class="pt-4 text-2xl">`+element.title+`</div>
            <div id="overview1" >`+element.overview.substring(0,150)+`</div>
            <div class="pt-3 text-gl">
                <label for="dateL">Release Date:`+element.release_date+`</label>
                <i id="date1" class="font-normal"></i>
                <i class="text-white">jjj</i>
                <i class=" fas fa-star text-yellow-400"></i>
                <i id="rate1" class="">`+element.vote_average+`</i>
            </div>
        </div>
    </div>
    <div class="col-span-1 text-center text-xl">
       
    </div>
</div>
<div class="border-b-2 border-gray-700 pt-4" ></div>
`);

      
     openMovie();

}


function openMovie(){
    $(".grid-cols-7").click(function (e) { 
        if($(this).attr("id").length >0){

      // alert("no")
      var url = new URL(location.origin+'/details.html');
      var search_params = url.searchParams;
      
      // new value of "id" is set to "101"
      search_params.set('id', $(this).attr("id"));
      if($(this).parent().attr("id").includes("S")){
      search_params.set('type', "tv");
      }else {
        search_params.set('type', "movie");
  
      }
      
      // change the search property of the main url
      url.search = search_params.toString();
      
      // the new url string
      var new_url = url.toString();
  
      // alert(new_url);
      location.href =new_url; 
    }
        });
  }