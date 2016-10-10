/**
 * These are the "repo adapters" related to the catalog.
 *
 * The point of this module is to abstract away any details about
 * the underlying datasource. This api will be passed to the appropriate
 * use case and can be leveraged by that use case without any explicit
 * knowledge or reference to the web service endpoint on the part of
 * the use case.
 *
 * Passing the uri as an optional argument makes this testatable independent of
 * the real backend.
**/

// TODO: Move URI to an environment variable.
const CATALOG_URI = 'http://localhost:5000/api/catalog';

function getProducts(uri = CATALOG_URI) {
  return fetch(uri)
              .then((response) => response.json()
              .then((data) => data));
}

function getProductById(id, uri = CATALOG_URI) {
  return fetch(`${uri}/${id}`)
              .then((response) => response.json()
              .then((data) => data));
}

export { getProducts, getProductById };
