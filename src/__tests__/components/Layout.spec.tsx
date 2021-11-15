import { shallow, ShallowWrapper } from "enzyme"
import Layout from "components/Layout"
import React from "react"

describe("Layout Tests", () => {
  let wrapper: ShallowWrapper

  beforeEach(() => {
    wrapper = shallow(
      <Layout>
        <></>
      </Layout>
    )
  })

  it("should exist", () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it("should call setToggleMenu state", () => {
    const setStateMock = jest.fn()
    const useStateMock: any = (useState: any) => [useState, setStateMock]
    jest.spyOn(React, "useState").mockImplementation(useStateMock)
    let header = wrapper.find("Header")
    expect(header.prop("toggleMenu")).toBeFalsy()
    const invokeHandleToggleMenuView = header.prop(
      "handleToggleMenuView"
    ) as () => void
    invokeHandleToggleMenuView()
    header = wrapper.find("Header")
    expect(header.prop("toggleMenu")).toBeTruthy()
    expect(
      header.dive().find("[data-testid='itemsInShoppingBag']").exists()
    ).toBeFalsy()
  })
})
