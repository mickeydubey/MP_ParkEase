import React from 'react';

const ProfileDetails = () => {
  return (
    <div className="max-w-4xl p-6 bg-white shadow-md rounded-lg border border-black mt-48 mx-auto">
      <div className="flex flex-col md:flex-row items-center md:items-start mb-6 space-y-4 md:space-y-0 md:space-x-6">
        
        {/* Profile Picture */}
        <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center">
          <svg
            className="w-12 h-12 text-gray-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.31 0-10 1.66-10 5v3h20v-3c0-3.34-6.69-5-10-5z" />
          </svg>
        </div>

        {/* Profile Details Section */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-semibold">Profile Details</h2>
          <div className="flex space-x-4 mt-4">
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">
              Change Photo
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">
              Delete
            </button>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div className="col-span-1 sm:col-span-2">
          <label className="text-gray-700 font-semibold">Full name</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1">
            <div>
              <label className="block text-sm text-gray-600">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-400"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-400"
              />
            </div>
          </div>
        </div>

        {/* Email and Contact Number */}
        <div className="col-span-1 sm:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1">
            <div>
              <label className="block text-sm text-gray-600">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-400"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Contact No.</label>
              <input
                type="text"
                placeholder="Contact No."
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-400"
              />
            </div>
          </div>
        </div>

        {/* Password Section */}
        <div className="col-span-1 sm:col-span-2">
          <label className="text-gray-700 font-semibold">Password</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1">
            <div>
              <label className="block text-sm text-gray-600">Current Password</label>
              <input
                type="password"
                placeholder="Current Password"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-400"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600">New Password</label>
              <input
                type="password"
                placeholder="New Password"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-400"
              />
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="col-span-1 sm:col-span-2 flex justify-center mt-6">
          <button className="px-10 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 focus:outline-none focus:ring-2 ">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileDetails;
