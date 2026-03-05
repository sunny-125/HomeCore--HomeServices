import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-20 gap-10">
      <div className="px-6 md:px-36 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* ABOUT */}
        <div>
          <h2 className="font-bold mb-3">About</h2>
          <p className="text-gray-600 text-sm">
            A trusted service booking platform connecting customers
            with verified professionals.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h2 className="font-bold mb-3">Quick Links</h2>
          <ul className="flex flex-col gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:scale-100 hover:text-primary cursor-pointer">Home</Link>
            <Link href="/about" className="hover:scale-100 hover:text-primary cursor-pointer">About Us</Link>
            <Link href="/mybooking" className="hover:scale-100 hover:text-primary cursor-pointer">My Bookings</Link>
          </ul>
        </div>

        {/* LEGAL */}
        <div>
          <h2 className="font-bold mb-3">Legal</h2>
          <ul className="flex flex-col gap-2 text-sm text-gray-600">
            <Link href="/privacy-policy" className="hover:scale-100 hover:text-primary cursor-pointer">Privacy Policy</Link>
            <Link href="/terms" className="hover:scale-100 hover:text-primary cursor-pointer">Terms & Conditions</Link>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h2 className="font-bold mb-3">Follow Us</h2>
          <div className="flex gap-4 text-sm text-gray-600"> 
            <a href="https://www.instagram.com/sunnyp_03/" target="_blank" className="hover:scale-105 hover:text-primary cursor-pointer" 
            
            >Instagram</a>
            
            <a href="#" target="_blank" >LinkedIn</a>
            <a href="#" target="_blank">Twitter</a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 pb-4">
        © {new Date().getFullYear()} Service Platform. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;