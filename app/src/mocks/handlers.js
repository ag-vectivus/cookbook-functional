import { rest } from 'msw';
import endpoints from '../config/endpoints';
import allUsers from './data/allUsers.json';
import allRecipes from './data/allRecipes.json';
import allCategories from './data/allCategories.json';
import popularRecipes from './data/popularRecipes.json';
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
    const { users } = allUsers;
    const user = findUserBy(users, 'email', email);

    if (user.email === email && user.password === password) {
      return res(ctx.status(200), ctx.json({ uid: user.uid }));
    }
    return res(ctx.status(401));
  }),

  rest.post(`${endpoints.server}/resetpassword`, (req, res, ctx) => {
    const { email } = req.body;
    const { users } = allUsers;
    const user = findUserBy(users, 'email', email);
    const response =
      user !== undefined && user.email === email
        ? messages.PasswordResetSuccess
        : messages.NoEmailInTheDB;

    return res(ctx.status(200), ctx.json({ message: response }));
  }),

  rest.post(`${endpoints.server}/signup`, (req, res, ctx) => {
    const { login, email, password } = req.body;
    const { users } = allUsers;
    const userLogin = findUserBy(users, 'login', login);
    const userEmail = findUserBy(users, 'email', email);

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

  rest.post(`${endpoints.server}/contact`, (req, res, ctx) => {
    const { name, email, subject, mssg } = req.body;

    const text = messages.ContactFormSuccess;
    return res(
      ctx.status(200),
      ctx.json({
        message: text,
      })
    );
  }),

  rest.post(`${endpoints.server}/newsletter`, (req, res, ctx) => {
    const { email } = req.body;

    const text = messages.NewsletterFormSuccess;
    return res(
      ctx.status(200),
      ctx.json({
        message: text,
      })
    );
  }),

  rest.post(`${endpoints.server}/settings`, (req, res, ctx) => {
    const { order } = req.body;

    let text;
    switch (order) {
      case 'email':
        text = messages.EmailChangeSuccess;
        break;
      case 'password':
        text = messages.PasswordChangeSuccess;
        break;
      default:
        text = messages.AccountDeleted;
        break;
    }

    return res(
      ctx.status(200),
      ctx.json({
        message: text,
      })
    );
  }),
];
