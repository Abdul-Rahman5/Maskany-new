import React from 'react';
import { NavLink } from 'react-router-dom';

const properties = [
  {
    id: 1,
    title: "The Golden Sands Villa",
    location: "Palm Jumeirah, Dubai",
    price: "$3,500,000",
    beds: 5,
    baths: 4,
    size: "4,200 sqft",
    tag: "Exclusive",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1471&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Modernist Forest Retreat",
    location: "Aspen, Colorado",
    price: "$1,850,000",
    beds: 3,
    baths: 3,
    size: "2,800 sqft",
    tag: "Trending",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Azure Sea View Penthouse",
    location: "Monaco, France",
    price: "$8,200,000",
    beds: 4,
    baths: 5,
    size: "5,100 sqft",
    tag: "Luxury",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Minimalist Desert Oasis",
    location: "Sedona, Arizona",
    price: "$950,000",
    beds: 2,
    baths: 2,
    size: "1,900 sqft",
    tag: "New",
    image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=1474&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Minimalist Desert Oasis",
    location: "Sedona, Arizona",
    price: "$950,000",
    beds: 2,
    baths: 2,
    size: "1,900 sqft",
    tag: "New",
    image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=1474&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Minimalist Desert Oasis",
    location: "Sedona, Arizona",
    price: "$950,000",
    beds: 2,
    baths: 2,
    size: "1,900 sqft",
    tag: "New",
    image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=1474&auto=format&fit=crop"
  }
];

const Home = () => {
  return (
    <div className="home-wrapper pt-5">
      {/* --- Hero Section --- */}
      <section className="hero-v2 d-flex align-items-center position-relative overflow-hidden" style={{ minHeight: '90vh' }}>
        <div className="hero-bg-overlay"></div>
        <img 
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1475&auto=format&fit=crop" 
          className="hero-video-bg" 
          alt="Luxury Home" 
        />
        
        <div className="container position-relative z-3 text-white text-center">
          <span className="reveal d-inline-block px-3 py-1 rounded-pill mb-3" style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', fontSize: '0.8rem', letterSpacing: '2px' }}>
            WELCOME TO MASKANY
          </span>
          <h1 className="display-1 reveal mb-4" style={{ animationDelay: '0.2s' }}>
            Elevate Your <br /> <span className="text-gold">Living Experience</span>
          </h1>
          <p className="lead reveal mb-5 mx-auto" style={{ maxWidth: '600px', animationDelay: '0.4s' }}>
            Discover the most prestigious properties around the world, curated for those who demand excellence.
          </p>
          
          {/* Floating Search Bar */}
          <div className="search-pill reveal mx-auto d-flex align-items-center p-2 glass rounded-pill" style={{ maxWidth: '800px', animationDelay: '0.6s' }}>
            <input type="text" className="form-control border-0 bg-transparent shadow-none px-4" placeholder="Search by city, neighborhood..." />
            <button className="btn-maskany rounded-pill px-5">Search</button>
          </div>
        </div>
      </section>

      {/* --- Stats Section --- */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-md-3">
              <h3 className="fw-bold mb-0">12k+</h3>
              <p className="text-muted small">Premium Properties</p>
            </div>
            <div className="col-md-3">
              <h3 className="fw-bold mb-0">450+</h3>
              <p className="text-muted small">Happy Families</p>
            </div>
            <div className="col-md-3">
              <h3 className="fw-bold mb-0">25</h3>
              <p className="text-muted small">Global Awards</p>
            </div>
            <div className="col-md-3">
              <h3 className="fw-bold mb-0">100%</h3>
              <p className="text-muted small">Secure Deals</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Properties Grid --- */}
      <section className="container py-100">
        <div className="text-center mb-5 mt-5">
          <h2 className="display-5">The Villa Collection</h2>
          <p className="text-muted">Explore our handpicked luxury villas</p>
        </div>

        <div className="row g-5">
          {properties.map((p) => (
            <div className="col-lg-6 col-xl-4" key={p.id}>
              <div className="maskany-card h-100 border-0 shadow-sm overflow-hidden">
                <div className="position-relative overflow-hidden group">
                  <img src={p.image} className="card-img-top transition-all" alt={p.title} style={{ height: '300px', objectFit: 'cover' }} />
                  <div className="card-tag position-absolute top-0 start-0 m-3 px-3 py-1 bg-white text-dark rounded-pill fw-bold small shadow-sm">
                    {p.tag}
                  </div>
                  <div className="card-overlay transition-all d-flex align-items-center justify-content-center">
                    <NavLink className="btn btn-light rounded-pill px-4" to={`/propertyDetails/${p.id}`}>View Details</NavLink>

                    {/* <button className="btn btn-light rounded-pill px-4">View Details</button> */}
                  </div>
                </div>
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <h4 className="fw-bold mb-0">{p.title}</h4>
                    <span className="text-gold fw-bold">{p.price}</span>
                  </div>
                  <p className="text-muted mb-4 small"><i className="bi bi-geo-alt me-1"></i> {p.location}</p>
                  
                  <div className="d-flex justify-content-between pt-3 border-top border-light">
                    <div className="text-center">
                      <i className="bi bi-bed text-muted"></i>
                      <p className="mb-0 small fw-bold">{p.beds} Beds</p>
                    </div>
                    <div className="text-center">
                      <i className="bi bi-droplet text-muted"></i>
                      <p className="mb-0 small fw-bold">{p.baths} Baths</p>
                    </div>
                    <div className="text-center">
                      <i className="bi bi-aspect-ratio text-muted"></i>
                      <p className="mb-0 small fw-bold">{p.size}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;