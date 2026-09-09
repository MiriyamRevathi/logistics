export class InvoicePaymentGuard {
  private static paidInvoices = new Set<string>();

  public static canSubmitPayment(invoiceId: string): boolean {
    if (this.paidInvoices.has(invoiceId)) return false;
    this.paidInvoices.add(invoiceId);
    return true;
  }
}\n