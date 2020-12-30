let routs = {
    "home": '',
    "product": ['caramel', 'orangechoco', 'lavliheart', 'mangochia', 'strawberryyogurt',
                'brauni', 'caramelyoghurt', 'strawberryyoghurt', 'cherry', 'marakuya',]
}

export function changePage(home){
    const url = window.location.hash.substring(1);
    const splitedUrl = url.split('/');

    let hash;
    let subHash;

    if (splitedUrl.length == 2){
        hash = splitedUrl[0];
        subHash = splitedUrl[1];

        if (!loadContent(hash, subHash))
            loadHome(home);
    }

    else if (splitedUrl.length == 1) {
        hash = splitedUrl[0];

        if (!loadContent(hash))
            loadHome(home);
    }
    else {
        loadHome(home);
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

function loadHome(home){
    home.loadHome();
}