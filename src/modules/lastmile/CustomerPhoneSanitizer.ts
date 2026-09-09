export class CustomerPhoneSanitizer {
  public static formatE164(phone: string, defaultCountry = '+1'): string {
    const digits = phone.replace(/\D/g, '');
    if (phone.startsWith('+')) return `+${digits}`;
    if (digits.length === 10) return `${defaultCountry}${digits}`;
    return `+${digits}`;
  }
}\n