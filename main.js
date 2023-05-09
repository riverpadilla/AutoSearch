
function search()
{
    console.log("Inicia Programa");
    let form = document.createElement('form');
    // form.action = 'https://google.com/search';
    form.action = 'https://www.bing.com/results.asp';
    form.method = 'GET';
    // form.target = '_blank';

    for (let i = 1; i <= 20; i++) {
    text = "clima" + i;
    form.innerHTML = '<input name="q" value=' + text + '>';
    
    // el formulario debe estar en el document para poder enviarlo
    document.body.append(form);
    
    form.submit();
    console.log(document.title);
    window.history.back()
    
    }
}


