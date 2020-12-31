import {getDB} from "./ManagmentDB.js"

export default class Home {
    constructor (){
        this.hash = 'home';

    }

    loadPage(){
        loadHome();
        return true;
    }

    async loadHome(){
        history.pushState(null, null, '#home');

        const page = document.getElementById("page-content");

        let products = await getDB('https://my-json-server.typicode.com/Ariiia/OKR4/products');

        let products_to_show = Object.entries(products).slice(0,3).map(entry => entry[1]); // slice object to first 3

        page.innerHTML = `
            <div class="slider middle">
            
                <div class="slides">
                    <input type="radio" name="r" id="r1" checked>
                    <input type="radio" name="r" id="r2">
                    <input type="radio" name="r" id="r3">
            
                    <div class="slide s1"><img src="images/bg1.jpg" alt="bg1"></div>
                    <div class="slide"><img src="images/bg_2.jpg" alt="bg2"></div>
                    <div class="slide"><img src="images/bg3.jpg" alt="bg3"></div>
                </div>
            
                <div class="navigation">
                    <label for="r1" class="bar"></label>
                    <label for="r2" class="bar"></label>
                    <label for="r3" class="bar"></label>
                </div>
            </div>


            <div class="insides">
                <h1>Без сахара, лактозы, муки и прочей чепухи </h1>
                <div class="parent">
                    ${this.homeProducts(products_to_show)}
                </div>
            </div>
        `

        this.movingSlider();
    }

    homeProducts(products_to_show){
        let products_to_show_content = '';

        products_to_show.forEach(cake => {
            products_to_show_content += `
                <div class="child">
                    <a href="#product/${cake.url}">    
                        <img src="${cake.image}" width="500" height="500" alt="${cake.image}">
                        <h3>${cake.title}</h3>
                    </a>
                </div>
            `;
        });


        return products_to_show_content;
    }

    movingSlider(){
        // sliderLogic
        let i = 0;
        let inputs = [];
        let time = 5000;
                    
        inputs[0] = document.getElementById("r1");
        inputs[1] = document.getElementById("r2");
        inputs[2] = document.getElementById("r3");
                    
        function slideSlider() {
            inputs[i].click();
                    
            (i < inputs.length - 1) ? i++ : i = 0;
                    
            setTimeout(slideSlider, time);
        }
                    
        window.onload = slideSlider();
        // END sliderLogic 
    }
}