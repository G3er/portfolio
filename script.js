let intro = document.querySelector('.intro');
let nameElement = document.querySelector('.name');
let subtitleElement = document.querySelector('.subtitle');

let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {

        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');

            }, (idx + 1) * 600);
        });

        setTimeout(() => {
            logoSpan.forEach((span, idx) => {

                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50);
            });
        }, 2000);

        setTimeout(() => {
            nameElement.classList.add('show'); // Show the name
            setTimeout(() => {
                subtitleElement.classList.add('show'); // Show the subtitle after a delay
            }, 500);
        }, 1800);

    });
});
