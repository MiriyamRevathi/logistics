export class AccessorialDetector {
  public static requiresLiftgate(pieceWeightLbs: number, isResidential: boolean): boolean {
    return isResidential || pieceWeightLbs > 150;
  }
}\n