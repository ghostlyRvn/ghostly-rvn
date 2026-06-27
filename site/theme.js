// Theme picker — flips the data-theme attribute the design tokens key off,
// and remembers the choice. (The <head> sets the initial value before paint to
// avoid a flash; this wires up the buttons and keeps their state in sync.)
(function () {
  var KEY = "gh-theme";
  var THEMES = ["spectre", "halo", "ember"];
  var root = document.documentElement;

  function current() {
    var t = root.getAttribute("data-theme");
    return THEMES.indexOf(t) >= 0 ? t : "spectre";
  }

  function apply(theme) {
    if (THEMES.indexOf(theme) < 0) theme = "spectre";
    root.setAttribute("data-theme", theme);
    try { localStorage.setItem(KEY, theme); } catch (e) {}
    var btns = document.querySelectorAll("[data-theme-btn]");
    for (var i = 0; i < btns.length; i++) {
      btns[i].setAttribute("aria-pressed", String(btns[i].getAttribute("data-theme-btn") === theme));
    }
  }

  document.addEventListener("click", function (e) {
    var btn = e.target.closest ? e.target.closest("[data-theme-btn]") : null;
    if (btn) apply(btn.getAttribute("data-theme-btn"));
  });

  apply(current());
})();
