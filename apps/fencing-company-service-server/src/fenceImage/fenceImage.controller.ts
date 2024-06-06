import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FenceImageService } from "./fenceImage.service";
import { FenceImageControllerBase } from "./base/fenceImage.controller.base";

@swagger.ApiTags("fenceImages")
@common.Controller("fenceImages")
export class FenceImageController extends FenceImageControllerBase {
  constructor(protected readonly service: FenceImageService) {
    super(service);
  }
}
