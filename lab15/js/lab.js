/*
 * Author: Johnny Luo <jluo42@ucsc.edu> and Ryan Masui <rmasui@ucsc.edu>
 * Section: 01A
 * Created: March 3, 2021
 * License: Public Domain
*/

$("#activate").click(runAPI);


function runAPI() {
  var input = $("#input").val();
  var newUrl = "http://numbersapi.com/" + input;
// Using the core $.ajax() method
$.ajax({
    // The URL for the request (from the api docs)
    url: newUrl,
    // The data to send (will be converted to a query string)
    data: {
            // here is where any data required by the api
            //   goes (check the api docs)
          },
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(data) {
        // do stuff
        printText(data);
        console.log(data);
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) {
        // do stuff
        $("#output").html("Error:", textStatus, errorThrown);
    }
  })
}

//prints the data provided from the API onto the HMTL.
function printText (data) {
  $("#output").html(data);
}
