import { Button } from "@/components/ui/button";
import Link from "next/link";
import LocalSearch from "@/components/shared/search/LocalSearch";

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse items-center justify-between gap-6 px-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a question
          </Button>
        </Link>
      </div>
      <div className="mt-7 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearch />
      </div>
    </>
  );
}
