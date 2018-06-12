import React from 'react';
import Home from '../Home.jsx';
import Details from '../Details.jsx';
import Hours from '../Hours.jsx';
import sinon from 'sinon';
import { shallow, render, mount } from 'enzyme';
import { ENETRESET } from 'constants';


describe('<Home />', () => {
  // it('renders <Details /> component', () => {
  //   const wrapper = shallow(<Home />);
  //   expect(wrapper.find(Details)).to.have.length(8);
  // })

  it('to have state details equal to empty object', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.state().details).toEqual({});
  })
})

// describe('<Hours />', () => {
//   it('has table named Hours with red and large font', () => {
//     const wrapper = render(<Hours />);
//     wrapper.find('._2GoJRnhJjfL1Z1Wp5ZvDRQ').get(0).style;
//     expect(containerStyle).to.have.property('color', '#dc143c');
//   })
//   it('has props hours that are passed down', () => {
//     const wrapper = shallow(<Hours />);
//     expect(wrapper.props().hours).toBe('object');
//   })
// })

describe('<Details />', () => {
  it('has a table with background color gray', () => {
    const wrapper = mount(<Details />);
    wrapper.find('._3fOhLBwfmZ0KV7f3lKUtGe').get(0).style;
    expect(containerStyle).to.have.property('color', '#eaeaea');
  })
  it('has props details that are passed down', () => {
    const wrapper = shallow(<Details />);
    expect(wrapper.instance.props.hours).toBe('object');
  })
})

test('Home calls componentDidMount', () => {
  sinon.spy(Home.prototype, 'componentDidMount');
  const wrapper = mount(<Home />);
  expect(Home.prototype.componentDidMount.calledOnce).toEqual(true);
});