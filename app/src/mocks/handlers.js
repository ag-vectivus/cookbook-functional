import { rest } from 'msw';
import endpoints from '../config/endpoints';

// data
import users from './data/users.json';
import allRecipes from './data/allRecipes.json';
import allCategories from './data/allCategories.json';
import popularRecipes from './data/popularRecipes.json';

// middleware
import findUserBy from './middleware/findUserBy';
import messages from '../config/messages';

export const handlers = [
  rest.get(`${endpoints.server}/recipes/all/`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(allRecipes));
  }),
  rest.get(`${endpoints.server}/recipes/categories/`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(allCategories));
  }),
  rest.get(`${endpoints.server}/recipes/popular/`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(popularRecipes));
  }),
  rest.post(`${endpoints.server}/signin`, (req, res, ctx) => {
    const { email, password } = req.body;

    // middleware - find user by email
    const user = findUserBy(users.users, 'email', email);

    if (user.email === email && user.password === password) {
      return res(ctx.status(200), ctx.json({ uid: user.uid }));
    } else {
      return res(ctx.status(401));
    }
  }),
  rest.post(`${endpoints.server}/resetpassword`, (req, res, ctx) => {
    const { email } = req.body;

    // middleware - find user by email
    const user = findUserBy(users.users, 'email', email);

    if (user !== undefined && user.email === email) {
      return res(
        ctx.status(200),
        ctx.json({
          message: 'Request sent successfully. Please check your email.',
        })
      );
    } else {
      return res(
        ctx.status(200),
        ctx.json({ message: 'There is no such email in the database.' })
      );
    }
  }),
  rest.post(`${endpoints.server}/signup`, (req, res, ctx) => {
    const { login, email, password } = req.body;

    // middleware - find if user email or login is already taken
    const userLogin = findUserBy(users.users, 'login', login);
    const userEmail = findUserBy(users.users, 'email', email);

    let text = userLogin;
    if (userLogin !== undefined) {
      text = messages.LoginNotAvailable;
    } else if (userEmail !== undefined) {
      text = messages.EmailNotAvailable;
    } else {
      text = messages.AccountCreated;
    }

    return res(
      ctx.status(200),
      ctx.json({
        message: text,
      })
    );
  }),
];
