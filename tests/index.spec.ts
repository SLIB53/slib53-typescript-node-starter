import { helloWorld } from '../src/index'

describe('hello world', function () {
  it('returns hello world', function () {
    expect(helloWorld()).toBe('Hello, World!')
  })
})
