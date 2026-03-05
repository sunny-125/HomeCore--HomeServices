import Image from "next/image";
import Link from "next/link";

function CategoryList({ categoryList }) {
  return (
    <div className="mx-4 md:mx-22 lg:mx-60 grid grid-cols-4 gap-4">
      {categoryList.length > 0
        ? categoryList.map((category) => (
            <Link href={'/search/'+category.name}

             key={category.id}

              className="flex flex-col items-center justify-center gap-2 bg-purple-100 p-5 rounded-lg cursor-pointer hover:scale-110 transition-all ease-in-out ">

              {category.icon?.url && (
                <Image
                  src={category.icon.url}
                  alt={category.name}
                  width={50}
                  height={50}
                />
              )}
              <h2 className="text-primary">{category.name}</h2>
            </Link>
          ))
        : [1, 2, 3, 4, 5, 6,7,8].map((item, index) => (
            <div
              key={index}
              className="h-[120px] w-full bg-slate-200 animate-pulse rounded-lg"
            ></div>
          ))}
    </div>
  );
}

export default CategoryList;







// mai isme change kar rha image chota dikh rha hai

