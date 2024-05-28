import { Inter } from "next/font/google";
import { Card } from "@/components/Card/Card";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Card />
      </QueryClientProvider>
    </>
  );
}
