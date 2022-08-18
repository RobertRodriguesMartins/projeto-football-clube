class InvalidToken extends Error {
  constructor() {
    super();

    this.message = 'Invalid token';
    this.name = 'InvalidToken';
  }
}

export default InvalidToken;
