export class TrailerMaintenanceGuard {
  public static isTrailerRoadworthy(lastInspectionDaysAgo: number, hasOpenDefects: boolean): boolean {
    return lastInspectionDaysAgo <= 90 && !hasOpenDefects;
  }
}\n