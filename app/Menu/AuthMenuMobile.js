import { useSession, signIn, signOut } from "next-auth/react"

export default function AuthMenuMobile(){
    const { data: session } = useSession();
    if(session){
        return (
            <div className="w-full block transition-none hover:bg-transparent">
                <div className="w-full avatar flex">
                    <div className="w-full flex justify-between">
                        <div className="w-10 h-10">
                            <img className="dark:bg-white rounded-full" src={session.user.image} />
                        </div>
                        <div className="text-gray-900">
                            Logged in as <b>{session.user.name}</b>
                        </div>
                    </div>
                    <ul className="menu bg-base-100 dark:bg-gray-800 dark:text-gray-300 w-full border-t dark:border-gray-600">
                        <li className="block">
                            <a href="/profile" className="px-6 bg-gray-100 dark:bg-gray-900">
                                Profile
                            </a>
                        </li>
                        <li className="block">
                            <a href="/account" className="px-6 bg-gray-100 dark:bg-gray-900">
                                Account
                            </a>
                        </li>
                        <li className="block">
                            <a onClick={() => signOut()} className="px-6 bg-gray-100 dark:bg-gray-900">
                                Logout
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    } else {
        return (
            <div className="w-full block transition-none hover:bg-transparent">
                <div className="w-full avatar flex">
                    <div className="w-full flex justify-between">
                        <div className="w-10 h-10">
                            <svg className="w-5 h-5 dark:text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/>
                            </svg>
                        </div>
                        <div className="text-gray-900">
                            Not logged in.
                        </div>
                    </div>
                    <ul className="menu bg-base-100 dark:bg-gray-800 dark:text-gray-300 w-full border-t dark:border-gray-600">
                        <li className="block">
                            <a onClick={() => signIn()} className="px-6 bg-gray-100 dark:bg-gray-900">
                                Login/Sign Up
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}