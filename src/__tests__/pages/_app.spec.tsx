import { shallow } from "enzyme"
import MyApp from "pages/_app"

describe("MyApp Tests", () => {
  const props = {} as any
  const wrapper = shallow(<MyApp {...props} />)
  it("should exist", () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
