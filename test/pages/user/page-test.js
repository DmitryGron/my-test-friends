import test from 'ava';
import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import UserPage from '../../../src/pages/user/page';
import userApi from "../../../src/services/userApi";

test('render with container div', t => {
  // const mockUserApi = sinon.stub(userApi, 'getUsers').returns({ name: "mockUserName" });
  const wrapper = shallow(React.createElement(UserPage));
  t.is(wrapper.find("div.container").length, 0);
  wrapper.setState({user: { name: "foo" }})
  t.is(wrapper.find("div.container").length, 1);
});

test('componentDidMount', t => {
  sinon.stub(userApi, 'getUsers', () => ( new Promise((resolve, reject) => resolve(
    { json: () => { new Promise((resolve, reject) =>   resolve( { name: "u" } )   )} }
  ) )));
  const wrapper = mount(React.createElement(UserPage, { params: { id: 1 } }));
})