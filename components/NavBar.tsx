import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex w-full h-20 bg-black">
      <div className="my-auto ml-5 text-4xl text-white">
        <Link href={"/"}>
          Movies<span className="pl-1 text-5xl text-red-600">+</span>
        </Link>
      </div>
    </div>
  );
}
