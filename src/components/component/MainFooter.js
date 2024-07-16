import SelectLanguage from "./selectLanguage";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-10">
      <div className="container mx-auto px-4 w-[80vw]">
        <h2 className="mb-4 text-gray-100">Questions? Call 000-800-919-1694</h2>
        <div className="flex flex-wrap justify-between text-sm">
          <div>
            <ul className="flex flex-col gap-y-4">
              <li>
                <a href="#" className="underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="underline">
                  Investor Relations
                </a>
              </li>
              <li>
                <a href="#" className="underline">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="underline">
                  Speed Test
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-y-4">
              <li>
                <a href="#" className="underline">
                  Help Centre
                </a>
              </li>
              <li>
                <a href="#" className="underline">
                  Jobs
                </a>
              </li>
              <li>
                <a href="#" className="underline">
                  Cookie Preferences
                </a>
              </li>
              <li>
                <a href="#" className="underline">
                  Legal Notices
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-y-4">
              <li>
                <a href="#" className="underline">
                  Account
                </a>
              </li>
              <li>
                <a href="#" className="underline">
                  Ways to Watch
                </a>
              </li>
              <li>
                <a href="#" className="underline">
                  Corporate Information
                </a>
              </li>
              <li>
                <a href="#" className="underline">
                  Only on Netflix
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-y-4">
              <li>
                <a href="#" className="underline">
                  Media Centre
                </a>
              </li>
              <li>
                <a href="#" className="underline">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8">
          <SelectLanguage />
        </div>
        <div className="mt-4 ">Netflix India</div>
      </div>
    </footer>
  );
};

export default Footer;
