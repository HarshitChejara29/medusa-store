import { Input, Textarea, Button } from "@medusajs/ui"

const Contact = () => {
    return(
        <div>

        <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-10 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">Get in Touch. We're Here to Help!</h1>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                <div className="relative">
                    <Input type="text" id="name" name="name" placeholder="Name" className="w-full rounded-lg border border-black text-base outline-none focus:outline-none text-gray-700 py-1.5 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                </div>
                <div className="p-2 w-1/2">
                <div className="relative">
                    <Input type="email" id="email" name="email" placeholder="Email*" className="w-full rounded-lg border border-black text-base outline-none focus:outline-none text-gray-700 py-1.5 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                </div>
                <div className="p-2 w-full">
                <div className="relative">
                    <Input type="number" id="name" name="name" placeholder="Phone number" className="w-full rounded-lg border border-black text-base outline-none focus:outline-none text-gray-700 py-1.5 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                </div>
                <div className="p-2 w-full">
                <div className="relative">
                    <Textarea id="message" name="message" placeholder="Comment" className="w-full rounded-lg border border-black h-32 text-base outline-none focus:outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></Textarea>
                </div>
                </div>
                <div className="p-2 w-full text-center">
                <Button className="w-full font-bold text-white bg-[#ee702f] border border-2 border-[#ee702f] hover:text-[#ee702f] py-2 px-8 hover:bg-white rounded-lg text-lg">Send</Button>
                </div>
            </div>
            </div>
        </div>
        </section>

        </div>
    )
}

export default Contact;