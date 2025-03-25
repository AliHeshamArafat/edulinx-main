import { UploadProps } from "antd";
import { getHeaders } from "@/helpers/api";
import { MyFormOptions } from "@/components/form/formComp";
import axios from "axios";

interface UseUploadAntdProps extends UploadProps {
  onUploadSuccess?: (response: any) => void;
  api?: string;
}

const useUploadAntd = ({ onUploadSuccess, api = "/account/profile-picture", ...props }: UseUploadAntdProps) => {
  const uploadProps: UploadProps = {
    name: "profilePictureFile",
    customRequest: async (options) => {
      const { file, onSuccess, onError } = options;
      const formData = new FormData();
      formData.append('profilePictureFile', file);
      
      try {
        const response = await axios.put(
          `${process.env.NEXT_PUBLIC_BASE_URL}${api}`,
          formData,
          { headers: getHeaders() }
        );
        onSuccess?.(response.data);
        onUploadSuccess?.(response.data);
      } catch (error) {
        onError?.(error as any);
      }
    },
    maxCount: 1,
    ...props,
  };

  const fields: MyFormOptions = [
    {
      name: "profilePictureFile",
      type: "file",
      label: "Image",
      innerProps: uploadProps,
    },
  ];

  return { uploadProps, fields };
};

export default useUploadAntd;
