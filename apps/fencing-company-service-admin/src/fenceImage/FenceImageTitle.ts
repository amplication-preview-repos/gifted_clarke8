import { FenceImage as TFenceImage } from "../api/fenceImage/FenceImage";

export const FENCEIMAGE_TITLE_FIELD = "title";

export const FenceImageTitle = (record: TFenceImage): string => {
  return record.title?.toString() || String(record.id);
};
