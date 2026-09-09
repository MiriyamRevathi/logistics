export class WebhookStatusTracker {
  public static shouldRetry(statusCode: number): boolean {
    return statusCode >= 500 || statusCode === 408 || statusCode === 429;
  }
}\n