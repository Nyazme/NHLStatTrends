$(document).ready(function(){
    //getApiDirectly();
    //getApiViaServer();
    init();

});

function init(){
    enabled();
}

function enabled() {

    $("#searchbtn").on("click", function (event) {
        event.preventDefault();

        var searchText = $("#searchForAPI").val();
        var searchNumber = $("numForAPI").val();


        //function getApiViaServer() {
         $.ajax({
            type: "GET",
             url: "https://api.mysportsfeeds.com/v1.2/pull/nhl/2016-playoff/full_game_schedule.json",
             dataType: 'json',
             headers: {
                "Authorization": "Basic " + btoa("NHL2018:GCU2018")
             },
             beforeSend: function(){
                console.log("Before Send");
             },
             complete: function(){
                console.log("Complete");
             },
              success: function (response) {
                console.log("Success!");
                  console.log(response);

            }
         });

        //}
        //
        // $.ajax({
        //     type: "GET",
        //     url: "https://api.mysportsfeeds.com/v1.2/pull/nhl/2017-playoff/overall_team_standings.json?teamstats=W,L,GF,GA,Pts",
        //     success: function (response) {
        //         console.log(response);
        //         renderAPI(response.data);
        //     }
        // });

        $("#searchForApi").val("");
        $("#numForApi").val("");


        // function getApiDirectly() {
        //     $.ajax({
        //         type: "GET",
        //         url: "http://api.giphy.com/v1/gifs/search?q=dance+monkey&api_key=8b6jqzb77sJ11lkhP2MoGZNzFfmfifQ2&limit=10",
        //         success: function (response) {
        //             console.log(response);
        //             renderGifs(response.data);
        //         }
        //     });
        // }

    });
}
    function getApiViaServer() {
    $.ajax({
    type: "GET",
    url: "/api",
    success: function (response) {
    console.log(JSON.parse(response));
    }
    });
}

        function renderAPI(dataArray) {
            $(".container").empty();

            for (var i = 0; i < dataArray.length; i++) {
                $(".container").append("<img src='" + dataArray[i].images.fixed_height.url + "'/>");
            }

}




