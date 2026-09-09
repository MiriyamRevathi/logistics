export class BackhaulEfficiencyEngine {
  public static calculateDeadheadPercent(loadedMiles: number, totalMiles: number): number {
    if (totalMiles <= 0) return 0;
    const deadhead = Math.max(0, totalMiles - loadedMiles);
    return Math.round((deadhead / totalMiles) * 10000) / 100;
  }
}\n