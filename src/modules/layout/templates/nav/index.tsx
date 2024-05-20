import { Suspense } from "react"

import { listRegions } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import { User, ShoppingBag, MagnifyingGlassMini } from "@medusajs/icons"
import { Badge } from "@medusajs/ui"
import Marquee from "@modules/layout/components/Marquee"


export default async function Nav() {
  const regions = await listRegions().then((regions: any) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <div className="w-full mx-auto py-3 bg-[#edf2fa] font-medium ">
      <Marquee>
        <span className="w-full ml-auto">50% OFF MYSTERY BOX</span>
        <span className="mr-auto">FREE $70 BUNDLE</span>
      </Marquee>
      </div>
      <header className="relative h-16 mx-auto border-b duration-200 bg-[#001636] border-ui-border-base py-14">
        <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular text-white">
          {/* <img src="./public/hero2.png" alt="hero2"/> */}

          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="h-full">
              <SideMenu regions={regions} />
            </div>
          </div>



          <div className="flex items-center text-white mr-auto text-sm font-semibold">
            <LocalizedClientLink
              href="/"
              className="px-6"
            >
              {/* <Badge className="bg-[#ee702f] text-white border-none">Home</Badge> */}
              Home
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/shop"
              className="mr-6"
            >
              Shop All
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/rewards"
              className="mr-6"
            >
              Rewards
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/ambassadors"
              className="mr-6"
            >
              Ambassadors
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/contact"
              className=""
            >
              Contact Us
            </LocalizedClientLink>
          </div>



          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
              data-testid="nav-store-link"
            >
              {/* Medusa Store */}
            </LocalizedClientLink>
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              {process.env.FEATURE_SEARCH_ENABLED && (
                <LocalizedClientLink
                  className="hover:text-ui-fg-base"
                  href="/search"
                  scroll={false}
                  data-testid="nav-search-link"
                >
                  {/* Search */}
                  <MagnifyingGlassMini />
                </LocalizedClientLink>
              )}
              <LocalizedClientLink
                className="hover:text-ui-fg-base"
                href="/account"
                data-testid="nav-account-link"
              >
                {/* Account */}
                <User/>
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-ui-fg-base flex gap-2"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  Cart (0)
                  <ShoppingBag/>
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}
