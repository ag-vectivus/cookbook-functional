import { rest } from 'msw';
import endpoints from '../config/endpoints';

export const handlers = [
  rest.get(`${endpoints.server}/content`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json('Hello world!'));
  }),
];
