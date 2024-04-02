import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between p-24">
      <h1 className="h1-bold">Course NextJs 14 - Home</h1>
      <UserButton afterSignOutUrl="/" />
    </main>
  );
}
