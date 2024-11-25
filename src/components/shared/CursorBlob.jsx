import { useEffect, useRef } from "react";
import styles from "./CursorBlob.module.css";

const CursorBlob = () => {
  const blobRef = useRef(null);

  useEffect(() => {
    const blob = blobRef.current;

    const handlePointerMove = (event) => {
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

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return <div className={styles.blob} ref={blobRef} />;
};

export default CursorBlob;
