class InvalidToken extends Error {
  constructor() {
    super();

    this.message = 'Token must be a valid token';
    this.name = 'InvalidToken';
  }
}

export default InvalidToken;
