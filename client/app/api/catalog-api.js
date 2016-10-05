const CATALOG_URI = 'http://localhost:5000/api/catalog';

function getProducts() {
  return fetch(CATALOG_URI)
              .then((response) => response.json()
                                          .then((data) => data));
}

function getProductById(id) {
  return fetch(`${CATALOG_URI}/${id}`)
              .then((response) => response.json()
                                          .then((data) => data));
}

export { getProducts, getProductById };
