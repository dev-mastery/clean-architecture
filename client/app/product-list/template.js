import React from 'react';
import CcProductListItem from 'product-list-item';

CcProductListTemplate.propTypes = {
  products: React.PropTypes.array.isRequired,
  spinner: React.PropTypes.element,
  setRowClass: React.PropTypes.func.isRequired,
};

export default CcProductListTemplate;

function CcProductListTemplate({
  products,
  spinner,
  setRowClass,
}) {
  return (
    <div>
      {spinner}
      {products.map((product, index) =>
        <div
          key={product.id}
          className={setRowClass(index)}
        >
          <CcProductListItem
            id={product.id}
            name={product.name}
            shortDescription={product.shortDescription}
            price={product.price}
            image={product.primaryImage}
          />
        </div>
      )}
    </div>
  );
}
