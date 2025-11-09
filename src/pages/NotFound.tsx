import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <section className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-100 via-white to-green-100 overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-green-400/40 rounded-full blur-3xl opacity-40" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-400/40 rounded-full blur-3xl opacity-40" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="relative z-10 text-center max-w-lg px-6"
      >
        <motion.div
          animate={{ rotate: [0, -5, 5, 0] }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
          className="mx-auto mb-6 flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-r from-green-500 to-purple-500 shadow-xl"
        >
          <AlertTriangle className="h-12 w-12 text-white" />
        </motion.div>

        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-green-600 mb-4">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          The page you’re looking for doesn’t exist or may have been moved.
          Don’t worry — let’s get you back on track.
        </p>

        <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.96 }}>
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-green-500 to-emerald-600 shadow-md hover:shadow-lg transition-all duration-300 hover:from-green-600 hover:to-emerald-700"
          >
            <Home className="h-5 w-5" />
            Return to Home
          </Link>
        </motion.div>
      </motion.div>

      {/* Floating 404 digits in background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute text-[20rem] font-extrabold text-purple-900/10 select-none"
      >
        404
      </motion.div>
    </section>
  );
};

export default NotFound;
