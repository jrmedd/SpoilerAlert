$('form').on('submit', function(e) {
  e.preventDefault();
  var single_show_endpoint = "http://api.tvmaze.com/singlesearch/shows?q=";
  var embedding = "&embed[]=cast&embed[]=episodes";
  var show = $("input[name='show-search']").val().replace(' ', '+');
  $.getJSON(single_show_endpoint+show+embedding, function(data){
    if (data.name) {
      var show = data.name.toLowerCase();
      var cast = data._embedded.cast;
      var episode_details = data._embedded.episodes;
      var spoilers = [];
      $.each(cast, function(idx, val) {
        spoilers.push(val.person.name.toLowerCase());
        spoilers.push(val.character.name.toLowerCase());
      });
      $.each(episode_details, function(idx, val) {
        spoilers.push(val.name.toLowerCase());
      });
      var spoilers = {"show": show, "spoilers": spoilers}
      saveSpoilers(spoilers);
    }
  });
});

function saveSpoilers(newSpoilers) {
  chrome.storage.sync.get("shows", function(obj) {
    if (obj.shows) {
      obj.shows.push(newSpoilers);
      newSpoilers = obj.shows;
    }
    else {
      newSpoilers = [newSpoilers]
    }
    chrome.storage.sync.set({shows: newSpoilers},function(){
      $('#status').before('<div id="added"><strong>NEW SPOILERS ADDED</strong></div>');
      $('#added').delay(1500).fadeOut(500,function(){$(this).remove();});
    });
  });
};
