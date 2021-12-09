$(document).ready(function () {
  getTrnding(apiKey);
  getUpComing(apiKey);
  PurSeries(apiKey);

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
function getTrnding (apiKey){

    var url = " https://api.themoviedb.org/3/movie/now_playing?api_key="+apiKey+"&language=en-US";

    
    axios.get(url)
  .then(function (response) {
    // handle success
    // console.log(response.data);
    // var res=response;
    var i=0;
    var movie;

    while (i<10){
      console.log(i);
      movie=response.data.results[i];
      if(i<5){
      oldPlay1=$("#play1").html();
      var html =oldPlay1+`
      <div class="col-span-1 " id=`+movie.id+`>
      <div class="group relative ">
        <div
          class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-50 lg:h-60 lg:aspect-none">
          <img id="`+movie.id+`" src="http://image.tmdb.org/t/p/w500`+movie.poster_path+`" alt="Front of men&#039;s Basic Tee in black."
            class="w-full h-full object-center object-cover lg:w-full lg:h-full">
        </div>
        <div class="mt-4 flex justify-between">
          <div>
            <h3 class="text-sm text-gray-700">
              <a href="#" id="`+movie.id+`">
                <span aria-hidden="true" class="absolute inset-0"></span>
                `+movie.title+`
              </a>
            </h3>
          </div>
          <div class="grid grid-rows-2">
            <div>
              <i class="fas fa-star text-yellow-500 content-right"></i>
            </div>
            <div>
              <p class="text-sm font-medium text-gray-900" id="playRate1">`+movie.vote_average+`</p>
            </div>
          </div>
        </div>
      </div>
    </div>

      `;

      $("#play1").html(html);
      }else{
          oldPlay1=$("#play2").html();
          var html =oldPlay1+`
          <div class="col-span-1 " id=`+movie.id+`>
          <div class="group relative ">
            <div
              class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-50 lg:h-60 lg:aspect-none">
              <img id="`+movie.id+`" src="http://image.tmdb.org/t/p/w500`+movie.poster_path+`" alt="Front of men&#039;s Basic Tee in black."
                class="w-full h-full object-center object-cover lg:w-full lg:h-full">
            </div>
            <div class="mt-4 flex justify-between">
              <div>
                <h3 class="text-sm text-gray-700">
                  <a href="#" id="`+movie.id+`">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    `+movie.title+`
                  </a>
                </h3>
              </div>
              <div class="grid grid-rows-2">
                <div>
                  <i class="fas fa-star text-yellow-500 content-right"></i>
                </div>
                <div>
                  <p class="text-sm font-medium text-gray-900" id="playRate1">`+movie.vote_average+`</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    
          `;
    
          $("#play2").html(html);
          
      }

 
      i++;
    }
    
    return res;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
   openMovie();
  });
}

function getUpComing (apiKey){

  var url = "https://api.themoviedb.org/3/movie/upcoming?api_key="+apiKey;

  axios.get(url)
.then(function (response) {
  // handle success
  // console.log(response.data);
  var i=0;
    var movie;

    while (i<10){
      console.log(i);
      movie=response.data.results[i];
      if(i<5){
      oldPlay1=$("#pubM1").html();
      var html =oldPlay1+`
      <div class="col-span-1 " id=`+movie.id+`>
      <div class="group relative ">
        <div
          class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-50 lg:h-60 lg:aspect-none">
          <img id="`+movie.id+`" src="http://image.tmdb.org/t/p/w500`+movie.poster_path+`" alt="Front of men&#039;s Basic Tee in black."
            class="w-full h-full object-center object-cover lg:w-full lg:h-full">
        </div>
        <div class="mt-4 flex justify-between">
          <div>
            <h3 class="text-sm text-gray-700">
              <a href="#" id="`+movie.id+`">
                <span aria-hidden="true" class="absolute inset-0"></span>
                `+movie.title+`
              </a>
            </h3>
          </div>
          <div class="grid grid-rows-2">
            <div>
              <i class="fas fa-star text-yellow-500 content-right"></i>
            </div>
            <div>
              <p class="text-sm font-medium text-gray-900" id="playRate1">`+movie.vote_average+`</p>
            </div>
          </div>
        </div>
      </div>
    </div>

      `;

      $("#pubM1").html(html);
      }else{
          oldPlay1=$("#pubM2").html();
          var html =oldPlay1+`
          <div class="col-span-1 " id=`+movie.id+`>
          <div class="group relative ">
            <div
              class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-50 lg:h-60 lg:aspect-none">
              <img id="`+movie.id+`" src="http://image.tmdb.org/t/p/w500`+movie.poster_path+`" alt="Front of men&#039;s Basic Tee in black."
                class="w-full h-full object-center object-cover lg:w-full lg:h-full">
            </div>
            <div class="mt-4 flex justify-between">
              <div>
                <h3 class="text-sm text-gray-700">
                  <a href="#" id="`+movie.id+`">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    `+movie.title+`
                  </a>
                </h3>
              </div>
              <div class="grid grid-rows-2">
                <div>
                  <i class="fas fa-star text-yellow-500 content-right"></i>
                </div>
                <div>
                  <p class="text-sm font-medium text-gray-900" id="playRate1">`+movie.vote_average+`</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    
          `;
    
          $("#pubM2").html(html);
      }
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
  openMovie();
 
});
}


function PurSeries (apiKey){

  var url = "https://api.themoviedb.org/3/tv/popular?api_key="+apiKey;

  axios.get(url)
.then(function (response) {
  // handle success
  console.log("ser",response.data);
  var i=0;
  var movie;

  while (i<10){
    console.log(i);
    movie=response.data.results[i];
    if(i<5){
    oldPlay1=$("#pubS1").html();
    var html =oldPlay1+`
    <div class="col-span-1 " id=`+movie.id+`>
    <div class="group relative ">
      <div
        class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-50 lg:h-60 lg:aspect-none">
        <img id="`+movie.id+`" src="http://image.tmdb.org/t/p/w500`+movie.poster_path+`" alt="Front of men&#039;s Basic Tee in black."
          class="w-full h-full object-center object-cover lg:w-full lg:h-full">
      </div>
      <div class="mt-4 flex justify-between">
        <div>
          <h3 class="text-sm text-gray-700">
            <a href="#" id="`+movie.id+`">
              <span aria-hidden="true" class="absolute inset-0"></span>
              `+movie.name+`
            </a>
          </h3>
        </div>
        <div class="grid grid-rows-2">
          <div>
            <i class="fas fa-star text-yellow-500 content-right"></i>
          </div>
          <div>
            <p class="text-sm font-medium text-gray-900" id="playRate1">`+movie.vote_average+`</p>
          </div>
        </div>
      </div>
    </div>
  </div>

    `;

    $("#pubS1").html(html);
    }else{
        oldPlay1=$("#pubS2").html();
        var html =oldPlay1+`
        <div class="col-span-1 " id=`+movie.id+`>
        <div class="group relative ">
          <div
            class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-50 lg:h-60 lg:aspect-none">
            <img id="`+movie.id+`" src="http://image.tmdb.org/t/p/w500`+movie.poster_path+`" alt="Front of men&#039;s Basic Tee in black."
              class="w-full h-full object-center object-cover lg:w-full lg:h-full">
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <a href="#" id="`+movie.id+`">
                  <span aria-hidden="true" class="absolute inset-0"></span>
                  `+movie.name+`
                </a>
              </h3>
            </div>
            <div class="grid grid-rows-2">
              <div>
                <i class="fas fa-star text-yellow-500 content-right"></i>
              </div>
              <div>
                <p class="text-sm font-medium text-gray-900" id="playRate1">`+movie.vote_average+`</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  
        `;
  
        $("#pubS2").html(html);
    }
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
openMovie();

});
}

function openMovie(){
  $(".col-span-1").click(function (e) { 
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
      });
}
