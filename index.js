let searchForm = document.getElementById('searchForm');
let searchInput = document.getElementById('search-input');
let inputText = "";
let i=0;

function main()
{
    inputText = searchInput.getAttribute("value");
    time = 1000;
    timer = setInterval(search,1000);
}

function search()
{
    i++;
    searchText = inputText + " "+ i;
    searchInput.setAttribute("value", searchText);
    searchForm.submit();
    if (i>=5) clearInterval(timer);
}