window.onload = function() {
  var input = document.getElementById('search-input');
  var carContainer = document.getElementById('car-container');
  var cars = carContainer.getElementsByClassName('car');

  input.addEventListener('input', function() {
    var filter = input.value.toLowerCase();

    for (var i = 0; i < cars.length; i++) {
      var carName = cars[i].innerHTML.toLowerCase();

      if (filter === '') {
        cars[i].style.display = 'none';
      } else if (carName.indexOf(filter) > -1) {
        cars[i].style.display = 'block';
      } else {
        cars[i].style.display = 'none';
      }
    }
  });
};