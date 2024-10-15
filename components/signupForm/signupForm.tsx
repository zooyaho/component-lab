'use client';
import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input, PasswordInput } from '@/components/common/input';
import Label from '@/components/common/label';
import { Button } from '@/components/common/button';
import FormHelper from '@/components/common/formHelper';
import { usePathname, useRouter } from 'next/navigation';
import { supabase } from '@/utils/supabaseClient';

export default function SignupForm() {
  const router = useRouter();
  const path = usePathname();

  const schema = yup.object().shape({
    email: yup
      .string()
      .email('이메일 형식으로 작성해주세요.')
      .required('이메일을 입력해주세요.'),
    password: yup.string().required('비밀번호를 입력해주세요.'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), undefined], '비밀번호가 일치하지 않습니다.')
      .required('비밀번호를 입력해주세요.'),
  });

  const {
    control,
    handleSubmit,
    reset,
    setError,
    formState: { isValid, isDirty },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { email: '', password: '', confirmPassword: '' },
    mode: 'onChange', // 유효성 검사 시기 설정
  });

  const onSubmitSignUp = async (formData: {
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    const { email, password } = formData;

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      // TODO :: toast메세지 설정
      console.error('회원가입 실패 >> ', error.message);

      if (error.code === 'user_already_exists') {
        reset();
        setError('email', { message: '이미 존재하는 유저입니다.' });
      }
    } else {
      router.push(`${path}/success`);
    }
  };

  return (
    <>
      <form
        className="flex flex-col gap-2 w-[35vw]  border-2 border-gray-200 rounded-md px-7 py-7"
        onSubmit={handleSubmit(onSubmitSignUp)}
      >
        <Label text={'email'} htmlFor={'email'} isRequired />
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <FormHelper
              status={
                fieldState.invalid
                  ? 'error'
                  : fieldState.isDirty
                    ? 'success'
                    : 'default'
              } // 유효성 검사 상태 반영
              errorText={fieldState.error?.message}
              helperText="이메일을 입력해주세요."
              successText="올바르게 입력했습니다."
              textLength={field.value?.length}
              maxLength={20}
            >
              <Input
                id="email"
                placeholder="이메일"
                status={
                  fieldState.invalid
                    ? 'error'
                    : fieldState.isDirty
                      ? 'success'
                      : 'default'
                } // 유효성 검사 상태 반영
                maxLength={20}
                {...field}
              />
            </FormHelper>
          )}
        />
        <Label text={'pw'} htmlFor={'password'} isRequired />
        <Controller
          name="password"
          control={control}
          render={({ field, fieldState }) => (
            <FormHelper
              status={
                fieldState.invalid
                  ? 'error'
                  : fieldState.isDirty
                    ? 'success'
                    : 'default'
              } // 유효성 검사 상태 반영
              errorText={fieldState.error?.message}
              helperText="비밀번호를 입력해주세요."
              successText="올바르게 입력했습니다."
              textLength={field.value?.length}
              maxLength={20}
            >
              <PasswordInput
                id="password"
                placeholder="비밀번호"
                status={
                  fieldState.invalid
                    ? 'error'
                    : fieldState.isDirty
                      ? 'success'
                      : 'default'
                } // 유효성 검사 상태 반영
                maxLength={20}
                {...field}
              />
            </FormHelper>
          )}
        />
        <Label text={'pw'} htmlFor={'confirmPassword'} isRequired />
        <Controller
          name="confirmPassword"
          control={control}
          render={({ field, fieldState }) => (
            <FormHelper
              status={
                fieldState.invalid
                  ? 'error'
                  : fieldState.isDirty
                    ? 'success'
                    : 'default'
              } // 유효성 검사 상태 반영
              errorText={fieldState.error?.message}
              helperText="비밀번호를 입력해주세요."
              successText="올바르게 입력했습니다."
              textLength={field.value?.length}
              maxLength={20}
            >
              <PasswordInput
                id="confirmPassword"
                placeholder="비밀번호"
                status={
                  fieldState.invalid
                    ? 'error'
                    : fieldState.isDirty
                      ? 'success'
                      : 'default'
                } // 유효성 검사 상태 반영
                maxLength={20}
                {...field}
              />
            </FormHelper>
          )}
        />
        <Button
          styleType="primary"
          type="submit"
          size="l"
          className="w-full mt-1"
          disabled={!isValid || !isDirty}
        >
          확인
        </Button>
      </form>
    </>
  );
}
