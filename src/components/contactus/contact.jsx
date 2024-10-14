import React from 'react'

const Contact = () => {
  return (
    <div>
      <div>
        <div className='h-40'></div>
        <div className='h-[15vh] w-full bg-[#2F3645]'></div>
        <div className='h-[85vh] w-full'>

        <div class="flex flex-wrap justify-center h-full bg-slate-700">
    <div className='w-1/2 bg-white'>
    <div className='mx-20 h-[85vh] flex flex-col justify-center '>
      <div className='text-4xl font-semibold my-10'>CONTACT US</div>
      <div className='my-10 font-semibold mr-10'>Contact us today to explore how we can enhance your parking experience. Your feedback is invaluable to us, and we look forward to connecting with you!</div>
    </div>
    </div>
    <div className='w-1/2 bg-white flex justify-center items-center'>

    <div className="rounded-lg bg-[#EEEDEB] p-10 shadow-lg lg:col-span-3 lg:p-16  ">
        <form action="#" className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="email">Email</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm placeholder:text-black bg-[#D9D9D9]"
                placeholder="Name"
                type="email"
                id="email"
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="phone">Phone</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 placeholder:text-black text-sm bg-[#D9D9D9]"
                placeholder="Last name"
                type="tel"
                id="phone"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="email">Email</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm placeholder:text-black bg-[#D9D9D9]"
                placeholder="Email address"
                type="email"
                id="email"
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="phone">Phone</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm placeholder:text-black bg-[#D9D9D9]"
                placeholder="Phone Number"
                type="tel"
                id="phone"
              />
            </div>
          </div>

          
            

          <div>
            <label className="sr-only" htmlFor="message">How can we help you?</label>

            <textarea
              className="w-full rounded-lg border-gray-200 p-3 text-sm placeholder:text-black bg-[#D9D9D9]"
              placeholder="How can we help you?"
              rows="8"
              id="message"
            ></textarea>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="inline-block w-full bg-[#2F3645] rounded-full px-12 py-3 placeholder:text-black font-medium text-white sm:w-auto"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

    </div>
    <div></div>
    
</div>

        </div>
      </div>
    </div>
  )
}

export default Contact
