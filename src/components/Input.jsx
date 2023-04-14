import { useState } from "react";
import { useField } from "formik";

export default function Input({ placeHolder, type = "text", ...props }) {
  const [field, meta, helpers] = useField(props);
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <label className="relative">
      <input
        type={type}
        className={
          type === "password"
            ? `text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none text-ellipsis pr-10`
            : `text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none text-ellipsis`
        }
        placeholder={placeHolder}
        {...field}
        {...props}
      />
      {meta.error && meta.touched && <div>{meta.error}</div>}
      {type === "password" && field.value && (
        <button
          type="button"
          className={`absolute top-2 right-2 h-1/2 flex items-start text-xs font-semibold`}
          onClick={togglePasswordVisibility}
        >
          {showPassword ? "Show" : "Hide"}
        </button>
      )}
    </label>
  );
}
