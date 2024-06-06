import { FenceImageWhereInput } from "./FenceImageWhereInput";
import { FenceImageOrderByInput } from "./FenceImageOrderByInput";

export type FenceImageFindManyArgs = {
  where?: FenceImageWhereInput;
  orderBy?: Array<FenceImageOrderByInput>;
  skip?: number;
  take?: number;
};
