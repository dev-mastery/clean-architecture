import React from 'react';
import CcNavItem from 'nav-item';

CcNavTemplate.propTypes = {
  itemsInCart: React.PropTypes.number,
};

function CcNavTemplate({
  itemsInCart,
}) {
  return (
    <ul className="nav nav-pills">
      <CcNavItem route="/" label="Home" />
      <CcNavItem route="/catalog" label="Catalog" />
      <CcNavItem route="/cart" label={`Shopping Cart (${itemsInCart})`} />
    </ul>
  );
}

export default CcNavTemplate;
