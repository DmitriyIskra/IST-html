class ControllSlProduct {
    constructor(draw) {
        this.dr = draw;

        this.click = this.click.bind(this);
    }

    init() {
        this.dr.initSlider();

        this.registerEvents();
    }

    registerEvents() {
        this.dr.wrOfListPrev.addEventListener('click', this.click);
        this.dr.arrows.forEach( item => item.addEventListener('click', this.click));
    }

    click(e) {
        if(e.target.closest('.swiper-button-next')) {
            this.dr.nextPrev();
        }

        if(e.target.closest('.swiper-button-prev')) {
            this.dr.prevPrev();
        }

        if(e.target.matches('.product-slider-img')) {
            this.dr.choosePreview(e.target);
        }
    }
}

export default ControllSlProduct;