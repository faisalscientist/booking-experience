import Head from "next/head"
import { MetaProps } from "types/components"

const Meta = ({ title, description, keywords }: MetaProps) => {
  return (
    <Head>
      <title data-testid="title">{title}</title>
      <meta
        data-testid="description"
        name="description"
        content={description}
      />
      <meta data-testid="keywords" name="keywords" content={keywords} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

Meta.defaultProps = {
  title: "AKQA",
  keywords: "web development, nextjs, booking, experience",
  description: "Booking experience",
}

export default Meta
