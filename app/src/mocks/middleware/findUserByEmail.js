const findUserByEmail = (users, email) => {
  const user = users.find((singleUser) => singleUser.email === email);

  return user;
};

export default findUserByEmail;
