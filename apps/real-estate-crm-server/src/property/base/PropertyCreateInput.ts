/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsOptional,
  ValidateNested,
  IsNumber,
  IsEnum,
} from "class-validator";
import { AgentAssignmentCreateNestedManyWithoutPropertiesInput } from "./AgentAssignmentCreateNestedManyWithoutPropertiesInput";
import { Type } from "class-transformer";
import { AppointmentCreateNestedManyWithoutPropertiesInput } from "./AppointmentCreateNestedManyWithoutPropertiesInput";
import { EnumPropertyStatus } from "./EnumPropertyStatus";

@InputType()
class PropertyCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  address?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  agent?: string | null;

  @ApiProperty({
    required: false,
    type: () => AgentAssignmentCreateNestedManyWithoutPropertiesInput,
  })
  @ValidateNested()
  @Type(() => AgentAssignmentCreateNestedManyWithoutPropertiesInput)
  @IsOptional()
  @Field(() => AgentAssignmentCreateNestedManyWithoutPropertiesInput, {
    nullable: true,
  })
  agentAssignments?: AgentAssignmentCreateNestedManyWithoutPropertiesInput;

  @ApiProperty({
    required: false,
    type: () => AppointmentCreateNestedManyWithoutPropertiesInput,
  })
  @ValidateNested()
  @Type(() => AppointmentCreateNestedManyWithoutPropertiesInput)
  @IsOptional()
  @Field(() => AppointmentCreateNestedManyWithoutPropertiesInput, {
    nullable: true,
  })
  appointments?: AppointmentCreateNestedManyWithoutPropertiesInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  price?: number | null;

  @ApiProperty({
    required: false,
    enum: EnumPropertyStatus,
  })
  @IsEnum(EnumPropertyStatus)
  @IsOptional()
  @Field(() => EnumPropertyStatus, {
    nullable: true,
  })
  status?: "Option1" | null;
}

export { PropertyCreateInput as PropertyCreateInput };
