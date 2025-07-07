import Link from 'next/link';
import Image from 'next/image'

export const Header =()  =>{
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur flex items-center justify-between py-3 px-8 bg-white">
            <div>
                <Link href="/" className="text-gray-700 rounded">
                    <Image src="/logo.png" alt="Logo" width={40} height={40} />
                </Link>
            </div>

            <nav>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/about" className="text-gray-700 hover:bg-gray-100 p-1 rounded">
                            about
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
    }

export default Header;