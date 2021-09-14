import Link from "next/link";

export default function contact() {
  return (
    <>
      <h1>Contact</h1>
      <Link href="/index">
        <button>Volver a about</button>
      </Link>
    </>
  );
}
