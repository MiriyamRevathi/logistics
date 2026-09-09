export interface InsuranceCoverage {
  policyNumber: string;
  autoLiabilityAmount: number;
  cargoAmount: number;
  generalLiabilityAmount: number;
  expirationDateIso: string;
}

export class InsuranceVerificationEngine {
  public static verifyCoverage(cov: InsuranceCoverage, minAuto = 1000000, minCargo = 100000): boolean {
    const isExpired = new Date(cov.expirationDateIso).getTime() <= Date.now();
    if (isExpired) return false;
    return cov.autoLiabilityAmount >= minAuto && cov.cargoAmount >= minCargo;
  }
}\n