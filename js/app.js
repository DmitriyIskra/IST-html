import ControllSlProduct from "./sliderProduct/controllSlProduct.js";
import DrawSlProduct from "./sliderProduct/drawSlProduct.js";

const el = document.querySelector('.slider-prod-card');

if(el) {
    const drawSlProduct = new DrawSlProduct(el);
    const controllSlProduct = new ControllSlProduct(drawSlProduct);
    controllSlProduct.init();
} 