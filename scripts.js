window.onload = function() {
  
  //adds new paragraph element to DOM after image
  comment = document.createElement('div');
  comment.className = "comment";
  comment.innerHTML = '<p>"If you have a big family, make sure to triple the batch. Otherwise they will be gone in seconds."</p>';
  console.log(comment);
  body = document.querySelector("body");
  document.body.insertBefore(comment, body.childNodes[6]);
  
//changes title font size and color on click
  x = document.querySelector("#title");
  x.style.fontSize = "8vw";
  x.addEventListener("click", function() {
    x.className = "changeColor";
  });
  
//allows list visibility to be toggled on and off 
  list = document.querySelectorAll("h4");
  console.log(list);
  list.item(0).addEventListener("click", function() {
    document.querySelector('#ingredients').classList.toggle('hide');
  });
  list.item(1).addEventListener("click", function() {
    document.querySelector('#equipment').classList.toggle('hide');
  });
  list.item(2).addEventListener("click", function() {
    document.querySelector('#directions').classList.toggle('hide');
  });
};