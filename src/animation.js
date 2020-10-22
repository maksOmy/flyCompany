const animate = ({timing, draw, duration}) => {
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

//popup-form animate

const logInBtn = document.getElementById('log-in-btn');
const popUpLogin = document.querySelector('.log-in-form');

const animatePopup = (popupForm) => {
    animate({
        timing(timeFraction) {
            return timeFraction;
          },
        draw(progress) {
            const container = popupForm.closest('.popup-container');
            container.addEventListener('click', () => {
                container.classList.remove('overlay');
                popupForm.style.display = 'none';
            });
            container.classList.add('overlay');
            popupForm.style.display = 'flex';
            popupForm.style.top = `${(-700 + progress * 1000)}px`;
        },
        duration: 1500
    });
};

logInBtn.addEventListener('click', () => { animatePopup(popUpLogin); }, false);

const signUpBtn = document.getElementById('sign-up-btn');
const popUpSignUp = document.querySelector('.sign-up-form');

signUpBtn.addEventListener('click', () => { animatePopup(popUpSignUp); }, false);