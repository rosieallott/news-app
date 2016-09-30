
function ready(fn) {
  if(document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function(){
  var key = "47526fbd-ff67-40e5-9edc-ed01a7fc3dfe";
  var url = "https://content.guardianapis.com/search?api-key="+key;

  loadXMLDoc();

  function loadXMLDoc() {
     var request = new XMLHttpRequest();
     var key = "47526fbd-ff67-40e5-9edc-ed01a7fc3dfe";
     var url = "https://content.guardianapis.com/search?api-key="+key;

     request.onreadystatechange = function() {
       var obj = JSON.parse(request.response);
       console.log(obj.response.results[0].webTitle);
         if (request.readyState == XMLHttpRequest.DONE ) {
            if (request.status == 200) {
                document.getElementById("news-headline").innerHTML = obj.response.results[0].webTitle;
            }
            else if (request.status == 400) {
               alert('There was an error 400');
            }
            else {
                alert('something else other than 200 was returned');
            }
         }
     };
     request.open("GET", url, true);
     request.send();
  }

});
