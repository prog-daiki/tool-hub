import { ItemCard } from "@/components/item-card";
import { allItems, ItemType } from "@/data";

export default function Page({ params }: { params: { id: ItemType } }) {
  const currentItems = allItems[params.id] || [];

  if (currentItems.length === 0) {
    return (
      <p className="text-sm text-muted-foreground my-10">
        このページは存在しません
      </p>
    );
  }

  return (
    <div className="p-4 grid group grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-1">
      {currentItems.map((item) => (
        <ItemCard
          key={item.title}
          imageURL={item.imageURL}
          title={item.title}
          tags={item.tags}
          href={item.href}
        />
      ))}
    </div>
  );
}
