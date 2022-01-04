const findUserBy = (users, param, value) => {
  const user = users.find((singleUser) => singleUser[param] === value);

  return user;
};

export default findUserBy;
