import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FenceImageServiceBase } from "./base/fenceImage.service.base";

@Injectable()
export class FenceImageService extends FenceImageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
