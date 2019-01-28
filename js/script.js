/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Talk to Me", "Initiation", "Champion", "Yosemite"];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above
var images = [];
var artists = ["Tory Lanez", "Tory Lanez", "NAV", "Travis Scott"];
var lengths = ["186", "276", "195", "152"];
var links = ["https://www.youtube.com/results?search_query=talk+to+me", "https://www.youtube.com/results?search_query=initiation+tory+lanez", "https://www.youtube.com/results?search_query=champion+nav",
"https://www.youtube.com/results?search_query=yosemite"];

function displaySongInfo(){
    songs.forEach(function(song) {
    $("#songs").append("<p> " + song + "</p>");
    });
    artists.forEach(function(artist) {
    $("#artists").append("<p> " + artist + "</p>");
});
}
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs
}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
