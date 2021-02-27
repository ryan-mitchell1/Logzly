var request = require('supertest');
var expect = require('chai').expect;

describe('loading express', function () {
    var server;
    beforeEach(function () {
        server = require('../index');
    });
    afterEach(function () {
        server.close();
    });
    it('responds to /test', function testPath(done) {
        request(server)
            .get('/test')
            .expect(200, done);
    });
    it('404 everything else', function testPath(done) {
        request(server)
            .get('/foo/bar')
            .expect(404, done);
    });
});

describe("testing-server-routes", () => {
    var server;
    beforeEach(function () {
        server = require('../index');
    });
    it("GET /test - success", async () => {
        const body = await request(server).get("/test");
        expect(body.text).equal('{"working":true}');
    });
});
