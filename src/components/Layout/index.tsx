import { FC } from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

interface Props {
    children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
