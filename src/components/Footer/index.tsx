import { FC } from "react";
import settings from "common/app-settings.json";
import Link from "next/link";

const Footer: FC = () => {
    const year = new Date().getFullYear();
    return (
        <div className="mx-auto px-2 sm:px-6 lg:px-8 pt-24 bg-[#F5F5F7]">
            <div className="flex flex-col md:flex-row items-center justify-between border-t border-secondary py-4">
                <div className="font-bold font-body text-2xl text-dark">
                    <Link href={'/'}><a>{settings.appName}</a></Link>
                </div>
                <div className="font-body text-secondary">
                    <ul className="flex flex-row">
                        <li className="pl-4">
                            @{year} <b>{settings.appName}</b>. All rights reserved. Version {settings.appVersion}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
