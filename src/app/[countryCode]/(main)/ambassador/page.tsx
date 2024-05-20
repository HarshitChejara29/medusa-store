const Ambassador = () => {
    return(
        <div>

        <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-10 mx-auto">
            <div className="flex flex-col text-center w-full mb-10">
            <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">Register to Become a Valarian Ambassador</h1>
            <p className="lg:w-1/2 mx-auto leading-relaxed text-base">Ambassadors will receive a free Valari of their choice as well as a referral link and discount code to earn money for every referral.</p>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto md:px-20">
            <div className="flex flex-wrap -m-2">
                <div className="p-2 w-full">
                <div className="relative">
                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">First Name: <span className="text-red-500">*</span></label>
                    <input type="text" id="name" name="name" required className="w-full rounded-lg border border-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                </div>
                <div className="p-2 w-full">
                <div className="relative">
                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">Last Name: <span className="text-red-500">*</span></label>
                    <input type="text" id="name" name="name" required className="w-full rounded-lg border border-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                </div>
                <div className="p-2 w-full">
                <div className="relative">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email: <span className="text-red-500">*</span></label>
                    <input type="email" id="email" name="email" required className="w-full rounded-lg border border-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                </div>
                <div className="p-2 w-full">
                <div className="relative">
                    <label htmlFor="link" className="leading-7 text-sm text-gray-600">Social link (Please provide html link to your main channel) <span className="text-red-500">*</span></label>
                    <input type="text" id="link" name="link" required className="w-full rounded-lg border border-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                </div>
                <p className="mx-auto leading-relaxed text-base">Subject to approval by our influencer marketing team</p>
                <div className="p-2 w-full text-center">
                <button className="w-full font-bold text-white bg-[#3860fb] py-2 px-8 hover:bg-white rounded-full text-lg">Create Account</button>
                </div>
                <div className="p-2 w-full pt-8 border-gray-200 text-center">
                    <a className="text-indigo-500">Already have an account? Sign in here.</a>
                </div>
            </div>
            </div>
        </div>
        </section>

        </div>
    )
}

export default Ambassador;