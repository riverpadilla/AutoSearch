
function search()
{
    let searchForm = document.getElementById('searchForm');
    let searchInput = document.getElementById('search-input');
    for (let i = 1; i <= 30; i++) 
    {
        texto = "clima de colombia " + i;
        searchInput.setAttribute("value", texto);
        searchForm.submit();
    }
}
