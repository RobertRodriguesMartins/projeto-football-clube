class InvalidTeam extends Error {
  constructor() {
    super();

    this.message = 'There is no team with such id!';
    this.name = 'InvalidTeam';
  }
}

export default InvalidTeam;
