export type UldType = 'AKE' | 'PMC' | 'PGA';

export class UldManagementEngine {
  public static isLowerDeckCompatible(type: UldType): boolean {
    return type !== 'PGA';
  }
}\n