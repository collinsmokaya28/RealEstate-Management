import { AgentAssignmentUpdateManyWithoutClientsInput } from "./AgentAssignmentUpdateManyWithoutClientsInput";
import { AppointmentUpdateManyWithoutClientsInput } from "./AppointmentUpdateManyWithoutClientsInput";

export type ClientUpdateInput = {
  agent?: string | null;
  agentAssignments?: AgentAssignmentUpdateManyWithoutClientsInput;
  appointments?: AppointmentUpdateManyWithoutClientsInput;
  email?: string | null;
  name?: string | null;
  phone?: string | null;
};
