import React from 'react';


const Profile = () => {
  // بيانات تجريبية للمستخدم (يمكنك ربطها بـ State لاحقاً)
  const userData = {
    name: "Abdul-Rahman Omar",
    role: "Premium Member",
    email: "abdo.omar@example.com",
    phone: "+20 123 456 789",
    joinDate: "January 2026",
    avatar: "https://ui-avatars.com/api/?name=Abdul-Rahman+Omar&background=9B917D&color=fff&size=128"
  };

  const myProperties = [
    { id: 101, title: "Modern Apartment", status: "Active", price: "$450,000", image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=400" },
    { id: 102, title: "Luxury Penthouse", status: "Pending", price: "$980,000", image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=400" }
  ];

  return (
    <div className="profile-page bg-light min-vh-100 py-5">
      <div className="container mt-5">
        <div className="row g-4">
          
          {/* --- Left Sidebar: User Info Card --- */}
          <div className="col-lg-4">
            <div className="maskany-card p-4 text-center bg-white shadow-sm border-0 rounded-4">
              <div className="position-relative d-inline-block mb-3">
                <img src={userData.avatar} alt="Profile" className="rounded-circle border border-4 border-white shadow-sm" width="120" />
                <button className="btn btn-sm btn-dark position-absolute bottom-0 end-0 rounded-circle p-2">
                  <i className="bi bi-camera"></i>
                </button>
              </div>
              <h4 className="fw-bold mb-1">{userData.name}</h4>
              <p className="text-maskany small fw-bold mb-3">{userData.role}</p>
              
              <hr className="my-4 opacity-25" />
              
              <div className="text-start">
                <div className="mb-3">
                  <label className="text-muted small d-block">Email Address</label>
                  <span className="fw-medium">{userData.email}</span>
                </div>
                <div className="mb-3">
                  <label className="text-muted small d-block">Phone Number</label>
                  <span className="fw-medium">{userData.phone}</span>
                </div>
                <div className="mb-0">
                  <label className="text-muted small d-block">Member Since</label>
                  <span className="fw-medium">{userData.joinDate}</span>
                </div>
              </div>

              <button className="btn btn-outline-maskany w-100 mt-4 rounded-pill">
                Edit Profile
              </button>
            </div>
          </div>

          {/* --- Right Side: Dashboard Content --- */}
          <div className="col-lg-8">
            
            {/* Quick Stats */}
            <div className="row g-3 mb-4">
              <div className="col-md-4">
                <div className="bg-white p-3 rounded-4 shadow-sm border-start border-4 border-gold">
                  <h6 className="text-muted small mb-1">Saved Homes</h6>
                  <h3 className="fw-bold mb-0">12</h3>
                </div>
              </div>
              <div className="col-md-4">
                <div className="bg-white p-3 rounded-4 shadow-sm border-start border-4 border-dark">
                  <h6 className="text-muted small mb-1">My Listings</h6>
                  <h3 className="fw-bold mb-0">02</h3>
                </div>
              </div>
              <div className="col-md-4">
                <div className="bg-white p-3 rounded-4 shadow-sm border-start border-4 border-success">
                  <h6 className="text-muted small mb-1">Messages</h6>
                  <h3 className="fw-bold mb-0">05</h3>
                </div>
              </div>
            </div>

            {/* My Properties List */}
            <div className="bg-white p-4 rounded-4 shadow-sm border-0">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h5 className="fw-bold mb-0">My Active Listings</h5>
                <button className="btn btn-sm btn-dark rounded-pill px-3">Add New</button>
              </div>

              <div className="table-responsive">
                <table className="table table-hover align-middle">
                  <thead className="table-light">
                    <tr>
                      <th>Property</th>
                      <th>Price</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {myProperties.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <div className="d-flex align-items-center">
                            <img src={item.image} className="rounded-3 me-3" width="50" height="50" style={{objectFit: 'cover'}} alt="" />
                            <span className="fw-medium">{item.title}</span>
                          </div>
                        </td>
                        <td className="fw-bold text-maskany">{item.price}</td>
                        <td>
                          <span className={`badge rounded-pill ${item.status === 'Active' ? 'bg-success-light text-success' : 'bg-warning-light text-warning'}`}>
                            {item.status}
                          </span>
                        </td>
                        <td>
                          <button className="btn btn-sm btn-light border rounded-pill px-3">Manage</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;