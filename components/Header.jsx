import Image from "next/image";
import logo from "../public/logo.png";
import Navigation from "./Navigation";

export default function Header() {
    return (
        <div className="sticky inset-x-0 top-0 z-10 bg-opacity-60 bg-zinc-100 backdrop-blur-lg">
            <div className="container flex items-center justify-between py-8">
                <div className="w-20 h-20 rounded-full overflow-hidden flex items-center justify-center">
                    <Image src={logo} alt="logo" width={80} height={80} className="object-cover" />
                </div>
                <Navigation />
            </div>
        </div>
    );
}
