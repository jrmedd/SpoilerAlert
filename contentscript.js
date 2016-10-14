chrome.storage.sync.get("shows", function(obj) {
  var spoilerCount = 0;
  page = document.body.innerText.toLowerCase();
  $.each(obj.shows, function(i, val) {
    var show = new RegExp(val.show, "i")
    if (page.match(show) != null) {
      //hideContent(show);
      console.log("SPOILER");
      console.log(show);
      spoilerCount ++;
    }
    $.each(val.spoilers, function(i, spoiler){
      spoiler = new RegExp(spoiler, "i");
      if (page.match(spoiler) != null) {
        //hideContent(spoiler);
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
/*
function hideContent(input){
  $("body *").contents().each(function() {
    if(this.nodeType==3){
    this.nodeValue = this.nodeValue.replace(input, 'SPOILER')
    }
    $("body:contains('SPOILER')").html(function(_, html) {
       return html.replace(/SPOILER/, '<span title="'+input.toString()+'" style="background:#000;color:#000">SPOILER</span>')
    });
  });
}
*/
