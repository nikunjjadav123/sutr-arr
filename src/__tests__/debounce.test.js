import { SUT_ } from '../index.js'


jest.useFakeTimers()

test('debounce delays execution', () => {
  const mock = jest.fn()
  const d = SUT_.debounce(mock, 500)

  d()
  d()
  d()

  expect(mock).not.toHaveBeenCalled()

  jest.advanceTimersByTime(500)

  expect(mock).toHaveBeenCalledTimes(1)
})

