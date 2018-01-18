function takeANumber(katzDeli,name) {
  katzDeli.push(name);
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`;
}

function nowServing(deliLine) {
  var cup = deliLine.shift()
  if (deliLine.length == 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${cup}.`;
  }
}

function currentLine(line) {
  line.unshift(1. line, 2. line, 3. line)
  if (line.length == 0) {
    return "The line is currently empty.";
  } else {
    return `The line is currently: ${line}.`;
  }
}
