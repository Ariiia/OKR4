import Home from "./home.js"


let homePage = new Home();

let routs = {
    "home": '',
    "product": ['caramel', 'orangechoco', 'lavliheart', 'mangochia', 'strawberryyogurt',
                'brauni', 'caramelyoghurt', 'strawberryyoghurt', 'cherry', 'marakuya',]
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
            //load page this.hub.loadByHash(route, hash);
            return true;
        }
        else if (hash == null){
            //load page this.hub.loadByHash(route);
            return true;
        }
    }
    return false;
    
}


(function () {
    window.addEventListener('hashchange', () => changePage(homePage));


    



    homePage.loadHome();

    
})();