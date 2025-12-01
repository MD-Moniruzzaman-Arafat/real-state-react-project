import { useLoaderData } from 'react-router';
import Banner from '../components/Banner/Banner';
import FeaturedProperties from '../components/FeaturedProperties/FeaturedProperties';
import useAuth from '../hooks/useAuth';

export default function Home() {
  const { user } = useAuth();
  const data = useLoaderData();
  console.log(data);
  console.log(user);
  return (
    <div className="container mx-auto">
      <Banner data={data} />
      <FeaturedProperties data={data} />
    </div>
  );
}
