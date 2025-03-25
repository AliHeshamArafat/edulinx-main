interface UseFormDataSubmitOptions {
  fileFields?: string[];
}

export const useFormDataSubmit = (options: UseFormDataSubmitOptions = {}) => {
  const { fileFields = [] } = options;

  const convertToFormData = (values: any) => {
    const formData = new FormData();

    // Add all non-file fields to formData
    Object.keys(values).forEach((key) => {
      if (!fileFields.includes(key)) {
        formData.append(key, values[key]);
      }
    });

    // Handle file fields
    fileFields.forEach((fieldName) => {
      if (values[fieldName]?.fileList) {
        values[fieldName].fileList.forEach((file: any, index: number) => {
          formData.append(`${fieldName}[${index}]`, file.originFileObj);
        });
      }
    });

    return formData;
  };

  return { convertToFormData };
};
