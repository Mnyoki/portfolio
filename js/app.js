(function () {
  var button = document.getElementById('toggle-menu');
  button.addEventListener('click', function (event) {
      event.preventDefault();
      var menu = document.getElementById('main-menu');
      menu.classList.toggle('is-open');
    })
})();

/*function toggleMenu()
{
  event.preventDefault();
  var menu = document.getElementById('main-menu');
  menu.classList.toggle('is-open');
  console.log('clicked');
}*/