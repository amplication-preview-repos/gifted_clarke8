import * as graphql from "@nestjs/graphql";
import { FenceImageResolverBase } from "./base/fenceImage.resolver.base";
import { FenceImage } from "./base/FenceImage";
import { FenceImageService } from "./fenceImage.service";

@graphql.Resolver(() => FenceImage)
export class FenceImageResolver extends FenceImageResolverBase {
  constructor(protected readonly service: FenceImageService) {
    super(service);
  }
}
