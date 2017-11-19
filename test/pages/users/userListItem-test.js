import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import UserListItem from '../../../src/pages/users/userListItem';

test('renders li.user-list-item', t => {
  const user = {id: 1, name: "fakeName", avatar: "fakeAvatar"}
  const wrapper = shallow(React.createElement(UserListItem, { user }));
  t.is(wrapper.find('li.user-list-item').length, 1);
});

