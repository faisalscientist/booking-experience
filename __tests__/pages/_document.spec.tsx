import { shallow } from "enzyme"
import MyDocument from "pages/_document"

describe("Custom Document Test", () => {
  const props = {} as any
  const wrapper = shallow(<MyDocument {...props} />)
  it("should exist", () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
