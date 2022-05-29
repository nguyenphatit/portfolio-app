import React, { useEffect, useRef } from "react";

const BuyMeACoffee = () => {
    const div = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const script = document.createElement("script");
        script.setAttribute("src", "https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js");
        script.setAttribute("data-name", "BMC-Widget");
        script.setAttribute("data-cfasync", "false");
        script.setAttribute("data-id", "nguyenphatit");
        script.setAttribute("data-description", "Support me on Buy me a coffee!");
        script.setAttribute("data-message", "Thank you for visting. You can now buy me a coffee");
        script.setAttribute("data-color", "#FFDD00");
        script.setAttribute("data-position", "Right");

        if (window.innerWidth < 480) {
            script.setAttribute("data-x_margin", "10");
            script.setAttribute("data-y_margin", "10");
        } else if (window.innerWidth < 768) {
            script.setAttribute("data-x_margin", "10");
            script.setAttribute("data-y_margin", "60");
        } else {
            script.setAttribute("data-x_margin", "20");
            script.setAttribute("data-y_margin", "60");
        }


        script.onload = function () {
            var evt = document.createEvent("Event");
            evt.initEvent("DOMContentLoaded", false, false);
            window.dispatchEvent(evt);
        };

        div.current?.appendChild(script);
    }, []);

    return <div ref={div}></div>;
}

export default BuyMeACoffee;
