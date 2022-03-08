var spores = [];
var hyphae = [];
var my_spores, my_hyphae;
var iteration = 0;

function preload() {
  spores = loadStrings('https://fee.cool/mycelium/spores.txt');
}

function setup() {
  console.log('my spores: ' + spores);
  my_spores = document.getElementById('my-spores');
  my_hyphae = document.getElementById('my-hyphae');
  for (i=0; i<spores.length; i++) {
    if(isWebpage(spores[i])) {
      if(isSpore(spores[i])) {
        my_spores.innerHTML += "<p><b><i><a href='" + spores[i] + "'>" + spores[i] + "</a></i></b></p>";
      } else {
        my_spores.innerHTML += "<p><a href='" + spores[i] + "'>" + spores[i] + "</a></p>";
      }
    } else {
      my_spores.innerHTML += "<p>" + spores[i] + "</p>";
    }
  }
}

function myceliate() {
  console.log("iteration: " + iteration);
  // hyphae = [];
  if (iteration == 0) {
    for (i=0; i<spores.length; i++) {
      if (isSpore(spores[i])) {
        // console.log("BINGO");
        loadStrings(spores[i], mingle);
      }
    }
    iteration++;
  } else {
    for (i=0; i<hyphae.length; i++) {
      // console.log(hyphae[i]);
      if (isSpore(hyphae[i])) {
        // console.log("BINGO");
        loadStrings(hyphae[i], mingle);
      }
    }
    iteration++;
  }
}

function mingle(txt) {
  // console.log("new hyphae: " + txt);
  for (i=0; i<txt.length; i++) {
    let unique = true;
    for (h=0; h<hyphae.length; h++) {
      if (txt[i] == hyphae[h]) {
        unique = false;
      }
    }
    if(unique) {
      hyphae.push(txt[i]);
      console.log("new: " + txt[i]);
      if(isWebpage(txt[i])) {
        if(isSpore(txt[i])) {
          my_hyphae.innerHTML += "<p><b><i><a href='" + txt[i] + "'>" + txt[i] + "</a></i></b></p>";
        } else {
          my_hyphae.innerHTML += "<p><a href='" + txt[i] + "'>" + txt[i] + "</a></p>";
        }
      } else {
        my_hyphae.innerHTML += "<p>" + txt[i] + "</p>";
      }
    }
  }
  my_hyphae.innerHTML += "<p>/ / /</p>";
}

function isWebpage(www) {
  if(www.substring(0, 4) == 'http') {
    // console.log(www + " is a webpage");
    return true;
  } else {
    // console.log(www + " is NOT a webpage");
    return false;
  }
}

function isSpore(www) {
  if(www.substring(www.length - 10, www.length) == "spores.txt") {
    // console.log(www + " is a webpage");
    return true;
  } else {
    // console.log(www + " is NOT a webpage");
    return false;
  }
}
