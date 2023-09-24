import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center align-middle gap-10 ">
      <h1 className="text-center text-3xl">404</h1>
      <h2 className="text-center text-2xl">Page not found</h2>
      <Link href="/">
        Go back to home
      </Link>
    </div>
  );
}