export class DinosaureNotFoundError extends Error {
  statusCode = 400;
  constructor() {
    super("dinosaure not found.");
  }
}
export class DinoAlreadyExistError extends Error {
  statusCode = 400;

  constructor() {
    super("Email already exists");
  }
}
