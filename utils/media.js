export function getStrapiMedia(media) {
  return media?.url?.startsWith("/") ? `${process.env.REACT_APP_API_URL}${media?.url}` : media?.url
}

export const getImgServiceUrl = (service) => {
  return `${process.env.REACT_APP_AWS_S3}/services/${service?.code}`
}
