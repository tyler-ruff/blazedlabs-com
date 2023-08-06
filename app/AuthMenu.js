import { useSession, signIn, signOut } from "next-auth/react"

export default function AuthMenu(){
    const { data: session } = useSession();
    if(session){
        return (
            <div title={session.user.name} className="avatar border rounded-full p-1 dropdown dropdown-end cursor-pointer">
                <div tabIndex={0}  className="w-6 rounded-full">
                    <img className="dark:bg-white" src={session.user.image} />
                </div>
                <ul tabIndex={0} className="dropdown-content dark:text-gray-700 z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <a href="/profile">
                            Profile
                        </a>
                    </li>
                    <li>
                        <a href="/account">
                            Account
                        </a>
                    </li>
                    <li>
                        <a onClick={() => signOut()} className="cursor-pointer">
                            Logout
                        </a>
                    </li>
                </ul>
            </div>
        );
    } else {
        return (
            <div title="Not Logged in." className="avatar border rounded-full p-1 dropdown dropdown-end cursor-pointer">
                <div tabIndex={0}  className="w-5 rounded-full">
                    <svg className="w-5 h-5 dark:text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                        <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/>
                    </svg>
                </div>
                <ul tabIndex={0} className="dropdown-content z-[1] dark:text-gray-700 menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <a onClick={() => signIn()} className="cursor-pointer">
                            Login/Sign Up
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}