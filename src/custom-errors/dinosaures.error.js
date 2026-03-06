export class DinosaureNotFoundError extends Error {
  statusCode = 400;
  constructor() {
    super("dinosaure not found.");
  }
}
