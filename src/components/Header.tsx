import { MenuIcon, ShoppingBagIcon, XIcon } from "@heroicons/react/outline"
import { HeaderProps } from "types/components"
import Link from "next/link"
import { Transition } from "@headlessui/react"

const Header = ({
  isDetails,
  toggleMenu,
  bookedItem,
  handleToggleMenuView,
}: HeaderProps) => {
  return (
    <header className="relative">
      <nav className="bg-white px-3 md:px-10 md:py-10 py-5 w-full">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <a>
              <div className="font-fahkwang text-base md:text-lg lg:text-xl hover:text-gray-500">
                Scandinavian Adventures
              </div>
            </a>
          </Link>
          {!isDetails ? (
            <>
              <div
                data-testid="navMenuItems"
                className="hidden md:flex mx-10 font-mulish items-center md:space-x-5 lg:space-x-20 md:text-lg lg:text-xl font-light"
              >
                {/* Navigations */}
                <Link href="/">
                  <a className="hover:text-gray-500">Experiences</a>
                </Link>
                <Link href="/">
                  <a className="hover:text-gray-500">Company</a>
                </Link>
                <Link href="/">
                  <a className="hover:text-gray-500">Support</a>
                </Link>
                <Link href="/">
                  <a className="hover:text-gray-500">
                    <ShoppingBagIcon className="w-10 h-11 lg:h-12 lg:w-12 text-gray-600" />
                    {bookedItem && (
                      <div
                        className="flex justify-center items-center"
                        data-testid="itemsInShoppingBag"
                      >
                        <div className="p-1 bg-red-500 w-3 h-3 rounded-full -mt-8 lg:-mt-9"></div>
                      </div>
                    )}
                  </a>
                </Link>
              </div>
              {/* Mobile button */}
              <div
                className="md:hidden block"
                data-testid="mobileMenuButton"
                onClick={handleToggleMenuView}
              >
                {!toggleMenu ? (
                  <MenuIcon
                    className="w-5 h-5 md:w-8 md:h-8"
                    data-testid="hamburgermenu"
                  />
                ) : (
                  <XIcon
                    data-testid="closeMenuIcon"
                    className="w-5 h-5 md:w-8 md:h-8"
                  />
                )}
              </div>
            </>
          ) : (
            <Link href="/" data-testid="closeDetailsPageIcon">
              <a className="hover:text-gray-500">
                <XIcon className="w-5 h-5 md:w-8 md:h-8" />
              </a>
            </Link>
          )}
        </div>
      </nav>
      {/* Mobile Menu */}
      <Transition
        show={toggleMenu}
        enter="duration-100 ease-in"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-0 scale-100"
        leave="duration-75 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div
          className={`h-screen font-fahkwang space-y-10 px-5 flex-col pt-48 fixed w-full z-10 bg-white ${
            toggleMenu ? "flex" : "hidden"
          } md:hidden`}
        >
          <div className="space-y-5 flex flex-col">
            <Link href="/">
              <a className="hover:text-gray-500">Experiences</a>
            </Link>
            <hr />
          </div>
          <div className="space-y-5 flex flex-col">
            <Link href="/">
              <a className="hover:text-gray-500">Company</a>
            </Link>
            <hr />
          </div>
          <div className="space-y-5 flex flex-col">
            <Link href="/">
              <a className="hover:text-gray-500">Support</a>
            </Link>
            <hr />
          </div>
          <div className="flex items-center justify-between">
            <Link href="/">
              <a className="hover:text-gray-500">Bookings</a>
            </Link>
            <div>
              <ShoppingBagIcon className="h-11 w-11 text-gray-600" />
              {bookedItem && (
                <div className="flex justify-center items-center">
                  <div className="p-1 bg-red-500 w-3 h-3 rounded-full -mt-8"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Transition>
    </header>
  )
}

export default Header
