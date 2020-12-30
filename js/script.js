import Home from "./home.js"
import Product from "./product.js"
import Catalog from "./catalog.js"

let homePage = new Home();
let productPage = new Product();
let catalogPage = new Catalog();

let routs = {
    "home": '',
    "product": ['caramel', 'orangechoco', 'lavliheart', 'mangochia', 'strawberryyogurt',
                'brauni', 'caramelyoghurt', 'strawberryyoghurt', 'cherry', 'marakuya'],
    "catalog": ''
}

let pages = {
    "home": homePage,
    "product": productPage,
    "catalog": catalogPage
}

function changePage(){
    const url = window.location.hash.substring(1);
    const splitedUrl = url.split('/');

    let hash;
    let subHash;

    if (splitedUrl.length == 2){
        hash = splitedUrl[0];
        subHash = splitedUrl[1];

        if (!loadContent(hash, subHash))
            homePage.loadHome();
    }

    else if (splitedUrl.length == 1) {
        hash = splitedUrl[0];

        if (!loadContent(hash))
            homePage.loadHome();
    }
    else {
        homePage.loadHome();
    }
}

function loadContent(route, hash=null) {
    if (route in routs) {
        if (hash != null && routs[route].includes(hash)) {
            let page = pages[route];
            if(!page.loadPage(hash))
                homePage.loadHome();
            return true;
        }
        else if (hash == null){
            let page = pages[route];
            if(!page.loadPage(hash))
                homePage.loadHome();
            return true;
        }
    }
    return false;
    
}


(function () {

    window.addEventListener('hashchange', () => changePage(homePage));

    homePage.loadHome();

    
})();