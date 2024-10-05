export default function InputLabel({
  name,
  text,
  isRequired = false,
  className,
}: {
  name: string;
  text: string;
  isRequired?: boolean;
  className?: string;
}) {
  return (
    <label
      htmlFor={name}
      className={`text-start text-[15px] font-[500] ${className} `}
    >
      {text} {!isRequired && "(Optional)"}
      {/* {isRequired && <span className="text-[#E02B1D] font-[500]">*</span>} */}
    </label>
  );
}
