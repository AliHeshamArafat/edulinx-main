export type StudentApplicationCreate = {
  studentUuid: string;
  programUuid: string;
  timeSlotUuid: string;
};

// export type StudentApplication = {
//   uuid: string;
//   dateCreated: string;
//   status: string;
//   status_Localized: string;
//   studentUuid: string;
//   programUuid: string;
//   programName: string;
//   timeSlotUuid: string;
// };

export type StudentApplication = {
  uuid: string;
  dateCreated: string;
  status: string;
  status_Localized: string;
  studentUuid: string;
  programUuid: string;
  programName: string;
  program: {
    uuid: string;
    dateCreated: string;
    title_En: string;
    title_Ar: string;
    title_Localized: string;
    type: string;
    typeLocalized: string;
    fees: number;
    feesCurrency: string;
    currencyLocalized: string;
    duration: number;
    status: string;
    statusLocalized: string;
    startDate: string;
    expiryDate: string;
    description_En: string;
    description_Ar: string;
    description_Localized: string;
    note: string;
    enrolledStudents: number;
    ranking: number;
    photo: string;
    fieldUuid: string;
    fieldName: string;
    field: {
      uuid: string;
      dateCreated: string;
      name_En: string;
      name_Ar: string;
      name_Localized: string;
      logo: string;
    };
    universityUuid: string;
    universityName: string;
    universityLogo: string;
    university: {
      uuid: string;
      dateCreated: string;
      name_En: string;
      name_Ar: string;
      name_Localized: string;
      description_En: string;
      description_Ar: string;
      description_Localized: string;
      entryLevel: string;
      ranking: number;
      longitude: number;
      latitude: number;
      logo: string;
      photo: string;
      url: string;
      countryUuid: string;
      countryName: string;
      country: {
        uuid: string;
        dateCreated: string;
        name_En: string;
        name_Ar: string;
        name_Localized: string;
        abreviation: string;
        logo: string;
      };
      requirements: any[];
      ratingAndReviews: any[];
    };
  };
  timeSlotUuid: string;
  timeSlot: {
    uuid: string;
    dateCreated: string;
    startTime: string;
    endTime: string;
    occupied: boolean;
  };
};
