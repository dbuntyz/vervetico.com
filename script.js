document.addEventListener('mousemove', function (e) {
    // Create a circle div
    const circle = document.createElement('div');
    circle.className = 'circle';
    
    // Set the circle's position to follow the mouse
    circle.style.top = `${e.clientY}px`;
    circle.style.left = `${e.clientX}px`;

    // Append the circle to the document body
    document.body.appendChild(circle);

    // Remove the circle after animation completes
    setTimeout(() => {
        circle.remove();
    }, 1000); // Matches the animation duration in CSS
});
