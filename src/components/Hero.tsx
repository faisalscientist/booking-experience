import { currencySymbol } from "helpers/currencySymbol"
import { sanityIoImageLoader } from "helpers/imageLoader"
import Image from "next/image"
import Link from "next/link"
import { Booking } from "types/components"

const Hero = ({ hero }: { hero: Booking }) => {
  return (
    <div className="w-full block relative hero-sm md:hero-md font-mulish">
      <div
        className="h-full flex flex-col absolute z-10 top-0 
      left-0 justify-center text-white mx-5 md:mx-20"
      >
        <div
          className="w-9/12 md:w-full font-bold text-xl md:text-2xl"
          data-testid="heroTitle"
        >
          {hero.title}
        </div>
        <div
          className="mt-3 text-sm md:text-base font-light"
          data-testid="heroSubTitle"
        >
          From
          {` ${currencySymbol[hero.price.currencyCode]}${hero.price.value} ${
            hero.price.unit
          }`}
        </div>
        <Link href={`/bookings/${hero.id}`}>
          <a>
            <button
              className="w-8/12 md:w-7/12 bg-white px-3 py-3
        md:px-4 md:py-4 text-black mt-3 font-fahkwang font-light text-sm md:text-base"
              data-testid="heroButton"
            >
              Book Experience
            </button>
          </a>
        </Link>
      </div>
      <Image
        loader={sanityIoImageLoader}
        data-testid="heroImage"
        quality={100}
        layout="responsive"
        src={hero.media.large?.url as string}
        height={hero.media.large?.height}
        width={hero.media.large?.width}
        alt="Hero Image"
      />
    </div>
  )
}

export default Hero
