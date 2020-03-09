/* Init */
var icon = '';
var sport = '';
var league = '';
var serviceUrl = "https://localhost:44394/api/match/add";
var matchCount = 0;
var matchProcessed = 0;
var matchError = 0;

var url = document.location.toString();
icon = " data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADSklEQVR4Ab2X0UsUXxTHd2X/DEFa2PAlX3utIBBEKQj/iSB6iZbFfQisiAIxfCjMCIsEH7RW1k0Ly/bJHjQio4dARHddhF7KadRdz/d3z3XuOHuc6W6D/A58OLPXnTnf+z3njpoAgEajAZMZIgIHZ/4cvOZsvivvixMJL5sHydz6z1oMKdx3oGuyitRoBW2jGycCPyv1tIbU2BbOjK8hKowAvoE50eLJJ1Uk739F6u6KdMDHb0HqhHeeVDl574suzoRFUIC+OSHQa48ltvUKEiNrSNz+jMTgiqYtwgEiOhLQV3bxrgbMVQ4Yfd2z6CIsuhddAiDxv7+1e8TPOpApufZT0KMEzNaAmY06w9eqkIOQoIsR610lB5sOsPb7wGdzF0gXmwW07kBEIRYmd/+rDmovONjeBYsw8OegA/L4NgvoLjtN9Cl4twLy1km1Ahfe7+DUzA7aCy51Kgc6isfptLcgvgNVB+TtlNJFuwOyBbFmgHe+B2Cdi3ls10EdRZezWTPrSJf2o1sQwwF0zbv0qrxMNx48CoLc0Cg4Z1W+fPWmT/81JocrmgG8nC4dOcAXrcxAN+cPDk57PeVi2Qjyw2NcLJzrAzqb0AKYgAPkOUABB0iB2h8Q91r1lPKHxUgAzkoAqSIMOAvAmLphM0DeDPCw6cJ1gNYPzzXpc+05kFOFFPAgk/MjzyAEhDrAAkwLwh0ouwTiKdeA87YnYHxmQT6cTJbrQfqVgMni29AWmN5zYfR+3KGz8y7Uy0VNtwYm8wz0vviEfAsOCIwA2YKAAzVQsdrA8A+ijoIL3rFwwJ+BXPQMIHIGZAuIyDjAxTFVaeDO6h5urdbBLxbuuXy3cwvycU8BI08BxyUlYGoDGPxW18UHvxMyJYd3zLs3mDcbCzDWyxYg0AL7MTQOnFtwkNH9bYIyKqcDZPT6Ps4/fGNeLowsGCng2BDi70Emy+vFpRUeNgoOHyOG0BAtwPLXLUWIQdYrbIbPMoT2FjAhQT5SwNDYscKMVYAcQsQM3r1EDKHE7gDTakwU5tSD9MOsWGcgTiwsLeud2h2wC/hnB/h7Wa9Y3F/HplacGeCbeQjjvwmDAuR/uP/zEMZ34Pn0bKwh5HsmXs/5m/0P/63gQFw3nRkAAAAASUVORK5CYII=";
/* Hockey */
if (url.indexOf('hockey') > 0) {
    sport = 'hockey';
    if (url.indexOf('extraliga') > 0) {
        league = 'extraliga';
    }
    if (url.indexOf('nhl') > 0) {
        league = 'nhl';
    }
}
/* Soccer */
if (url.indexOf('soccer') > 0) {
    sport = 'soccer';
}
/* Basketball */
if (url.indexOf('basketball') > 0) {
    sport = 'basketball';
}
/* Baseball */
if (url.indexOf('baseball') > 0) {
    sport = 'baseball';
}
/* Sport exist, build icon with action */
if (sport != '' && league != '') {
    /* Create HTML content container */
    var div = document.createElement('div');
    div.appendChild(createImport(icon, sport));
    document.body.appendChild(div);
    div.setAttribute("style", "position: fixed; top: 25px; left: 0px; z-index: 999; border:1px solid #CCC; padding: 5px 0px 5px 5px; margin: 5px; background-color: #EEE;");
}

/* Create link to another source/site */
function createImport(icon, sport) {
    var link = document.createElement('div');
    var img = document.createElement('img');

    link.setAttribute("style", "display: block;");
    img.setAttribute("src", icon);
    img.setAttribute("style", "padding-right: 5px; cursor: pointer;");
    img.onclick = function () {
        matchCount = 0;
        matchProcessed = 0;
        matchError = 0;
        switch (sport) {
            case "hockey":
                switch (league) {
                    case "extraliga":
                        extraliga();
                        break;
                    case "nhl":
                        nhl();
                        break;
                }
                break;
            case "soccer":
                break;
        }
    }
    link.appendChild(img);
    return link;
}

function extraliga() {
    try {
        let soutez = $('.wrap-section__header__select > select > option:selected').text();
        if (soutez == '' || soutez == undefined) {
            console.log("Nelze na��st informaci SOUTEZ");
            return;
        }
        soutez = "Extraliga " + soutez;
        let kolo;
        $('.table-main > tbody > tr').each(function () {
            let tKolo = $(this).find('th.h-text-left').text();
            if (tKolo.indexOf('. Round') != -1) {
                tKolo = tKolo.replace('. Round', '');
                kolo = tKolo;
            }
            let zapas = $(this).find('.in-match').text();
            if (zapas !== '') {
                let domaci = zapas.split('-')[0].trim();
                let hoste = zapas.split('-')[1].trim();

                let skore = $(this).find('.h-text-center').text();

                let prodlouzeni = 0;
                let najezdy = 0;
                if (skore.indexOf('ET') != -1) {
                    prodlouzeni = 1;
                    skore = skore.replace('ET', '');
                }
                if (skore.indexOf('pen.') != -1) {
                    prodlouzeni = 1;
                    najezdy = 1;
                    skore = skore.replace('pen.', '');
                }

                let sDomaci = skore.split(':')[0].trim();
                let sHoste = skore.split(':')[1].trim();

                let d = $($(this).find('.table-main__odds')[0]).text();
                let r = $($(this).find('.table-main__odds')[1]).text();
                let h = $($(this).find('.table-main__odds')[2]).text();
                if (d == '') { d = 1; }
                if (r == '') { r = 1; }
                if (h == '') { h = 1; }

                let datum = $(this).find('.h-text-right').text().split('.');
                let sqlDate = datum[1] + '/' + datum[0];
                let rok = new Date().getFullYear();
                if (datum.length == 3 && datum[2] != '') {
                    rok = datum[2];
                }
                sqlDate = sqlDate + '/' + rok;

                let mssql = 'DECLARE @id bigint\n';
                mssql = mssql + "SET @id = (SELECT TOP 1 zapas.zapasId FROM zapas WHERE zapas.domaci = '" + domaci + "' AND zapas.hoste = '" + hoste + "' AND zapas.datum = '" + sqlDate + "')\n";
                mssql = mssql + "IF @id IS NULL \nBEGIN\n";
                mssql = mssql + "INSERT INTO zapas(datum, domaci, hoste, kurz1, kurz0, kurz2, skoreDomaci, skoreHoste, prodlouzeni, najezdy, soutez, kolo) values('" + sqlDate + "', '" + domaci + "', '" + hoste + "', " + d + ", " + r + ", " + h + ", " + sDomaci + ", " + sHoste + ", " + prodlouzeni + ", " + najezdy + ", '" + soutez + "', '" + kolo + "')\n";
                mssql = mssql + "END\n";

                mssql = btoa(mssql);
                matchCount++;
                sendData(mssql);
                return;
            }
        });
    }
    catch (err) {
        console.log(err.message);
    }
}

