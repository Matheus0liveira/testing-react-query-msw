import { useQuery } from 'react-query';

import { ApiResponse, User } from '../../../common/types';
import { api } from '../../axios/api';

export const useUserQuery = () =>
  useQuery(
    ['user'],
    () => api.get<ApiResponse<User[]>>('/users/Matheus0liveira'),
    {
      select: ({ data }) => data.data,
    }
  );
