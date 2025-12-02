import { useLoaderData } from 'react-router';

export default function Details() {
  const find = useLoaderData();
  console.log(find);
  return (
    <>
      <div className="container mx-auto">
        <img className="rounded-2xl my-10" src={find?.image} alt="" />
        <div>
          <p>Title: {find?.estate_title}</p>
          <p>Description: {find?.description}</p>
          <p>Area: {find?.area}</p>
          <p>
            Facilities:{' '}
            {find?.facilities.map((f) => (
              <span key={f}>{f},</span>
            ))}
          </p>
          <p>Price: {find?.price}</p>
          <p>Status: {find?.status}</p>
          <p>Segment Name: {find?.segment_name}</p>
        </div>
      </div>
    </>
  );
}
