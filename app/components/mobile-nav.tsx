import { Button } from "@/components/ui/button";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { TAGS } from "@/lib/tag";
import { Menu } from "lucide-react";
import Link from "next/link";

export const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline">
          <Menu size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <div className="flex flex-col">
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
      </SheetContent>
    </Sheet>
  );
};
