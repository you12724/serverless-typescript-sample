import { describe, it } from 'mocha'
import { greet } from '../../app/util/example'
import { assert } from 'chai'

describe('greet', () => {
  it('正常に値を返す', () => {
    assert.equal(greet('bob'), 'Hello bob!')
  })
})
