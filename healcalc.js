$(document).ready(function(){
  $('#caster-health').on('input', function(){
    let casterHealth = $('#caster-health').val()
    $('#caster-health-number').val(casterHealth)
  });
  $('#caster-health-number').on('input', function(){
    let casterHealthNumber = $('#caster-health-number').val()
    $('#caster-health').val(casterHealthNumber)
  });
  $('#art-level').on('input', function(){
    let artLevel = $('#art-level').val()
    $('#art-level-number').val(artLevel)
  });
  $('#art-level-number').on('input', function(){
    let artLevelNumber = $('#art-level-number').val()
    $('#art-level').val(artLevelNumber)
  });
  $('#target-health').on('input', function(){
    let targetHealth = $('#target-health').val()
    $('#target-health-number').val(targetHealth)
  });
  $('#target-health-number').on('input', function(){
    let targetHealthNumber = $('#target-health-number').val
    $('#target-health') = val(targetHealthNumber)
  });
  $('#caster-attack').on('input', function(){
    let casterAttack = $('#caster-attack').val()
    $('#caster-attack-number').val(casterAttack)
  });
  $('#caster-attack-number').on('input', function(){
    let casterAttackNumber = $('#caster-attack-number').val()
    $('#caster-attack').val(casterAttackNumber)
  });
  $('#damage-dealt').on('input', function(){
    let damageDealt = $('#damage-dealt').val()
    $('#damage-dealt-number').val(damageDealt)
  });
  $('#damage-dealt-number').on('input', function(){
    let damageDealtNumber = $('#damage-dealt-number').val()
    $('#damage-dealt').val(damageDealtNumber)
  });
});
function hideShow() {
  var heroSelect = document.getElementById('hero-select').value;
  var casterBox = document.getElementById('caster-health-slider');
  var targetBox = document.getElementById('target-health-slider');
  var attackBox = document.getElementById('caster-attack-slider');
  var damageBox = document.getElementById('damage-dealt-slider');
  let casterHealthHeroes = ["Achates", "Angelica", "Blood Moon Haste", "Destina", "Elena", "Kizuna AI", "Maid Chloe", "Rin", "Roana", "Ruele", "Shooting Star Achates", "Sonia", "Tamarinne"];
  let targetHealthHeroes = ["Angelic Montmorancy", "Ainos", "Aither", "Desert Jewel Basar", "Destina", "Doris", "Elson", "Hazel", "Lots", "Mascot Hazel", "Magic Scholar Doris", "Montmorancy", "Ray", "Ruele", "Sinful Angelica"];
  let casterAttackHeroes = ["Aither", "Blaze Dingo", "Desert Jewel Basar", "Hazel", "Mascot Hazel"];
  let damageDealtHeroes = ["Blaze Dingo", "Blood Moon Haste"];
    if (casterHealthHeroes.includes(heroSelect)) {
      casterBox.style.display = "block";
    } else {
      casterBox.style.display = "none";
    }
    if (targetHealthHeroes.includes(heroSelect)) {
      targetBox.style.display = "block";
    } else {
      targetBox.style.display = "none";
    }
    if (casterAttackHeroes.includes(heroSelect)) {
      attackBox.style.display = "block";
    } else {
      attackBox.style.display = "none";
    }
    if (damageDealtHeroes.includes(heroSelect)) {
      damageBox.style.display = "block";
    } else {
      damageBox.style.display = "none";
    }
}
