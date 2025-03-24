export type StudentApplicationCreate = {
  studentUuid: string;
  programUuid: string;
  timeSlotUuid: string;
};

export type StudentApplication = {
  uuid: string;
  dateCreated: string;
  status: string;
  status_Localized: string;
  studentUuid: string;
  programUuid: string;
  programName: string;
  timeSlotUuid: string;
};
