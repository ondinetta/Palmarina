// Open map modal
function setupMapModal() {
  var coordEl = document.querySelector(".coordinates");
  var modal = document.getElementById("mapModal");
  var closeBtn = document.getElementById("closeMapModal");
  var overlay = document.querySelector(".map-modal-overlay");
  
  if (!coordEl || !modal) return;

  // Open modal
  coordEl.addEventListener("click", function () {
    modal.classList.add("is-visible");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  });

  // Close modal function
  function closeModal() {
    modal.classList.remove("is-visible");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  // Close button
  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }

  // Close on overlay click
  if (overlay) {
    overlay.addEventListener("click", closeModal);
  }

  // Close on ESC key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.classList.contains("is-visible")) {
      closeModal();
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  setupMapModal();
});

