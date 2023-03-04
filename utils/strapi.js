export const formatStrapiObj = (field) => {
  const obj = (field?.data ? field?.data : field) || {};
  if (!obj?.id) {
    return null
  }
  return {
    ...obj.attributes,
    id: obj?.id,
  };
};

export const formatStrapiArr = (field) => {
  return (
    Array.isArray(field?.data) &&
    field?.data?.map((obj) => formatStrapiObj(obj))
  );
};
