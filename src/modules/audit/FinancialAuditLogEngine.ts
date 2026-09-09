export interface AuditEntry {
  userId: string;
  fieldChanged: string;
  oldValue: string;
  newValue: string;
  timestampIso: string;
}

export class FinancialAuditLogEngine {
  public static createEntry(userId: string, field: string, oldVal: string, newVal: string): AuditEntry {
    return {
      userId,
      fieldChanged: field,
      oldValue: oldVal,
      newValue: newVal,
      timestampIso: new Date().toISOString()
    };
  }
}\n