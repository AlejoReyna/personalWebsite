// Abrir el menú
document.getElementById('dropdownMenu').addEventListener('click', function() {
    var menu = document.getElementById('dropdown-menu');
    menu.classList.toggle('show-menu');
  });

document.getElementById('backPage').addEventListener('click', function(){
    var menu = document.getElementById('dropdown-menu');
    menu.classList.remove('show-menu');
})