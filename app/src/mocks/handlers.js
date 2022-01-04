import { rest } from 'msw';
import endpoints from '../config/endpoints';

// data
import users from './data/users.json';
import allRecipes from './data/allRecipes.json';
import allCategories from './data/allCategories.json';
import popularRecipes from './data/popularRecipes.json';
import findUserByEmail from './middleware/findUserByEmail';

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
    const user = findUserByEmail(users.users, email);

    if (user.email === email && user.password === password) {
      return res(ctx.status(200), ctx.json({ uid: user.uid }));
    } else {
      return res(ctx.status(401));
    }
  }),
  rest.post(`${endpoints.server}/resetpassword`, (req, res, ctx) => {
    const { email } = req.body;

    // middleware - find user by email
    const user = findUserByEmail(users.users, email);

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
];
