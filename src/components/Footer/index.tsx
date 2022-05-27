import Link from "next/link";
import { FC } from "react";
import settings from "common/app-settings.json";

const Footer: FC = () => {
    const year = new Date().getFullYear();
    return (
        <div className="mx-auto px-2 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between border-t border-secondary py-4">
                <div className="font-bold font-body text-2xl text-dark">
                    {settings.appName}
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
                            @{year} {settings.appName}. All rights reserved. Version {settings.appVersion}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
