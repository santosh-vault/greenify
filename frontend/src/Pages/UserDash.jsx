import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserDash = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/login");
          return;
        }

        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const userResponse = await axios.get(
          "http://localhost:5001/api/auth/user",
          config
        );
        setUser(userResponse.data);
      } catch (error) {
        console.error(error);
        navigate("/login");
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">User Dashboard</h1>
      <div className="my-4">
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
      </div>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default UserDash;
