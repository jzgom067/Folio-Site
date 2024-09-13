// react
import { useState } from "react";

// styling
import styles from './EmailCopy.module.css';

function EmailCopy() {
  const [copied, setCopied] = useState(false);

  return (
    <div
      className={styles.copy}
      onClick={() => {
        navigator.clipboard.writeText('jzgombic7@gmail.com');
        setCopied(true);
      }}
      onMouseLeave={async () => {
        await new Promise(res => setTimeout(res, 150));
        setCopied(false);
      }}
    >
      Copy the address
      <div className={styles.tooltip}>
        {copied ? 'Copied!' : "For anyone who doesn't like mailto links"}
      </div>
    </div>
  );
}

export default EmailCopy;
