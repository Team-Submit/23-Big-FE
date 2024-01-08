import { useState } from "react";
import * as S from "./style";
import { Text } from "@/src/styles/text";
import { ErrorIcon, EyeCloseIcon, EyeOpenIcon } from "@/src/assets";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errorMessage?: string;
}

export const Input = ({
  label,
  errorMessage,
  type,
  maxLength,
  value,
  ...props
}: InputProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(true);

  return (
    <S.Container>
      <S.InputContainer>
        <S.HeadContainer>
          <label htmlFor={label}>{label}</label>
          {maxLength && (
            <Text fontStyle="BodyMedium14">
              {value?.toString().length}/{maxLength}
            </Text>
          )}
        </S.HeadContainer>
        <S.Input>
          <input
            maxLength={maxLength}
            value={value}
            id={label}
            type={type === "password" && !showPassword ? "password" : "string"}
            {...props}
          />
          {type === "email" ? (
            <Text fontStyle="BodySemiBold16">@dsm.hs.kr</Text>
          ) : type === "password" && (
            <div
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? <EyeOpenIcon /> : <EyeCloseIcon />}
            </div>
          )}
        </S.Input>
      </S.InputContainer>
      {errorMessage&&<S.ErrorContainer>
        <ErrorIcon/>
        <p>{errorMessage}</p>
        </S.ErrorContainer>}
    </S.Container>
  );
};
