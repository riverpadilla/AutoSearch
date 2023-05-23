let searchForm = document.getElementById('searchForm');
let searchInput = document.getElementById('search-input');
let searchRepeater = document.getElementById('search-repeater');
let searchList = document.getElementById('searchList');
let i=0; 
let repetitions;

function main()
{
    searchList.innerHTML = "<H1>Start Search Historial</H1>";
    baseInputText = searchInput.value;
    if(searchRepeater.value == "") 
    {
      searchRepeater.setAttribute("value", 10);
    }
    repetitions = searchRepeater.value;
    time = 2000;

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
      }, 1000);
    if (i>=repetitions) {
        clearInterval(timer);
        i=0;
    }
}