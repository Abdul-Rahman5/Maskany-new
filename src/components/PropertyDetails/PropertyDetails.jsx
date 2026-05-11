import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const PropertyDetails = () => {
  const { id } = useParams();

  // 1. منطق حاسبة القروض (Mortgage Logic)
  const [loanDetails, setLoanDetails] = useState({
    price: 1500000,
    downPayment: 300000,
    interest: 4.5,
    years: 25
  });

  const [monthlyPayment, setMonthlyPayment] = useState(0);

  useEffect(() => {
    const principal = loanDetails.price - loanDetails.downPayment;
    const calculatedInterest = loanDetails.interest / 100 / 12;
    const payments = loanDetails.years * 12;

    const x = Math.pow(1 + calculatedInterest, payments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);

    if (isFinite(monthly)) {
      setMonthlyPayment(monthly.toFixed(2));
    }
  }, [loanDetails]);

  const handleInputChange = (e) => {
    setLoanDetails({ ...loanDetails, [e.target.name]: parseFloat(e.target.value) || 0 });
  };

  return (
    <div className="property-page py-5">
      <div className="container mt-5">
        
        {/* --- Header Section --- */}
        <div className="row mb-4">
          <div className="col-lg-8">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/" className="text-maskany">Home</a></li>
                <li className="breadcrumb-item active">Property Details</li>
              </ol>
            </nav>
            <h1 className="display-5 fw-bold luxury-text mb-2">Luxury Villa in Palm Jumeirah</h1>
            <p className="text-muted fs-5"><i className="bi bi-geo-alt-fill text-maskany me-2"></i>London, HG Pal, UK</p>
          </div>
          <div className="col-lg-4 text-lg-end pt-lg-4">
            <h2 className="text-gold fw-bold display-6">${loanDetails.price.toLocaleString()}</h2>
            <span className="badge bg-success-light text-success px-3 py-2">For Sale</span>
          </div>
        </div>

        {/* --- Main Image Section --- */}
        <div className="main-gallery rounded-5 overflow-hidden position-relative mb-5 shadow">
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1800" 
            className="w-100 object-fit-cover" 
            style={{height: '550px'}} 
            alt="Main Property" 
          />
          <div className="tour-badge glass p-3 rounded-pill position-absolute top-50 start-50 translate-middle">
             <button className="btn btn-light rounded-pill px-4 py-2 fw-bold shadow">
                <i className="bi bi-view-stacked me-2"></i> Take a 360° Virtual Tour
             </button>
          </div>
        </div>

        <div className="row g-5">
          {/* --- Left Content --- */}
          <div className="col-lg-8">
            <div className="property-info-card bg-white p-4 rounded-4 shadow-sm border mb-4">
              <h4 className="fw-bold mb-4">Description</h4>
              <p className="text-muted lh-lg">
                Experience unparalleled luxury in this stunning architectural masterpiece located in the heart of London. 
                This property features 5 spacious bedrooms, 6 modern bathrooms, and a private infinity pool overlooking 
                the city skyline. Every detail has been meticulously crafted to provide the ultimate living experience.
              </p>
              
              <div className="row mt-4 g-3 text-center">
                <div className="col-3 border-end">
                  <h6 className="fw-bold mb-0">5</h6>
                  <small className="text-muted">Beds</small>
                </div>
                <div className="col-3 border-end">
                  <h6 className="fw-bold mb-0">6</h6>
                  <small className="text-muted">Baths</small>
                </div>
                <div className="col-3 border-end">
                  <h6 className="fw-bold mb-0">4,200</h6>
                  <small className="text-muted">Sqft</small>
                </div>
                <div className="col-3">
                  <h6 className="fw-bold mb-0">2024</h6>
                  <small className="text-muted">Built</small>
                </div>
              </div>
            </div>

            {/* --- Google Maps Section --- */}
            <h4 className="fw-bold mb-3 mt-5">Location on Map</h4>
            <div className="map-wrapper rounded-4 overflow-hidden border shadow-sm">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.9050207917!2d-0.124615!3d51.500729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c38c8cd1d9%3A0x25f9035e408e0!2sLondon%20Palace!5e0!3m2!1sen!2suk!4v1700000000000"
                width="100%" 
                height="400" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy" 
                title="London Map"
              ></iframe>
            </div>
          </div>

          {/* --- Right Sidebar (Mortgage) --- */}
          <div className="col-lg-4">
            <div className="sticky-top" style={{top: '100px'}}>
              <div className="mortgage-card p-4 rounded-4 shadow border bg-white">
                <h5 className="fw-bold mb-4"><i className="bi bi-calculator me-2 text-maskany"></i>Mortgage Calculator</h5>
                
                <div className="mb-3">
                  <label className="form-label small fw-bold">Sale Price ($)</label>
                  <input type="number" name="price" className="form-control" value={loanDetails.price} onChange={handleInputChange} />
                </div>

                <div className="mb-3">
                  <label className="form-label small fw-bold">Down Payment ($)</label>
                  <input type="number" name="downPayment" className="form-control" value={loanDetails.downPayment} onChange={handleInputChange} />
                </div>

                <div className="row g-2 mb-4">
                  <div className="col-6">
                    <label className="form-label small fw-bold">Interest (%)</label>
                    <input type="number" name="interest" className="form-control" value={loanDetails.interest} onChange={handleInputChange} />
                  </div>
                  <div className="col-6">
                    <label className="form-label small fw-bold">Years</label>
                    <input type="number" name="years" className="form-control" value={loanDetails.years} onChange={handleInputChange} />
                  </div>
                </div>

                <div className="payment-result p-3 rounded-3 text-center mb-4" style={{backgroundColor: '#f8f7f5', border: '1px dashed #9B917D'}}>
                  <p className="text-muted small mb-1">Monthly Payment</p>
                  <h3 className="fw-bold text-maskany mb-0">${monthlyPayment}</h3>
                </div>

                <button className="btn-maskany w-100 py-3 shadow-sm mb-3">Request Info</button>
                <button className="btn btn-outline-dark w-100 py-3 rounded-pill fw-bold">Schedule a Tour</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PropertyDetails;