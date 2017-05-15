const app = require('./app');
const should = require('should');
const request = require('supertest').agent(app.listen());

describe('Home list api!', () => {
  describe('when GET /', () => {
    it('should return the list page', () => {
      request
      .get('/list')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        const data = JSON.parse(res.text).data;
        data.should.have.property('notes').with.lengthOf(2);
        data.should.have.property('comments').with.lengthOf(2);
      });
    });
  });
});
