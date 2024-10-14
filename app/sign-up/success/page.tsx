import Link from 'next/link';

export default function SignUpSuccessPage() {
  return (
    <section className="h-[80vh] flex-center">
      <div className="flex-center flex-col gap-2">
        <p className="title-m text-mint-900">회원가입 성공!</p>
        <Link
          href="/login"
          className="flex-center w-fit px-3 py-1 rounded-md text-mint-600 bg-transparent border border-mint-600 hover:border-mint-800 hover:text-mint-800"
        >
          로그인 하러가기
        </Link>
      </div>
    </section>
  );
}
