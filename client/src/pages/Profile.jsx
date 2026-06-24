import { useState } from "react";

function Profile() {
  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const [isEditing, setIsEditing] =
    useState(false);

  const [formData, setFormData] =
    useState({
      name: user?.name || "",
      email: user?.email || "",
      role: user?.role || "",
      bio: user?.bio || "",
      experience:
        user?.experience || 0,
      rating: user?.rating || 5,
    });

  const [editData, setEditData] =
    useState(formData);

  const handleChange = (e) => {
    setEditData({
      ...editData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSave = () => {
    setFormData(editData);

    localStorage.setItem(
      "user",
      JSON.stringify(editData)
    );

    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData(formData);
    setIsEditing(false);
  };

  return (
    <div className="profile-page">
      <div className="profile-card">

        <h1>My Profile</h1>

        <div className="profile-avatar">
          👤
        </div>

        <h2>{formData.name}</h2>

        <p>
          <strong>Email:</strong>{" "}
          {formData.email}
        </p>

        <p>
          <strong>Role:</strong>{" "}
          {formData.role}
        </p>

        {formData.role ===
          "provider" && (
          <>
            <p>
              <strong>
                Experience:
              </strong>{" "}
              {formData.experience}
              years
            </p>

            <p>
              <strong>
                Rating:
              </strong>{" "}
              ⭐ {formData.rating}
            </p>
          </>
        )}

        <div className="profile-section">

          <h3>Bio</h3>

          {isEditing ? (
            <textarea
              name="bio"
              value={editData.bio}
              onChange={
                handleChange
              }
              rows="4"
            />
          ) : (
            <p>{formData.bio}</p>
          )}

        </div>

        <div
          style={{
            marginTop: "20px",
          }}
        >
          {!isEditing ? (
            <button
              onClick={() =>
                setIsEditing(true)
              }
            >
              Edit Profile
            </button>
          ) : (
            <>
              <button
                onClick={
                  handleSave
                }
              >
                Save
              </button>

              <button
                onClick={
                  handleCancel
                }
              >
                Cancel
              </button>
            </>
          )}
        </div>

      </div>
    </div>
  );
}

export default Profile;