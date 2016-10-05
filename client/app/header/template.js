import React from 'react';
import CcNav from 'nav';
import styles from 'header/styles.css';

function CcHeaderTemplate() {
  return (
    <div className={`row ${styles.header}`}>
      <div className={`${styles.brand} col col-xs-12 col-md-3 col-sm-2`}>
        CleanCo.
      </div>
      <div
        className={
          `col
          col-xs-12
          col-sm-7
          col-sm-offset-3
          col-md-7
          col-md-offset-2
          col-lg-6
        col-lg-offset-3`}
      >
        <CcNav />
      </div>
    </div>
  );
}

export default CcHeaderTemplate;
