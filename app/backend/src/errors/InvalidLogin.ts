class InvalidLogin extends Error {
  constructor() {
    super();

    this.message = 'Incorrect email or password';
    this.name = 'InvalidLogin';
  }
}

export default InvalidLogin;
