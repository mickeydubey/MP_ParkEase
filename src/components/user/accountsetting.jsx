import React, { useState, useEffect } from "react";
import axiosInstance from "../../lib/axiosInstance";

const ProfileDetails = () => {
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNo: "",
    currentPassword: "",
    newPassword: "",
  });

  const [isEditing, setIsEditing] = useState(true); // Default to true if info not available
  const [profileFetched, setProfileFetched] = useState(false);
  const rawToken = localStorage.getItem("authToken");
  console.log("the token is", rawToken);
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axiosInstance.get(`/api/users/profile`);
        console.log("the response is",response)
        setProfile(prev => ({ ...prev, ...response.data }));
        setIsEditing(false);
        setProfileFetched(true);
      } catch (error) {
        console.log("No existing profile found or error occurred:", error);
        setIsEditing(true); // If error, stay in edit mode
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!profile.contactNo.trim()) {
      alert("❌ Contact number is required!");
      return;
    }

    try {
      const response = await axiosInstance.put("/api/users/update", profile);
      alert("✅ Profile updated successfully!");
      setIsEditing(false);
      setProfileFetched(true);
    } catch (error) {
      console.error("❌ Error updating profile:", error);
      alert("Error updating profile. Please try again.");
    }
  };

  return (
    <div className="max-w-4xl p-6 bg-white shadow-md rounded-lg border border-black mt-48 mx-auto relative">
      {/* 🖊️ Edit Button */}
      {!isEditing && profileFetched && (
        <button
          onClick={() => setIsEditing(true)}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          title="Edit Profile"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-5M18.5 2.5a2.121 2.121 0 113 3L12 15l-4 1 1-4 9.5-9.5z" />
          </svg>
        </button>
      )}

      {/* 🧾 Preview Profile */}
      {!isEditing ? (
        <div>
          <h2 className="text-2xl font-semibold mb-4">👤 Profile Info</h2>
          <p><strong>Full Name:</strong> {profile.firstName} {profile.lastName} {profile.username}</p>
          <p><strong>Email:</strong> {profile.email || "N/A"}</p>
          <p><strong>Contact No:</strong> {profile.phone}</p>
        </div>
      ) : (
        // ✍️ Editable Form
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="col-span-1 sm:col-span-2">
            <label className="text-gray-700 font-semibold">Full name</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1">
              <div>
                <label className="block text-sm text-gray-600">User name</label>
                <input
                  type="text"
                  name="firstName"
                  value={profile.username}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="w-full px-4 py-2 mt-1 border rounded-lg"
                  required
                />
              </div>
             
            </div>
          </div>

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
                  className="w-full px-4 py-2 mt-1 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600">Contact No. (Required)</label>
                <input
                  type="text"
                  name="contactNo"
                  value={profile.phone}
                  onChange={handleChange}
                  placeholder="Contact No."
                  className="w-full px-4 py-2 mt-1 border rounded-lg"
                  required
                />
              </div>
            </div>
          </div>

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
                  className="w-full px-4 py-2 mt-1 border rounded-lg"
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
                  className="w-full px-4 py-2 mt-1 border rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="col-span-1 sm:col-span-2 flex justify-center mt-6 gap-4 ">
            <button
              type="submit"
              className="px-10 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900"
            >
              Save
            </button>
            <button
    type="button"
    onClick={() => {
      setIsEditing(false);
    }}
    className="px-10 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
  >
    Cancel
  </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ProfileDetails;
