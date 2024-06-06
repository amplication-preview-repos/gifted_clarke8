import { Module } from "@nestjs/common";
import { FenceImageModuleBase } from "./base/fenceImage.module.base";
import { FenceImageService } from "./fenceImage.service";
import { FenceImageController } from "./fenceImage.controller";
import { FenceImageResolver } from "./fenceImage.resolver";

@Module({
  imports: [FenceImageModuleBase],
  controllers: [FenceImageController],
  providers: [FenceImageService, FenceImageResolver],
  exports: [FenceImageService],
})
export class FenceImageModule {}
