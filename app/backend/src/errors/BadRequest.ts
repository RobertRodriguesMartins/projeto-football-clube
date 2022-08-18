class BadRequest extends Error {
  constructor() {
    super();

    this.message = 'Invalid username or password';
    this.name = 'BadRequest';
  }
}

export default BadRequest;
