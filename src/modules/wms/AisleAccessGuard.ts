export class AisleAccessGuard {
  public static isAisleAvailable(isUnderMaintenance: boolean, isAisleBlocked: boolean): boolean {
    return !isUnderMaintenance && !isAisleBlocked;
  }
}\n