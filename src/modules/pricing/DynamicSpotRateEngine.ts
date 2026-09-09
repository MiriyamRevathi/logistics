export class DynamicSpotRateEngine {
  public static calculateSpotRate(baseRate: number, loadToTruckRatio: number): number {
    const surgeMultiplier = loadToTruckRatio > 5.0 ? 1.25 : loadToTruckRatio > 3.0 ? 1.10 : 1.0;
    return Math.round(baseRate * surgeMultiplier * 100) / 100;
  }
}\n