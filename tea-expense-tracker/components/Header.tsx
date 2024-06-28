import { checkUser } from "@/lib/user";
import { SignedIn, SignInButton, SignedOut, UserButton } from "@clerk/nextjs";

const Header = async () => {
    const user = await checkUser();
    return (
        <nav className="bg-emerald-800 p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h2 className="text-2xl font-semibold text-zinc-300">Tea Expense Tracker</h2>
                <div className="flex flex-row items-center space-x-4">
                    <SignedIn>
                        <UserButton className="bg-white text-black p-2 rounded" />
                    </SignedIn>
                    <SignedOut>
                        <SignInButton className="bg-white text-black p-2 rounded" />
                    </SignedOut>
                </div>
            </div>
        </nav>
    );
}

export default Header;
