import React from 'react';
import { mount, shallow, configure } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import { createSerializer } from 'enzyme-to-json';
import toJson from 'enzyme-to-json';
import mockedResponse from '../../api/mock-data.json'
import Routes from './index';

configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

it('should render Page Component correctly', () => {
  const component = shallow(
    <Routes routesList={mockedResponse.results}/>,
  );
  expect(toJson(component)).toMatchSnapshot();
});

it('should render Page Component correctly for mobile view', () => {
  const component = shallow(
    <Routes routesList={mockedResponse.results} isMobile={true}/>,
  );
  expect(toJson(component)).toMatchSnapshot();
});

it('should handle button click and render selected correctly', () => {
  const component = mount(
    <Routes routesList={mockedResponse.results} />,
  );
  component.find('#route__1').at(1).simulate('click')
  expect(toJson(component)).toMatchSnapshot();
});


