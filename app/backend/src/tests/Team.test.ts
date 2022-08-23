import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import { Team } from '../database/models';
import { teamMock } from './mocks/Team';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('database/models/Team', () => {
  let chaiHttpResponse: Response;

  beforeEach(sinon.restore);

  describe('/team', () => {
    it('should throw an error if db for some reason fail', async () => {
      sinon.stub(Team, 'findAll').rejects(new Error('blabla'));
      chaiHttpResponse = await chai.request(app).get('/teams');

      expect(chaiHttpResponse.status).to.be.equals(500);
    });
    it.only('should return status 200 and mocked team values', async () => {
      sinon.stub(Team, 'findAll').resolves(teamMock as Team[]);
      chaiHttpResponse = await chai.request(app).get('/teams');

      expect(chaiHttpResponse.status).to.be.equals(200);
      expect(chaiHttpResponse.body).to.be.deep.equals(teamMock);
    });
  });
  describe('/teams/:id', () => {
    it('should throw an error team', async () => {
      sinon.stub(Team, 'findOne').rejects(null);
      chaiHttpResponse = await chai.request(app).get('/teams/1');

      expect(chaiHttpResponse.status).to.be.equals(404);
      expect(chaiHttpResponse.body).to.be.equals('Team not found');
    });
    it.only('should return status 200 and mocked team', async () => {
      sinon.stub(Team, 'findOne').resolves(teamMock[0] as Team);
      chaiHttpResponse = await chai.request(app).get('/teams/1');

      expect(chaiHttpResponse.status).to.be.equals(200);
      expect(chaiHttpResponse.body).to.be.deep.equals(teamMock[0]);
    });
  });
});
// after(()=>{
//   (Example.findOne as sinon.SinonStub).restore();
// })
