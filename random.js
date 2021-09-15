function Random(min, max, full){
  if(arguments.length == 1){
    max = min
    min = undefined
  }
  if(arguments.length == 2 && typeof(arguments[1]) == "boolean"){
    full = max
    max = min
    min = undefined
  }
  let ran = max ? Math.random() * max : Math.random()
  if(ran < min){
    let def = min - ran
    ran += def
  }
  full ? ran = Math.round(ran) : ran
  return ran
}

function RandomColor(red, green, blue, alpha){
  let r, g, b, a
  if(red){
    if(typeof(red) == "number"){
      r = Random(red, true)
    }else if(typeof(red) == "object"){
      r = Random(red[0], red[1], true)
    }
  }else{
    r = Random(255, true)
  }
  if(green){
    if(typeof(green) == "number"){
      g = Random(green, true)
    }else if(typeof(green) == "object"){
      g = Random(green[0], green[1], true)
    }
  }else{
    g = Random(255, true)
  }
  if(blue){
    if(typeof(blue) == "number"){
      b = Random(blue, true)
    }else if(typeof(blue) == "object"){
      b = Random(blue[0], blue[1], true)
    }
  }else{
    b = Random(255, true)
  }
  if(alpha){
    if(typeof(alpha) == "number"){
      a = Random(alpha)
    }else if (typeof(alpha) == "object"){
      a = Random(alpha[0], alpha[1])
    }
  }else {
    a = 1
  }
  
  return `rgba(${r}, ${g}, ${b}, ${a})`
}

function Randomize(array){
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array
}
