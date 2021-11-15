import { shallow } from "enzyme"
import Home, { getStaticProps } from "pages"
import { experience } from "../../../testUtils"
import fetch from "jest-fetch-mock"

describe("Home Page Test", () => {
  beforeEach(() => {
    fetch.resetMocks()
  })

  it("should call json api", async () => {
    const response = await getStaticProps()
    expect(response.props.featured).toEqual(expect.any(Array))
    expect(response.props.carousels).toEqual(expect.any(Array))
  })

  it("should pass props to components", async () => {
    const wrapper = shallow(
      <Home featured={[experience, experience]} carousels={[experience]} />
    )
    expect(wrapper.find("Layout").exists()).toBeTruthy()
    expect(await wrapper.find("Hero").prop("hero")).toEqual(experience)
    expect(await wrapper.find("Featured").prop("featured")).toEqual([
      experience,
    ])
    expect(await wrapper.find("Carousel").prop("carousels")).toEqual([
      experience,
    ])
  })
})
