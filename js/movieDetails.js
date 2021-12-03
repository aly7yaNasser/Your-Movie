var url = new URL(window.location)
var tokenFromUrl = url.searchParams.get("request_token");
var approved = url.searchParams.get("approved");
var forW = sessionStorage.forWhat;
var request_token = url.searchParams.get("request_token");
var rate;
// alert(forW)
if (forW != undefined) {
    forWhat = forW;
    // alert(forWhat)

    request_token = url.searchParams.get("request_token");

    if (request_token != null) {
        request_token = url.searchParams.get("request_token").toString();
    
            axios({
                method: "POST", url: "https://api.themoviedb.org/3/authentication/session/new?api_key=" + apiKey,
                data:
                {
                    "request_token": tokenFromUrl
                },
                headers: {
                    "Content-Type": "application/json;charset=utf-8"
                }
            })
                .then(function (response) {
                    console.log("ss", response.data)
                    session_id = response.data.session_id;
                    localStorage.session_id =session_id;
                
                })
                .catch(function (err) {
                    console.log("ssErr", err.response);
                })
                .then(function(){
                    switch(forW){
                        case 'rate':
                            enableRate()
                        break;
                
                        case 'fav':
                        addToFavList()
                        changeFavoriteButton()
                        break;
                
                        case 'watch':
                        break;
                    }

                })
            }
            
    // }else if(session_id.includes(undefined)){
    //     axios({
    //         method: "POST", url: "https://api.themoviedb.org/3/authentication/session/new?api_key=" + apiKey,
    //         data:
    //         {
    //             "request_token": tokenFromUrl
    //         },
    //         headers: {
    //             "Content-Type": "application/json;charset=utf-8"
    //         }
    //     })
    //         .then(function (response) {
    //             console.log("ss", response.data)
    //             session_id = response.data.session_id;
    //             localStorage.session_id =session_id;
    //         })
    //         .catch(function (err) {
    //             console.log("ssErr", err.response);
    //         })
    //     }
    // else{
    //         console.log("session_id",session_id)
    //     }
    
    

        }


var id = url.searchParams.get("id").toString();
var session_id = localStorage.session_id;




$(document).ready(function () {
    
    $('button').click(function (e) { 
        var rate =$(this).text().includes('rate');
        var favorite =$(this).text().includes('favorite');
        var watch =$(this).text().includes('Watch');


        // sessionStorage.forWhat=from;
        alert(session_id)
    
        if(session_id.includes(undefined)){
    
        
        switch(true){
            case rate:
            break;
    
            case favorite:
    
            break;
    
            case watch:
            break;
        }
          axios.get(" https://api.themoviedb.org/3/authentication/token/new?api_key=" + apiKey)
            .then(function (response) {
                request_token = response.data.request_token;
                console.log("token",response)
                redirect();
                
            }).catch(function (error) {
                // handle error
                console.log("tokenErr", error);
            })
    
    
    }else{
        switch(true){
            case rate:
                enableRate()
            break;
    
            case favorite:
            addToFavList()
            break;
    
            case watch:
                alert("w")
                addToWatcList()
    
            break;
        
    
        }
    }
        
    

        
    });


 

    getMovie()
    getVideo()
   


});

