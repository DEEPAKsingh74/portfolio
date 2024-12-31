import React, { useRef, useState, useEffect } from "react";
import contactStyle from "../../(screens)/main/ContactComp/contact.module.css";

const purposeArr = [
    "Interview",
    "Hire",
    "Freelancing",
    "Machine Learning",
    "Miscellaneous",
];

const USelector = () => {
    const [selected, setSelected] = useState<null | string>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownWidth, setDropdownWidth] = useState(0);
    const parentRef = useRef<HTMLDivElement>(null);

    const changeSelected = (index: number) => {
        setSelected(purposeArr[index]);
        setIsOpen(false);
    };

    const toggleOpen = () => {
        setIsOpen((prev) => !prev);
    };

    useEffect(() => {
        // Adjust dropdown width to match the parent input container
        if (parentRef.current) {
            setDropdownWidth(parentRef.current.offsetWidth);
        }
    }, [isOpen]);

    return (
        <div ref={parentRef} className={contactStyle.selectorContainer}>
            <input
                type="text"
                placeholder="Purpose of Contact"
                value={selected || "Purpose Of Contact"}
                className="px-6 py-4 w-full h-[3em] rounded-lg bg-[#303030] focus:border-[#ffdb70] border border-transparent outline-none tracking-widest font-semibold cursor-pointer"
                readOnly
                onClick={toggleOpen}
            />
            {isOpen && (
                <div
                    className="absolute mt-2 bg-[#3c3c3c] rounded-lg shadow-lg z-10"
                    style={{ width: `${dropdownWidth}px` }}
                >
                    {purposeArr.map((item, index) => (
                        <span
                            key={index}
                            onClick={() => changeSelected(index)}
                            className="block px-4 py-2 text-white font-semibold hover:bg-[#2f2e2e] cursor-pointer transition-all"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
};

export default USelector;
