const baseUrl = 'https://my-test-friends.firebaseio.com/';
const table = 'users';

const userApi = {
  getUsers: (userId = null) => {
    return new Promise((resolve, reject) => {
      let url = baseUrl + table;
      if (userId !== null) {
        url += `/${userId}`
      }
      url += '.json';
      resolve(fetch(url));
    })
  }
}
export default userApi;