function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}



document.getElementById('submit').addEventListener('click', (event) => {
  let element_list = document.getElementById('list');
  let new_ol = document.createElement('ol');
  new_ol.innerText = getNumberOrString(document.getElementById('posted').value);

  element_list.appendChild(new_ol);

});







