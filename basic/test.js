const app = require('./app');
const request = require('supertest').agent(app.listen());

describe('Hello, Flclover!', () => {
  describe('when GET /', () => {
    it('should return the 200 page', (done) => {
      request
      .get('/')
      .expect(200)
      .expect(/Hello, Flclover!/, done);
    });
  });
});
