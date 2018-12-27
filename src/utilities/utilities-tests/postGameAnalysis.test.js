import gameAnalysis from "../postGameAnalysis";
import mockUser from "../mockUser";

describe("postGameAnalysis", () => {
  const mockUser = {};
  it("should return", () => {
    const spy = jest.spyOn(gameAnalysis, "postGameAnalysis");
    gameAnalysis.postGameAnalysis();

    expect(spy).toReturn();
  });
});
