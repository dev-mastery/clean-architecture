import React from 'react';
import styles from 'spinner/styles.css';

function CcSpinnerTemplate() {
  return (
    <div className={styles.spinner}>
      <div className={styles.bounce1}></div>
      <div className={styles.bounce2}></div>
      <div className={styles.bounce3}></div>
    </div>
  );
}

export default CcSpinnerTemplate;
