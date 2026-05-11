import React from 'react';


const AgentDashboard = () => {
  // بيانات تجريبية (Mock Data)
  const stats = [
    { label: "Active Listings", value: "14", icon: "bi-house-heart", color: "text-primary" },
    { label: "Total Views", value: "2.4k", icon: "bi-eye", color: "text-success" },
    { label: "Pending Leads", value: "08", icon: "bi-people", color: "text-warning" },
    { label: "Monthly Income", value: "$12,500", icon: "bi-wallet2", color: "text-maskany" }
  ];

  const recentInquiries = [
    { id: 1, name: "Ahmed Salem", property: "Skyline Penthouse", date: "2 hours ago", status: "New" },
    { id: 2, name: "Sarah John", property: "Modern Villa G4", date: "5 hours ago", status: "Contacted" },
    { id: 3, name: "Michael Ray", property: "Beachfront Studio", date: "1 day ago", status: "New" }
  ];

  return (
    <div className="dashboard-page py-5 bg-light min-vh-100 mt-5">
      <div className="container mt-5">
        
        {/* --- Header --- */}
        <div className="d-flex justify-content-between align-items-center mb-5">
          <div>
            <h2 className="fw-bold mb-1">Agent Dashboard</h2>
            <p className="text-muted">Welcome back, Abdul-Rahman! Here’s your performance summary.</p>
          </div>
          <button className="btn-maskany px-4 py-2 shadow-sm">
            <i className="bi bi-plus-lg me-2"></i> New Listing
          </button>
        </div>

        {/* --- Stats Cards --- */}
        <div className="row g-4 mb-5">
          {stats.map((stat, index) => (
            <div className="col-md-3" key={index}>
              <div className="stat-card p-4 rounded-4 shadow-sm bg-white border-0">
                <div className={`icon-circle mb-3 ${stat.color} bg-light d-flex align-items-center justify-content-center`} style={{width: '50px', height: '50px', borderRadius: '12px'}}>
                  <i className={`bi ${stat.icon} fs-4`}></i>
                </div>
                <h6 className="text-muted small fw-bold">{stat.label}</h6>
                <h3 className="fw-bold mb-0">{stat.value}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="row g-4">
          {/* --- Recent Inquiries Table --- */}
          <div className="col-lg-8">
            <div className="bg-white p-4 rounded-4 shadow-sm border-0 h-100">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h5 className="fw-bold mb-0">Recent Inquiries</h5>
                <a href="#" className="text-maskany small fw-bold text-decoration-none">View All</a>
              </div>
              <div className="table-responsive">
                <table className="table align-middle custom-table">
                  <thead>
                    <tr>
                      <th>Lead Name</th>
                      <th>Property</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentInquiries.map((lead) => (
                      <tr key={lead.id}>
                        <td className="fw-medium">{lead.name} <br/> <small className="text-muted">{lead.date}</small></td>
                        <td className="text-muted small">{lead.property}</td>
                        <td>
                          <span className={`badge rounded-pill ${lead.status === 'New' ? 'bg-danger-light text-danger' : 'bg-info-light text-info'}`}>
                            {lead.status}
                          </span>
                        </td>
                        <td>
                          <button className="btn btn-sm btn-outline-dark rounded-pill">Reply</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* --- Sidebar: Upcoming Tours --- */}
          <div className="col-lg-4">
            <div className="bg-white p-4 rounded-4 shadow-sm border-0 h-100">
              <h5 className="fw-bold mb-4">Upcoming Tours</h5>
              <div className="tour-item d-flex p-3 mb-3 rounded-3 border-start border-4 border-gold bg-light">
                <div className="date-box text-center me-3 pe-3 border-end">
                  <h5 className="mb-0 fw-bold">12</h5>
                  <small className="text-muted text-uppercase">May</small>
                </div>
                <div>
                  <h6 className="mb-1 fw-bold">Modern Villa G4</h6>
                  <p className="mb-0 small text-muted"><i className="bi bi-clock me-1"></i> 10:30 AM</p>
                </div>
              </div>

              <div className="tour-item d-flex p-3 rounded-3 border-start border-4 border-dark bg-light">
                <div className="date-box text-center me-3 pe-3 border-end">
                  <h5 className="mb-0 fw-bold">15</h5>
                  <small className="text-muted text-uppercase">May</small>
                </div>
                <div>
                  <h6 className="mb-1 fw-bold">Skyline Penthouse</h6>
                  <p className="mb-0 small text-muted"><i className="bi bi-clock me-1"></i> 02:00 PM</p>
                </div>
              </div>
              
              <button className="btn btn-light w-100 mt-4 rounded-pill fw-bold text-muted">View Calendar</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AgentDashboard;