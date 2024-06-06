import * as graphql from "@nestjs/graphql";
import { InquiryResolverBase } from "./base/inquiry.resolver.base";
import { Inquiry } from "./base/Inquiry";
import { InquiryService } from "./inquiry.service";

@graphql.Resolver(() => Inquiry)
export class InquiryResolver extends InquiryResolverBase {
  constructor(protected readonly service: InquiryService) {
    super(service);
  }
}
