import { Link } from "react-router";

export default function Notfound() {
  return (
    <div className="notfound-container">
    <div className="notfound-card">
      <h1>404</h1>
      <p>Page not found.</p>
      <Link to="/">Return to Home</Link>
    </div>
    </div>
  );
}