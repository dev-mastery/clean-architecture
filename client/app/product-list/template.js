/**
 * Templates should be stateless and "dumb". No logic here please.
**/

import React from 'react';
import CcProductListItem from 'product-list-item';

CcProductListTemplate.propTypes = {
  products: React.PropTypes.array.isRequired,
  spinner: React.PropTypes.element,
};

export default CcProductListTemplate;

function CcProductListTemplate({
  products,
  spinner,
}) {
  return (
    <div className="row">
      {/*
        The logic that determines when to show/hide the spinner is
        in the container. This keeps our template free of logic and state.
      */}
      {spinner}
      {/*
        The map function below is the only "logic" we allow in templates,
        because there is no other good way to loop over a list of items in React.
      */}
      {products.map((product) =>
        <div className="col-xs-12 col-sm-4" key={product.id}>
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