function getVideo() {
    var url = new URL(window.location)
    var vUrl = "https://api.themoviedb.org/3/movie/" + id + "/videos?api_key=" + apiKey;

    axios.get(vUrl)
        .then(function (response) {
            var video = response.data.results[0].key;
            $("iframe").attr("src", "https://www.youtube.com/embed/" + video);

            // console.log(response)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
}

function getMovie() {
    var url = new URL(window.location)
    // var id = url.searchParams.get("id").toString();
    var vUrl = "https://api.themoviedb.org/3/movie/" + id + "?api_key=" + apiKey;


    axios.get(vUrl)
        .then(function (response) {
            var res = response.data;
            var imgUrl = "http://image.tmdb.org/t/p/w500" + res.poster_path;
            $("#poster").attr("src", imgUrl);
            $("#overview").text(res.overview);
            $("#rate").text(res.vote_average); 
           


        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            
        axios.get("https://api.themoviedb.org/3/account/{account_id}/favorite/movies?api_key="+apiKey+"&session_id="+session_id)
        .then(function(response){
            console.log("favorite",response)
            
            response.data.results.forEach(movie => {
                if(movie.id ==id){
                    changeFavoriteButton(true)
                }
                
            });
        })
        .catch(function (err){
            console.log("favoriteLErr",err)
        })
        .then(function () {
            
            axios.get("https://api.themoviedb.org/3/account/{account_id}/watchlist/movies?api_key="+apiKey+"&session_id="+session_id)
            .then(function(response){
                console.log("watch",response)
                
                response.data.results.forEach(movie => {
                    if(movie.id ==id){
                        changeWatchButton(true)
                    }
                    
                });
            })
            .catch(function (err){
                console.log("watchErr",err)
            })
            .then(function (){
                   
            axios.get("https://api.themoviedb.org/3/account/{account_id}/rated/movies?api_key="+apiKey+"&session_id="+session_id)
            .then(function(response){
                console.log("rate",response)
                
                response.data.results.forEach(movie => {
                    if(movie.id ==id){
                        rate=movie.rating
                        enableRate(true)
                    }
                    
                });
            })
            .catch(function (err){
                console.log("rateErr",err)
            })

            })


        });
    });
    

}

function enableRate(state) {
    if(state === true){
        $("#rateButton").html('<p class= text-2xl text-center >already rated </p><div class="grid grid-cols-2 text-2xl  pt-4 "> <div class="col-span-1 text-right   "><i class="fas fa-star text-yellow-500   text-4xl pr-4"></i></div><div class="col-span-1 "><p class=" text-4xl text-left" id="rate">'+rate+'</p></div></div>')

    }else{
    // alert("eR")
    var rateValue;
    $("#rateButton").html('<h2 class ="text-center text-xl">Rate Here</h2>  <div class="text-3xl text-center "> <div class=pb-6 border-2 border-black><span class="fa fa-star   " id="r1"></span><span class="fa fa-star " id="r2"></span><span class="fa fa-star " id="r3"></span><span class="fa fa-star" id="r4"></span><span class="fa fa-star" id="r5"></span></div>               <button id=submitRate class="text-white text-center bg-red-600 w-full pt-6" >Submit Rate</button>')
    $("span").mouseover(function () {
        var starId = $(this).attr("id");
        // alert(starId)
        switch (starId) {
            case "r1":
                $("#r1").addClass("checked");
                rateValue=2;
                if($("#r2").hasClass("checked")){
                    $("#r2").removeClass("checked");

                }
                if($("#r3").hasClass("checked")){
                    $("#r3").removeClass("checked");

                }

                if($("#r4").hasClass("checked")){
                    $("#r4").removeClass("checked");

                }
                if($("#r5").hasClass("checked")){
                    $("#r5").removeClass("checked");

                }
                break;

            case "r2":
                $("#r1").addClass("checked");
                $("#r2").addClass("checked");
                rateValue=4;

                if($("#r3").hasClass("checked")){
                    $("#r3").removeClass("checked");

                }

                if($("#r4").hasClass("checked")){
                    $("#r4").removeClass("checked");

                }
                if($("#r5").hasClass("checked")){
                    $("#r5").removeClass("checked");

                }


                if($("#r5").hasClass("checked")){
                    $("#r5").removeClass("checked");

                }

                break;

            case "r3":
                $("#r1").addClass("checked");
                $("#r2").addClass("checked");
                $("#r3").addClass("checked");
                rateValue=6;

                if($("#r4").hasClass("checked")){
                    $("#r4").removeClass("checked");

                }
                if($("#r5").hasClass("checked")){
                    $("#r5").removeClass("checked");

                }
                break;
            case "r4":
                $("#r1").addClass("checked");
                $("#r2").addClass("checked");
                $("#r3").addClass("checked");
                $("#r4").addClass("checked");
                rateValue=8;

                if($("#r5").hasClass("checked")){
                    $("#r5").removeClass("checked");

                }

                break;

            case "r5":
                $("#r1").addClass("checked");
                $("#r2").addClass("checked");
                $("#r3").addClass("checked");
                $("#r4").addClass("checked");
                $("#r5").addClass("checked");
                rateValue=10;
                

                break;
            default:
        }
    });


    $("#submitRate").click(function (e) { 
        alert("rateV: "+rateValue);
   


            axios({
                method: "POST", url: "https://api.themoviedb.org/3/movie/" + id + "/rating?api_key=" + apiKey + "&session_id=" + session_id,
                data:
                {
                    'value': rateValue
                },
                Headers: {
                    "Content-Type": "application/json;charset=utf-8"
                }
            })
                .then(function (response) {
                    console.log("rate", response.data)
                    
                })
                .catch(function (err) {
                    console.log("rateErr", err.response);
                })
        });
    }
}


function redirect(forWhat) {
    alert("you need to verify your identity in 'TheMovieDB' ")
    location.href = 'https://www.themoviedb.org/authenticate/' + request_token + '?redirect_to=' + window.location ;
    sessionStorage.forWhat =forWhat;
}

function addToFavList(){

    axios({
        method: "POST", url: "https://api.themoviedb.org/3/account/" + id + "/favorite?api_key=" + apiKey + "&session_id=" + session_id,
        data:
        {
            "media_type": "movie",
  "media_id": id,
  "favorite": true
        },
        Headers: {
            "Content-Type": "application/json;charset=utf-8"
        }
    })
        .then(function (response) {
            console.log("fav", response.data);
            changeFavoriteButton(true)
        })
        .catch(function (err) {
            console.log("favErr", err.response);
        })


}


function addToWatcList(){

    axios({
        method: "POST", url: "https://api.themoviedb.org/3/account/" + id + "/watchlist?api_key=" + apiKey + "&session_id=" + session_id,
        data:
        {
            "media_type": "movie",
  "media_id": id,
  "watchlist": true
        },
        Headers: {
            "Content-Type": "application/json;charset=utf-8"
        }
    })
        .then(function (response) {
            console.log("watch", response.data);
            changeWatchButton(true)
        })
        .catch(function (err) {
            console.log("watchErr", err.response);
        })


}

function changeFavoriteButton(state){
    if(state){
        $("#favButton").text("already added to Favorite");
    }else{
        $("#favButton").text("Add to Favorite");

    }

}

function getToken(){
    
    
    sessionStorage.forWhat=from;
    alert(session_id)

    if(session_id.includes(undefined)){

    
    switch(from){
        case 'rate':
        break;

        case 'fav':

        break;

        case 'watch':
        break;
    }
      axios.get(" https://api.themoviedb.org/3/authentication/token/new?api_key=" + apiKey)
        .then(function (response) {
            request_token = response.data.request_token;
            console.log("token",response)
            redirect();
            
        }).catch(function (error) {
            // handle error
            console.log("tokenErr", error);
        })


}else{
    alert(from)
    switch(from){
        case 'rate':
            enableRate()
        break;

        case 'fav':
        addToFavList()
        break;

        case 'watch':
            addToWatcList()

        break;
    

    }
}
    
}

function changeWatchButton(state){
    if(state){
        $("#watchButton").text("Remove from WatchList");
    }else{
        $("#watchButton").text("already added to WatchList");

    }
}

