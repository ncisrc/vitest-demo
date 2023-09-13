import { uuid } from 'uuidv4';

export default class Task {

  constructor(label, isDone = false) {
    this.id = uuid();
    this.label = label;
    this.done = isDone;
  }

  markAsDone() {
    this.done = true;
  }
}