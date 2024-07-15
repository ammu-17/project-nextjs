import Image from "next/image";
import Link from "next/link";
import ProductCard from "./component/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>

      <Link href = '/users'>users</Link>
      <ProductCard/>
    </main>
  );
}
