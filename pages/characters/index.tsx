import { Inter } from "next/font/google";
import { Card } from "@/components/Card/Card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Card />
    </>
  );
}
