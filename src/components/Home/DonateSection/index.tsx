import styled from "styled-components";
import BuyMeACoffee from "../BuyMeACoffee";

const Heading = styled.h1`
    background: -webkit-linear-gradient(320deg, #06B7DB -63.59%, #FF4ECD -20.3%, #0072F5 70.46%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const DonateSection = () => {
    return <BuyMeACoffee />
    // return (
    //     <section className="bg-[#F5F5F7] py-10">
    //         <div className="container mx-auto">
    //             <div className="w-full">
    //                 <Heading className="text-6xl font-bold text-success py-10 mx-1 md:mx-auto">
    //                     You like my work?
    //                 </Heading>
    //                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        
    //                 </div>
    //             </div>
    //         </div>
    //     </section>
    // );
};

export default DonateSection;
