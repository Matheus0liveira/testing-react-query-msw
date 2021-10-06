import { QueryClient } from 'react-query';

import { AxiosError } from 'axios';

import { IS_DEV, IS_PROD, IS_TEST } from '../../common/constants';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (failureCount, err) => {
        if (IS_DEV || IS_TEST) return false;

        const error = err as AxiosError;

        if (error.isAxiosError && error.response) {
          const errStatus = error.response?.status;

          const isErrorWithinRequestErrorsRange =
            errStatus >= 400 && errStatus < 500;

          if (isErrorWithinRequestErrorsRange) {
            return false;
          }
        }

        return failureCount <= 3;
      },
      refetchOnWindowFocus: IS_PROD,
    },
  },
});