function nhl() {
    try {
        let soutez = $('.wrap-section__header__select > select > option:selected').text();
        if (soutez == '' || soutez == undefined) {
            console.log("Nelze na��st informaci SOUTEZ");
            return;
        }
        soutez = "NHL " + soutez;
        $('.table-main > tbody > tr').each(function () {
            let zapas = $(this).find('.in-match').text();
            if (zapas !== '') {
                let domaci = zapas.split('-')[0].trim();
                let hoste = zapas.split('-')[1].trim();

                let skore = $(this).find('.h-text-center').text();

                let prodlouzeni = 0;
                let najezdy = 0;
                if (skore.indexOf('ET') != -1) {
                    prodlouzeni = 1;
                    skore = skore.replace('ET', '');
                }
                if (skore.indexOf('pen.') != -1) {
                    prodlouzeni = 1;
                    najezdy = 1;
                    skore = skore.replace('pen.', '');
                }

                let sDomaci = skore.split(':')[0].trim();
                let sHoste = skore.split(':')[1].trim();

                let d = $($(this).find('.table-main__odds')[0]).text();
                let r = $($(this).find('.table-main__odds')[1]).text();
                let h = $($(this).find('.table-main__odds')[2]).text();
                if (d == '') { d = 1; }
                if (r == '') { r = 1; }
                if (h == '') { h = 1; }

                let textDatum = $(this).find('.h-text-right').text();
                if (textDatum.toString().toLowerCase() == 'today') {
                    textDatum = new Date().getDate() + '.' + (new Date().getMonth() + 1) + '.' + new Date().getFullYear();
                }
                if (textDatum.toString().toLowerCase() == 'yesterday') {
                    textDatum = new Date(new Date().setDate(new Date().getDate() - 1)).getDate() + '.' + (new Date(new Date().setDate(new Date().getDate() - 1)).getMonth() + 1) + '.' + new Date(new Date().setDate(new Date().getDate() - 1)).getFullYear();
                }
                let datum = textDatum.split('.');
                let sqlDate = datum[1] + '/' + datum[0];
                let rok = new Date().getFullYear();
                if (datum.length == 3 && datum[2] != '') {
                    rok = datum[2];
                }
                sqlDate = sqlDate + '/' + rok;

                let mssql = 'DECLARE @id bigint\n';
                mssql = mssql + "SET @id = (SELECT TOP 1 zapas.zapasId FROM zapas WHERE zapas.domaci = '" + domaci + "' AND zapas.hoste = '" + hoste + "' AND zapas.datum = '" + sqlDate + "')\n";
                mssql = mssql + "IF @id IS NULL \nBEGIN\n";
                mssql = mssql + "INSERT INTO zapas(datum, domaci, hoste, kurz1, kurz0, kurz2, skoreDomaci, skoreHoste, prodlouzeni, najezdy, soutez, kolo) values('" + sqlDate + "', '" + domaci + "', '" + hoste + "', " + d + ", " + r + ", " + h + ", " + sDomaci + ", " + sHoste + ", " + prodlouzeni + ", " + najezdy + ", '" + soutez + "', '')\n";
                mssql = mssql + "END\n";

                mssql = btoa(mssql);
                matchCount++;
                sendData(mssql);
                return;
            }
        });
    }
    catch (err) {
        console.log(err.message);
    }
}


function sendData(sqlCommand) {
    try {
        var request = new XMLHttpRequest();
        request.responseType = 'json';
        request.open('GET', serviceUrl + "?" + sqlCommand, false);
        request.onload = function () {
            if (request.response.Type == 0) {
                matchProcessed++;
                console.log('Procesed ' + matchProcessed + ' from ' + matchCount + '.');
            } else {
                matchError++;
                console.log(request.response.Message);
                console.log(request.response.Code);
                console.log('Error ' + matchError + ' from ' + matchCount + '.');
            }
        };
        request.send(null);
    }
    catch (err) {
        console.log(err.message);
    }
}