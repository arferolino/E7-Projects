function updateHealthBox() {
  var health = document.getElementById('health').value;
  document.getElementById('health-number').value = health
}

function updateHealthSlider() {
  var healthNumber = document.getElementById('health-number').value;
  document.getElementById('health').value = healthNumber
}

function updateArtBox() {
  var artLevel = document.getElementById('art-level').value;
  document.getElementById('art-level-number').value = artLevel
}

function updateArtSlider() {
  var artLevelNumber = document.getElementById('art-level-number').value;
  document.getElementById('art-level').value = artLevelNumber
}