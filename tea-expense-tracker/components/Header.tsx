import { checkUser } from "@/lib/user";
import { SignedIn, SignInButton, SignedOut, UserButton } from "@clerk/nextjs";
import { LeafIcon } from "lucide-react";

const Header = async () => {
    const user = await checkUser();
    return (
        <nav className="bg-gradient-to-r from-emerald-800 to-emerald-900 p-4 shadow-lg">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center mb-4 sm:mb-0">
          <LeafIcon className="h-6 w-6 text-emerald-300 mr-2" />
          <h2 className="text-xl sm:text-2xl font-semibold text-emerald-50 font-serif">
            Tea Expense Tracker
          </h2>
        </div>
        <div className="flex items-center space-x-4">
          <SignedIn>
            <UserButton 
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10 rounded-full border-2 border-emerald-300 hover:border-white transition-colors duration-200"
                }
              }}
            />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="bg-emerald-100 hover:bg-emerald-200 text-emerald-900 font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </nav>
    );
}

export default Header;
