export class AirWaybillValidator {
  public static isValidAwb(awbNumber: string): boolean {
    const clean = awbNumber.replace(/\D/g, '');
    if (clean.length !== 11) return false;
    const serial = parseInt(clean.slice(3, 10), 10);
    const checkDigit = parseInt(clean.slice(10), 10);
    return (serial % 7) === checkDigit;
  }
}\n