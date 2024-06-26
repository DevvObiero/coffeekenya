const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}

function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = "flex";
}

// function hideSidebar() {
//     const sidebar = document.querySelector('.sidebar');
//     sidebar.style.display = "none";
//     // event.preventDefault();
// }

function hideSidebar(event) {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = "none";
    event.preventDefault(); // Prevent default behavior of the click event
}
