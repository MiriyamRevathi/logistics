export class DeliveryWindowEngine {
  public static calculateWindow(etaIso: string, bufferMinutes = 30): { start: string; end: string } {
    const arrival = new Date(etaIso).getTime();
    return {
      start: new Date(arrival - bufferMinutes * 60000).toISOString(),
      end: new Date(arrival + (bufferMinutes + 60) * 60000).toISOString()
    };
  }
}\n