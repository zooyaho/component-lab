import localFont from 'next/font/local';

// Pretendard 폰트 설정
export const pretendardRegular = localFont({
  src: '../public/fonts/Pretendard-Regular.woff2',
  weight: '400',
  variable: '--font-pretendard-regular',
});

export const pretendardSemiBold = localFont({
  src: '../public/fonts/Pretendard-SemiBold.woff2',
  weight: '600',
  variable: '--font-pretendard-semibold',
});

export const pretendardBold = localFont({
  src: '../public/fonts/Pretendard-Bold.woff2',
  weight: '700',
  variable: '--font-pretendard-bold',
});
