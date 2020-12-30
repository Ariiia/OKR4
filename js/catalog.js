import {getDB} from "./ManagmentDB.js"

export default class Catalog {
    constructor(){
        this.hash = "catalog";
        
    }

    loadPage(subHash) {
        this.loadCatalog(subHash);
        return true;
    }

    async loadCatalog(subHash) {
        const page = document.getElementById("page-content");
        
        let products = await getDB('https://my-json-server.typicode.com/Ariiia/OKR4/products');
        
        if(subHash != null){
            if (subHash == 'Deserts'){
                products = products.filter(product => {
                    return product.category === 'Десерты';
                }); 
            } else if (subHash == 'Cakes'){
                products = products.filter(product => {
                    return product.category === 'Торты';
                }); 
            } else if (subHash == 'Cheesecakes'){
                products = products.filter(product => {
                    return product.category === 'Чизкейки';
                }); 
            }
        }


        page.innerHTML = `
            <h6>Наши сладости</h6>
            <div class="GRID">
                
                ${this.loadProducts(products)}
            
            </div>
        `
    }

    loadProducts(products){
        let products_to_show_content = '';

        products.forEach(cake => {
            products_to_show_content += `
                <div class="onedes">
                    <a href="#product/${cake.url}">    
                        <img src="${cake.image}" alt="desert">
                    </a>
                    <div class="info">
                        <strong> ${cake.title}</strong>
                        ${cake.description}
                    </div>
                </div>
            `;
        });

        return products_to_show_content;
    }
}
