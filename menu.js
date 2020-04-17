let open = false;

const toggleNav = e => {
    e.preventDefault();
    let overlay = document.getElementsByClassName("overlay-menu")[0];
    open = !open;
    overlay.style.opacity = open ? '1.0' : '0';
    overlay.style.visibility = open ? 'inherit' : 'hidden';
};

document.getElementById('menu-button').onclick = toggleNav;