(function() {
  var speakWord = "Hello";
  var helloSpeaker = {}
    helloSpeaker.speak = function (name) {
      console.log(speakWord + " " + name);
    }
  window.helloSpeaker = helloSpeaker
  window.helloSpeaker.speak = helloSpeaker.speak
})();