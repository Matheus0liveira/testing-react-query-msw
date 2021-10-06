import '@testing-library/jest-dom';
import { server } from '../src/tests/mocks/handlers/setupServer'


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
