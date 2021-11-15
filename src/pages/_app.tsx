import "/styles/globals.css"
import type { AppProps } from "next/app"
import "enzyme"
import { useEffect } from "react"

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Callback for IntersectionObserver
    const callback = function (entries: any) {
      entries.forEach((entry: any) => {
        // Is the element in the viewport?
        if (entry.isIntersecting) {
          // Add the fadeIn class:
          entry.target.classList.add("motion-safe:animate-fadeIn")
        } else {
          // Otherwise remove the fadein class
          entry.target.classList.remove("motion-safe:animate-fadeIn")
        }
      })
    }
    // Get all the elements you want to show on scroll
    const targets = document.querySelectorAll(".js-show-on-scroll")

    // Set up a new observer
    const observer = new IntersectionObserver(callback)

    // Loop through each of the target
    targets.forEach(function (target) {
      // Hide the element
      target.classList.add("opacity-0")

      // Add the element to the watcher
      observer.observe(target)
    })
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
