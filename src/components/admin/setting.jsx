import React, { useEffect, useState } from 'react';
// import axiosInstance from '../../lib/axiosInstance';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../lib/axiosInstance';

const Profile_Details = () => {
  const [profile, setProfile] = useState({
    username: '',
    email: '',
    phone: '',
    currentPassword: '',
    newPassword: '',
    _id: '',
  });

  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchAdminProfile = async () => {
      try {
        const response = await axiosInstance.get('/api/admin/adminprofile');
        console.log("profile:",response);
        
        setProfile(prev => ({ ...prev, ...response.data }));
      } catch (error) {
        console.error('Failed to fetch admin profile:', error);
      }
    };
    fetchAdminProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.put('/api/admin/update', profile);
      alert('Admin profile updated successfully!');
      setIsEditing(false);
    } catch (error) {
      alert(error.response?.data?.error || 'Update failed!');
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete your account?')) {
      try {
        await axiosInstance.delete('/api/users/admin/delete');
        alert('Admin profile deleted successfully!');
        navigate('/'); // or login page
      } catch (error) {
        alert(error.response?.data?.error || 'Delete failed!');
      }
    }
  };

  return (
    <div className="max-w-4xl p-6 bg-white shadow-md rounded-3xl border border-black mt-36 mx-auto">
      <div className="flex flex-col md:flex-row items-center md:items-start mb-6 space-y-4 md:space-y-0 md:space-x-6">
        <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center">
          <svg className="w-12 h-12 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.31 0-10 1.66-10 5v3h20v-3c0-3.34-6.69-5-10-5z" />
          </svg>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-semibold">Admin Profile</h2>
          <div className="flex space-x-4 mt-4">
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300" onClick={() => setIsEditing(true)}>
              Edit Info
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>

      <form className="grid grid-cols-1 sm:grid-cols-2 gap-4" onSubmit={handleSubmit}>
        <div className="col-span-1 sm:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1">
            <div>
              <label className="block text-sm text-gray-600">ID</label>
              <input
                type="text"
                value={profile._id}
                disabled
                className="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Username</label>
              <input
                type="text"
                name="username"
                value={profile.username}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full px-4 py-2 mt-1 border rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="col-span-1 sm:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1">
            <div>
              <label className="block text-sm text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full px-4 py-2 mt-1 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Phone</label>
              <input
                type="text"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full px-4 py-2 mt-1 border rounded-lg"
              />
            </div>
          </div>
        </div>

        {isEditing && (
          <>
            <div className="col-span-1 sm:col-span-2">
              <label className="text-gray-700 font-semibold">Password</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1">
                <div>
                  <label className="block text-sm text-gray-600">Current Password</label>
                  <input
                    type="password"
                    name="currentPassword"
                    value={profile.currentPassword || ''}
                    onChange={handleChange}
                    className="w-full px-4 py-2 mt-1 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600">New Password</label>
                  <input
                    type="password"
                    name="newPassword"
                    value={profile.newPassword || ''}
                    onChange={handleChange}
                    className="w-full px-4 py-2 mt-1 border rounded-lg"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-1 sm:col-span-2 flex justify-center mt-6 gap-4">
              <button onClick={()=>setIsEditing(false)}className="px-10 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900">
                Cancel
              </button>
              <button type="submit" className="px-10 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900">
                Save Changes
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default Profile_Details;
