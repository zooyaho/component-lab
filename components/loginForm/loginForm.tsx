"use client";
import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input, PasswordInput } from "@/components/common/input";
import Label from "@/components/common/label";
import { Button } from "@/components/common/button";
import FormHelper from "@/components/common/formHelper";

export default function LoginForm() {
  const schema = yup.object().shape({
    email: yup.string().email('이메일 형식으로 작성해주세요.').required('이메일을 입력해주세요.'),
    password: yup.string().required('비밀번호를 입력해주세요.'),
  });

  const { register, control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange', // 유효성 검사 시기 설정
  });

  return (
    <>
      <Label text={"email"} htmlFor={"email"} isRequired />
      <Controller
        name="email"
        control={control}
        render={({ field, fieldState }) => (
          <FormHelper
            status={fieldState.invalid ? 'error' : fieldState.isDirty ? 'success' : "default"} // 유효성 검사 상태 반영
            errorText={fieldState.error?.message}
            helperText="필수값 입니다."
            successText="올바르게 입력했습니다."
            textLength={field.value?.length}
            maxLength={20}
          >
            <Input
              id="email"
              placeholder="이메일"
              status={fieldState.invalid ? 'error' : fieldState.isDirty ? 'success' : "default"} // 유효성 검사 상태 반영
              maxLength={20}
              {...field}
            />
          </FormHelper>
        )}
      />
      <Label text={"pw"} htmlFor={"password"} isRequired />
      <Controller
        name="password"
        control={control}
        render={({ field, fieldState }) => (
          <FormHelper
            status={fieldState.invalid ? 'error' : fieldState.isDirty ? 'success' : "default"} // 유효성 검사 상태 반영
            errorText={fieldState.error?.message}
            helperText="필수값 입니다."
            successText="올바르게 입력했습니다."
            textLength={field.value?.length}
            maxLength={20}
          >
            <PasswordInput
              id="password"
              placeholder="비밀번호"
              status={fieldState.invalid ? 'error' : fieldState.isDirty ? 'success' : "default"} // 유효성 검사 상태 반영
              maxLength={20}
              {...field}
            />
          </FormHelper>
        )}
      />
    </>
  )
}