import { SortOrder } from "../../util/SortOrder";

export type ClientOrderByInput = {
  agent?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  phone?: SortOrder;
  updatedAt?: SortOrder;
};
