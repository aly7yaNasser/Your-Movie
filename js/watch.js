$(document).ready(function () {

    $("#movies").click(function () {
        location.href = location.origin + "/movies.html";


    });


    $("#series").click(function () {
        location.href = window.origin + "/series.html";

    });

    $("#favorite").click(function () {
        location.href = window.origin + "/favorite.html";

    });





    
getMoviesByGenre("movies");
});







var gActive = $(".active").text();






$(".border-red-600").click(function (e) {
    $(".active").removeClass("bg-red-600");
    $(".active").removeClass("text-white");
    $(".active").removeClass("active");


    $(this).addClass("active");
    $(this).addClass("bg-red-600");
    $(this).addClass("text-white");
    var genre = $(this).attr("id");

    $("#moviesC").html("");

    // getMoviesByGenre(genre);
    // $(this).removeClass(attributeName);
});


function getMoviesByGenre(g) {
    // alert(g)
    var res;
    axios.get("https://api.themoviedb.org/3/account/{account_id}/watchlist/" + g + "?api_key=" + apiKey + "&session_id=" + session_id)
        .then(function (response) {
            console.log("f", response.data)
            res = response.data;
            return res;
        }).catch(function (err) {
            console.log("err", err);
        }).then(function (res1) {
            //   var i =0
            //   $("#moviesC").html("");
            if (g === "tv") {
                res1.results.map(disS)

            } else {
                res1.results.map(display)
                getMoviesByGenre("tv");

            }



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

function display(element) {
    var title;
    var type;
    var date
    if (element.title === undefined) {
        title = element.name;
        type = "tv"
        date = element.first_air_date
    } else {
        title = element.title;
        date = element.release_date
        type = "movie"
    }
    //    alert(element)
    var oldHtml = $("#moviesC").html();
    $("#moviesC").html(oldHtml + `        <div class="grid grid-cols-7 pt-10  " id="` + element.id + `" part="` + type + `" >
    <div id="poster1" class="col-span-1   h-18">
        <img id="img1" src="http://image.tmdb.org/t/p/w500/`+ element.poster_path + `" alt="" height="100px" width="100px" class="">
    </div>
    <div class="col-span-5 ">
        <div class="grid grid-rows-3">
            <div id="title1" class="pt-4 text-2xl">`+ title + `</div>
            <div id="overview1" >`+ element.overview.substring(0, 150) + ` ...</div>
            <div class="pt-3 text-gl">
                <label for="dateL">Release Date:`+ date + `</label>
                <i id="date1" class="font-normal"></i>
                <i class="text-white">jjj</i>
                <i class=" fas fa-star text-yellow-400"></i>
                <i id="rate1" class="">`+ element.vote_average + `</i>
            </div>
        </div>
    </div>
    <div class="col-span-1 text-center text-xl">
       
    </div>
</div>
<div class="border-b-2 border-gray-700 pt-4" ></div>
`);

    $(".grid-cols-7").click(function (e) {

        if ($(this).attr("id").length > 0) {
            var url = new URL(location.origin + '/details.html');
            var search_params = url.searchParams;

            // new value of "id" is set to "101"
            search_params.set('id', $(this).attr("id"));
            search_params.set('type', $(this).attr("part"));

            // change the search property of the main url
            url.search = search_params.toString();

            // the new url string
            var new_url = url.toString();

            // alert(new_url);
            location.href = new_url;
        }
    });

}


function disS(element) {
    var title;
    var type;
    var date
    if (element.title === undefined) {
        title = element.name;
        type = "tv"
        date = element.first_air_date
    } else {
        title = element.title;
        date = element.release_date
        type = "movie"
    }
    //    alert(element)
    var oldHtml = $("#seriesC").html();
    $("#seriesC").html(oldHtml + `        <div class="grid grid-cols-7 pt-10  " id="` + element.id + `" part="` + type + `" >
    <div id="poster1" class="col-span-1   h-18">
        <img id="img1" src="http://image.tmdb.org/t/p/w500/`+ element.poster_path + `" alt="" height="200px" width="150px" class="">
    </div>
    <div class="col-span-5 ">
        <div class="grid grid-rows-3 pl-5">
            <div id="title1" class="pt-4 text-2xl">`+ title + `</div>
            <div id="overview1" >`+ element.overview.substring(0, 150) + ` ...</div>
            <div class="pt-3 text-gl">
                <label for="dateL">Release Date:`+ date + `</label>
                <i id="date1" class="font-normal"></i>
                <i class="text-white">jjj</i>
                <i class=" fas fa-star text-yellow-400"></i>
                <i id="rate1" class="">`+ element.vote_average + `</i>
            </div>
        </div>
    </div>
    <div class="col-span-1 text-center text-xl">
       
    </div>
</div>
<div class="border-b-2 border-gray-700 pt-4" ></div>
`);

    $(".grid-cols-7").click(function (e) {

        if ($(this).attr("id").length > 0) {
            var url = new URL(location.origin + '/details.html');
            var search_params = url.searchParams;

            // new value of "id" is set to "101"
            search_params.set('id', $(this).attr("id"));
            search_params.set('type', $(this).attr("part"));

            // change the search property of the main url
            url.search = search_params.toString();

            // the new url string
            var new_url = url.toString();

            // alert(new_url);
            location.href = new_url;
        }
    });

}