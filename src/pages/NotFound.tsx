import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-md mx-auto">
          <h1 className="font-constantia text-6xl text-hince-dark mb-4">404</h1>
          <h2 className="font-constantia text-2xl text-hince-dark mb-6">
            Page Not Found
          </h2>
          <p className="font-arial text-hince-dark/70 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-block bg-hince-primary text-white px-8 py-3 font-arial text-sm hover:bg-hince-primary/90 transition-colors"
          >
            Go Back Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
