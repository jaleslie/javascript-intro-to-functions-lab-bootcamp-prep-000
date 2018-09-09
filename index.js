function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  return console.log(string.toUpperCase())
}

function logWhisper(string) {
  return console.log(string.toLowerCase())
}


function sayHiToGrandma(string) {
  var noanswer = "I can't hear you!"
  var yesanswer = "YES INDEED!"
  if (string.toLowerCase() === string) return noanswer
  if (string.toUpperCase() === string) return yesanswer
}

// function sayHiToGrandma(string) {
// var yesanswer = "YES INDEED!"
//  if (string.toUpperCase() === string) return yesanswer
// }