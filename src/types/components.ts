import { ReactElement } from "react"

export type MetaProps = {
  title: string
  keywords: string
  description: string
}

export type HomeProps = {
  featured: Booking[]
  carousels: Booking[]
}

export type HeaderProps = {
  isDetails?: boolean
  toggleMenu: boolean
  bookedItem: string | null
  handleToggleMenuView: () => void
}

export type LayoutProps = {
  isDetails?: boolean
  children: ReactElement
}

export type Booking = {
  id: string
  title: string
  body?: string
  guidedTour?: boolean
  media: {
    large?: {
      url: string
      width: number
      height: number
    }
    small: {
      url: string
      width: number
      height: number
    }
  }
  price: {
    value: number
    currencyCode: string
    unit: string
  }
}

export type BookingProps = {
  booking: Booking
  tickets: Ticket
  handleTicketQuantity: (ticketType: string, value: number) => void
  submitBooking: () => void
}
export type Ticket = {
  adults: number
  children: number
}
