import React, { useState, useEffect } from "react";

const ProfileDetails = () => {
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    email: "", // Email optional now
    contactNo: "",
    currentPassword: "",
    newPassword: "",
  });

  // 🎯 Fetch user profile data using contactNo
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        if (!profile.contactNo) return; // Ensure contactNo is entered before fetching

        const response = await fetch(
`http://localhost:3000/api/profile/${encodeURIComponent(profile.contactNo)}`

        );

        if (!response.ok) throw new Error("Failed to fetch profile");

        const data = await response.json();
        setProfile((prev) => ({ ...prev, ...data }));
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, [profile.contactNo]);

  // 🎯 Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  // 🎯 Handle profile update submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("🚀 Sending profile data:", JSON.stringify(profile, null, 2));

    // ✅ Ensure contact number is filled
    if (!profile.contactNo.trim()) {
      alert("❌ Contact number is required!");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(profile),
      });
      console.log("Profile: ",profile);
      

      if (response.ok) {
        const updatedProfile = await response.json();
        setProfile(updatedProfile);
        alert("✅ Profile updated successfully!");
      } else {
        const errorMsg = await response.json();
        alert(`❌ Failed to update profile: ${errorMsg.message}`);
      }
    } catch (error) {
      console.error("❌ Error updating profile:", error);
      alert("❗ Error updating profile. Please try again.");
    }
  };

  return (
    <div className="max-w-4xl p-6 bg-white shadow-md rounded-lg border border-black mt-48 mx-auto">
      {/* Profile Picture Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start mb-6 space-y-4 md:space-y-0 md:space-x-6">
        <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center">
          <svg
            className="w-12 h-12 text-gray-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.31 0-10 1.66-10 5v3h20v-3c0-3.34-6.69-5-10-5z" />
          </svg>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-semibold">Profile Details</h2>
          <div className="flex space-x-4 mt-4">
            <button
              type="button"
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
            >
              Change Photo
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
            >
              Delete
            </button>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        {/* Full Name */}
        <div className="col-span-1 sm:col-span-2">
          <label className="text-gray-700 font-semibold">Full name</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1">
            <div>
              <label className="block text-sm text-gray-600">First Name</label>
              <input
                type="text"
                name="firstName"
                value={profile.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-400"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={profile.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-400"
                required
              />
            </div>
          </div>
        </div>

        {/* Email (optional) and Contact Number (required) */}
        <div className="col-span-1 sm:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1">
            <div>
              <label className="block text-sm text-gray-600">Email (Optional)</label>
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-400"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Contact No. (Required)</label>
              <input
                type="text"
                name="contactNo"
                value={profile.contactNo}
                onChange={handleChange}
                placeholder="Contact No."
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-400"
                required
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
                name="currentPassword"
                value={profile.currentPassword}
                onChange={handleChange}
                placeholder="Current Password"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-400"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600">New Password</label>
              <input
                type="password"
                name="newPassword"
                value={profile.newPassword}
                onChange={handleChange}
                placeholder="New Password"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-400"
              />
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="col-span-1 sm:col-span-2 flex justify-center mt-6">
          <button
            type="submit"
            className="px-10 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 focus:outline-none focus:ring-2"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileDetails;
