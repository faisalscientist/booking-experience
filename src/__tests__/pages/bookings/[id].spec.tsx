import { shallow } from "enzyme"
import fetch from "jest-fetch-mock"
import Bookings, { getStaticPaths, getStaticProps } from "pages/bookings/[id]"
import { experience } from "../../../../testUtils"

describe("Home Page Test", () => {
  const useRouter = jest.spyOn(require("next/router"), "useRouter")
  beforeEach(() => {
    fetch.resetMocks()
  })

  it("should call json api", async () => {
    await getStaticPaths()
    const response = await getStaticProps({ params: { id: experience.id } })
    expect(response.props.booking).toEqual(expect.any(Object))
  })

  it("should pass props to components", async () => {
    const push = jest.fn()
    useRouter.mockImplementationOnce(() => ({
      push,
    }))
    const handleTicketQuantity = jest.fn()
    const submitBooking = jest.fn()
    handleTicketQuantity.mockImplementation((x = "adults", y: 5) => {
      console.log(x, y)
    })
    const wrapper = shallow(
      <Bookings
        booking={experience}
        tickets={{ adults: 1, children: 0 }}
        submitBooking={submitBooking}
        handleTicketQuantity={handleTicketQuantity}
      />
    )
    const booking = wrapper.find("Booking")
    const invokeHandleTicketQuantity = booking.prop(
      "handleTicketQuantity"
    ) as () => void
    invokeHandleTicketQuantity()
    const invokeSubmitBooking = booking.prop("submitBooking") as () => void
    invokeSubmitBooking()
    expect(push).toHaveBeenCalledTimes(1)
  })
})
