$(document).ready(function () {

  var Trackster = {};
  const API_KEY = 'ebe3a62d673ad7785a8f7ce995969ffa';
  /*
    Given an array of track data, create the HTML for a Bootstrap row for each.
    Append each "row" to the container in the body to display all tracks. 
  */
  Trackster.renderTracks = function (tracks) {

  };

  /*
    Given a search term as a string, query the LastFM API.
    Render the tracks given in the API query response.
  */
  Trackster.searchTracksByTitle = function (title) {
    $.ajax({
      url: 'https://ws.audioscrobbler.com/2.0/?method=track.search&track=' + title + 'tiny&api_key=' + API_KEY + '&format=json',
      success: function(respons) {
        Trackster.renderTracks(Response.results.trackmatches.track);
      }
    })
  };



  $('#search-button').click(function () {
    Trackster.searchTracksByTitle($('#search-input').val());
  });




});