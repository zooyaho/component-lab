"use client";
import { FaRegCircleCheck } from "react-icons/fa6";
import { MdOutlineErrorOutline } from "react-icons/md";

interface FormHelperPropsType {
  status?: "default" | "error" | "success";
  errorText?: string;
  successText?: string;
  helperText?: string;
  maxLength?: number;
  textLength?: number;
}

export default function FormHelper({
  status = "default",
  errorText, // 에러 문구
  successText, // 성공 문구
  helperText, // 설명 문구
  textLength, // 현재 글자 수
  maxLength, // 최대 글자 수
  children
}: React.PropsWithChildren<FormHelperPropsType>) {
  let statusIcon;
  let showText = helperText;
  let statusColor;

  if (status === "error") {
    statusColor = "text-red";
    if (errorText) {
      showText = errorText;
      statusIcon = <MdOutlineErrorOutline />;
    }
  } else if (status === "success") {
    statusColor = "text-green";
    if (successText) {
      showText = successText;
      statusIcon = <FaRegCircleCheck />;
    }
  } else {
    showText = helperText;
    statusColor = "text-gray-500";
    statusIcon = undefined;
  }

  return (
    <div className="flex flex-col w-full gap-1">
      {children}
      <div className="flex w-full justify-between">
        <div className="flex w-fit gap-1 items-center">
          {/* 성공/에러 아이콘, 문구 표시 */}
          {statusIcon && <i className={statusColor}>{statusIcon}</i>}
          <p className={`label-s ${statusColor}`}>{showText}</p>
        </div>
        {/* 현재 글자 수 표시 */}
        {maxLength && <div className={`label-s ${statusColor}`}>{textLength || '0'}/{maxLength}</div>}
      </div>
    </div>
  );
}