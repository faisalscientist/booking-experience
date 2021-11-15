import { BookingProps } from "types/components"
import Image from "next/image"
import { currencySymbol } from "helpers/currencySymbol"
import { MinusIcon, PlusIcon } from "@heroicons/react/outline"
import { useState } from "react"

const Booking = ({
  booking,
  tickets,
  handleTicketQuantity,
  submitBooking,
}: BookingProps) => {
  const [loader, setLoader] = useState<boolean>(false)
  const total =
    tickets.adults * booking.price.value +
    tickets.children * booking.price.value
  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
        <div className={`w-full md:w-8/12`}>
          <div
            className="relative w-full h-96 md:h-100 my-2"
            data-testid="bookingImageBlock"
          >
            <Image
              priority
              data-testid="bookingImage"
              alt={booking.title}
              quality={100}
              src={
                booking.media.large
                  ? booking.media.large.url
                  : booking.media.small.url
              }
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className={`md:w-4/12`}>
          <div className="flex flex-col">
            <div className="w-8/12 md:w-6/12 font-mulish">
              <div
                className="font-bold text-xl mb-5 md:text-2xl"
                data-testid="imageTitle"
              >
                {booking.title}
              </div>
              <div className="mb-5 md:mb-14" data-testid="price">
                From
                {` ${currencySymbol[booking.price.currencyCode]}${
                  booking.price.value
                } ${booking.price.unit}`}
              </div>
              {Object.keys(tickets).map((ticket: string) => (
                <div
                  key={ticket}
                  className="flex flex-col mb-8 md:mb-10"
                  data-testid="ticketTypes"
                >
                  <div
                    className="mb-1 capitalize"
                    data-testid={`${ticket}TicketName`}
                  >
                    {ticket}
                  </div>
                  <div className="w-full md:w-8/12 flex justify-between space-x-3">
                    <button
                      className="w-3/12 bg-black text-white flex justify-center p-2"
                      data-testid={`${ticket}TicketDecrementalButton`}
                      onClick={() => {
                        handleTicketQuantity(
                          ticket,
                          (tickets as unknown as { [id: string]: number })[
                            ticket
                          ] === (ticket === "adults" ? 1 : 0)
                            ? ticket === "adults"
                              ? 1
                              : 0
                            : //testline
                              (
                                tickets as unknown as {
                                  [id: string]: number
                                }
                              )[ticket] - 1
                        )
                      }}
                    >
                      <MinusIcon className="h-6 w-6" />
                    </button>
                    <div
                      className="w-6/12 border border-black flex justify-center items-center"
                      data-testid={`${ticket}TicketValue`}
                    >
                      {(tickets as unknown as { [id: string]: number })[ticket]}
                    </div>
                    <button
                      className="w-3/12 bg-black text-white flex justify-center p-2"
                      data-testid={`${ticket}TicketIncrementalButton`}
                      onClick={() =>
                        handleTicketQuantity(
                          ticket,
                          (tickets as unknown as { [id: string]: number })[
                            ticket
                          ] + 1
                        )
                      }
                    >
                      <PlusIcon className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              ))}
              <div className="div mb-5 mt-10">
                Total {`${currencySymbol[booking.price.currencyCode]}${total}`}
              </div>
              <div className="w-full">
                <button
                  data-testid="bookExperienceButton"
                  className="w-80 md:w-72 bg-black text-white px-3 py-3
        md:px-4 md:py-4 mt-3 font-light text-md md:text-base"
                  onClick={() => {
                    setLoader(true)
                    submitBooking()
                  }}
                >
                  <div className="flex justify-center items-center space-x-5">
                    <div>Book Experience</div>
                    {loader && (
                      <div
                        className="flex justify-center items-center"
                        data-testid="bookExperienceSpinner"
                      >
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                      </div>
                    )}
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-14">
        <div
          data-testid="bookingDetails"
          className="my-4 font-mulish md:text-lg w-11/12 md:w-6/12"
          dangerouslySetInnerHTML={{
            __html: booking.body?.replace(/(?:\r\n|\r|\n)/g, "<br>") as string,
          }}
        ></div>
      </div>
    </div>
  )
}

export default Booking
