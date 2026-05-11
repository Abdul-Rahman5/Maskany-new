import React, { useState } from 'react';


const Help = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const faqs = [
    {
      question: "How do I list my property on Maskany?",
      answer: "To list a property, go to the 'Add Property' page from your dashboard, fill in the multi-step form with details and photos, and click publish."
    },
    {
      question: "Is there a fee for using the mortgage calculator?",
      answer: "No, our mortgage calculator is a free tool provided to help you estimate your monthly payments based on current market rates."
    },
    {
      question: "How can I contact a property agent?",
      answer: "On each property detail page, there is a 'Request Info' or 'Schedule a Tour' button that connects you directly with the assigned agent."
    },
    {
      question: "Are the location maps accurate?",
      answer: "Yes, we use real-time Google Maps data to provide precise locations for every property listed on our platform."
    }
  ];

  return (
    <div className="help-page py-5 bg-white">
      {/* --- Hero Section --- */}
      <div className="help-hero py-5 mb-5 text-center text-white" style={{background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070) center/cover'}}>
        <div className="container py-4">
          <h1 className="display-4 fw-bold mb-3">How can we help you?</h1>
          <div className="col-md-6 mx-auto">
            <div className="search-box position-relative">
              <input 
                type="text" 
                className="form-control form-control-lg rounded-pill px-4 shadow" 
                placeholder="Search for articles, guides..." 
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <i className="bi bi-search position-absolute top-50 end-0 translate-middle-y me-4 text-muted"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row g-5">
          {/* --- Left Side: Contact Cards --- */}
          <div className="col-lg-4">
            <h4 className="fw-bold mb-4">Contact Support</h4>
            <div className="contact-card p-4 rounded-4 shadow-sm border mb-3">
              <div className="d-flex align-items-center mb-3">
                <div className="icon-box bg-gold-light p-3 rounded-circle me-3">
                  <i className="bi bi-chat-dots-fill text-maskany fs-4"></i>
                </div>
                <h5 className="mb-0 fw-bold">Live Chat</h5>
              </div>
              <p className="text-muted small">Chat with our luxury real estate consultants for instant help.</p>
              <button className="btn btn-dark w-100 rounded-pill">Start Chat</button>
            </div>

            <div className="contact-card p-4 rounded-4 shadow-sm border">
              <div className="d-flex align-items-center mb-3">
                <div className="icon-box bg-dark text-white p-3 rounded-circle me-3">
                  <i className="bi bi-envelope-fill fs-4"></i>
                </div>
                <h5 className="mb-0 fw-bold">Email Us</h5>
              </div>
              <p className="text-muted small">Expect a response within 24 hours for all inquiries.</p>
              <a href="mailto:support@maskany.com" className="text-maskany fw-bold text-decoration-none">support@maskany.com</a>
            </div>
          </div>

          {/* --- Right Side: FAQs Accordion --- */}
          <div className="col-lg-8">
            <h4 className="fw-bold mb-4">Frequently Asked Questions</h4>
            <div className="accordion accordion-flush" id="helpAccordion">
              {faqs.filter(f => f.question.toLowerCase().includes(searchTerm.toLowerCase())).map((faq, index) => (
                <div className="accordion-item border mb-3 rounded-3 overflow-hidden shadow-sm" key={index}>
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed fw-bold py-3" type="button" data-bs-toggle="collapse" data-bs-target={`#faq${index}`}>
                      {faq.question}
                    </button>
                  </h2>
                  <div id={`faq${index}`} className="accordion-collapse collapse" data-bs-parent="#helpAccordion">
                    <div className="accordion-body text-muted lh-lg">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* --- Help Categories --- */}
            <div className="row mt-5 g-3">
              <div className="col-md-4">
                <div className="category-item text-center p-4 border rounded-4 hover-shadow">
                  <i className="bi bi-shield-lock fs-2 text-maskany"></i>
                  <h6 className="mt-2 fw-bold">Security</h6>
                </div>
              </div>
              <div className="col-md-4">
                <div className="category-item text-center p-4 border rounded-4 hover-shadow">
                  <i className="bi bi-credit-card fs-2 text-maskany"></i>
                  <h6 className="mt-2 fw-bold">Payments</h6>
                </div>
              </div>
              <div className="col-md-4">
                <div className="category-item text-center p-4 border rounded-4 hover-shadow">
                  <i className="bi bi-house-check fs-2 text-maskany"></i>
                  <h6 className="mt-2 fw-bold">Buying Guide</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;