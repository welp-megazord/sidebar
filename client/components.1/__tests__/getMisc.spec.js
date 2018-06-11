jest.mock('../Home.jsx');

import Home from '../Home.jsx'


// const mockedMethod = jest.fn()

// MockedClass.mockImplementation(() => {
//   getMisc: getMiscMock
// })


it('works with promises', () => {
  expect.assertions(1);
  return Home.getMisc(1).then(data => expect(data).toEqual('1'));
});

export default mock