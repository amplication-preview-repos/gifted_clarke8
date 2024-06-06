import { Inquiry as TInquiry } from "../api/inquiry/Inquiry";

export const INQUIRY_TITLE_FIELD = "name";

export const InquiryTitle = (record: TInquiry): string => {
  return record.name?.toString() || String(record.id);
};
