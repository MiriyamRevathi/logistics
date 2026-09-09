export class SmsPayloadBuilder {
  public static buildOutForDeliveryMessage(trackingNumber: string, timeWindow: string): string {
    return `Shipment ${trackingNumber} is out for delivery. Estimated arrival: ${timeWindow}.`;
  }
}\n