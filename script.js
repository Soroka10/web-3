(function(window) {
  var names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

  function selectNamesByLength(names, lengthThreshold) {
    return names.filter(function(name) {
      return name.length >= lengthThreshold;
    });
  }

  function displaySelectedNames(selectedNames, criteria) {
    console.log(`Selected names (${criteria}):`);
    selectedNames.forEach(function(name) {
      console.log(name);
    });
  }

  // Original functionality
  for (var i = 0; i < names.length; i++) {
    var currentName = names[i];

    if (currentName.charAt(0).toLowerCase() === 'j') {
      goodbyeSpeaker.speak(currentName);
    } else {
      helloSpeaker.speak(currentName);
    }
  }

  // New functionality based on name length
  var lengthThreshold = 5; // Change this threshold as needed
  var selectedNames = selectNamesByLength(names, lengthThreshold);
  displaySelectedNames(selectedNames, `Length >= ${lengthThreshold}`);
})(window);


