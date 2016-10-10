import expect from 'expect';
import { totalItemsInCart } from 'cart-page/use-cases';

describe('cart-page', () =>
  it('should return the total items in the cart', () => {
    const dummyItems = Array(5).fill({ qty: 2 });
    expect(totalItemsInCart(dummyItems)).toBe(10);
  })
);
