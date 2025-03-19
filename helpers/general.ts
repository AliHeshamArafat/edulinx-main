export const removeNullUndefined = (obj: any) => {
  const cleanedObj: any = {};

  Object.keys(obj).forEach((key) => {
    const value = obj[key];

    // If the value is neither null, undefined, nor an empty string, add it to the cleaned object
    if (value !== null && value !== undefined && value !== "") {
      if (Array.isArray(value)) {
        // Check if the array is empty
        if (value.length > 0) {
          // Recursively clean non-empty arrays
          cleanedObj[key] = value.map((item) =>
            typeof item === "object" && !(item instanceof Date) ? removeNullUndefined(item) : item
          );
        }
      } else if (typeof value === "object" && !Array.isArray(value) && !(value instanceof Date)) {
        // Recursively clean objects, but exclude Date objects
        cleanedObj[key] = removeNullUndefined(value);
      } else {
        cleanedObj[key] = value;
      }
    }
  });

  return cleanedObj;
};

export const formatDateString = (dateStr: string): string => {
  // Check if already in yyyy/mm/dd format
  if (/^\d{4}\/\d{2}\/\d{2}$/.test(dateStr)) {
    return dateStr;
  }

  const parts = dateStr.split("-");

  // If first part is a 4-digit year, it's yyyy-mm-dd format
  if (parts[0].length === 4) {
    const [year, month, day] = parts;
    const formattedMonth = month.padStart(2, "0");
    const formattedDay = day.padStart(2, "0");
    return `${year}/${formattedMonth}/${formattedDay}`;
  }

  // Otherwise it's dd-mm-yyyy format
  const [day, month, year] = parts;
  const formattedMonth = month.padStart(2, "0");
  const formattedDay = day.padStart(2, "0");
  return `${year}/${formattedMonth}/${formattedDay}`;
};
