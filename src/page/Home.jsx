import Banner from '../components/Banner/Banner';
import FeaturedProperties from '../components/FeaturedProperties/FeaturedProperties';

export default function Home() {
  return (
    <div className="container mx-auto">
      <Banner />
      <FeaturedProperties />
    </div>
  );
}
