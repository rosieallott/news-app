
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
     var url = "https://content.guardianapis.com/search?show-blocks=all&api-key="+key;

     request.onreadystatechange = function() {
       var obj = JSON.parse(request.response);
       var first = obj.response.results[0].blocks.body[0].bodyTextSummary;
       var fullText = obj.response.results[1].blocks.body[0].bodyHtml;
       console.log(obj.response.results[1]);

         if (request.readyState == XMLHttpRequest.DONE ) {
            if (request.status == 200) {
              for (i = 0; i < 10; i++) {
              divList = document.getElementById("news-headline");
              a = document.createElement('a');
              a.setAttribute('href', '#'+i);
              // a.setAttribute('id', i);
              a.innerHTML = obj.response.results[i].webTitle + '<br><br>';
              divList.appendChild(a);

              // divList = document.getElementById("full-article");
              // a = document.createElement('a');
              // a.setAttribute('href', '#'+i);
              // document.getElementById('i').innerHTML = obj.response.results[i].blocks.body[0].bodyTextSummary
              // // p.innerHTML = obj.response.results[i].blocks.body[0].bodyTextSummary;
              // // divList.appendChild(a);
              }
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
