// Click-to-copy GPS coordinates
function setupCoordinateCopy() {
  var coordEl = document.querySelector(".coordinates");
  if (!coordEl) return;

  var originalText = coordEl.textContent.trim();

  coordEl.addEventListener("click", function () {
    var text =
      coordEl.getAttribute("data-coordinates") || coordEl.textContent.trim();

    if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
      navigator.clipboard.writeText(text).catch(function () {
        // ignore clipboard errors, still show UI feedback
      });
    }

    coordEl.textContent = "COPIED!";
    window.clearTimeout(setupCoordinateCopy._timeoutId);
    setupCoordinateCopy._timeoutId = window.setTimeout(function () {
      coordEl.textContent = originalText;
    }, 1600);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  setupCoordinateCopy();
});

