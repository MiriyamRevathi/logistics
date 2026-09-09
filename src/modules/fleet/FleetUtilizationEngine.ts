export class FleetUtilizationEngine {
  public static calculateUtilizationPct(activeTrucks: number, totalFleetTrucks: number): number {
    if (totalFleetTrucks <= 0) return 0;
    return Math.round((activeTrucks / totalFleetTrucks) * 10000) / 100;
  }
}\n