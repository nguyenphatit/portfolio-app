import Link from "next/link";
import { useRouter } from "next/router";
import React, { Children, FC } from "react";

interface Props {
    activeClassName: string;
    children: React.ReactNode;
    href: string;
}

const ActiveLink: FC<Props> = ({ children, activeClassName, href, ...props }) => {
    const { asPath } = useRouter();
    const child: any = Children.only(children);
    const childClassName = child.props.className || "";

    const className =
        asPath === href
            ? `${childClassName} ${activeClassName}`.trim()
            : childClassName;

    return (
        <Link  href={href} {...props}>
            {React.cloneElement(child, {
                className: className || null,
            })}
        </Link>
    );
};

export default ActiveLink;
