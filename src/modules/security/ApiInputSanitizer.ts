export class ApiInputSanitizer {
  public static sanitizeString(input: string): string {
    return input.replace(/[<>"']/g, '').trim();
  }
}\n