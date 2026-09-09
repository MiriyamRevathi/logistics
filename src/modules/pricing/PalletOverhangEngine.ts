export class PalletOverhangEngine {
  public static calculateOverhangVolumePenalty(widthInches: number, lengthInches: number, standardWidth = 40, standardLength = 48): number {
    const isOverhang = widthInches > standardWidth || lengthInches > standardLength;
    return isOverhang ? 1.15 : 1.0;
  }
}\n