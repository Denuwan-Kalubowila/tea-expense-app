import { SignInButton } from "@clerk/nextjs"

const Welcome = async () => {
    return (
        <div className="container  mt-10 p-5 flex flex-col justify-center items-center">
            <h1 className="font-sans font-semibold text-4xl">Welcome</h1>
            <p className="font-sans text-2xl mt-4">This app makes it easy to manage your expenses in tea plantation in Sri Lanka</p>
            <SignInButton className="bg-emerald-800 text-white p-2 rounded mt-4"/>
        </div>
    )
}

export default Welcome