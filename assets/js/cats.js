function ajax_get(url, callback) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      console.log('responseText:' + xmlhttp.responseText);
      try {
        var data = JSON.parse(xmlhttp.responseText);
      } catch (err) {
        console.log(err.message + " in " + xmlhttp.responseText);
        return;
      }
      callback(data);
    }
  };

  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

// ---- Cats
var api_url = 'https://api.thecatapi.com/v1/images/search?format=json'

// ---- Dogs
//var api_url = 'https://api.thedogapi.com/v1/images/search?'

// -- sizes
//api_url += "size=full&" // full size
api_url += "size=med&" // medium size
//api_url += "size=small&" // small size

const API_KEY = '5e4300a6-71d6-47eb-b8ca-871abd2061a2'
// -- formats
api_url += "mime_type=jpg,png"// just static imagrs
api_url += "mime_types=gif"// just gifs

// Add your API-Key to have access to all the images in the platform, not just the demo ones
api_url += API_KEY


document.getElementById("random").addEventListener('click', function(e) {
  ajax_get(api_url, function (data) {
         var html = '<img src="' + data[0]["url"] + '">';
          document.getElementById("image").innerHTML = html;
  });
});
