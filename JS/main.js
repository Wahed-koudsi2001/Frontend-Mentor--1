let bars = document.querySelector('.bars');
let active = document.querySelector('.list');

bars.onclick = () => {
    active.classList.toggle('active');
}
