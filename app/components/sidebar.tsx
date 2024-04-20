import { Button } from "@/components/ui/button";
import { TAGS } from "@/lib/tag";
import Link from "next/link";

export const Sidebar = () => {
  return (
    <div className="hidden lg:block w-80 border-r">
      <div className="flex flex-col p-4">
        {TAGS.map((tag) => (
          <Button
            key={tag.id}
            variant="ghost"
            className="justify-start"
            asChild
          >
            <Link href={`/${tag.id}`}>{tag.label}</Link>
          </Button>
        ))}
      </div>
    </div>
  );
};
