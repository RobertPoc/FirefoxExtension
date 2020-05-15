/* Web */
var csfd = document.location.toString().search('csfd.cz') != -1;
/* Movie name */
var name;
name = document.getElementsByTagName('h1')[0].textContent.trim();
/* Data */
var iconUlozto = "data:image/png;base64,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";
var iconCsfd = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC+aJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE6ElEQVRo3u2aW0wTWRjHsffSTjvMTOklJn1RjAbjg28aH0QhREMaX2pMjCGKJtoYCLrqm4mBZCUmugazSCIPXmpqsQihlJtI5SJdKoVWRARapZGlLGWpYaEFSvehyXBargfMesjOP7+X0znnm/7bfnPm+6YJCYwYMWLE6IerISXlw+7dSNGQkgJhwKJQOBDDolBAGDDL5e8RwyyXQxiopqhOxKimKAgDlQTRgRiVBAFhoALH26RSpKjAcQgDLzGsRSxGipcYBmHAKBI1JyYihVEkgjBgEAia+HykMAgEEAb0fH4Dl4sUej4fwsAzLreezUaKZ1wuhIGnHE4ti4UUTzkcCANP2GzLtm1I8YTNhjDwmMWqSUhAiscs1v/pG9jyObDlr0LP+fxGLncpLWq16/TpoVu3vt6/H6X7xAn74cP00F1Y2Mjj0fO7MjPpQ1B4iop6c3Ja1Go61HOofcAgFDYJBCBdR45MvH4dWViIxKo3O3vcYqGHvhcvwFW+8vLIJrQwO+spKIiGMgiFcPdC1sTEKC04/u3hw6VvPaqOXbumh4boob+ujl5oTUwMjYxENq3POp0V9l7IJJG0YlgrhrWR5ERj40qhg15vK4ZNOZ30K/OBQDtFRdfa9+6N/AjNjo62JSWZJBIIA69wvB3H23F8tKwsLtzM4OC3e/cGLlz4pNU609LacfzP0lJwwqBOF11r276959AhWFwZGSPFxXEndWVmvoKqB6pI0kaSH48fj/lFhkKevDwbRdlIEsR54EAkHF78WtzuPxSKuDmw+CsqwFMPXbxYRZIwNbFMZpfJJuvrwShfrlyxy2TL4jcaY2bm59tlsn8cjvlAYJ0E3rwBA3ouXwYDei5dqpbJIAzUyOU9O3cuzM3RIeZ8PodK1SWXL8uH/fsXgkF6csjrdaamrpT3y8r34AEYcPj69Zg8zsqqgepKWJTKwZMnwRCB+nqHUrkKYyUl4PzRu3ehMtV95gwYbbK6mj4UnprqVqstSiWEgVqlcjg3FzzB96ambpVqFT6lpcVcOrzexUE4HBwYiGM+EAAnuPbsoUMNZGWBSeXX67tVqlpYA191upgMDgb709NXMTCk1a706U67XEvnT3V0LF7Z+vrAOPMTE+Be1nfwILSBGrm87+jR+H1xZsZvMAzfuOE5f96dnQ0ynJ8/C+xZYPJEIpGxR4+6FAoQh1oN5szfZvNnjWb42rXvzc1xJx25fTu6BC4HKgmigySn+/s3tvVMWq3gcODs2bguVe+xY+uJ46+qslHURhpbRrHYKhI5NRrwt7hOjZlMXwoLwVfe7dhhFYlAPDdvrhElHPYWF7/FcXqJUSzeSFeiR6sN+Xzr3fPHx/uvXm3k88eBDWTa7V7aYvgLuP+LU2hszFtS0r5v36a6EmBFVicQdGZk9Op0H/PyVqJXp+tMT68TCqNLXDk59KH3Gs3S8sp17lx8kNzc7lOnWlJTa1coBpmamKmJ/+uauI7NRgq4mljP4zVwOEih5/Egi3oeDyk2W9T/dKCL+q39gKMcw96KxUhRDvWIySSVtkokSGGSSuG6Eu8QA7IrQRA2xKiCup3e8k/qzcnJdsQwJyfDlJSxFSAK1ED9W8WyagflpwDXVvklKakgll8Jomgt7hDEbyS5Jr9TVMlalFJUWSx3oHKAESNGjBitU/8C64ADamJ9a80AAAAASUVORK5CYII=";
if (name !== "") {
    /* Create HTML content container */
    var div = document.createElement('div');
    if (csfd) {
        /* Add Uloz.to */
        div.appendChild(createHub("https://uloz.to/hledej?q=" + name, iconUlozto));
    } else {
        /* Add CSFD.cz */
        div.appendChild(createHub("https://www.csfd.cz/hledat/?q=" + name, iconCsfd));
    }
    document.body.appendChild(div);
    div.setAttribute("style", "position: fixed; top: 75px; left: 0px; z-index: 999; border:1px solid #CCC; padding: 5px 0px 5px 5px; margin: 5px; background-color: #EEE;");
}
/* Create link to another source/site */
function createHub(href, icon) {
    var link = document.createElement('a');
    var img = document.createElement('img');
    link.setAttribute("target", "_blank");
    link.setAttribute("href", href);
    link.setAttribute("style", "display: block;");
    img.setAttribute("src", icon);
    img.setAttribute("style", "padding-right: 5px;");
    link.appendChild(img);
    return link;
}