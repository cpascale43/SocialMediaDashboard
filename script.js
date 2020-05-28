const toggleSwitch = document.querySelector(`input[type="checkbox"]`);

function switchTheme(e) {
  console.log(e)
  if (e.target.checked) {
    console.log("I AM CHECKED");
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark"); //add this
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light"); //add this
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);
