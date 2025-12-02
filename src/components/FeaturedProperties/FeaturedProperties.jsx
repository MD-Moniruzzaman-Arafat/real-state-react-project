import { useLoaderData } from 'react-router';
import Card from '../Card/Card';

export default function FeaturedProperties() {
  const data = useLoaderData();

  return (
    <>
      <div className="container mx-auto my-20 px-5 lg:px-0">
        <h1 className="font-extrabold text-center text-5xl mb-10">
          Featured Properties
        </h1>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data?.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
