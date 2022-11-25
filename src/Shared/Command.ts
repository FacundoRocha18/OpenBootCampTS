export class Command {
  readonly execute: Function
  constructor (execute: Function) {
    this.execute = execute
  }
}
