// Optional: click-to-copy GPS coordinates
function setupCoordinateCopy() {
  var coordEl = document.querySelector(".coordinates");
  var feedbackEl = document.querySelector(".copy-feedback");

  if (!coordEl) return;

  var originalText = coordEl.textContent.trim();

  function showFeedback(message) {
    if (!feedbackEl) return;
    feedbackEl.textContent = message;
    feedbackEl.classList.add("is-visible");
    window.clearTimeout(showFeedback._timeoutId);
    showFeedback._timeoutId = window.setTimeout(function () {
      feedbackEl.classList.remove("is-visible");
    }, 2000);
  }

  coordEl.addEventListener("click", function () {
    var text = coordEl.getAttribute("data-coordinates") || coordEl.textContent.trim();

    if (!navigator.clipboard || typeof navigator.clipboard.writeText !== "function") {
      // Fallback: rely on native text selection
      showFeedback("Tap and hold to select and copy.");
      return;
    }

    navigator.clipboard
      .writeText(text)
      .then(function () {
        coordEl.textContent = "Copied!";
        showFeedback("GPS location saved to clipboard");
        window.setTimeout(function () {
          coordEl.textContent = originalText;
        }, 2000);
      })
      .catch(function () {
        showFeedback("Tap and hold to select and copy.");
      });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  setupCoordinateCopy();
});


