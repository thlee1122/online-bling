'use strict'

const db = require('APP/db')
const { User } = require('APP/db/models')
const { expect } = require('chai')

describe('!----- Backend Database Model - User -----!', () => {
  before('wait for the db', () => db.didSync
    .then(() => db.sync({ force: true }))
  )

  after('clear db', () => 
    User.truncate({ cascade: true })
  )

  describe('authenticate(plaintext: String) ~> Boolean', () => {
    it('resolves true if the password matches', () =>
      User.create({ password: 'ok' })
        .then(user => user.authenticate('ok'))
        .then(result => expect(result).to.be.true)
        .catch(err => console.error(err)));

    it("resolves false if the password doesn't match", () =>
      User.create({ password: 'ok' })
        .then(user => user.authenticate('not ok'))
        .then(result => expect(result).to.be.false)
        .catch(err => console.error(err)));
  });
});
