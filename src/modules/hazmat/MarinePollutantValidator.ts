export class MarinePollutantValidator {
  public static hasAdequateContainment(isMarinePollutant: boolean, hasSecondaryPackaging: boolean): boolean {
    if (!isMarinePollutant) return true;
    return hasSecondaryPackaging;
  }
}\n