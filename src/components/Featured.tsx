import { currencySymbol } from "helpers/currencySymbol"
import Image from "next/image"
import Link from "next/link"
import { Booking } from "types/components"

const Featured = ({ featured }: { featured: Booking[] }) => {
  return (
    <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 js-show-on-scroll">
      {featured.map((feature, index) => (
        <div
          key={index}
          data-testid={`featuredImageBlock${index}`}
          className={`w-full ${index === 0 ? "md:w-4/12" : "md:w-8/12"}`}
        >
          <div className="relative w-full h-96 md:h-100 my-2">
            <Image
              data-testid={`featuredImage${index}`}
              alt={feature.title}
              src={feature.media.large?.url as string}
              layout="fill"
              quality={100}
              objectFit="cover"
            />
            <div
              className="h-full flex flex-col absolute justify-end text-white mx-5 md:mx-10 
            md:pb-10"
            >
              <div
                className="w-8/12 md:w-8/12 font-bold text-xl md:text-2xl font-fahkwang pb-5 md:pb-0"
                data-testid={`featuredImageText${index}`}
              >
                {feature.title}
              </div>
            </div>
          </div>
          <div className="font-mulish md:text-lg">
            <div
              className="mx-5 my-4 font-mulish md:text-lg w-11/12 md:w-8/12"
              dangerouslySetInnerHTML={{
                __html: feature.body?.replace(
                  /(?:\r\n|\r|\n)/g,
                  "<br>"
                ) as string,
              }}
            ></div>
            <div
              className="mx-5 my-5 md:my-10 w-full"
              data-testid={`price${index}`}
            >
              From
              {` ${currencySymbol[feature.price.currencyCode]}${
                feature.price.value
              } ${feature.price.unit}`}
            </div>
            <div className="w-full">
              <Link href={`/bookings/${feature.id}`}>
                <a>
                  <button
                    className="w-72 bg-black text-white px-3 py-3
        md:px-4 md:py-4 mt-3 font-fahkwang font-light text-md md:text-base"
                    data-testid="heroButton"
                  >
                    Book Experience
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Featured
