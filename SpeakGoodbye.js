(function(window) {
    var speakWord = "Good Bye";
    var goodbyeSpeaker = {};
  
    goodbyeSpeaker.speak = function(name) {
      console.log(speakWord + " " + name);
    };
  
    window.goodbyeSpeaker = goodbyeSpeaker;
  })(window);
  