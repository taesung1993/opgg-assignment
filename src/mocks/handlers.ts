import { rest } from 'msw';
import { MOCK_SUMMONER } from './constants';

export const handlers = [
  rest.get(
    'https://codingtest.op.gg/api/summoner/:username',
    (req, res, ctx) => {
      return res(
        ctx.json({
          summoner: MOCK_SUMMONER
        })
      );
    }
  )
];
