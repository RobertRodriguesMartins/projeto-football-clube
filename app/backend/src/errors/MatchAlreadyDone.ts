class MatchAlreadyDone extends Error {
  constructor() {
    super();

    this.message = 'the match had already finished';
    this.name = 'MatchAlreadyDone';
  }
}

export default MatchAlreadyDone;
