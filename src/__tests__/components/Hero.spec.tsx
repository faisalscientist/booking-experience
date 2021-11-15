import { shallow } from "enzyme"
import Hero from "components/Hero"
import { experience } from "../../../testUtils"

describe("Hero Tests", () => {
  const wrapper = shallow(<Hero hero={experience} />)
  it("should exist", () => {
    expect(wrapper.exists()).toBeTruthy()
  })
  it("should contain a hero image, title, subtitle and button", () => {
    expect(wrapper.find("[data-testid='heroImage']").exists()).toBeTruthy()
    expect(wrapper.find("[data-testid='heroTitle']").exists()).toBeTruthy()
    expect(wrapper.find("[data-testid='heroSubTitle']").exists()).toBeTruthy()
    expect(wrapper.find("[data-testid='heroButton']").exists()).toBeTruthy()
  })
})
