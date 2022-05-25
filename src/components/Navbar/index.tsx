import ActiveLink from "components/ActiveLink";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import styled from "styled-components";

const Nav = styled.nav`
    background-color: rgba(255, 255, 255, 0.72);
    backdrop-filter: saturate(180%) blur(20px);
`;

const Navbar: FC = () => (
    <Nav className="fixed top-0 right-0 left-0 h-[52px]">
        <div className="mx-auto px-2 sm:px-6 lg:px-8 h-full">
            <div className="relative flex items-center justify-between h-full text-dark">
                <div className="font-body font-bold text-2xl">Navbar</div>
                <div className="flex">
                    <ul className="flex flex-row items-center">
                        <li className="ml-5 text-1xl">
                            <ActiveLink href="/" activeClassName="text-primary">
                                <a>Home</a>
                            </ActiveLink>
                        </li>
                        <li className="ml-5 text-1xl">
                            <ActiveLink
                                href="/blog"
                                activeClassName="text-primary"
                            >
                                <a>Blog</a>
                            </ActiveLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </Nav>
);

export default Navbar;
