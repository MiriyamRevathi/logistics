export class BunkerAdjustmentEngine {
  public static calculateBaf(fuelPriceDiff: number, consumptionFactor: number, isFortyFoot: boolean): number {
    const base = Math.max(0, fuelPriceDiff * consumptionFactor);
    return isFortyFoot ? base * 2 : base;
  }
}\n