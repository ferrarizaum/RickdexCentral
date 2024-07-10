import { Inter } from "next/font/google";
import { Card } from "@/components/Card/Card";
import { Sidebar } from "@/components/Sidebar/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <div>
          <Sidebar />
        </div>
        Welcome
      </div>
    </>
  );
}
