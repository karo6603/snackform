"use strict";
document.querySelector("button").addEventListener("click", message);
function message() {
  if (document.querySelector("form").reportValidity())
    alert("Your snack has been added to the list!");
  else alert("You're missing something!");
}
