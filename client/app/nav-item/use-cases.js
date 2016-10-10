/**
 * The use case encapsulates the business logic and should be
 * free of dependencies. Along with the Entities, this is the
 * heart and sould of our app.
**/

function setItemCssClass(currentAppLocation, navItemDestination) {
  return currentAppLocation === navItemDestination ? 'active' : '';
}

export { setItemCssClass };
