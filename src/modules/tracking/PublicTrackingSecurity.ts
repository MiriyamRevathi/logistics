export class PublicTrackingSecurity {
  public static createTrackingToken(shipmentId: string, timestamp: string): string {
    return `trk_${shipmentId.toLowerCase()}_${Date.parse(timestamp).toString(36)}`;
  }
}\n