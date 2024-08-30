var SR = document.getElementById('SR');
var searchBar = document.getElementById('searchBAR');
var SEARCH = document.getElementById('SEARCH');
var S;

searchBar.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    search();
  }
});

function search() {
  S = searchBar.value;
  SEARCH.style.display = 'none';
  SR.innerHTML = '<h1 id="titleTT" onclick="goBack()">&lt;Anakalysis&gt;</h1><iframe src="https://www.google.com/search?igu=1&q=' + S + `" frameborder="0" marginheight="0" marginwidth="0" width="100%" height="100%" scrolling="hidden"></iframe>`;
}

function goBack() {
  SR.innerHTML = '';
  searchBar.value = '';
  SEARCH.style.display = 'block';
  document.body.scrollTop = document.documentElement.scrollTop = 0;
}