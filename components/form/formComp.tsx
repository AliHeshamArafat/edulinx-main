import { Form, FormProps } from "antd";
import MyFormItem, { ControlTypes, InnerProps, MyFormItemProps } from "./form-item";
import { ReactNode } from "react";
import { Button } from "../Button";
import FormRow from "./form-row";

export interface MyFormOptions extends Array<MyFormItemProps<ControlTypes>> {}

export interface MyFormProps<T> extends FormProps<T> {
  fileds?: formFieldsType;
  showSubmit?: boolean;
  submitText?: string;
  submitStyleTw?: string;
  submitStyleContainerTw?: string;
  isTableForm?: boolean;
  onSumbit?: (data?: any) => void;
  children?: ReactNode;
  afterSubmit?: ReactNode;
  responsiveRows?: boolean;
  loadingButton?: boolean;
}

type _schemeType = {
  key?: string;
  label?: ReactNode;
  name?: string | any;
  type?: ControlTypes;
  options?: {
    label: string;
    value: any;
  }[];
  innerProps?: InnerProps[ControlTypes];
};

export type schemeType = _schemeType;
export type formFieldsType = (MyFormOptions | MyFormItemProps<ControlTypes>)[];

export default function FormComp<T>({
  fileds,
  showSubmit,
  submitText,
  submitStyleTw,
  submitStyleContainerTw,
  onSumbit,
  children,
  afterSubmit,
  responsiveRows = false,
  loadingButton,
  ...props
}: MyFormProps<T>) {
  return (
    <Form layout="vertical" {...props}>
      {fileds?.map((field) => {
        // @ts-ignore

        if (field?.length > 0) {
          if (responsiveRows) {
            // @ts-ignore
            return (
              // @ts-ignore
              <div key={field?.[0].name} className="grid grid-cols-1 md:grid-cols-2">
                {/* @ts-ignore */}
                {field.map((subField: MyFormItemProps<ControlTypes>) => (
                  <MyFormItem key={subField.name} {...subField} />
                ))}
              </div>
            );
          }
          // If not responsive, use FormRow as before
          {/* @ts-ignore */}
          return <FormRow key={field[0].name} fields={field} />;
        }

        return <MyFormItem key={(field as MyFormItemProps<ControlTypes>).name} {...field} />;
      })}

      {children}

      {showSubmit && (
        <MyFormItem className={submitStyleContainerTw}>
          <Button type="submit" className={submitStyleTw} onClick={onSumbit}>
            {submitText ?? "Submit"}
          </Button>
        </MyFormItem>
      )}

      {afterSubmit && afterSubmit}
    </Form>
  );
}
