import { Button } from "@/components/ui/button";
import Link from "next/link";
import LocalSearch from "@/components/shared/search/LocalSearch";
import Filter from "@/components/shared/filter/Filter";
import { HomePageFilters } from "@/constants/filters";
import HomeFilters from "@/components/shared/home/HomeFilters";
import NoResult from "@/components/shared/NotResult";
import QuestionCard from "@/components/cards/QuestionCard";

export default function Home() {
  const questions = [
    {
      _id: "1",
      title: "Cascading Deletes in SQLAlchemy?",
      tags: [
        { _id: "1", name: "python" },
        { _id: "2", name: "sql" },
      ],
      author: {
        _id: "1",
        name: "John Doe",
        picture: "john-doe.jpg",
      },
      upvotes: 1500000,
      views: 500552,
      answers: [],
      createdAt: new Date("2023-09-01T12:00:00.000Z"),
    },
    {
      _id: "2",
      title: "How to center a div?",
      tags: [
        { _id: "3", name: "css" },
        { _id: "4", name: "html" },
      ],
      author: {
        _id: "2",
        name: "Jane Smith",
        picture: "jane-smith.jpg",
      },
      upvotes: 5,
      views: 50,
      answers: [],
      createdAt: new Date("2021-09-02T10:30:00.000Z"),
    },
  ];
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
        <LocalSearch
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for Questions"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClass="hidden max-md:flex"
        />
      </div>
      <HomeFilters />
      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There’s no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
