import '@testing-library/jest-dom';

import { setupServer } from 'msw/node';
import { handlers } from '../src/tests/mocks/handlers';


export const server = setupServer(...handlers);


beforeAll(() => {
  // Establish API mocking before all tests.
  server.listen({
    onUnhandledRequest: 'error',
  });
});

afterEach(() => {
  server.resetHandlers();
  // testingQueryClient.clear();
});

afterAll(() => {
  server.close();
});

// setLogger({
//   log: console.log,
//   warn: console.warn,
//   // ✅ no more react query errors on the console
//   error: () => null,
// });
