let searchForm = document.getElementById('searchForm');
let searchInput = document.getElementById('search-input');
let searchList = document.getElementById('searchList');
let i=0; 

function main()
{
    searchList.innerHTML = "<H1>Start Search Historial</H1>";
    baseInputText = searchInput.value;
    time = 1000;
    timer = setInterval(search,time);
}

function search()
{
    i++;
    item = document.createElement('p')
    inputText = baseInputText + " " + i;
    searchText = 'https://www.bing.com/search?q=' + inputText;
    item.innerText = searchText;
    searchInput.setAttribute("value", inputText);
    searchList.appendChild(item);
    searchWindow = window.open(searchText, '_blank');
        
        setTimeout(function() {
        if (searchWindow) {
          searchWindow.close();
        }
      }, 800);
    if (i>=20) {
        clearInterval(timer);
        i=0;
    }
}