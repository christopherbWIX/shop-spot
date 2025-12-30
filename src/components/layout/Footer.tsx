import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16 px-8">
      <div className="max-w-[120rem] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h2 className="font-heading text-3xl uppercase mb-4">
              MODERN
            </h2>
            <p className="font-paragraph text-sm text-primary-foreground/80">
              Premium quality products for the contemporary lifestyle.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-heading text-lg uppercase mb-4">
              Shop
            </h3>
            <ul className="space-y-2 font-paragraph text-sm">
              <li>
                <Link to="/store" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Shopping Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading text-lg uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-2 font-paragraph text-sm">
              <li>
                <span className="text-primary-foreground/80">About Us</span>
              </li>
              <li>
                <span className="text-primary-foreground/80">Contact</span>
              </li>
              <li>
                <span className="text-primary-foreground/80">Careers</span>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-heading text-lg uppercase mb-4">
              Support
            </h3>
            <ul className="space-y-2 font-paragraph text-sm">
              <li>
                <span className="text-primary-foreground/80">Shipping Info</span>
              </li>
              <li>
                <span className="text-primary-foreground/80">Returns</span>
              </li>
              <li>
                <span className="text-primary-foreground/80">FAQ</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-paragraph text-xs text-primary-foreground/60 uppercase tracking-wider">
              © 2025 Modern Retail. All rights reserved.
            </p>
            <div className="flex gap-6 font-paragraph text-xs uppercase tracking-wider">
              <span className="text-primary-foreground/60">Privacy Policy</span>
              <span className="text-primary-foreground/60">Terms of Service</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
