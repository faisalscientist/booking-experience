import Image from "next/image"
import Link from "next/link"
import { currencySymbol } from "helpers/currencySymbol"
import { Booking } from "types/components"

const Carousel = ({ carousels }: { carousels: Booking[] }) => {
  return (
    <div className="bg-gray-250 h-full px-10 js-show-on-scroll">
      <div className="font-mulish text-center pt-10">
        <div className="font-bold text-xl" data-testid="carouselTitle">
          Adventure awaits out there
        </div>
        <div className="my-1" data-testid="carouselSubTitle">
          Get out and expreience Scandinavian way of living
        </div>
      </div>
      <div className="py-10">
        <div className="flex overflow-x-auto flex-nowrap space-x-5 md:space-x-0 md:overflow-x-hidden md:grid md:grid-cols-4 md:gap-5">
          {carousels.map((carousel, index) => (
            <div
              key={index}
              className="flex flex-col bg-black min-w-16"
              data-testid={`carouselImageBlock${index}`}
            >
              <Image
                data-testid={`carouselImage${index}`}
                alt={carousel.title}
                src={carousel.media.small.url}
                width={carousel.media.small.width}
                height={carousel.media.small.height}
              />
              <div className="px-5 py-10 font-fahkwang text-white">
                <div data-testid={`carouselImageText${index}`}>
                  {carousel.title}
                </div>
                <div
                  className="mt-2 text-sm mb-5"
                  data-testid={`price${index}`}
                >
                  From
                  {` ${currencySymbol[carousel.price.currencyCode]}${
                    carousel.price.value
                  } ${carousel.price.unit}`}
                </div>
                <Link href={`/bookings/${carousel.id}`}>
                  <a>
                    <button
                      className="w-full text-black bg-white px-3 py-3
        md:px-4 md:py-4 mt-3 font-fahkwang font-light text-md md:text-base"
                      data-testid="heroButton"
                    >
                      Book Experience
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel
