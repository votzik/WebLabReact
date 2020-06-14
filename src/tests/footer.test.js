import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


import Footer from "../components/Footer";

configure({ adapter: new Adapter() });
describe('Footer', () => {
  it('should have proper p element ', () => {
    const output = shallow(
      <Footer />
    );
    expect(output.find("p").text()).toEqual("WanderLance ©2020");

  });
});