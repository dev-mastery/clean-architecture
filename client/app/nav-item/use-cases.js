
function setItemCssClass(currentAppLocation, navItemDestination) {
  return currentAppLocation === navItemDestination ? 'active' : '';
}

export { setItemCssClass };
