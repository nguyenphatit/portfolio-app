import Link from "next/link";
import { FC } from "react";

const Footer: FC = () => {
    const year = new Date().getFullYear();
    return (
        <div className="mx-auto px-2 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between border-t border-secondary py-4">
                <div className="font-bold font-body text-2xl text-dark">
                    Tour De Force
                </div>
                <div className="font-body text-secondary">
                    <ul className="flex flex-row">
                        <li>
                            <Link href={"/"}>
                                <a>Term</a>
                            </Link>
                        </li>
                        <li className="pl-4">
                            <Link href={"/"}>
                                <a>Privacy</a>
                            </Link>
                        </li>
                        <li className="pl-4">
                            @{year} Tour De Force. All rights reserved.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
