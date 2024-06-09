import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AppointmentCreateInput = {
  agent?: string | null;
  client?: ClientWhereUniqueInput | null;
  date?: Date | null;
  property?: PropertyWhereUniqueInput | null;
};
