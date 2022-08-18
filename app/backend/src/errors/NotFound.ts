class NotFound extends Error {
  constructor(m: string) {
    super();

    this.message = `${m} not found`;
    this.name = 'InvalidToken';
  }
}

export default NotFound;
