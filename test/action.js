import { dir } from 'tmp-promise'
import { action } from '../lib'

// General

describe('General', () => {
  it('main', async () => {
    const { path } = await dir()
    await action({ workingDirectory: path })
  })
})