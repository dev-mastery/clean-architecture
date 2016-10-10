/**
 * Templates should be stateless and "dumb". No logic here please.
**/

import React from 'react';
import CcProductList from 'product-list';

function CcCatalogTemplate() {
  return (
    <div>
      <h4><small>
        There would be probably be some kind of search/filter/sort thing here.
      </small></h4>
      <CcProductList />
    </div>
  );
}

export default CcCatalogTemplate;
