const request = require("supertest");
const app = require("../app");
const leaderBoard = require("../database/db-connection");

beforeEach(async () => {
  await leaderBoard.deleteMany({});
  await leaderBoard.insertMany([
    { name: "John", score: 100 },
    { name: "Jane", score: 150 },
  ]);
});

afterAll(async () => {
  await leaderBoard.client.close();
});

describe("/api/leaderBoard", () => {
  describe("GET", () => {
    describe("200 OK", () => {
      test("should fetch all documents inside the leaderboard collection", () => {
        return request(app)
          .get("/api/leaderBoard")
          .expect(200)
          .then((result) => {
            expect(result.body.scores.length).toBe(2);
          });
      });

      test("fetched scores should be sorted from highest to lowest", () => {
        return request(app)
          .get("/api/leaderBoard")
          .expect(200)
          .then((result) => {
            expect(result.body.scores).toBeSortedBy("score", {
              descending: true,
            });
          });
      });
    });
  });

  describe("POST", () => {
    describe("201", () => {
      test("should add one document to the leaderboard", () => {
        return request(app)
          .post("/api/leaderBoard")
          .send({
            name: "Saima",
            score: 1000,
          })
          .expect(201)
          .then((result) => {
            expect(result.body.acknowledgement).toBeTruthy()
          });
      });
    });

    describe("400", () => {
      test("should return a bad request error if name is missing", () => {
        return request(app)
          .post("/api/leaderBoard")
          .send({
            score: 1000,
          })
          .expect(400)
          .then((result) => {
            expect(result.text).toBe(`{"msg":"Bad request"}`);
          });
      });

      test("should return a bad request if score is missing", () => {
        return request(app)
          .post("/api/leaderBoard")
          .send({
            name: "Saima",
          })
          .expect(400)
          .then((result) => {
            expect(result.text).toBe(`{"msg":"Bad request"}`);
          });
      });

      test("should return a bad request if score is not a number", () => {
        return request(app)
          .post("/api/leaderBoard")
          .send({
            name: "Saima",
            score: "undefined",
          })
          .expect(400)
          .then((result) => {
            expect(result.text).toBe(`{"msg":"Bad request"}`);
          });
      });
        
      test("should return a bad request if name is not a string", () => {
        return request(app)
          .post("/api/leaderBoard")
          .send({
            name: 20,
            score: 1000,
          })
          .expect(400)
          .then((result) => {
            expect(result.text).toBe(`{"msg":"Bad request"}`);
          });
      });
      test('testing created at exists', () => {
        return request(app)
          .post('/api/leaderBoard')
          .send({
            name: 'joel',
            score: 1000,
            createdAt: 1519211809934
          })
          .expect(201)
          .then((result) => {
            expect(result.body.acknowledgement).toBeTruthy()
          });
      });
    });
  });
});
