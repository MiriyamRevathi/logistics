export interface TerminalGateSlot {
  terminalCode: string;
  gateWindowStart: string;
  gateWindowEnd: string;
  isOpen: boolean;
}

export class TerminalAppointmentEngine {
  public static isSlotValid(slot: TerminalGateSlot, plannedArrival: string): boolean {
    if (!slot.isOpen) return false;
    const arr = new Date(plannedArrival).getTime();
    return arr >= new Date(slot.gateWindowStart).getTime() && arr <= new Date(slot.gateWindowEnd).getTime();
  }
}\n