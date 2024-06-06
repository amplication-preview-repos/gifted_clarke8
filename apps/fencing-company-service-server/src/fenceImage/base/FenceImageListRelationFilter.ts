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
import { FenceImageWhereInput } from "./FenceImageWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class FenceImageListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => FenceImageWhereInput,
  })
  @ValidateNested()
  @Type(() => FenceImageWhereInput)
  @IsOptional()
  @Field(() => FenceImageWhereInput, {
    nullable: true,
  })
  every?: FenceImageWhereInput;

  @ApiProperty({
    required: false,
    type: () => FenceImageWhereInput,
  })
  @ValidateNested()
  @Type(() => FenceImageWhereInput)
  @IsOptional()
  @Field(() => FenceImageWhereInput, {
    nullable: true,
  })
  some?: FenceImageWhereInput;

  @ApiProperty({
    required: false,
    type: () => FenceImageWhereInput,
  })
  @ValidateNested()
  @Type(() => FenceImageWhereInput)
  @IsOptional()
  @Field(() => FenceImageWhereInput, {
    nullable: true,
  })
  none?: FenceImageWhereInput;
}
export { FenceImageListRelationFilter as FenceImageListRelationFilter };
