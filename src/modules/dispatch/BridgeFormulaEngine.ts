export class BridgeFormulaEngine {
  // Federal Bridge Gross Weight Formula: W = 500 * [LN / (N - 1) + 12N + 36]
  public static calculateMaxLegalGrossWeight(outerBridgeFeet: number, numberOfAxles: number): number {
    if (numberOfAxles < 2) throw new Error('Axle count must be at least 2');
    const L = outerBridgeFeet;
    const N = numberOfAxles;
    const maxWeight = 500 * ((L * N) / (N - 1) + 12 * N + 36);
    // Absolute federal legal cap is 80,000 lbs on interstate highways without special permit
    return Math.min(80000, Math.round(maxWeight));
  }

  public static validateAxleParameters(distanceFeet: number, axles: number): boolean {
    return distanceFeet > 0 && axles >= 2 && axles <= 9;
  }
}\n