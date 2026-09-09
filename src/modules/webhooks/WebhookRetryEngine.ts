export class WebhookRetryEngine {
  public static getRetryDelay(attempt: number, base = 5): number {
    return Math.min(3600, base * Math.pow(2, Math.max(0, attempt - 1)));
  }
}\n