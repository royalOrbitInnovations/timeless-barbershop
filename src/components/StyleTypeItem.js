// StyleTypeItem.js
export default function StyleTypeItem({ item }) {
  return (
    <div className="my-2">
      <h3 className="text-lg font-bold mb-2">{item.name}</h3>
      <div className="flex flex-col gap-2 max-h-60 overflow-y-auto">
        {item.images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${item.name} ${idx + 1}`}
            className="w-full object-cover rounded"
          />
        ))}
      </div>
    </div>
  );
}
