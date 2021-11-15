import Featured from "components/Featured"
import { shallow } from "enzyme"
import { experience } from "../../testUtils"
import { currencySymbol } from "helpers/currencySymbol"

describe("Featured Tests", () => {
  const wrapper = shallow(<Featured featured={[experience, experience]} />)
  it("should exist", () => {
    expect(wrapper.exists()).toBeTruthy()
  })
  it("should contain an image block for featured images", () => {
    expect(
      wrapper
        .find("[data-testid='featuredImageBlock0']")
        .find("[data-testid='featuredImage0']")
        .exists()
    ).toBeTruthy()
    expect(
      wrapper
        .find("[data-testid='featuredImageBlock1']")
        .find("[data-testid='featuredImage1']")
        .exists()
    ).toBeTruthy()
  })
  it("should contain image with src as `url`", () => {
    expect(
      wrapper
        .find("[data-testid='featuredImageBlock0']")
        .find("[data-testid='featuredImage0']")
        .prop("src")
    ).toBe("LargeImageSrcUrl")
  })
  it("should contain image text as `Gothenburg winter guided tours`", () => {
    expect(
      wrapper
        .find("[data-testid='featuredImageBlock0']")
        .find("[data-testid='featuredImageText0']")
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
