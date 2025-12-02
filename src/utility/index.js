export const fetchData = async () => {
  try {
    const res = await fetch('data.json');
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const detailsLoader = async ({ params }) => {
  const res = await fetch('data.json');
  const data = await res.json();
  return data.find((item) => item.id === parseInt(params.id));
};
