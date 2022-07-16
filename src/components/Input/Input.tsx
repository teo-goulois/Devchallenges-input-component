import React from "react";
import "./style.scss";

interface InputProps {
  error?: boolean;
  disabled?: boolean;
  helperText?: string;
  startIcon?: string;
  endIcon?: string;
  value?: string;
  size?: "sm" | "md";
  fullWidth?: boolean;
  multiline?: boolean;
  row?: number;
  hover?: boolean;
  focus?: boolean;
}

const Input = ({
  error = false,
  disabled = false,
  helperText,
  startIcon,
  endIcon,
  value,
  size = "md",
  fullWidth = false,
  multiline = false,
  row,
  hover,
  focus,
}: InputProps) => {
  const inputProps = {
    placeholder: "Placeholder",
    type: "text",
    defaultValue: value,
    disabled: disabled,
  };

  return (
    <div style={{width: '100%'}} className="input-container">
      <label
        className={` ${error && "error"} ${hover && "hover"} ${
          focus && "focus"
        }`}
        htmlFor="input"
      >
        Label
      </label>

      {multiline ? (
        <textarea {...inputProps} rows={row && row}></textarea>
      ) : (
        <div
          className={`${error ? "input-wrapper--error" : "input-wrapper"} ${
            hover && "hover"
          } ${focus && "focus"}  ${disabled && "input-wrapper--disabled"} ${
            size && size
          } ${fullWidth && "fullWidth"} 
          ${size && `input-wrapper--${size}`} 
          ${fullWidth && "input-wrapper--fullWidth"}`}
        >
          <span className="material-icons">{startIcon}</span>
          <input className={""} {...inputProps} />
          <span className="material-icons">{endIcon}</span>
        </div>
      )}

      <span className={`helpertext ${error && "error"}`}>{helperText}</span>
    </div>
  );
};

export default Input;
