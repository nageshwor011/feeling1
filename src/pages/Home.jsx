import CategoryCard from "../components/CategoryCard";
import plant from "../assets/images/homeImg.jpg";
import { useGetAllCategories } from "../api/category";

export default function Home() {
  const { data: categories, isLoading } = useGetAllCategories();
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <div className="banner h-[164px] bg-slate-600"></div>
      <div className="mt-22 sm:mx-24  grid grid-cols-2 sm:grid-cols-4">
        {[...new Array(10)].map((category, i) => {
          return (
            <CategoryCard
              title={"  Tulin & Klussen"}
              imageUrl={plant}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
}
