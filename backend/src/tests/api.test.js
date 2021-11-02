const supertest = require('supertest')
const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../index')
chai.should()
chai.use(chaiHttp)

// eslint-disable-next-line no-undef
describe('POST /test supertest', () => {
  // eslint-disable-next-line no-undef
  it('response with reverse text', done => {
    supertest(app)
      .post('/test?text=arepera')
      .set('Accept', 'aplication/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })

  // eslint-disable-next-line no-undef
  it('no text', done => {
    supertest(app)
      .post('/test?text=')
      .set('Accept', 'aplication/json')
      .expect('Content-Type', /json/)
      .expect(400)
      .expect('{"error":"no text"}')
      .end((err) => {
        if (err) return done(err)
        done()
      })
  })
})

// eslint-disable-next-line no-undef
describe('POST /test chai', function () {
  // eslint-disable-next-line no-undef
  it('response with reverse text', function (done) {
    chai.request(app)
      .post('/test?text=oso')
      .end(function (err, res) {
        if (err) return done(err)
        res.should.have.status(200)
        done()
      })
  })

  // eslint-disable-next-line no-undef
  it('no text', function (done) {
    chai.request(app)
      .post('/test?text=')
      .end((err, response) => {
        if (err) return done(err)
        response.should.have.status(400)
        response.text.should.be.eq('{"error":"no text"}')
        done()
      })
  })
})
