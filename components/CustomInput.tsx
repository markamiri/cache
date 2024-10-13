"use client";

import { FormControl, FormField, FormLabel, FormMessage } from "./ui/form";
import { authFormSchema } from "@/lib/utils";
import { FieldPath, Form } from "react-hook-form";
import { z } from "zod";
import { Control } from "react-hook-form";

const formSchema = authFormSchema("sign-up");
interface CustomInput {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
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
                type={name === "password" ? "password" : "text"}
                placeholder={placeholder}
                className="input-class p-3"
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
