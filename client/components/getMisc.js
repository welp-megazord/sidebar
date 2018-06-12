//jest.mock('../Home.jsx');

import Home from '../Home.jsx'

it('works with promises', () => {
  expect.assertions(1);
  return Home.getMisc(1).then(data => expect(data).toEqual('1'));
});