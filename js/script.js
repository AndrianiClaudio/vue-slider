// console.log('check');
const app = new Vue({
    el: '#app',
    data: {
        slider_wrapper: {
            classlist: ['slider-wrapper'],
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
                    name: 'angle_left'
                },
                angle_right: {
                    family: 'fas',
                    prefix: 'fa-',
                    name: 'angle_right'
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
                    'images1.jpg',
                    'images2.jpg',
                    'images3.jpg',
                    'images4.jpg'
                ]
            },
            nav: {
                classlist: ['nav']
            }
        }
    }
});