import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


import Login from "../components/Login";

configure({ adapter: new Adapter() });
describe('Login', () => {
  it('should render correctly', () => {
    const output = shallow(
      <Login />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});