import Image from "next/image";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Control } from "react-hook-form";

import { Input } from "./ui/input";

import { CalendarIcon } from "lucide-react";
import { Checkbox } from "./ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Select, SelectContent, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";

export enum FormFieldType {
  INPUT = "input",
  TEXTAREA = "textarea",
  PHONE_INPUT = "phoneInput",
  CHECKBOX = "checkbox",
  DATE_PICKER = "datePicker",
  SELECT = "select",
  SKELETON = "skeleton",
  RADIO = "radio",
}

interface CustomProps {
  control: Control<any>;
  name: string;
  label?: string;
  placeholder?: string;
  iconSrc?: string;
  iconAlt?: string;
  disabled?: boolean;
  type?: string;
  value?: string;
  dateFormat?: string;
  showTimeSelect?: boolean;
  checked?: boolean;
  children?: React.ReactNode;
  onCheckedChange?: (name: string) => void;
  renderSkeleton?: (field: any) => React.ReactNode;
  fieldType: FormFieldType;
  defaultValue?: string;
}

const RenderInput = ({ field, props }: { field: any; props: CustomProps }) => {
  switch (props.fieldType) {
    case FormFieldType.INPUT:
      return (
        <div className="flex rounded-md border border-primary bg-background  ">
          {props.iconSrc && (
            <Image
              src={props.iconSrc}
              height={24}
              width={24}
              alt={props.iconAlt || "icon"}
              className="ml-2"
            />
          )}
          <FormControl>
            <Input
              type={props.type || "text"}
              placeholder={props.placeholder}
              {...field}
              className={`border-0 ${
                props.disabled ? "font-medium text-default-900 " : ""
              }`}
              disabled={props.disabled}
            />
          </FormControl>
        </div>
      );

    case FormFieldType.TEXTAREA:
      return (
        <FormControl>
          <Textarea
            placeholder={props.placeholder}
            {...field}
            className=" "
            disabled={props.disabled}
          />
        </FormControl>
      );

    case FormFieldType.CHECKBOX:
      return (
        <FormControl>
          <div className="flex items-center gap-4">
            <Checkbox
              id={props.name}
              checked={props.checked}
              onCheckedChange={(isChecked) => {
                // Call parent handler to ensure only one is checked at a time
                if (props.onCheckedChange) {
                  props.onCheckedChange(props.name);
                }
                field.onChange(isChecked);
              }}
            />
            <label htmlFor={props.name} className="checkbox-label">
              {props.label}
            </label>
          </div>
        </FormControl>
      );

    case FormFieldType.DATE_PICKER:
      return (
        <div className="flex rounded-md border border-primary bg-background items-center z-[9999]">
          <div className="ml-2 w-6 h-6">
            <CalendarIcon className="text-default-600" />
          </div>

          <FormControl>
            <ReactDatePicker
              selected={field.value}
              onChange={(
                date: Date | null,
                event?:
                  | React.MouseEvent<HTMLElement>
                  | React.KeyboardEvent<HTMLElement>
              ) => {
                field.onChange(date);
              }}
              placeholderText={props.placeholder}
              dateFormat={props.dateFormat ?? "MM/dd/yyyy"}
              wrapperClassName="date-picker   "
            />
          </FormControl>
        </div>
      );
    case FormFieldType.SELECT:
      return (
        <div className="flex rounded-md      bg-background items-center z-[9999]">
          <FormControl>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger size="lg">
                  <SelectValue
                    placeholder={props.defaultValue || props.placeholder}
                  />
                </SelectTrigger>
              </FormControl>
              <SelectContent className="  z-[9999]">
                {props.children}
              </SelectContent>
            </Select>
          </FormControl>
        </div>
      );
    case FormFieldType.SKELETON:
      return props.renderSkeleton ? props.renderSkeleton(field) : null;
    default:
      return null;
  }
};

const CustomFormField = (props: CustomProps) => {
  const { control, name, label } = props;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1 w-full">
          {props.fieldType !== FormFieldType.CHECKBOX && label && (
            <FormLabel className="shad-input-label">{label}</FormLabel>
          )}
          <RenderInput field={field} props={props} />

          <FormMessage className="shad-error" />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
