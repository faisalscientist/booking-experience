import Header from "components/Header"
import { shallow } from "enzyme"

describe("Header Tests", () => {
  it("should exist", () => {
    const wrapper = shallow(renderComponent())
    expect(wrapper.exists()).toBeTruthy()
  })
  it("should have a hamburger menu icon on smaller screens", () => {
    const wrapper = shallow(renderComponent())
    expect(wrapper.find("[data-testid='hamburgermenu']").exists()).toBeTruthy()
  })
  it("should contain nav menu items with 4 links", () => {
    const wrapper = shallow(renderComponent())
    const navMenuItems = wrapper.find("[data-testid='navMenuItems']")
    expect(navMenuItems.exists()).toBeTruthy()
    expect(navMenuItems.children().length).toBe(4)
  })
  it("should not contain nav menu items when on details page. should rather have close button to return to previous page", () => {
    const wrapper = shallow(renderComponent(true))
    expect(
      wrapper.find("[data-testid='closeDetailsPageIcon']").exists()
    ).toBeTruthy()
  })
  it("should toggle mobile menu view when hamburger button is clicked", () => {
    const handleToggleMenuView = jest.fn()
    const wrapper = shallow(
      renderComponent(false, false, null, handleToggleMenuView)
    )
    const mobileMenuButton = wrapper.find("[data-testid='mobileMenuButton']")
    mobileMenuButton.simulate("click")
    expect(handleToggleMenuView).toHaveBeenCalled()
  })
  it("should show red circle in shopping bag when item exists in cart", () => {
    const wrapper = shallow(renderComponent(false, false, "cart"))
    expect(
      wrapper.find("[data-testid='itemsInShoppingBag']").exists()
    ).toBeTruthy()
  })
  it("should contain close icon when in mobile view menu is opened", () => {
    const wrapper = shallow(renderComponent(false, true))
    expect(wrapper.find("[data-testid='closeMenuIcon']").exists()).toBeTruthy()
  })
})

const renderComponent = (
  isDetails = false,
  toggleMenu = false,
  bookedItem: null | string = null,
  handleToggleMenuView = (type: string = "", value: number = 1): void => {
    /* tslint:disable:no-empty */
  }
): React.ReactElement => {
  return (
    <Header
      toggleMenu={toggleMenu}
      bookedItem={bookedItem}
      handleToggleMenuView={handleToggleMenuView}
      isDetails={isDetails}
    />
  )
}
