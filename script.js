
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
