// Bonus:
// 1 - al click su uno dei pallini mostrare l’immagine in posizione corrispondente
// 2 - applicare l’autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
// 3 - quando il mouse va in hover sullo slider, bloccare l’autoplay e farlo riprendere quando esce

const app = new Vue({
    el: '#app',
    data: {
        slider_wrapper: {
            classlist: ['slider-wrapper'],
        },
        prev: {
            classlist: ['prev']
        },
        next: {
            classlist: ['next']
        },
        fa_i: { //fa = font awesome
            angle_left: {
                family: 'fas',
                prefix: 'fa-',
                name: 'angle-left'
            },
            angle_right: {
                family: 'fas',
                prefix: 'fa-',
                name: 'angle-right'
            },
            circle: {
                family: 'fas',
                prefix: 'fa-',
                name: 'circle'
            }
        },
        images: {
            classlist: ['images'],
            dir: 'images',
            src: [
                'image1.jpg',
                'image2.jpg',
                'image3.jpg',
                'image4.jpg',
            ],
            selected: 0
        },
        nav: {
            classlist: ['nav']
        }
    },
    methods: {
        selectedMore () { (this.images.selected < this.images.src.length - 1) ? 
            this.images.selected += 1
            : this.images.selected = 0;
        },
        selectedLess () {
            (this.images.selected >  0) ?
            this.images.selected -= 1
            : this.images.selected = this.images.src.length - 1;
        },
        //BONUS
        changeImage (index) {
            this.images.selected = index;
        }
    }
});
//aumenta posizione immagine selezionata ogni $time secondi
function imageTimer(time) {
    const timer = setInterval(() => {
        app.selectedMore();
    }, time*1000);
    return timer;
}
imageTimer(3);