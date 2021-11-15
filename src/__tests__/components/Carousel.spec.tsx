import { shallow } from "enzyme"
import { currencySymbol } from "helpers/currencySymbol"
import Carousel from "components/Carousel"
import { experience } from "../../../testUtils"

describe("Carousel Tests", () => {
  const wrapper = shallow(<Carousel carousels={[experience, experience]} />)
  it("should exist", () => {
    expect(wrapper.exists()).toBeTruthy()
  })
  it("should contain `Adventure awaits out there` title and `Get out and expreience Scandinavian way of living` sub-title", () => {
    expect(wrapper.find("[data-testid='carouselTitle']").text()).toBe(
      "Adventure awaits out there"
    )
    expect(wrapper.find("[data-testid='carouselSubTitle']").text()).toBe(
      "Get out and expreience Scandinavian way of living"
    )
  })
  it("should contain an image block for carousel images", () => {
    expect(
      wrapper
        .find("[data-testid='carouselImageBlock0']")
        .find("[data-testid='carouselImage0']")
        .exists()
    ).toBeTruthy()
    expect(
      wrapper
        .find("[data-testid='carouselImageBlock1']")
        .find("[data-testid='carouselImage1']")
        .exists()
    ).toBeTruthy()
  })
  it("should contain image with src as `url`", () => {
    expect(
      wrapper
        .find("[data-testid='carouselImageBlock0']")
        .find("[data-testid='carouselImage0']")
        .prop("src")
    ).toBe("SmallImageSrcUrl")
  })
  it("should contain image text as `Gothenburg winter guided tours`", () => {
    expect(
      wrapper
        .find("[data-testid='carouselImageBlock0']")
        .find("[data-testid='carouselImageText0']")
        .text()
    ).toBe("Gothenburg winter guided tours")
  })
  it("should contain experience price", () => {
    expect(wrapper.find("[data-testid='price0']").text()).toBe(
      `From ${currencySymbol[experience.price.currencyCode]}${
        experience.price.value
      } ${experience.price.unit}`
    )
  })
})
