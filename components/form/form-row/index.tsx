// FormRow.tsx
import type { RowProps } from "antd";

import { Col, Row } from "antd";
import MyFormItem, { MyFormItemProps } from "../form-item";
import { MyFormOptions } from "../formComp";

interface FormRowProps {
  fields: MyFormOptions[];
  colProps?: { span: number; offset?: number }[];
  rowProps?: RowProps;
}

const FormRow: React.FC<FormRowProps> = ({ fields, colProps, rowProps }) => {
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <Row gutter={16} {...rowProps} {...fields[0]?.rowProps}>
      {fields.map((field: any, index) => {
        return (
          <Col
            key={field.name as string}
            // {...(colProps ? colProps[index] : { span: 24 / fields.length })}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            {...(fields[0]?.colProps ? fields[0]?.colProps[index] : { span: 24 / fields.length })}
          >
            <MyFormItem {...field} />
          </Col>
        );
      })}
    </Row>
  );
};

export default FormRow;
