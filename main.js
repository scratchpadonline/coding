// Hello.
function viewJS() {
  var jstext = document.getElementById("jstext").value;
  saveJS();
  eval(jstext);
}

function saveJS() {
  var jstext = document.getElementById("jstext").value;
  var name = prompt("Name of file", "Untitled");
  if (name != null) {
    if (localStorage.getItem("jstext_".concat(name)) != null) {
      var yes = confirm('Do you want to overwrite the existing file: '.concat(name).concat("?"));
      if (yes == true) {
        localStorage.setItem("jstext_".concat(name), jstext);
      }
    } else {
      localStorage.setItem("jstext_".concat(name), jstext);
      alert('Saved!');
    }
  } else {
    alert('Please enter a name.');
    saveJS();
  }
}

function loadJS() {
  var jstext=localStorage.getItem("jstext");
  if (jstext === null)
  {
    alert("No save!");
  }
  else 
  {
    document.getElementById("jstext").value = jstext;
  }
}

function viewHTML() {
  var htmltext = document.getElementById("htmltext").value;
  localStorage.setItem("htmltext", htmltext);
  var win = window.open("viewhtml.html", "_blank");
  win.focus();
}

function saveHTML() {
  var htmltext = document.getElementById("htmltext").value;
  localStorage.setItem("htmltext", htmltext);
}

function loadHTML() {
  var htmltext=localStorage.getItem("htmltext");
  if (htmltext === null)
  {
    alert("No save!");
  }
  else 
  {
    document.getElementById("htmltext").value = htmltext;
  }
}
