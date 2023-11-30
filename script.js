(function(window) {
 
  if (typeof helloSpeaker === 'undefined') {
    console.error('helloSpeaker not defined!');
    return;
  }

 
  if (typeof goodbyeSpeaker === 'undefined') {
    console.error('goodbyeSpeaker not defined!');
    return;
  }


  for (var i = 0; i < names.length; i++) {
    var currentName = names[i];

    if (currentName.charAt(0).toLowerCase() === 'j') {
      goodbyeSpeaker.speak(currentName);
    } else {
      helloSpeaker.speak(currentName);
    }
  }

 
  var lengthThreshold = 5; 
  var selectedNames = selectNamesByLength(names, lengthThreshold);
  displaySelectedNames(selectedNames, `Length >= ${lengthThreshold}`);

  // Функція для вибору імен за довжиною
  function selectNamesByLength(names, lengthThreshold) {
    return names.filter(function(name) {
      return name.length >= lengthThreshold;
    });
  }

  // Функція для виведення вибраних імен у консоль
  function displaySelectedNames(selectedNames, criteria) {
    console.log(`Selected names (${criteria}):`);
    selectedNames.forEach(function(name) {
      console.log(name);
    });
  }
})(window);
