
document.addEventListener("keydown", function (e) {

  const tag = document.activeElement.tagName;

  // Ignore typing inside inputs / textarea
  if (tag === "INPUT" || tag === "TEXTAREA") return;

  // Avoid triggering shortcuts with Ctrl / Alt / Shift
  if (e.ctrlKey || e.altKey || e.shiftKey) return;

  switch (e.key.toLowerCase()) {
    case "0": location.hash = "home"; break;
    case "1": location.hash = "about"; break;
    case "2": location.hash = "skills"; break;
    case "3": location.hash = "projects"; break;
    case "4": location.hash = "contact"; break;
  }
});


fetch("portfolio.json")
  .then(res => res.json())
  .then(data => {
    document.querySelector("h1").textContent = data.name;
  });
// Contact form handling
const form = document.forms["f1"];

form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop page reload

  const name = form.t1.value.trim();
  const email = form.t2.value.trim();
  const message = form.t3.value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill all fields");
    return;
  }

  alert("Thank you " + name + "! Your message has been sent .");

  // clear form
  form.reset();
});

