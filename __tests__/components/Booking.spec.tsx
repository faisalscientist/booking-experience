import { shallow } from "enzyme"
import { currencySymbol } from "helpers/currencySymbol"
import Booking from "components/Booking"
import { experience } from "../../testUtils"

describe("Booking Tests", () => {
  const wrapper = shallow(
    <Booking
      booking={experience}
      tickets={{ adults: 1, children: 0 }}
      submitBooking={(): void => {
        /* tslint:disable:no-empty */
      }}
      handleTicketQuantity={(
        ticketType: string = "",
        value: number = 1
      ): void => {
        /* tslint:disable:no-empty */
      }}
    />
  )
  it("should exist", () => {
    expect(wrapper.exists()).toBeTruthy()
  })
  it("should exist", () => {
    expect(wrapper.exists()).toBeTruthy()
  })
  it("should contain an image block on booking page", () => {
    expect(
      wrapper
        .find("[data-testid='bookingImageBlock']")
        .find("[data-testid='bookingImage']")
        .exists()
    ).toBeTruthy()
  })
  it("should contain details of the experience", () => {
    expect(wrapper.find("[data-testid='bookingDetails']").text()).toBe("")
  })
  it("should contain image with src as `LargeImageSrcUrl`", () => {
    expect(
      wrapper
        .find("[data-testid='bookingImageBlock']")
        .find("[data-testid='bookingImage']")
        .prop("src")
    ).toBe("LargeImageSrcUrl")
  })
  it("should contain image with src as `SmallImageSrcUrl`", () => {
    delete experience?.media?.large
    const wrapper = shallow(
      <Booking
        booking={experience}
        tickets={{ adults: 1, children: 0 }}
        submitBooking={(): void => {
          /* tslint:disable:no-empty */
        }}
        handleTicketQuantity={(
          ticketType: string = "",
          value: number = 1
        ): void => {
          /* tslint:disable:no-empty */
        }}
      />
    )
    expect(
      wrapper
        .find("[data-testid='bookingImageBlock']")
        .find("[data-testid='bookingImage']")
        .prop("src")
    ).toBe("SmallImageSrcUrl")
  })
  it("should contain image title as `Gothenburg winter guided tours`", () => {
    expect(wrapper.find("[data-testid='imageTitle']").text()).toBe(
      "Gothenburg winter guided tours"
    )
  })
  it("should show a loader when book experience button is clicked`", () => {
    expect(
      wrapper.find("[data-testid='bookExperienceSpinner']").exists()
    ).toBeFalsy()
    const bookExperienceButton = wrapper.find(
      "[data-testid='bookExperienceButton']"
    )
    bookExperienceButton.simulate("click")
    expect(
      wrapper.find("[data-testid='bookExperienceSpinner']").exists()
    ).toBeTruthy()
  })
  it("should contain experience price", () => {
    expect(wrapper.find("[data-testid='price']").text()).toBe(
      `From ${currencySymbol[experience.price.currencyCode]}${
        experience.price.value
      } ${experience.price.unit}`
    )
  })
  it("should contain 2 ticket types", () => {
    expect(wrapper.find("[data-testid='ticketTypes']").length).toBe(2)
  })
  it("should contain `Adults` as ticket type name", () => {
    expect(wrapper.find("[data-testid='adultsTicketName']").text()).toBe(
      "adults"
    )
  })
  it("should contain `1` as adults ticket initial quantity", () => {
    expect(wrapper.find("[data-testid='adultsTicketValue']").text()).toBe("1")
  })
  it("should contain `Children` as ticket type name", () => {
    expect(wrapper.find("[data-testid='childrenTicketName']").text()).toBe(
      "children"
    )
  })
  it("should contain `0` as children's ticket initial quantity", () => {
    expect(wrapper.find("[data-testid='childrenTicketValue']").text()).toBe("0")
  })
  it("should trigger incrementing adult ticket quantity when incrementing button is clicked", () => {
    const handleTicketQuantity = jest.fn()
    handleTicketQuantity.mockImplementation((x, y) => {})
    let wrapper = shallow(
      <Booking
        booking={experience}
        tickets={{ adults: 1, children: 0 }}
        submitBooking={(): void => {
          /* tslint:disable:no-empty */
        }}
        handleTicketQuantity={handleTicketQuantity}
      />
    )
    const ticketIncrementalButton = wrapper.find(
      "[data-testid='adultsTicketIncrementalButton']"
    )
    const event = {
      ticketType: "adults",
      value: 1,
    }
    ticketIncrementalButton.simulate("click", event)
    expect(handleTicketQuantity).toHaveBeenCalledTimes(1)
  })
  it("should trigger decrementing adult ticket quantity when decrementing button is clicked", () => {
    const handleTicketQuantity = jest.fn()
    handleTicketQuantity.mockImplementation((x, y) => {})
    const wrapper = shallow(
      <Booking
        booking={experience}
        tickets={{ adults: 1, children: 0 }}
        submitBooking={(): void => {
          /* tslint:disable:no-empty */
        }}
        handleTicketQuantity={handleTicketQuantity}
      />
    )
    const ticketIncrementalButton = wrapper.find(
      "[data-testid='adultsTicketIncrementalButton']"
    )
    let event = {
      ticketType: "adults",
      value: 1,
    }
    ticketIncrementalButton.simulate("click", event)
    const ticketdecrementalButton = wrapper.find(
      "[data-testid='adultsTicketDecrementalButton']"
    )
    event = {
      ticketType: "adults",
      value: 1,
    }
    ticketdecrementalButton.simulate("click", event)
    expect(handleTicketQuantity).toHaveBeenCalledTimes(2)
  })
  it("should trigger incrementing children ticket quantity when incrementing button is clicked", () => {
    const handleTicketQuantity = jest.fn()
    handleTicketQuantity.mockImplementation((x, y) => {})
    const wrapper = shallow(
      <Booking
        booking={experience}
        tickets={{ adults: 1, children: 0 }}
        submitBooking={(): void => {
          /* tslint:disable:no-empty */
        }}
        handleTicketQuantity={handleTicketQuantity}
      />
    )
    const ticketIncrementalButton = wrapper.find(
      "[data-testid='childrenTicketIncrementalButton']"
    )
    const event = {
      ticketType: "children",
      value: 10,
    }
    ticketIncrementalButton.simulate("click", event)
    expect(handleTicketQuantity).toHaveBeenCalledTimes(1)
  })
  it("should trigger decrementing children ticket quantity when decrementing button is clicked", () => {
    const handleTicketQuantity = jest.fn()
    handleTicketQuantity.mockImplementation((x, y) => {})
    const wrapper = shallow(
      <Booking
        booking={experience}
        tickets={{ adults: 1, children: 0 }}
        submitBooking={(): void => {
          /* tslint:disable:no-empty */
        }}
        handleTicketQuantity={handleTicketQuantity}
      />
    )
    const ticketIncrementalButton = wrapper.find(
      "[data-testid='childrenTicketIncrementalButton']"
    )
    let event = {
      ticketType: "children",
      value: 1,
    }
    ticketIncrementalButton.simulate("click", event)
    const ticketdecrementalButton = wrapper.find(
      "[data-testid='childrenTicketDecrementalButton']"
    )
    event = {
      ticketType: "children",
      value: 1,
    }
    ticketdecrementalButton.simulate("click", event)
    expect(handleTicketQuantity).toHaveBeenCalledTimes(2)
  })
})
