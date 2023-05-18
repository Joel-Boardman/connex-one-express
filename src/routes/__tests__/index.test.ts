import app from "../../app";
import request from "supertest";

describe("GET /", () => {
  it("Returns status code 200 if server is running.", async () => {
    const res = await request(app)
      .get("/")
      .set("Authorization", "mysecrettoken")
      .send();
    expect(res.statusCode).toEqual(200);
  });

  it("Returns status code 200 and payload type for time route.", async () => {
    const res = await request(app)
      .get("/time")
      .set("Authorization", "mysecrettoken")
      .send();

    expect(res.statusCode).toEqual(200);
    expect(typeof res.body.properties.epoch.description).toBe("number");
  });

  it("Returns status code 200 for metrics route.", async () => {
    const res = await request(app)
      .get("/metrics")
      .set("Authorization", "mysecrettoken")
      .send();

    expect(res.statusCode).toEqual(200);
  });

  it("Returns 403 for request made without Auth token to root route.", async () => {
    const res = await request(app).get("/").send();

    expect(res.statusCode).toEqual(403);
  });
  it("Returns 403 for request made without Auth token to time route.", async () => {
    const res = await request(app).get("/time").send();

    expect(res.statusCode).toEqual(403);
  });
  it("Returns 403 for request made without Auth token to metrics route.", async () => {
    const res = await request(app).get("/metrics").send();

    expect(res.statusCode).toEqual(403);
  });
});
