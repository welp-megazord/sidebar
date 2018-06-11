import React from 'react';
import { shallow, mount, render } from 'enzyme';
import data from '../../../server/controllers/data.js';
import Details from '../Details.jsx';
import Home from '../Home.jsx';
import axios from 'axios';

describe('Home', () => {
  // test('renders and contains children', () => {
  //   const rendered = mount(
  //     <Details>
  //       <div className='child'></div>
  //     </Details>
  //   );
  //   expect(rendered).toMatchSnapshot();
  // })
  test('it should render', () => {
    shallow(<Home />)
  })
})
