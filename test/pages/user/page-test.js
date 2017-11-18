import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import UserPage from '../../../src/pages/user/page';
import userApi from "../../../src/services/userApi";

test('render with container div', t => {
  const mockUserApi = sinon.spy(userApi, 'getUsers');
  const wrapper = shallow(React.createElement(UserPage));
  t.is(wrapper.find("div.container").length, 0);
  wrapper.setState({user: { name: "foo" }})
  t.is(wrapper.find("div.container").length, 1);
});
