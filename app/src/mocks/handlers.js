import { rest } from 'msw';
import endpoints from '../config/endpoints';

// data
import allRecipes from './data/allRecipes.json';
import popularRecipes from './data/popularRecipes.json';

export const handlers = [
  rest.get(`${endpoints.server}/recipes/all/`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(allRecipes));
  }),
  rest.get(`${endpoints.server}/recipes/popular/`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(popularRecipes));
  }),
];
