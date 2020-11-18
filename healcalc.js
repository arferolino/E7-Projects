function updateCasterHealthBox() {
  var casterHealth = document.getElementById('caster-health').value;
  document.getElementById('caster-health-number').value = casterHealth
}

function updateCasterHealthSlider() {
  var casterHealthNumber = document.getElementById('caster-health-number').value;
  document.getElementById('caster-health').value = casterHealthNumber
}

function updateArtBox() {
  var artLevel = document.getElementById('art-level').value;
  document.getElementById('art-level-number').value = artLevel
}

function updateArtSlider() {
  var artLevelNumber = document.getElementById('art-level-number').value;
  document.getElementById('art-level').value = artLevelNumber
}

function updateTargetHealthBox() {
  var targetHealth = document.getElementById('target-health').value;
  document.getElementById('target-health-number').value = targetHealth
}

function updateTargetHealthSlider() {
  var targetHealthSlider = document.getElementById('target-health-number').value;
  document.getElementById('target-health').value = targetHealthSlider
}

function updateCasterAttackBox() {
  var casterAttack = document.getElementById('caster-attack').value;
  document.getElementById('caster-attack-number').value = casterAttack
}

function updateCasterAttackSlider() {
  var casterAttackSlider = document.getElementById('caster-attack-number').value;
  document.getElementById('caster-attack').value = casterAttackSlider
}