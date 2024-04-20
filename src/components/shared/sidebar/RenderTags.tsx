import { popularTags } from "@/constants";
import { Badge } from "@/components/ui/badge";

const RenderTags = () => {
  return (
    <ul className="flex flex-col gap-[30px]">
      {popularTags.map((tag) => (
        <li
          key={tag.id}
          className="body-medium text-dark500_light700 flex justify-between"
        >
          <Badge className="subtle-medium background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase">
            {tag.title}
          </Badge>
          {tag.showCount && (
            <span className="small-medium text-dark500_light700">
              {tag.totalQuestion} +
            </span>
          )}
        </li>
      ))}
    </ul>
  );
};

export default RenderTags;
