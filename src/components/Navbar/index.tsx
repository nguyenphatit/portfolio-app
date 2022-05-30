import ActiveLink from "components/ActiveLink";
import { FC } from "react";
import styled from "styled-components";

const Nav = styled.nav`
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: saturate(180%) blur(20px);
`;

const Navbar: FC = () => (
    <Nav className="fixed top-0 right-0 left-0 md:top-1 md:left-2 md:right-2 md:rounded-md lg:top-2 lg:left-10 lg:right-10 lg:rounded-3xl h-[60px] z-50">
        <div className="container mx-auto px-2 lg:px-0 h-full">
            <div className="relative flex items-center justify-between h-full text-light">
                <div className="font-body font-bold text-2xl cursor-pointer select-none text-warning">
                    <span className="hidden md:block">Tour De Force</span>
                    <span className="block md:hidden">TFD</span>
                </div>
                <div className="flex">
                    <ul className="flex flex-row items-center">
                        <li className="ml-5 font-bold text-1xl">
                            <ActiveLink href="/" activeClassName="text-warning">
                                <a>Home</a>
                            </ActiveLink>
                        </li>
                        <li className="ml-5 font-bold text-1xl">
                            <ActiveLink
                                href="/blog"
                                activeClassName="text-warning"
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
