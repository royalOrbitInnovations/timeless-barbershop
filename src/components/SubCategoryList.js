// SubCategoryList.js
import StyleSubCategory from "./StyleSubCategory";

export default function SubCategoryList({ data }) {
  return (
    <div className="flex flex-col gap-4">
      {Object.entries(data).map(([code, group]) => (
        <StyleSubCategory key={code} code={code} data={group} />
      ))}
    </div>
  );
}
