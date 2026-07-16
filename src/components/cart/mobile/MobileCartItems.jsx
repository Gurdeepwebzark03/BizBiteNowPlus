import MobileCartItemCard from "./MobileCartItemCard";

const MobileCartItems = ({
  items = [],
  onIncrease,
  onDecrease,
  onRemove,
}) => {
  if (!items.length) return null;

  return (
    <section className="space-y-2.5">
      {items.map((item) => (
        <MobileCartItemCard
          key={item.id}
          item={item}
          onIncrease={() => onIncrease(item)}
          onDecrease={() => onDecrease(item)}
          onRemove={() => onRemove(item)}
        />
      ))}
    </section>
  );
};

export default MobileCartItems;