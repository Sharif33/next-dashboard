import { handleInputZero } from "@/utils";

interface InputProps {
  type?: "number" | "text";
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const SalaryInput: React.FC<InputProps> = ({
  type = "number",
  value,
  onChange,
  className = "w-16",
  ...others
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      {...(type === "number" && { onInput: handleInputZero })}
      {...others}
      className={`py-1 px-2 border border-gray-300 rounded-md ${className}`}
    />
  );
};

export default SalaryInput;
