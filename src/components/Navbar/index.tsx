import ActiveLink from "components/ActiveLink";
import { FC } from "react";
import styled from "styled-components";

const Nav = styled.nav`
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: saturate(180%) blur(20px);
`;

const Navbar: FC = () => (
    <Nav className="fixed top-8 right-1 sm:right-4 md:right-10 left-1 sm:left-4 md:left-10 h-[80px] rounded-lg z-50">
        <div className="mx-auto px-2 sm:px-6 lg:px-8 h-full">
            <div className="relative flex items-center justify-between h-full text-light">
                <div className="hidden md:block font-body font-bold text-2xl cursor-pointer select-none text-warning">
                    Tour De Force
                </div>
                <div className="block md:hidden font-body font-bold text-2xl cursor-pointer select-none text-warning">
                    TFD
                </div>
                <div className="flex">
                    <ul className="flex flex-row items-center">
                        <li className="ml-5 font-bold text-1xl">
                            <ActiveLink href="/" activeClassName="text-warning">
                                <a>Home</a>
                            </ActiveLink>
                        </li>
                        <li className="ml-5 font-bold text-1xl">
                            <ActiveLink href="/" activeClassName="text-light">
                                <a>Work</a>
                            </ActiveLink>
                        </li>
                        <li className="ml-5 font-bold text-1xl">
                            <ActiveLink href="/" activeClassName="text-light">
                                <a>About</a>
                            </ActiveLink>
                        </li>
                        <li className="ml-5 font-bold text-1xl">
                            <ActiveLink
                                href="/blog"
                                activeClassName="text-light"
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
