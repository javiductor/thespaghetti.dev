/////////////////// Blob ////////////////
const blob = document.getElementById("blob");

document.body.onpointermove = (event) => {
  const { clientX, clientY } = event;

  const blobWidth = blob.offsetWidth;
  const blobHeight = blob.offsetHeight;

  blob.animate(
    {
      left: `${clientX - blobWidth / 2}px`,
      top: `${clientY - blobHeight / 2}px`,
    },
    { duration: 100, fill: "forwards" }
  );
};
