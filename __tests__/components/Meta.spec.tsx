import { shallow } from "enzyme"
import Meta from "components/Meta"

describe("Meta Tests", () => {
  const wrapper = shallow(
    <Meta title="title" description="description" keywords="keywords" />
  )
  it("should exist", () => {
    expect(wrapper.exists()).toBeTruthy()
  })
  it("should contain a meta element with specified content as `description`", () => {
    const description = wrapper.find("[data-testid='description']")
    expect(description.exists()).toBeTruthy()
    expect(description.prop("content")).toBe("description")
  })
  it("should contain a title element with specified title as `title`", () => {
    const title = wrapper.find("[data-testid='title']")
    expect(title.exists()).toBeTruthy()
    expect(title.text()).toBe("title")
  })
  it("should contain a meta element with specified keywords as `keywords`", () => {
    const keywords = wrapper.find("[data-testid='keywords']")
    expect(keywords.exists()).toBeTruthy()
    expect(keywords.prop("content")).toBe("keywords")
  })
})
