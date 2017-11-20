window.addEventListener('load', function() {
  var button = document.getElementById('button');
  var text = document.getElementById('text');
  var parent = document.querySelector('.container');
  var containerText = document.querySelector('.text-area');
  var counter = document.querySelector('.counter');

  disabledButton();

  // agregando evento click a button
  button.addEventListener('click', submit);

  //fucion que desabilite el boton
  function disabledButton() {
    button.disabled = true;
    button.classList.add('disabled-button');
  }

  // función que habilite botón:
  function enabledButton() {
    button.disabled = false;
    button.classList.remove('disabled-button');
  }

  // funcion que ejecuta el evento :
  function submit(e) {
    //validando entrada de texto
    if (text.value) {
      enabledButton()
      var newCommit = document.createElement('div');
      newCommit.textContent = 'A las ' + getHour() + ' : ' + text.value;
      newCommit.setAttribute('class', 'new-commit');
      parent.appendChild(newCommit);
      text.value = "";
      counter.textContent = 140;

    } else {
      alert('Ingrese una cadena de texto');
      disabledButton();
    }
  }
  //agregando evento keyup al texto
  text.addEventListener('keyup', counterLetters);

  //funcion que ejecuta el eveto
  function counterLetters(e) {
    var maxNumber = 140;
    var length = text.value.length;
    var result = maxNumber - length;
    counter.textContent = result;
    containerText.appendChild(counter);

    // haciendo el cambio de colores según los caracteres restantes
    if (result > 20) {
      counter.setAttribute('class', 'counter-green');
      enabledButton()
    } else if (result > 10) {
      counter.setAttribute('class', 'counter-yellow');
      enabledButton()
    } else if (result > 0) {
      counter.setAttribute('class', 'counter-orange');
      enabledButton()
    } else if (result < 0) {
      counter.setAttribute('class', 'counter-red');
      disabledButton();
    }

  }

  // agregando evento al textArea:
  text.addEventListener('keypress', noScrollBar)
  //funcion qe ejecuta el evento
  function noScrollBar(e) {
    if (e.keyCode == 13) {
      var intialRow = text.getAttribute('rows')
      var newRows = parseInt(intialRow);
      newRows += 1;
      text.setAttribute('rows', newRows)
    } else {
      text.setAttribute('rows', 2)
    }

  }
  // funcion para obtener la hora :
  function getHour() {
    var date = Date();
    var hour = date.split(' ')[4].slice(0, 5);
    return hour;
  }
  getHour();
})
