import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  agent?: SortOrder;
  clientId?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  propertyId?: SortOrder;
  updatedAt?: SortOrder;
};
