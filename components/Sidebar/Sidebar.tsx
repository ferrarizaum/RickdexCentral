import { useRouter } from "next/router";

export const Sidebar = () => {
  const router = useRouter();
  return (
    <>
      <div
        style={{
          flexDirection: "column",
          backgroundColor: "gray",
          padding: 50,
          height: "100vh",
        }}
      >
        <ul>
          <li onClick={() => router.push("/")}>Home</li>
          <li onClick={() => router.push("/characters")}>Characters</li>
        </ul>
      </div>
    </>
  );
};
