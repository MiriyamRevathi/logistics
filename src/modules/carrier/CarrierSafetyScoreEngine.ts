export interface CsaBasicsScore {
  carrierDotNumber: string;
  unsafeDrivingPercentile: number;
  crashIndicatorPercentile: number;
  hoursOfServicePercentile: number;
  vehicleMaintenancePercentile: number;
  controlledSubstancesPercentile: number;
  driverFitnessPercentile: number;
  hazmatPercentile?: number;
}

export class CarrierSafetyScoreEngine {
  // FMCSA intervention alert threshold (typically 65% for general property carriers)
  public static readonly INTERVENTION_THRESHOLD = 65;

  public static isCarrierSafetyCompliant(score: CsaBasicsScore): { compliant: boolean; alertCategories: string[] } {
    const alerts: string[] = [];
    if (score.unsafeDrivingPercentile >= this.INTERVENTION_THRESHOLD) alerts.push('Unsafe Driving');
    if (score.crashIndicatorPercentile >= this.INTERVENTION_THRESHOLD) alerts.push('Crash Indicator');
    if (score.hoursOfServicePercentile >= this.INTERVENTION_THRESHOLD) alerts.push('HOS Compliance');
    if (score.vehicleMaintenancePercentile >= this.INTERVENTION_THRESHOLD) alerts.push('Vehicle Maintenance');
    if (score.controlledSubstancesPercentile >= this.INTERVENTION_THRESHOLD) alerts.push('Controlled Substances');

    return {
      compliant: alerts.length === 0,
      alertCategories: alerts
    };
  }

  public static sanitizeDotNumber(dotString: string): string {
    return dotString.replace(/\D/g, '');
  }

  public static canAssignLoad(isSafetyCompliant: boolean, isInsuranceActive: boolean): boolean {
    return isSafetyCompliant && isInsuranceActive;
  }
}\n