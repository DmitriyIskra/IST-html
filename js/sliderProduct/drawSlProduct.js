export default class DrawSlProduct {
    constructor(element) {
        this.e = element;

        // все для превьюшек
        this.wrOfListPrev = this.e.querySelector('.producSL__slides-wrapper');
        this.listPrev = this.wrOfListPrev.children[0];
        this.previews = this.listPrev.children;
        this.arrows = [...this.e.querySelectorAll('.product__sl-arrow')];

        // все для большого слайда
        this.wrOfListBig = this.e.querySelector('.producSL__slides-wrapper_big');
        this.listImgBig = this.wrOfListBig.children[0];
        this.imagesBIg = this.listImgBig.children;
        this.imageBIg = this.imagesBIg[0].children[0];
        
        // количество превьюшек (картинок)
        this.amountPrev = null;

        // ширина превьюшек (картинок) и больших картинок
        this.widthPrev = null;
        this.widthImgBig = null;

        // продолжительность анимации и временная функция
        this.animDur = '0.3';
        this.tFunc = 'linear';

        // Для блокировки накликивания
        this.blocking = false;
    }

    // инициализируем слайдер
    initSlider() {
        this.amountPrev = this.previews.length;

        // Скрываем стрелки если картинок 3 и менее
        if(this.amountPrev <=3) {
            this.rows.forEach( item => item.style.display = 'none');
        }
    }

    choosePreview(el) {

        const path = el.src;
        const alt = el.src;

        this.imageBIg.src = path;
        this.imageBIg.alt = alt;
    }

    // двигаем превью вправо
    nextPrev() {
        if(this.blocking) return;

        this.blocking = true;

        const offset = this.culcWidth();

        this.addTransition(this.listPrev, offset, '-');

        this.deleteTransition(this.listPrev, 'next');

        this.nextBig()
        
        setTimeout(() => this.blocking = false, +this.animDur * 1000);
    }

    // двигаем юольшую картинку вправо
    nextBig() {
        console.log(+this.previews[0].dataset.numslide + 1)
    }

    // двигаем превью влево
    prevPrev() {
        if(this.blocking) return;

        this.blocking = true;

        this.addTransition(this.listPrev, 0, '');
        this.deleteTransition(this.listPrev);

        setTimeout(() => this.blocking = false, +this.animDur * 1000 + 0.07);
    }

    // двигаем юольшую картинку влево
    prevBig() {

    }

    // расчет ширины слайда в моменте
    culcWidth() {
        return this.previews[0].offsetWidth + 1;
    }

    // offset - величина сдвига
    // towards - направление сдвига, + или -
    addTransition(list, offset, towards) {
        // для сдвига по prev
        if(towards !== '-') {
            const offset = this.culcWidth();
            const el = this.previews[this.amountPrev - 1];

            list.style = `transform: translateX(-${offset}px);`;
            list.prepend(el);
        }

        // устанавливаем transition и сдвигаем
        setTimeout(() => {
            list.style = `transition: transform ${this.animDur}s ${this.tFunc};
            transform: translateX(${towards}${offset}px); `;
        })
    }

    deleteTransition(list, params) {
        list.addEventListener('transitionend', e => {
            this.listPrev.style.transition = '';
            
            // только для next
            if(params) {
                list.append(this.previews[0]);
            };

            list.style.transform = '';
        }, {once: true})
    }

    // конструктор слайда для большой картинки
    createBigSlide(path, alt) {
        const wrapper = document.createElement('div');
        wrapper.classList.add('swiper-slide');
        wrapper.classList.add('productSl_slide_big');

        const image = document.createElement('img');
        image.classList.add('product-slider-img');
        image.src = path;
        image.alt = alt;

        wrapper.append(image);

        return wrapper;
    }
}