import { Tag } from "@/types/tag";
import Image from "next/image";
import Link from "next/link";

export const ItemCard = ({
  title,
  tags,
  href,
  imageURL,
}: {
  title: string;
  tags: Tag[];
  href: string;
  imageURL: string;
}) => {
  return (
    <div className="hover:shadow-lg transition duration-500 aspect-video relative border rounded-md shadow-sm bg-card p-4">
      <div className="aspect-video relative border overflow-hidden rounded mb-2">
        <Image objectFit="cover" src={imageURL} alt="" fill />
      </div>
      <h2 className="text-sm font-semibold">
        <Link href={href} target="_blank">
          {title}
          <span className="absolute inset-0"></span>
        </Link>
      </h2>
      <div className="flex relative flex-wrap gap-2 mt-2 z-10">
        {tags.map((tag) => (
          <Link
            key={tag.id}
            href={`/${tag.id}`}
            className="border whitespace-nowrap text-muted-foreground bg-muted rounded text-xs px-1.5 py-1"
          >
            {tag.label}
          </Link>
        ))}
      </div>
    </div>
  );
};
