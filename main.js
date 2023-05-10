

let searchForm = document.getElementById('searchForm');
let searchInput = document.getElementById('search-input');
i=0;

function search()
{
 timer = setInterval(doSearch,2000);
}

function doSearch()
{
    i++;
    texto = "clima de colombia " + i;
    searchInput.setAttribute("value", texto);
    searchForm.submit();
    window.close();
    if (i==3) clearInterval(timer);
}