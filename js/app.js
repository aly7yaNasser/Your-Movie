var favList;
var watchList;
var session_id = localStorage.session_id;


function showUser(){
    
    alert("yes");
    $("a").removeClass("hidden");
    $("li").css("visibility", "true");

    
}
const apiKey = "";
var     request_token;





// getTrnding(apiKey);
// getUpComing(apiKey);
// PurSeries(apiKey);
getImg();
if(session_id != undefined){
    // alert(session_id)
 
}

function getMovie(id){
    alert(id)
    var url = new URL(location.origin+'/details.html');
    var search_params = url.searchParams;
    
    // new value of "id" is set to "101"
    search_params.set('id', id);
    
    // change the search property of the main url
    url.search = search_params.toString();
    
    // the new url string
    var new_url = url.toString();

    // alert(new_url);
    location.href =new_url;
}

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

    
// $(".relative").click(function (e) { 
//     alert($(this).closest("a").text())
    // var url = new URL(location.origin+'/details.html');
    // var search_params = url.searchParams;
    
    // // new value of "id" is set to "101"
    // search_params.set('id', '101');
    
    // // change the search property of the main url
    // url.search = search_params.toString();
    
    // // the new url string
    // var new_url = url.toString();

    // alert(new_url);
    // location.href =new_url;
// });
});

function getFavorite(){

   
        axios.get("https://api.themoviedb.org/3/account/{account_id}/favorite/movies?api_key="+apiKey+"&session_id="+session_id)
        .then(function(response){
            console.log("favorite",response)
            return response.data.results
    
        })
        .catch(function (err){
            console.log("favoriteLErr",err)
        })

}

function getWatch(){

    axios.get("https://api.themoviedb.org/3/account/{account_id}/watchlist/movies?api_key="+apiKey+"&session_id="+session_id)
    .then(function(response){
        console.log("watch",response)

        return response.data.results;
    })
    .catch(function (err){
        console.log("watchLErr",err)
        return "error"
    })

}

function search(){
    console.log(window.origin+"/search.html?search="+$("input").val())
    location.href=window.origin+"/search.html?search="+$("input").val();
}
