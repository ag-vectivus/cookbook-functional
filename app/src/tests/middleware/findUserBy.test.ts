import findUserBy from '../../mocks/middleware/findUserBy';
import allUsers from '../../mocks/data/allUsers.json';

test('should find user by given params', () => {
  const { users } = allUsers;

  const userEmail = findUserBy(users, 'email', 'spock@mock.com');
  expect(userEmail).toBe(users[0]);

  const userLogin = findUserBy(users, 'login', 'kirk');
  expect(userLogin).toBe(users[2]);

  const wrongLogin = findUserBy(users, 'login', 'sulu');
  expect(wrongLogin).toBe(undefined);
});
