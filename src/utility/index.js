export const fetchData = async () => {
  try {
    const res = await fetch('data.json');
    return res;
  } catch (error) {
    return error;
  }
};
