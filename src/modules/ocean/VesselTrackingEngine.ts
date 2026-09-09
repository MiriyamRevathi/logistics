export class VesselTrackingEngine {
  public static isValidImo(imo: string): boolean {
    const clean = imo.replace(/^IMO\s*/i, '').trim();
    if (!/^\d{7}$/.test(clean)) return false;
    const digits = clean.split('').map(Number);
    let sum = 0;
    for (let i = 0; i < 6; i++) sum += digits[i] * (7 - i);
    return (sum % 10) === digits[6];
  }
}\n