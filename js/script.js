// console.log('check');
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
                'image4.jpg'
            ],
            selected: 0
        },
        nav: {
            classlist: ['nav']
        }
    },
    methods: {
        selectedMore () {
            // console.log('More');
            // console.log(this.images.selected);
            //aumento posizione immagine selezionata
            (this.images.selected < this.images.src.length - 1) ? 
            this.images.selected += 1
            : this.images.selected = 0; 
            // console.log(this.images.selected);
        },
        selectedLess () {
            // console.log('Less');
            // console.log(this.images.selected);
            //diminuisco posizione immagine selezionata
            (this.images.selected >  0) ?
            this.images.selected -= 1
            : this.images.selected = this.images.src.length - 1;
            // console.log(this.images.selected);
        }
    }
});
// app.prev.classlist.map(element => {
//     element;
// })
// console.log(app.fa_i.angle_left.family + app.fa_i.angle_left.prefix + app.fa_i.angle_left.name);