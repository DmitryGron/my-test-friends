import test from 'ava';
import sinon from 'sinon';
import fetchMock from 'fetch-mock';
import userApi from '../../src/services/userApi';

test('service called without id', t => {
  fetchMock.get('*', {});
  const expectedUrl = 'https://my-test-friends.firebaseio.com/users.json';
  userApi.getUsers();
  t.is(fetchMock.lastUrl(), expectedUrl);
});

test('service called with id', t => {
  fetchMock.get('*', {});
  const expectedUrl = 'https://my-test-friends.firebaseio.com/users/1.json';
  userApi.getUsers(1);
  t.is(fetchMock.lastUrl(), expectedUrl);
});
