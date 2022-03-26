var myList = document.getElementsByTagName("LI");

for (var i = 0; i < myList.length; i++) {

  var span = document.createElement("SPAN");
  var text = document.createTextNode("\u00D7");
  span.className = "remove";
  span.appendChild(text);
  myList[i].appendChild(span);

}

// Click on a remove button to remove item

var remove = document.getElementsByClassName("remove");

for (var i = 0; i < remove.length; i++) {
  remove[i].onclick = function() {
    var remove_div = this.parentElement;
    remove_div.style.display = "none";
  }
}


var list = document.querySelector('ul');

list.addEventListener('click', function(ev) {

  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('todo-list');

  }
}, false);

// addition of item in the list will


function addMore() {

  var li = document.createElement("li");

  var inputValue = document.getElementById("inputBox").value;

  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {

    alert("You must write something!");
  } else {
    document.getElementById("ul-list").appendChild(li);

  }
  document.getElementById("inputBox").value = "";

  var span = document.createElement("SPAN");
  var text = document.createTextNode("\u00D7");
  span.className = "remove";
  span.appendChild(text);
  li.appendChild(span);

  for (i = 0; i < remove.length; i++) {
    remove[i].onclick = function() {
      var remove_div = this.parentElement;
      remove_div.style.display = "none";
      
    }
  }
}