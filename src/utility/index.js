export const fetchData = async () => {
  const res = await fetch('/data.json');
  const data = await res.json();
  return data;
};

export const detailsLoader = async ({ params }) => {
  const res = await fetch('/data.json');
  const data = await res.json();
  return data.find((item) => item.id === parseInt(params.id));
};
