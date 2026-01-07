import { SUT_ } from "../src/index.js";
describe("getDayPhase()", () => {
  test("returns early morning", () => {
    const date = new Date("2026-01-05T06:30");
    console.log(SUT_.getDayPhase(date));
    expect(SUT_.getDayPhase(date)).toBe("early morning");
  });

  test("returns morning", () => {
    const date = new Date("2026-01-05T09:00");
    console.log(SUT_.getDayPhase(date));
    expect(SUT_.getDayPhase(date)).toBe("morning");
  });

  test("returns afternoon", () => {
    const date = new Date("2026-01-05T14:00");
    console.log(SUT_.getDayPhase(date));
    expect(SUT_.getDayPhase(date)).toBe("afternoon");
  });

  test("returns evening", () => {
    const date = new Date("2026-01-05T19:30");
    console.log(SUT_.getDayPhase(date));
    expect(SUT_.getDayPhase(date)).toBe("evening");
  });

  test("returns night", () => {
    const date = new Date("2026-01-05T22:00");
    console.log(SUT_.getDayPhase(date));
    expect(SUT_.getDayPhase(date)).toBe("night");
  });

  test("returns late night", () => {
    const date = new Date("2026-01-05T02:00");
    console.log(SUT_.getDayPhase(date));
    expect(SUT_.getDayPhase(date)).toBe("late night");
  });
});
