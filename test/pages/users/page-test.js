import test from 'ava';
import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import UsersPage from '../../../src/pages/users/page';
import userApi from "../../../src/services/userApi";
import UserListItem from '../../../src/pages/users/userListItem';

test('componentDidMount', t => {
  sinon.stub(userApi, 'getUsers', () => ( new Promise((resolve, reject) => resolve(
    { json: () => { new Promise((resolve, reject) =>   resolve( { id: 1, name: "u" } )   )} }
  ) )));
  const wrapper = mount(React.createElement(UsersPage));
});

test('render with .uers-page div', t => {
  const wrapper = shallow(React.createElement(UsersPage));
  t.is(wrapper.find("div.users-page").length, 1);
});

test('render with .uers-page div', t => {
  const wrapper = shallow(React.createElement(UsersPage));
  t.is(wrapper.find(UserListItem).length, 0);
  wrapper.setState({users: [{ id: 1, name: "foo" }]})
  t.is(wrapper.find(UserListItem).length, 1);
});
