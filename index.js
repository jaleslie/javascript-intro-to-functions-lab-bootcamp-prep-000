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

if (sayHiToGrandma(string).toLowerCase === sayHiToGrandma(string)) {
  return "I can't hear you"
} else if (sayHiToGrandma(string).toUpperCase === sayHiToGrandma(string)) {
  return "YES INDEED"
} else if (sayHiToGrandma(string) === "I love you, Grandma.") {
  return "I love you, too."
}