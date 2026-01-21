const About = () => {
  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">
        <i className="fa-solid fa-book me-2 text-primary"></i>
        About eNotebook
      </h1>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card h-100 shadow-sm text-center">
            <div className="card-body">
              <i className="fa-solid fa-circle-info fa-3x text-primary mb-3"></i>
              <h5 className="card-title">What is eNotebook?</h5>
              <p className="card-text">
                eNotebook is a secure, cloud-based notes application that allows
                users to create, manage, and access their notes from anywhere.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 shadow-sm text-center">
            <div className="card-body">
              <i className="fa-solid fa-bolt fa-3x text-success mb-3"></i>
              <h5 className="card-title">Key Features</h5>
              <ul className="list-unstyled mt-2">
                <li>
                  <i className="fa-solid fa-check text-success me-2"></i>
                  Create notes
                </li>
                <li>
                  <i className="fa-solid fa-check text-success me-2"></i>
                  Edit & delete notes
                </li>
                <li>
                  <i className="fa-solid fa-check text-success me-2"></i>
                  JWT authentication
                </li>
                <li>
                  <i className="fa-solid fa-check text-success me-2"></i>
                  Secure cloud storage
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 shadow-sm text-center">
            <div className="card-body">
              <i className="fa-solid fa-layer-group fa-3x text-warning mb-3"></i>
              <h5 className="card-title">Tech Stack</h5>
              <p className="card-text mb-1">
                <strong>Frontend:</strong> React, Bootstrap
              </p>
              <p className="card-text mb-1">
                <strong>Backend:</strong> Node.js, Express
              </p>
              <p className="card-text">
                <strong>Database:</strong> MongoDB
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-5 text-muted">
        <i className="fa-solid fa-lock me-2"></i>
        © 2026 eNotebook — Secure notes anytime, anywhere
      </div>
    </div>
  );
};

export default About;
