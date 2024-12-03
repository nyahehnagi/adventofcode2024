export type IsSafeReport = {
  isValid: boolean;
  firstFailingIndex: number;
  secondFailingIndex: number;
};

export type IsSafeReportWithModifiedReport = {
  isValid: boolean;
  modifiedReport: number[];
};
