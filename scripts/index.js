document.addEventListener("DOMContentLoaded", () => {
  const copyButtons = document.querySelectorAll(".copy-email");
  if (!copyButtons.length || !navigator.clipboard) return;

  copyButtons.forEach((button) => {
    button.addEventListener("click", async () => {
      const email = button.dataset.email;
      if (!email) return;

      const originalLabel = button.textContent.trim();
      try {
        await navigator.clipboard.writeText(email);
        button.textContent = "Copied!";
        button.disabled = true;
        setTimeout(() => {
          button.textContent = originalLabel;
          button.disabled = false;
        }, 1400);
      } catch (error) {
        button.textContent = "Copy failed";
        setTimeout(() => {
          button.textContent = originalLabel;
        }, 1400);
        console.error("Copy failed", error);
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const printButton = document.querySelector(".print-action");
  if (!printButton) return;

  printButton.addEventListener("click", () => {
    window.print();
  });
});
