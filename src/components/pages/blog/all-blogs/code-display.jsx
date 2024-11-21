import React from "react";
import { ClipboardCopy } from "lucide-react";
import styles from "./code-display.module.css";

const CodeDisplay = ({ code, language }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className={styles.codeContainer}>
      <div className={styles.codeHeader}>
        <span className={styles.language}>{language}</span>
        <button onClick={copyToClipboard} className={styles.copyButton}>
          <ClipboardCopy size={16} />
          <span>Copy</span>
        </button>
      </div>
      <pre className={styles.pre}>
        <code className={styles.code}>{code}</code>
      </pre>
    </div>
  );
};

export default CodeDisplay;
