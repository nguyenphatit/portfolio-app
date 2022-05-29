import styled from "styled-components";
import settings from "common/app-settings.json";

const Link = styled.a`
    padding: 0.5rem 1rem;
    border-radius: 10px;
    color: #202124;
    transition: all 0.2s linear;
    &:hover {
        background-color: rgba(246, 189, 65, 0.3);
    }
`;

const Contact = () => (
    <section className="bg-[#F5F5F7] py-10">
        <div className="container mx-auto">
            <div className="w-full">
                <h1 className="text-6xl font-bold text-warning py-10 mx-1 md:mx-auto">
                    Contact.
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {settings.contacts.map((contact) => (
                        <Link
                            key={contact.via}
                            target="_blank"
                            href={contact.url}
                            className="font-bold text-xl"
                            rel="noreferrer"
                        >
                            {contact.via}{" "}
                            <span className="material-symbols-outlined text-sm">
                                open_in_new
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default Contact;
