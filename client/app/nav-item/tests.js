import expect from 'expect';
import { setItemCssClass } from 'nav-item/use-cases';

describe('NavItem', () => {
  it('should set the current nav item CSS class to "active"', () => {
    const className = setItemCssClass('/same', '/same');
    expect(className).toEqual('active');
  });

  it('should be an empty string for non-current nav items', () => {
    const className = setItemCssClass('/same', '/different');
    expect(className).toEqual('');
  });
});
