export class TollEstimationEngine {
  public static estimateTollCost(baseRate: number, axleCount: number): number {
    const axleMultiplier = axleCount >= 5 ? 2.5 : 1.5;
    return Math.round(baseRate * axleMultiplier * 100) / 100;
  }
}\n