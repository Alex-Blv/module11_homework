import { countDown } from "./Task_2";

describe('easy test', () => {
  it("result should be right", () => {
    const result = countDown(4)
    expect(result).toBe("4 3 2 1");
  }); 
  it("result should be returned", () => {
    expect(countDown()).toBeDefined();
  });
  it("resul should be sting if args are string", () => {
    const result1 = countDown(true)
    expect(result1).toBe("true");
  });
});