const navServices = document.querySelector('#services');
const servicesMenu = document.getElementById('sevicesMenu');

navServices.addEventListener('click', function (e) {
    console.log(navServices);
    servicesMenu.style.display = 'block';
});

// navServices.addEventListener('click', function (e) {
//     console.log(servicesMenu);
//     servicesMenu.style.display = 'none';
// });