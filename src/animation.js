const popUpAnimate = ({timing, draw, duration}) => {
    let start = performance.now();

    requestAnimationFrame(function animate(time) {
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;

        let progress = timing(timeFraction);

        draw(progress);

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }

    });
};

const logInBtn = document.querySelector('.log-in-btn');
const mainContainer = document.body;

logInBtn.addEventListener('click', () => {
    const popUp = document.querySelector('.log-in-form');
    popUpAnimate({
        timing(timeFraction) {
            return timeFraction;
          },
        draw(progress) {
            popUp.style.background = 'rgba(0, 0, 0, 0.5)';
            popUp.style.display = 'flex';
            popUp.style.top = (-700 + progress * 1000) + 'px';
        },
        duration: 1500
    });
});