let open = false;

const toggleNav = e => {
    e.preventDefault();
    let overlay = document.getElementsByClassName("overlay-menu")[0];
    let menuBtn = document.getElementById("menu-button");
    open = !open;
    overlay.style.visibility = open ? 'inherit' : 'hidden';
    overlay.style.opacity = open ? '1.0' : '0';
    menuBtn.classList.toggle("open");
};

document.getElementById('menu-button').onclick = toggleNav;