export class EmergencyGuideLookup {
  private static GUIDE_MAP: Record<string, string> = {
    'UN1203': 'Guide 128 (Flammable Liquids - Water-Immiscible)',
    'UN1993': 'Guide 128 (Flammable Liquids)',
    'UN1830': 'Guide 137 (Corrosive Substances - Water-Reactive)'
  };

  public static getGuideInfo(unNumber: string): string {
    return this.GUIDE_MAP[unNumber.toUpperCase()] || 'Guide 111 (Mixed / Unidentified Cargo)';
  }
}\n