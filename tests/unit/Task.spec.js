import { describe, test, expect } from "vitest"
import Task from "../../Task.js"

describe('Task tests', () => {

  test('can create a Task', () => {
    const task = new Task('test')
    expect(task.id).not.toBeNull()
    expect(task.label).toBe('test')
    expect(task.done).toBe(false)
  })

  test.todo('can mark a Task as done')
});