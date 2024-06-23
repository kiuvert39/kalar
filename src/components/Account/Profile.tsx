import React, { useState } from 'react';

const ProfileEdit: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: 'Md',
    lastName: 'Rimel',
    email: 'rimel111@gmail.com',
    address: 'Kingston, 5236, United States',
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex min-h-screen mt-20">
      <aside className="w-64 bg-gray-100 p-4">
        <nav className="space-y-4">
          <div className="text-lg font-semibold">Manage My Account</div>
          <ul className="space-y-2">
            <li><a href="/" className="text-red-600 font-medium">My Profile</a></li>
            <li><a href="/" className="text-gray-700">Address Book</a></li>
            <li><a href="/" className="text-gray-700">My Payment Options</a></li>
          </ul>
          <div className="text-lg font-semibold mt-6">My Orders</div>
          <ul className="space-y-2">
            <li><a href="/" className="text-gray-700">My Returns</a></li>
            <li><a href="/" className="text-gray-700">My Cancellations</a></li>
          </ul>
          <div className="text-lg font-semibold mt-6">My Wishlist</div>
        </nav>
      </aside>
      <div className="flex-grow p-6">
        <h2 className="text-2xl font-semibold mb-6">Edit Your Profile</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-gray-100 p-4 rounded space-y-4">
            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded border-none shadow-sm focus:border-none focus:ring-red-500"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded border-none shadow-sm focus:border-none focus:ring-red-500"
                />
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded border-none shadow-sm focus:border-none focus:ring-red-500"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded border-none shadow-sm focus:border-none focus:ring-red-500"
                />
              </div>
            </div>
          
          <div className="bg-gray-100 p-4 rounded space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Current Password</label>
              <input
                type="password"
                name="currentPassword"
                placeholder="Current Password"
                value={formData.currentPassword}
                onChange={handleChange}
                className="mt-1 block w-full rounded border-none shadow-sm focus:border-none focus:ring-red-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">New Password</label>
              <input
                type="password"
                name="newPassword"
                placeholder="New Password"
                value={formData.newPassword}
                onChange={handleChange}
                className="mt-1 block w-full rounded border-none shadow-sm focus:border-none focus:ring-red-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Confirm New Password</label>
              <input
                type="password"
                name="confirmNewPassword"
                placeholder="Confirm New Password"
                value={formData.confirmNewPassword}
                onChange={handleChange}
                className="mt-1 block w-full rounded border-none shadow-sm focus:border-none focus:ring-red-500"
              />
            </div>
          </div>
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="py-2 px-4 border border-gray-300 rounded shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="py-2 px-4 border border-transparent rounded shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileEdit;
