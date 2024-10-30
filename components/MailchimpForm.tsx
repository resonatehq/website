const MailchimpForm = () => {
  return (
    <div className="w-full max-w-[600px] mx-auto bg-white p-6 px-4 sm:px-6">
      <form
        action="https://resonatehq.us9.list-manage.com/subscribe/post?u=6bddf67c72ae448993eaa3948&amp;id=614ef31173&amp;f_id=0099e8e3f0"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        target="_blank"
        className="validate"
      >
        {/* Email Field */}
        <div className="mb-4">
          <label
            htmlFor="mce-EMAIL"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="EMAIL"
            id="mce-EMAIL"
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* First Name Field */}
        <div className="mb-4">
          <label
            htmlFor="mce-FNAME"
            className="block text-sm font-medium text-gray-700"
          >
            First Name
          </label>
          <input
            type="text"
            name="FNAME"
            id="mce-FNAME"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Last Name Field */}
        <div className="mb-4">
          <label
            htmlFor="mce-LNAME"
            className="block text-sm font-medium text-gray-700"
          >
            Last Name
          </label>
          <input
            type="text"
            name="LNAME"
            id="mce-LNAME"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Hidden Field for Tags */}
        <div className="hidden">
          <input type="hidden" name="tags" value="15367351" readOnly />
        </div>

        {/* Anti-bot field */}
        <div
          aria-hidden="true"
          style={{ position: "absolute", left: "-5000px" }}
        >
          <input
            type="text"
            name="b_6bddf67c72ae448993eaa3948_614ef31173"
            tabIndex={-1}
            readOnly
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            name="subscribe"
            id="mc-embedded-subscribe"
            className="mb-12 text-white border bg-zinc-900 border-zinc-900 hover:bg-white hover:text-zinc-900 rounded-full px-5 py-2 lg:px-6 lg:py-2.5"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default MailchimpForm;
