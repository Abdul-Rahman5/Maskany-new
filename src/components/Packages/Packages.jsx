import React from 'react';

const packagesData = [
  {
    id: 1,
    name: "Standard",
    price: "Free",
    duration: "For 30 Days",
    features: ["5 Property Listings", "Basic Support", "Standard Gallery", "Search Results Entry"],
    isFeatured: false,
    buttonText: "Get Started"
  },
  {
    id: 2,
    name: "Premium",
    price: "$99",
    duration: "Per Month",
    features: ["Unlimited Listings", "Priority Support", "Featured Badge", "Social Media Promotion", "Video Tours"],
    isFeatured: true, // هذه هي الباقة التي سيظهر عليها البادج
    buttonText: "Go Premium"
  },
  {
    id: 3,
    name: "Business",
    price: "$249",
    duration: "Per Year",
    features: ["All Premium Features", "Verified Seller Badge", "Leads Dashboard", "Account Manager"],
    isFeatured: false,
    buttonText: "Contact Sales"
  }
];

const Packages = () => {
  return (
    <section className="packages-section py-5 bg-light">
      <div className="container py-5">
        
        {/* Header */}
        <div className="text-center mb-5 mt-4">
          <h6 className="text-maskany fw-bold text-uppercase ls-2">Pricing Plans</h6>
          <h2 className="display-5 fw-bold luxury-text">Choose Your Best Plan</h2>
          <div className="mx-auto bg-maskany mt-2" style={{ width: '60px', height: '3px' }}></div>
        </div>

        <div className="row g-4 align-items-end justify-content-center">
          {packagesData.map((pkg) => (
            <div className="col-lg-4 col-md-6" key={pkg.id}>
              {/* Card Container */}
              <div className={`package-card ${pkg.isFeatured ? 'featured' : ''}`}>
                
                {/* Most Popular Badge - يظهر فقط إذا كانت الباقة featured */}
                {pkg.isFeatured && (
                  <div className="popular-ribbon">
                    <i className="bi bi-fire me-1"></i> MOST POPULAR
                  </div>
                )}

                <div className="card-header-custom text-center">
                  <h4 className="fw-bold">{pkg.name}</h4>
                  <div className="price-tag">
                    <span className="currency">$</span>
                    <span className="amount">{pkg.price.replace('$', '')}</span>
                    <span className="period">/{pkg.duration.split(' ')[1]}</span>
                  </div>
                </div>

                <ul className="features-list list-unstyled">
                  {pkg.features.map((feature, i) => (
                    <li key={i}>
                      <i className="bi bi-check-lg me-2 text-maskany"></i>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="card-footer-custom">
                  <button className={`btn-maskany w-100 ${!pkg.isFeatured ? 'btn-outline' : ''}`}>
                    {pkg.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;