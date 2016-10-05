import React from 'react';
import { Link } from 'react-router';
import styles from 'nav-item/styles.css';

CcNavItemTemplate.propTypes = {
  className: React.PropTypes.string,
  label: React.PropTypes.string.isRequired,
  route: React.PropTypes.string.isRequired,
};

function CcNavItemTemplate({
  className,
  label,
  route,
}) {
  return (
    <li className={className}>
      <Link to={route} className={styles.navItem}>{label}</Link>
    </li>
  );
}

export default CcNavItemTemplate;
