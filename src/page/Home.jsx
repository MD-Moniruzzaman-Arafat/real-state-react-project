import useAuth from '../hooks/useAuth';

export default function Home() {
  const { user } = useAuth();
  console.log(user);
  return (
    <>
      <h1>lorem100000</h1>
    </>
  );
}
