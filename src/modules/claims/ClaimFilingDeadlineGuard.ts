export class ClaimFilingDeadlineGuard {
  public static isWithinStatutoryDeadline(deliveryDateIso: string, filingDateIso: string): boolean {
    const diffMs = new Date(filingDateIso).getTime() - new Date(deliveryDateIso).getTime();
    const days = diffMs / (1000 * 60 * 60 * 24);
    return days <= 270;
  }
}\n