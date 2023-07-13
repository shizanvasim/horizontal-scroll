const scrollContainer = document.querySelector('.scroll-container');

scrollContainer.addEventListener('wheel', (evt) => {
    evt.preventDefault();

    const scrollAmount = 1200;

    if (evt.deltaY < 0) {
        scrollContainer.scrollTo({
            left: scrollContainer.scrollLeft - scrollAmount,
            behavior: 'smooth'
        });
    } else if (evt.deltaY > 0) {
        scrollContainer.scrollTo({
            left: scrollContainer.scrollLeft + scrollAmount,
            behavior: 'smooth'
        });
    }
});