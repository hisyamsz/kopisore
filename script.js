// Hamburger menu
const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// Search Box
const searchBox = document.querySelector('#search-box');
const searchForm = document.querySelector('.search-form');

document.querySelector('#search').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
};

// Shop Cart
const shop = document.querySelector('.shop-cart');

document.querySelector('#cart').onclick = (e) => {
    shop.classList.toggle('active');
    e.preventDefault();
}

// Ketika diklik di luar sidebar
const menu = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search');
const sc = document.querySelector('#cart');

document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    };
});

document.addEventListener('click', function (e) {
    if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    };
});

document.addEventListener('click', function (e) {
    if (!sc.contains(e.target) && !shop.contains(e.target)) {
        shop.classList.remove('active');
    };
});

// Modal Box
const modal = document.querySelector('#modal-item-detail');
const modalBtn = document.querySelectorAll('.item-detail');

modalBtn.forEach((btn) => {
    btn.onclick = (e) => {
        modal.style.display = 'flex';
        e.preventDefault();
    };
});

// Tombol Close Modal
document.querySelector('.modal .close-icon').onclick = (e) => {
    modal.style.display = 'none';
    e.preventDefault();
};

// Klik di luar modal
window.onclick = (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}