class TokenNotFound extends Error {
  constructor() {
    super();

    this.message = 'Token not found';
    this.name = 'TokenNotFound';
  }
}

export default TokenNotFound;
