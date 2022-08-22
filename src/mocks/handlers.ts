import { rest } from 'msw';
import { MOCK_GAME_WINS_RATE, MOCK_SUMMONER } from './constants';

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
  ),
  rest.get(
    'https://codingtest.op.gg/api/summoner/:username/mostInfo',
    (req, res, ctx) => {
      return res(ctx.json(MOCK_GAME_WINS_RATE));
    }
  )
];
