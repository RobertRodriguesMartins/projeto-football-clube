import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import {User} from '../database/models';
import { userMock } from './mocks/User';

import { Response } from 'superagent';

chai.use(chaiHttp);
const { expect } = chai;

describe('database/models/User', () => {
  let chaiHttpResponse: Response;
  let fakeToken: string;

  beforeEach(sinon.restore);

  describe('/login', () => {
    it('should throw an error when request does not have an email field', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .post('/login')
        .send({ password: 'mm' });

      expect(chaiHttpResponse.clientError).to.be.true;
      expect(chaiHttpResponse.status).to.be.equals(400);
      expect(chaiHttpResponse.body.message).to.be.equals(
        'All fields must be filled'
      );
    });
    it('should throw an error when request does not have an password field', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .post('/login')
        .send({ email: 'mm' });

      expect(chaiHttpResponse.clientError).to.be.true;
      expect(chaiHttpResponse.status).to.be.equals(400);
      expect(chaiHttpResponse.body.message).to.be.equals(
        'All fields must be filled'
      );
    });
    it('should throw an error when request have email or password field empty', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .post('/login')
        .send({ email: 'mm', password: '' });

      expect(chaiHttpResponse.clientError).to.be.true;
      expect(chaiHttpResponse.status).to.be.equals(400);
      expect(chaiHttpResponse.body.message).to.be.equals(
        'All fields must be filled'
      );
    });
    it('should throw an error when request have an invalid password field', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .post('/login')
        .send({ email: 'mmm@example.com', password: 'amk' });

      expect(chaiHttpResponse.clientError).to.be.true;
      expect(chaiHttpResponse.status).to.be.equals(400);
      expect(chaiHttpResponse.body.message).to.be.equals(
        'Password must have at least 6 characters'
      );
    });
    it('should throw an error when request have an invalid email field', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .post('/login')
        .send({ email: 'mmmexample.com', password: 'amkmakdmak' });

      expect(chaiHttpResponse.clientError).to.be.true;
      expect(chaiHttpResponse.status).to.be.equals(400);
      expect(chaiHttpResponse.body.message).to.be.equals(
        'Email must be a valid email'
      );
    });
    it('should return status 200 with token', async () => {
      sinon.stub(User, 'findOne').resolves(userMock as User);
      chaiHttpResponse = await chai
        .request(app)
        .post('/login')
        .send({ email: 'testemail@gmail.com', password: 'teste123' });
      fakeToken = chaiHttpResponse.body.token;
      expect(chaiHttpResponse.status).to.be.equals(200);
      expect(chaiHttpResponse.body.token).to.exist;
    });
  });

  describe('/login/validate', () => {
    it('should throw if a token is not provided', async () => {
      chaiHttpResponse = await chai.request(app).get('/login/validate');

      expect(chaiHttpResponse.status).to.be.equals(400);
      expect(chaiHttpResponse.body.message).to.be.equals('Token not found');
    });
    it('should throw if a token is malformed', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .get('/login/validate')
        .set({ authorization: 'invalidtoken' });

      expect(chaiHttpResponse.status).to.be.equals(500);
      expect(chaiHttpResponse.body.message).to.be.equals('jwt malformed');
    });
    it('should return status 200 and role object if a token is valid', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .get('/login/validate')
        .set({ authorization: fakeToken });
      expect(chaiHttpResponse.status).to.be.equals(200);
      expect(chaiHttpResponse.body).to.contains({ role: 'cool' });
    });
  });
});
// after(()=>{
//   (Example.findOne as sinon.SinonStub).restore();
// })
