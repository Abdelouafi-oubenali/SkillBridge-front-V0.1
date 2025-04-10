function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 pb-[24px]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        <div>
          <div>
            <a href="/" className="text-2xl font-bold font-unbounded text-orange">
              FootTicket
            </a>
          </div>
          <p className="mt-3 text-gray-400">Creating memorable events with ease.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-gray-400">
            <li>
              <a href="/" className="hover:text-[#d63621]">Home</a>
            </li>
            <li>
              <a href="/events" className="hover:text-[#d63621]">Events</a>
            </li>
            <li>
              <a href="/faqs" className="hover:text-[#d63621]">FAQs</a>
            </li>
            <li>
              <a href="/help/support" className="hover:text-[#d63621]">Support</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex space-x-4 mt-3">
            <a href="#" className="text-gray-400 hover:text-[#d63621]">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-[#d63621]">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-[#d63621]">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-[#d63621]">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Newsletter</h3>
          <form className="mt-3">
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-2 rounded text-white bg-gray-700 outline-none"
            />
            <button className="mt-3 w-full bg-green-600 text-white py-2 rounded hover:bg-[#b32a19]">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="text-center text-gray-400 mt-8 border-t border-gray-700 pt-6">
        © 2025 FootTicket. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
