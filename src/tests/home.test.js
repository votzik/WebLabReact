import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


import Home from '../components/Home';

configure({ adapter: new Adapter() });
describe('Login', () => {
  it('main page contains Card component', () => {
    const output = shallow(
      <Home />
    );
    expect(output.find("Card"));

  });
});