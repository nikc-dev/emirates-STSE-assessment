import React from 'react';
import { mount, shallow, configure } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import { createSerializer } from 'enzyme-to-json';
import toJson from 'enzyme-to-json';
import Route from './route';

configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

it('should render Page Component correctly', () => {
  const component = shallow(
    <Route to={`test`} from={`test`} departsAt={`test`} buttonId={1} arrivesAt={`test`} stops={`test`} booked={true}/>,
  );
  expect(toJson(component)).toMatchSnapshot();
});




