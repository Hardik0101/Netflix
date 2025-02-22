import SelectLanguage from "./selectLanguage";

const MiniFooter = () => {
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
                  Cookie Preferences
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
                  Corporate Information
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-y-4">
              <li>
                <a
                  href="https://help.netflix.com/legal/termsofuse"
                  className="underline"
                >
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-y-4">
              <li>
                <a
                  href="https://help.netflix.com/legal/privacy"
                  className="underline"
                >
                  Privacy
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

export default MiniFooter;
