import { Client } from "../client/Client";
import { Property } from "../property/Property";

export type AgentAssignment = {
  agentName: string | null;
  client?: Client | null;
  createdAt: Date;
  id: string;
  property?: Property | null;
  updatedAt: Date;
};
