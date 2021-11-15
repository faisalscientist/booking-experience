import Booking from "components/Booking"
import Layout from "components/Layout"
import Meta from "components/Meta"
import { GetStaticPropsContext } from "next"
import { useRouter } from "next/router"
import { useState } from "react"
import { BookingProps, Ticket } from "types/components"

export const getStaticPaths = async () => {
  const res = await fetch(
    `https://webdev-exercise.netlify.app/data/products.json`
  )
  const { featured, carousel } = await res.json()
  const bookings = [...featured, ...carousel.items]
  const paths = bookings.map((booking) => {
    return { params: { id: booking.id.toString() } }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const res = await fetch(
    `https://webdev-exercise.netlify.app/data/products.json`
  )
  const { featured, carousel } = await res.json()
  const bookings = [...featured, ...carousel.items]
  const booking = bookings.find((booking) => booking.id === context.params?.id)

  return {
    props: {
      booking,
    },
  }
}

const Bookings = ({ booking }: BookingProps) => {
  const router = useRouter()

  const [tickets, setTickets] = useState<Ticket>({ adults: 1, children: 0 })
  const handleTicketQuantity = (ticketType: string, value: number) => {
    setTickets((prevTicket) => {
      console.log(prevTicket, { [ticketType]: value })
      return { ...prevTicket, [ticketType]: value }
    })
  }
  const submitBooking = () => {
    const item = { id: booking.id, tickets }
    window.localStorage.setItem("bookedItem", JSON.stringify(item))
    router.push("/")
    return false
  }

  return (
    <Layout isDetails={true}>
      <>
        <Meta title="Booking" />
        <main>
          <div className="my-10 mx-5 md:mx-10">
            <Booking
              booking={booking}
              tickets={tickets}
              handleTicketQuantity={handleTicketQuantity}
              submitBooking={submitBooking}
            />
          </div>
        </main>
      </>
    </Layout>
  )
}

export default Bookings
