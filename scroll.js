// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const blob = document.getElementById("blob");

  // Check if blob element exists to prevent errors
  if (!blob) {
    console.error("Blob element not found!");
    return;
  }

  document.body.onpointermove = (event) => {
    const { clientX, clientY } = event;

    const blobWidth = blob.offsetWidth;
    const blobHeight = blob.offsetHeight;

    // Use requestAnimationFrame for smoother animation
    requestAnimationFrame(() => {
      blob.animate(
        {
          left: `${clientX - blobWidth / 2}px`,
          top: `${clientY - blobHeight / 2}px`,
        },
        { duration: 100, fill: "forwards" }
      );
    });
  };

  // Initialize blob position to center of screen
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  blob.style.left = `${centerX}px`;
  blob.style.top = `${centerY}px`;
});
