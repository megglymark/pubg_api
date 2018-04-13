const expect = require('chai').expect;
const Match = require('../src/classes/match');
const Roster = require('../src/classes/roster');
const env = process.env;
const rawMatchData = require('./mocks/Match.json');

describe('Roster', () => {
    let match;
    beforeEach(() => {
        match = new Match(rawMatchData);
    });
    describe('#constructor', () => {
        it('requires a raw roster object and raw included array', () => {
            //Incorrect
            expect(() => {new Roster();}).to.throw(Error);
            expect(() => {new Roster({},{});}).to.throw(Error);
            expect(() => {new Roster(match.raw.data.relationships.rosters.data[0],{});}).to.throw(Error);
            expect(() => {new Roster({},match.included);}).to.throw(Error);
            //Correct
            expect(() => {new Roster(match.raw.data.relationships.rosters.data[0],match.included);}).to.not.throw(Error);
        });
    });
    describe('#raw', () => {
        let roster;
        beforeEach(() => {
            roster = new Roster(match.raw.data.relationships.rosters.data[0],match.included);
        });
        it('exists', () => {
            expect(roster).to.exist;
            expect(roster.raw).to.exist;
        });
        it('is an object', () => {
            expect(roster.raw).to.be.an('object');
        });
    });
    describe('#attributes', () => {
        let roster;
        beforeEach(() => {
            roster = new Roster(match.raw.data.relationships.rosters.data[0],match.included);
        });
        it('exists', () => {
            expect(roster).to.exist;
            expect(roster.attributes).to.exist;
        });
        it('is an object', () => {
            expect(roster.attributes).to.be.an('object');
        });
    });
    describe('#team', () => {
        let roster;
        beforeEach(() => {
            roster = new Roster(match.raw.data.relationships.rosters.data[0],match.included);
        });
        /*
        it('exists', () => {
            expect(roster).to.exist;
            expect(roster.team).to.exist;
        });
        */
        /*
        it('is an array', () => {
            expect(roster.raw).to.be.an('array');
        });
        */
    });
    describe('#participants', () => {
        let roster;
        beforeEach(() => {
            roster = new Roster(match.raw.data.relationships.rosters.data[0],match.included);
        });
        it('exists', () => {
            expect(roster).to.exist;
            expect(roster.participants).to.exist;
        });
        it('is an array', () => {
            expect(roster.participants).to.be.an('array');
        });
    });
});