import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AgentAssignmentWhereInput = {
  agentName?: StringNullableFilter;
  client?: ClientWhereUniqueInput;
  id?: StringFilter;
  property?: PropertyWhereUniqueInput;
};
