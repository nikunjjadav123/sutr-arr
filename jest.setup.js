beforeAll(() => {
  jest.useFakeTimers({
    now: new Date("2026-01-06T00:00:00Z"),
    legacyFakeTimers: false
  });
});

afterAll(() => {
  jest.useRealTimers();
});
