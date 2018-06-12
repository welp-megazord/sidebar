import React from 'react';
import Home from '../Home.jsx';
import sinon from 'sinon';
import { shallow, render, mount } from 'enzyme';

test('Home calls componentDidMount', () => {
  sinon.spy(Home.prototype, 'componentDidMount');
  const wrapper = mount(<Home />);
  expect(Home.prototype.componentDidMount.calledOnce).to.equal(true);
});