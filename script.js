document.addEventListener('mousemove', (e) => {
    const mouseEffect = document.querySelector('.mouse-effect');

    const span = document.createElement('span');
    span.style.left = `${e.pageX}px`;
    span.style.top = `${e.pageY}px`;
    mouseEffect.appendChild(span);

    setTimeout(() => {
        span.remove();
    }, 1000);
});
