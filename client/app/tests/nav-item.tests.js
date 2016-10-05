import expect from 'expect';
import { selectNavItemProps } from 'nav-item/selectors';

describe('NavItem', () => {
  it('should set the current nav item CSS class to "active"', () => {
    const className = selectNavItemProps('/same', '/same');
    expect(className).toEqual('active');
  });

  it('should be an empty string for non-current nav items', () => {
    const className = selectNavItemProps('/same', '/different');
    expect(className).toEqual('');
  });
});
