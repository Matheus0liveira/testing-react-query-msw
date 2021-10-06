import { rest } from 'msw';

import { GITHUB_API } from '../../../common/constants';
import { ApiResponse, User } from '../../../common/types';

const composeEndpoint = (endpoint: string) => `${GITHUB_API}${endpoint}`;

export const handlers = [
  rest.get<undefined, ApiResponse<User>>(
    composeEndpoint('/users/Matheus0liveira'),
    (_req, res, ctx) => res(ctx.status(200), ctx.json({ data: {} as User }))
  ),
];
