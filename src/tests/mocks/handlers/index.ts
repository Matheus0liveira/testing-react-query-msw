import { rest } from 'msw';

import { GITHUB_API } from '../../../common/constants';
import { ApiResponse, User } from '../../../common/types';

const composeEndpoint = (endpoint: string) => `${GITHUB_API}${endpoint}`;

export const handlers = [
  rest.get<undefined, ApiResponse<User>>(
    composeEndpoint('users/Matheus0liveira'),
    (_req, res, ctx) =>
      res(
        ctx.status(200),
        ctx.json({
          data: {
            avatar_url: 'https://avatars.githubusercontent.com/u/58826355?v=4',
            bio: 'Desenvolvedor Full Stack',
            blog: 'https://matheus0liveira.com',
            company: null,
            created_at: new Date(),
            email: null,
            events_url:
              'https://api.github.com/users/Matheus0liveira/events{/privacy}',
            followers: 15,
            followers_url:
              'https://api.github.com/users/Matheus0liveira/followers',
            following: 31,
            following_url:
              'https://api.github.com/users/Matheus0liveira/following{/other_user}',
            gists_url:
              'https://api.github.com/users/Matheus0liveira/gists{/gist_id}',
            gravatar_id: '',
            hireable: null,
            html_url: 'https://github.com/Matheus0liveira',
            id: 58826355,
            location: null,
            login: 'Matheus0liveira',
            name: 'Matheus Oliveira Santos',
            node_id: 'MDQ6VXNlcjU4ODI2MzU1',
            organizations_url:
              'https://api.github.com/users/Matheus0liveira/orgs',
            public_gists: 1,
            public_repos: 31,
            received_events_url:
              'https://api.github.com/users/Matheus0liveira/received_events',
            repos_url: 'https://api.github.com/users/Matheus0liveira/repos',
            site_admin: false,
            starred_url:
              'https://api.github.com/users/Matheus0liveira/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/Matheus0liveira/subscriptions',
            twitter_username: null,
            type: 'User',
            updated_at: new Date(),
            url: 'https://api.github.com/users/Matheus0liveira',
          } as User,
        })
      )
  ),
];
