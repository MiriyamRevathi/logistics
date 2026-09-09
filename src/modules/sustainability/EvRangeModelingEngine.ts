export class EvRangeModelingEngine {
  public static calculateConsumptionKwh(distanceKm: number, grossWeightTons: number): number {
    const baseRate = 1.2;
    const weightFactor = 0.03 * grossWeightTons;
    return Math.round(distanceKm * (baseRate + weightFactor) * 100) / 100;
  }
}\n