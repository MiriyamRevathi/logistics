export interface DockAppointment {
  appointmentId: string;
  dockDoorId: string;
  carrierId: string;
  scheduledArrival: string;
  scheduledDeparture: string;
  trailerNumber?: string;
  appointmentType: 'INBOUND' | 'OUTBOUND' | 'CROSS_DOCK';
  status: 'PENDING' | 'CONFIRMED' | 'ARRIVED' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED';
}

export class DockSchedulingEngine {
  public static isSlotAvailable(
    existingAppointments: DockAppointment[],
    dockDoorId: string,
    startTime: string,
    endTime: string
  ): boolean {
    const start = new Date(startTime).getTime();
    const end = new Date(endTime).getTime();

    if (start >= end) {
      throw new Error('Start time must be strictly before end time');
    }

    return !existingAppointments.some((appt) => {
      if (appt.dockDoorId !== dockDoorId || appt.status === 'CANCELLED') {
        return false;
      }
      const apptStart = new Date(appt.scheduledArrival).getTime();
      const apptEnd = new Date(appt.scheduledDeparture).getTime();
      return Math.max(start, apptStart) < Math.min(end, apptEnd);
    });
  }
}\n