class DuplicatedMatchTeam extends Error {
  constructor() {
    super();

    this.message = 'It is not possible to create a match with two equal teams';
    this.name = 'DuplicatedMatchTeam';
  }
}

export default DuplicatedMatchTeam;
