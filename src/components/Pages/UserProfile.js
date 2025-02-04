import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../css/UserProfile.css';

const UserProfile = () => {
  const [profile, setProfile] = useState({
    photo: '',
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value
    }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfile((prevProfile) => ({
        ...prevProfile,
        photo: URL.createObjectURL(file)
      }));
    }
  };

  const handleRemovePhoto = () => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      photo: '' // Remove the photo by setting it to an empty string
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic for updating user profile (e.g., API call)
    console.log('Profile updated:', profile);
  };

  return (
    <div className="user-profile-container">
      <h2>Edit Profile</h2>

      {/* Go Back Home Button */}
      <div className="go-back-home">
        <Link to="/" className="go-back-btn">Go Back to Home</Link>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Profile Photo</label>
          <input
            type="file"
            name="photo"
            onChange={handlePhotoChange}
            accept="image/*"
          />
          {/* Displaying the uploaded profile photo */}
          {profile.photo && (
            <div className="profile-photo-preview">
              <img src={profile.photo} alt="Profile Preview" className="profile-photo" />
              <button
                type="button"
                className="remove-photo-btn"
                onClick={handleRemovePhoto}
              >
                Remove Photo
              </button>
            </div>
          )}
        </div>

        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={profile.password}
            onChange={handleInputChange}
            placeholder="Enter your password"
          />
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={profile.confirmPassword}
            onChange={handleInputChange}
            placeholder="Confirm your password"
          />
        </div>

        <div className="form-group">
          <label>Address</label>
          <textarea
            name="address"
            value={profile.address}
            onChange={handleInputChange}
            placeholder="Enter your address"
          ></textarea>
        </div>

        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default UserProfile;
