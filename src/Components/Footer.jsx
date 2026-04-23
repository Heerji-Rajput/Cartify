// import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
// import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">MyWebsite</h2>
          <p className="mt-3 text-sm">
            Building modern and responsive web applications with great user experience.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">About</a></li>
            <li><a href="#" className="hover:text-white transition">Services</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Services</h3>
          <ul className="space-y-2">
            <li>Web Development</li>
            <li>App Development</li>
            <li>UI/UX Design</li>
            <li>SEO Optimization</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          {/* <div className="flex space-x-4">
            <a href="#"><TwitterIcon className="hover:text-white" /></a>
            <a href="#"><TwitterIcon className="hover:text-white" /></a>
            <a href="#"><InstagramIcon className="hover:text-white" /></a>
            <a href="#"><LinkedinIcon className="hover:text-white" /></a>
          </div> */}
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} MyWebsite. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;