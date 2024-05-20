import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"

const Contact = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>

          <Heading
            level="h1"
            className="text-3xl leading-10 text-ui-fg-base font-normal"
          >
            Mactriq Ecommerce Starter
          </Heading>
          <Heading
            level="h2"
            className="text-3xl leading-10 text-ui-fg-subtle font-normal font-bold"
          >
            The #1 Pillow For Comfort & Better Posture
          </Heading>
        </span>
        <a
          href="https://github.com/medusajs/nextjs-starter-medusa"
          target="_blank"
        >
          <Button variant="secondary" className="text-[#e07313] font-bold text-lg py-2 px-5">
            Unlock Your Comfort
          </Button>
        </a>
      </div>
    </div>
  )
}

export default Contact
