"use client";

import { FormControl, FormField, FormLabel, FormMessage } from "./ui/form";
import { authFormSchema } from "@/lib/utils";
import { Form } from "react-hook-form";
import { z } from "zod";
interface CustomInput {
  control: Control<z.infer<typeof authFormSchema>>;
  name: string;
  label: string;
  placeholder: string;
}
const CustomInput = ({ control, name, label, placeholder }: CustomInput) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <input
                type="text"
                placeholder={placeholder}
                className="input-class"
                {...field}
              />
            </FormControl>
            <FormMessage className="form-message mt-2"></FormMessage>
          </div>
        </div>
      )}
    />
  );
};

export default CustomInput;
