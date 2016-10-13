chrome.storage.sync.get("shows", function(obj) {
  var spoilerCount = 0;
  page = document.body.innerText.toLowerCase();
  $.each(obj.shows, function(i, val) {
    var show = new RegExp(val.show)
    if (page.match(show) != null) {
      console.log("SPOILER");
      console.log(show);
      spoilerCount ++;
    }
    $.each(val.spoilers, function(i, spoiler){
      spoiler = new RegExp(spoiler);
      if (page.match(spoiler) != null) {
        console.log("SPOILER");
        console.log(spoiler);
        spoilerCount ++;
      }
    });
  });
  if (spoilerCount > 0) {
    spoilerCount = spoilerCount.toString();
  }
  else {
    spoilerCount = '';
  }
  chrome.runtime.sendMessage({
    from: 'content',
    subject: 'spoilerCount',
    count: spoilerCount
  });
});
