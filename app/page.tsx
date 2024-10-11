import Link from 'next/link';

export default function Home() {
  return (
    <section className="flex items-center flex-col gap-5 w-screen h-screen mt-[40vh]">
      <h1 className="animate-sharrak title-l">Welcome My Component Lab</h1>
      <Link
        href={'/component-view'}
        className="border-2 border-mint-500 px-3 py-3 rounded-2xl text-mint-700 title-s hover:border-5 hover:text-mint-900 hover:border-mint-900"
      >
        시작하기!
      </Link>
    </section>
  );
}
