export default function Footer() {
  return (
    <footer className="w-full border-t-2 border-violet-600 bg-[#08152d] text-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <h2 className="text-4xl font-bold">DigiTools</h2>
            <p className="mt-4 max-w-xs text-sm leading-6 text-white/70">
              Premium digital tools for creators,<br /> professionals, and businesses.
              Work smarter <br /> with our suite of powerful tools.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-base font-semibold">Product</h3>
            <ul className="space-y-3 cursor-pointer text-sm text-white/70 ">
              <li>Features</li>
              <li>Pricing</li>
              <li>Templates</li>
              <li>Integrations</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-base font-semibold">Company</h3>
            <ul className="cursor-pointer space-y-3 text-sm text-white/70 ">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-base font-semibold">Resources</h3>
            <ul className="space-y-3 cursor-pointer text-sm text-white/70">
              <li>Documentation</li>
              <li>Help Center</li>
              <li>Community</li>
              <li>Contact</li>
            </ul>

            <h3 className="mb-4 mt-8 text-base font-semibold">Social Links</h3>
            <div className="flex items-center  gap-3">
              <div className="flex cursor-pointer transition duration-300 hover:scale-110 h-9 w-9 items-center justify-center rounded-full bg-white text-[#08152d]">
                <img src="src/img/Instagram.png" alt="instagram" />
              </div>
              <div className=" cursor-pointer transition duration-300 hover:scale-110 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#08152d]">
                <img src="src/img/Facebook.png" alt="facebook" />
              </div>
              <div className=" cursor-pointer transition duration-300 hover:scale-110 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#08152d]">
                <img src="src/img/fi_5968958.png" alt="x" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-4 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
            <p> &copy; 2026 Digitools. All rights reserved.</p>

            <div className=" cursor-pointer flex gap-6">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Cookies</span>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}