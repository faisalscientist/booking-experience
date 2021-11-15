export const sanityIoImageLoader = ({
  src,
  width,
  quality,
}: {
  src: string
  width: number | string
  quality?: number | string
}) => {
  return `https://cdn.sanity.io/${src}?w=${width}&q=${quality || 75}`
}
