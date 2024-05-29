import { Product } from "@medusajs/medusa"
import { Metadata } from "next"

import { getCollectionsList, getProductsList, getRegion } from "@lib/data"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { ProductCollectionWithPreviews } from "types/global"
import { cache } from "react"
import Image from "next/image"
import Gamepad from "@modules/common/icons/gamepad"
import Reading from "@modules/common/icons/reading"
import House from "@modules/common/icons/house"
import Thumbnail from "@modules/products/components/thumbnail"
import Woolen from "@modules/common/icons/woolen"
import Enjoyment from "@modules/common/icons/enjoyment"
import Feather from "@modules/common/icons/feather"
import Disability from "@modules/common/icons/disability"
import Improve from "@modules/common/icons/Improve"
import { Button } from "@medusajs/ui"


export const metadata: Metadata = {
  title: "Medusa Next.js Starter Template",
  description:
    "A performant frontend ecommerce starter template with Next.js 14 and Medusa.",
}

const getCollectionsWithProducts = cache(
  async (
    countryCode: string
  ): Promise<ProductCollectionWithPreviews[] | null> => {
    const { collections } = await getCollectionsList(0, 3)

    if (!collections) {
      return null
    }

    const collectionIds = collections.map((collection) => collection.id)

    await Promise.all(
      collectionIds.map((id) =>
        getProductsList({
          queryParams: { collection_id: [id] },
          countryCode,
        })
      )
    ).then((responses) =>
      responses.forEach(({ response, queryParams }) => {
        let collection

        if (collections) {
          collection = collections.find(
            (collection) => collection.id === queryParams?.collection_id?.[0]
          )
        }

        if (!collection) {
          return
        }

        collection.products = response.products as unknown as Product[]
      })
    )

    return collections as unknown as ProductCollectionWithPreviews[]
  }
)

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const collections = await getCollectionsWithProducts(countryCode)
  const region = await getRegion(countryCode)

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <Hero />

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 text-center md:px-42">
            <div className="sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">As Featured on</h2>
              {/* <Thumbnail size="large" thumbnail={'/fratured.png'}/> */}
              {/* <Image src="/fratured.png" alt="fratured" width={20} height={20} /> */}
            </div>
            <div className="sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">SHARK TANK</h2>
            </div>
            <div className="sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">LAWEEKLY</h2>
            </div>
            <div className="sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">THEGAMER</h2>
            </div>
          </div>
        </div>
      </section>

      <div className="py-12">
        <div className="flex flex-col text-center w-full mb-12 text-black">
          <h1 className="sm:text-3xl md:text-4xl font-bold title-font mb-4">Shop the Valari</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">No matter your tastes or budget, we have a Valari for you...</p>
        </div>
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div>




      <section className="text-gray-600 body-font">
        <div className="container px-5 md:px-28 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-col text-center w-full mb-12 text-black">
            <h1 className="sm:text-3xl md:text-4xl font-bold title-font mb-4">Elevate Your Couch Experience</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Unmatched support and comfort with Valari</p>
          </div>
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <Image alt="feature" className="object-cover object-center h-full w-full" width={100} height={100} src="https://dummyimage.com/460x500"/>
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div className="flex flex-row mb-10 lg:items-start items-center">
              <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-[#001636] text-white mb-5">
                <Improve className="w-8 h-8"/>
              </div>
              <h2 className="text-gray-900 text-xl title-font font-bold pl-8 py-2">Improved Posture</h2>
            </div>
            <div className="flex flex-row mb-10 lg:items-start items-center">
              <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-[#001636] text-white mb-5">
                <Feather className="w-8 h-8"/>
              </div>
              <h2 className="text-gray-900 text-xl title-font font-bold pl-8 py-2">Better Comfort</h2>
            </div>
            <div className="flex flex-row mb-10 lg:items-start items-center">
              <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-[#001636] text-white mb-5">
                <Enjoyment className="w-10 h-10" />
              </div>
              <h2 className="text-gray-900 text-xl title-font font-bold pl-8 py-2">More Enjoyment Of The Thing You Love</h2>
            </div>
            <div className="flex flex-row mb-10 lg:items-start items-center">
              <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-[#001636] text-white mb-5">
                <Disability className="w-10 h-10" />
              </div>
              <h2 className="text-gray-900 text-xl title-font font-bold pl-8 py-2">Reduce Chronic Pain From Injury Or Disability</h2>
            </div>
          </div>
        </div>
      </section>











<section className="text-gray-600 body-font">
  <div className="container px-5 md:px-28 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12 text-black">
      <h1 className="sm:text-3xl md:text-4xl font-bold title-font mb-4">What Customers Like You Are Saying</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Rated 4.9/5 by 32,124+ Happy Customers</p>
    </div>
    <div className="flex flex-wrap -m-4">

      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image className="lg:h-48 md:h-36 w-full object-cover object-center" width={100} height={100} src="https://dummyimage.com/720x400" alt="blog"/>
          <div className="p-6 text-center">
            <h2 className="tracking-widest text-xs title-font font-bold text-gray-400 mb-1">CATEGORY</h2>
            <h1 className="title-font text-lg font-bold text-gray-900 mb-3">Deanna L.</h1>
            <p className="leading-relaxed mb-3">This is the best purchase of my life honestly. I have a pinched nerve in my neck and carpal tunnel in both my wrists. For years, I been trying to game with pillows tucked under my arms like I am guarding a football. The Valari has changed everything for me!</p>
          </div>
        </div>
      </div>

      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image className="lg:h-48 md:h-36 w-full object-cover object-center" width={100} height={100} src="https://dummyimage.com/721x401" alt="blog"/>
          <div className="p-6 text-center">
            <h2 className="tracking-widest text-xs title-font font-bold text-gray-400 mb-1">CATEGORY</h2>
            <h1 className="title-font text-lg font-bold text-gray-900 mb-3">Nigel G.</h1>
            <p className="leading-relaxed mb-3">Brilliant for gaming so comfortable and very supportive, has a lot more substance to it then using a pregnancy pillow or similar, use all the time for long periods of gaming and no discomfort in my wrists where I had a previous injury.</p>
          </div>
        </div>
      </div>

      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image className="lg:h-48 md:h-36 w-full object-cover object-center" width={100} height={100} src="https://dummyimage.com/722x402" alt="blog"/>
          <div className="p-6 text-center">
            <h2 className="tracking-widest text-xs title-font font-bold text-gray-400 mb-1">CATEGORY</h2>
            <h1 className="title-font text-lg font-bold text-gray-900 mb-3">Tom C.</h1>
            <p className="leading-relaxed mb-3">The Valari Pillow is such a phenomenal product and idea that has been brought to life! Talk about helping your wrists and arms while gaming. The covers make it even better when you can wash them and also add your own personal touch.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>










<section className="text-gray-600 body-font">
  <div className="container px-5 md:px-28 py-24 mx-auto flex flex-wrap">
    
    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pr-12 lg:text-left text-center">
      <div className="flex flex-col mb-10 lg:items-start items-center">
        <div className="flex flex-row">
          <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-[#001636] text-white mb-5">
            <Gamepad className="w-10 h-10" />
          </div>
          <h2 className="text-gray-900 text-xl title-font font-bold pl-5 py-4">Gaming</h2>
        </div>
        <div className="flex-grow">
          <p className="leading-relaxed text-base text-black">Elevate  your gaming sessions on console, mobile or PC</p>
        </div>
      </div>

      <div className="flex flex-col mb-10 lg:items-start items-center">
        <div className="flex flex-row">
        <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-[#001636] text-white mb-5">
          <Woolen className="w-10 h-10"/>
        </div>
        <h2 className="text-gray-900 text-xl title-font font-bold pl-5 py-4">Crochet</h2>
        </div>
        <div className="flex-grow">
          <p className="leading-relaxed text-base text-black">Indulge in your crafting passion whether, crocheting, knitting or cross-stitching</p>
        </div>
      </div>

      <div className="flex flex-col mb-10 lg:items-start items-center">
        <div className="flex flex-row">
        <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-[#001636] text-white mb-5">
          {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg> */}
          <House className="w-10 h-10"/>
        </div>
        <h2 className="text-gray-900 text-xl title-font font-bold pl-5 py-4">Working From Home</h2>
        </div>
        <div className="flex-grow">
          <p className="leading-relaxed text-base text-black">Experience a more ergonomic and productive workday from the comfort of your sofa or work desk</p>
        </div>
      </div>

      <div className="flex flex-col mb-10 lg:items-start items-center">
        <div className="flex flex-row">
        <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-[#001636] text-white mb-5">
          <Reading className="w-10 h-10" />
        </div>
        <h2 className="text-gray-900 text-xl title-font font-bold pl-5 py-4">Reading</h2>
        </div>
        <div className="flex-grow">
          <p className="leading-relaxed text-base text-black">Delve into the world of literature with Valari, your cozy reading partner</p>
        </div>
      </div>

    </div>

    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
      <h1 className="font-bold text-black text-2xl md:text-4xl">Valari Is For People Who Love...</h1>
      <Image alt="feature" className="object-cover object-center h-full w-full" width={100} height={100} src="https://dummyimage.com/460x500"/>
    </div>

  </div>
</section>










<section className="text-gray-600 body-font">
  <div className="container px-5 md:px-28 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-5 text-black">
      <h1 className="sm:text-3xl md:text-4xl font-bold title-font mb-4">Your FB Comments That Make Us Smile</h1>
    </div>
    <div className="flex flex-wrap -m-4">

      <div className="p-1 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image className="lg:h-48 md:h-36 w-full object-cover object-center" width={100} height={100} src="https://dummyimage.com/720x400" alt="blog"/>
        </div>
      </div>

      <div className="p-1 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image className="lg:h-48 md:h-36 w-full object-cover object-center" width={100} height={100} src="https://dummyimage.com/721x401" alt="blog"/>
        </div>
      </div>

      <div className="p-1 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image className="lg:h-48 md:h-36 w-full object-cover object-center" width={100} height={100} src="https://dummyimage.com/722x402" alt="blog"/>
        </div>
      </div>
    </div>
  </div>
</section>










<section className="text-gray-600 body-font">
  <div className="container px-5 md:px-28 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12 text-black">
      <h1 className="sm:text-3xl md:text-4xl font-bold title-font mb-4">Our Best Selling Pillows</h1>
    </div>
    <div className="flex flex-wrap -m-4">

      <div className="p-4 md:w-1/4">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image className="lg:h-48 md:h-36 w-full object-cover object-center" width={100} height={100} src="https://dummyimage.com/720x400" alt="blog"/>
          <div className="p-6 text-center">
            <h1 className="title-font text-lg font-bold text-gray-900 mb-3">Legendery Collection</h1>
            <h1 className="title-font text-lg font-bold mb-3 text-[#ee702f]">From $79.00 <span className="line-through text-sm text-black">$89.00</span></h1>
          </div>
        </div>
      </div>

      <div className="p-4 md:w-1/4">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image className="lg:h-48 md:h-36 w-full object-cover object-center" width={100} height={100} src="https://dummyimage.com/721x401" alt="blog"/>
          <div className="p-6 text-center">
            <h1 className="title-font text-lg font-bold text-gray-900 mb-3">Rare Collection</h1>
            <h1 className="title-font text-lg font-bold mb-3 text-[#ee702f]">$59.00 <span className="line-through text-sm text-black">$65.00</span></h1>
          </div>
        </div>
      </div>

      <div className="p-4 md:w-1/4">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image className="lg:h-48 md:h-36 w-full object-cover object-center" width={100} height={100} src="https://dummyimage.com/722x402" alt="blog"/>
          <div className="p-6 text-center">
            <h1 className="title-font text-lg font-bold text-gray-900 mb-3">Crafters Collection</h1>
            <h1 className="title-font text-lg font-bold mb-3 text-[#ee702f]">$79.00 <span className="line-through text-sm text-black">$89.00</span></h1>
          </div>
        </div>
      </div>

      <div className="p-4 md:w-1/4">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image className="lg:h-48 md:h-36 w-full object-cover object-center" width={100} height={100} src="https://dummyimage.com/722x402" alt="blog"/>
          <div className="p-6 text-center">
            <h1 className="title-font text-lg font-bold text-gray-900 mb-3">Epic (Customizable)</h1>
            <h1 className="title-font text-lg font-bold text-[#ee702f] mb-3 ">$114.00</h1>
          </div>
        </div>
      </div>
    </div>
    <Button className="flex mx-auto mt-16 bg-[#ee702f] hover:bg-[#ee702f] border-none py-2 px-6 focus:outline-none rounded text-lg">View all</Button>
  </div>
</section>










<div className="container lg:px-24">
  <div className="bg-[#d8dff3] mx-auto rounded-xl flex md:px-16 py-5 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image className="object-cover object-center rounded ml-auto" alt="money_back" width={300} height={300} src="/money_back.png"/>
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pr-3 md:pr-16 flex flex-col md:items-center items-center text-center">
        <h1 className="title-font lg:text-5xl text-3xl mb-12 font-medium text-black">100% Lifetime Satisfaction Guarantee</h1>
        <p>or your Money back + 90 Day No Hassle returns</p>
        <p>We know you will love Valari, so much  so that we are guaranteeing that for life. Our return rate is less than 0.1% with over 35,000 units sold.</p>
        <div className="flex justify-center mt-8">
          <a href="" target="_blank">
            <button className="inline-flex text-black font-medium bg-black text-white py-2 px-8 focus:outline-none rounded-lg text-lg">Shop Now</button>
          </a>
        </div>
      </div>

  </div>
</div>








<section className="text-gray-600 body-font">
  <div className="container px-5 md:px-28 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">

      <div className="p-1 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" width={100} height={100} alt="blog"/>
        </div>
      </div>

      <div className="p-1 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/721x401" width={100} height={100} alt="blog"/>
        </div>
      </div>

      <div className="p-1 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/722x402" width={100} height={100} alt="blog"/>
        </div>
      </div>
    </div>
  </div>
</section>






<section className="text-gray-600 body-font">
  <div className="container px-5 md:px-28 py-24 mx-auto">
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div className="p-4 md:w-1/4 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-[#001636] text-white mb-5 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-2xl title-font font-bold">Lifetime Satisfaction Guarantee</h2>
        </div>
      </div>
      <div className="p-4 md:w-1/4 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-[#001636] text-white mb-5 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-2xl title-font font-bold">90 Day Trial</h2>
        </div>
      </div>
      <div className="p-4 md:w-1/4 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-[#001636] text-white mb-5 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-2xl title-font font-bold">Safe Checkout</h2>
        </div>
      </div>
      <div className="p-4 md:w-1/4 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-[#001636] text-white mb-5 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-2xl title-font font-bold">Fast Shipping</h2>
        </div>
      </div>
    </div>
  </div>
</section>


    </>
  )
}
