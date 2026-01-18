'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('show');
        } else {
            document.body.classList.remove('show');
        }
        return () => {
            document.body.classList.remove('show');
        };
    }, [isMenuOpen]);

    const toggleMenu = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <div className={`main--menu ${isMenuOpen ? 'show' : ''}`}>
                <div className={`wrapper ${isMenuOpen ? 'show' : ''}`}>
                    <div className="container">
                        <div className={`top--header d-flex align-items-center justify-content-between ${!isMenuOpen ? 'd-none' : ''}`}>
                            <a href="/" className="popup-menu" onClick={closeMenu}>
                                <img loading="lazy" style={{ height: '50px', width: "200px" }} className="img-fluid" src="/assets/images/logo.jpg" alt="logo" />
                            </a>
                            <div className="menu--close--area">
                                <Link href="/contact" className="contact--toggle" onClick={closeMenu}>Let's talk!</Link>
                                <div className="menu--close" onClick={closeMenu}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
                                        <path d="M8.3421 8.01148L13.9737 16H11.2632L6.86842 9.7561L2.68421 16H0.0263159L5.63158 8.01148L0 0H2.68421L7.10526 6.26686L11.3158 0H14L8.3421 8.01148Z" fill="white" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="menu--inner">
                            <div className="left">
                                <ul id="menu-main-menu" className="softvence-menu">
                                    <li className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-home ${!isMenuOpen ? 'd-none' : ''}`}>
                                        <a href="/">Home</a>
                                    </li>
                                    <li className={`menu-item menu-item-type-post_type menu-item-object-page ${!isMenuOpen ? 'd-none' : ''}`}>
                                        <a href="/about-us">About Us</a>
                                    </li>
                                    <li className={`menu-item menu-item-type-post_type menu-item-object-page ${!isMenuOpen ? 'd-none' : ''}`}>
                                        <a href="/work">Work</a>
                                    </li>
                                    <li className={`menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children service--dropdown ${!isMenuOpen ? 'd-none' : ''}`}>
                                        <a href="#">Services
                                            <div className="drop--arrow">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M19.9201 8.94995L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.94995" stroke="#747474" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </a>
                                        <ul className="dropdown--menu">
                                            <li className="menu-item menu-item-type-post_type menu-item-object-servics"><a href="/services/brand-identity-design">Brand Identity Design</a></li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-servics"><a href="/services/ux-ui-design">UX/UI Design</a></li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-servics"><a href="/services/web-development">Web Development</a></li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-servics"><a href="/services/mobile-app-development">Mobile App Development</a></li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-servics"><a href="/services/consultation">Consultation</a></li>
                                        </ul>
                                    </li>
                                    <li className={`menu-item menu-item-type-post_type menu-item-object-page ${!isMenuOpen ? 'd-none' : ''}`}>
                                        <a href="/blog">Blog</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="right">
                                <div className={`menu--contact--info ${!isMenuOpen ? 'd-none' : ''}`}>
                                    <ul>
                                        <li><a href="mailto:hello@softvence.agency">hello@softvence.agency</a></li>
                                        <li><a href="https://www.google.com/maps" target="_blank">Sheridan, WY, USA</a></li>
                                    </ul>
                                    <div className="social--icons">
                                        {/* Social icons svgs simplified for brevity, using copy from html */}
                                        <a href="https://www.instagram.com/softvence/" target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M9.75085 14.1068C7.61719 14.1068 5.89521 12.3848 5.89521 10.2512C5.89521 8.11751 7.61719 6.39554 9.75085 6.39554C11.8845 6.39554 13.6065 8.11751 13.6065 10.2512C13.6065 12.3848 11.8845 14.1068 9.75085 14.1068ZM9.75085 7.74529C8.37102 7.74529 7.24497 8.87134 7.24497 10.2512C7.24497 11.631 8.37102 12.7571 9.75085 12.7571C11.1307 12.7571 12.2567 11.631 12.2567 10.2512C12.2567 8.87134 11.1307 7.74529 9.75085 7.74529ZM13.7644 15.1633C13.2662 15.1633 12.8639 14.761 12.8639 14.2628C12.8639 13.7647 13.2662 13.3624 13.7644 13.3624C14.2626 13.3624 14.6649 13.7628 14.6649 14.2628C14.665 14.3811 14.6418 14.4983 14.5966 14.6076C14.5514 14.7169 14.4851 14.8163 14.4015 14.8999C14.3178 14.9835 14.2185 15.0499 14.1092 15.0951C13.9999 15.1403 13.8827 15.1635 13.7644 15.1633ZM17.2666 10.2512C17.2666 11.2889 17.276 12.3172 17.2177 13.353C17.1595 14.5561 16.885 15.6239 16.0052 16.5037C15.1236 17.3853 14.0577 17.6579 12.8545 17.7162C11.8168 17.7745 10.7885 17.7651 9.75273 17.7651C8.71504 17.7651 7.68674 17.7745 6.65093 17.7162C5.4478 17.6579 4.38003 17.3834 3.50024 16.5037C2.61858 15.622 2.34599 14.5561 2.28772 13.353C2.22944 12.3153 2.23884 11.287 2.23884 10.2512C2.23884 9.21536 2.22944 8.18518 2.28772 7.14937C2.34599 5.94624 2.62046 4.87847 3.50024 3.99868C4.38191 3.11702 5.4478 2.84444 6.65093 2.78616C7.68862 2.72788 8.71692 2.73728 9.75273 2.73728C10.7904 2.73728 11.8187 2.72788 12.8545 2.78616C14.0577 2.84444 15.1254 3.1189 16.0052 3.99868C16.8869 4.88035 17.1595 5.94624 17.2177 7.14937C17.2779 8.18518 17.2666 9.21348 17.2666 10.2512ZM15.6123 5.81841C15.4751 5.47627 15.3097 5.22061 15.0446 4.95743C14.7795 4.69236 14.5258 4.52693 14.1836 4.3897C13.1948 3.9968 10.8468 4.08516 9.75085 4.08516C8.65488 4.08516 6.30503 3.9968 5.31621 4.38782C4.97407 4.52505 4.71841 4.69048 4.45522 4.95554C4.19016 5.22061 4.02473 5.47439 3.8875 5.81653C3.49648 6.80723 3.58484 9.1552 3.58484 10.2512C3.58484 11.3471 3.49648 13.697 3.8875 14.6858C4.02473 15.028 4.19016 15.2836 4.45522 15.5468C4.72029 15.81 4.97407 15.9773 5.31621 16.1145C6.30503 16.5055 8.65488 16.4172 9.75085 16.4172C10.8468 16.4172 13.1967 16.5055 14.1855 16.1145C14.5276 15.9773 14.7833 15.8119 15.0465 15.5468C15.3115 15.2817 15.477 15.028 15.6142 14.6858C16.0052 13.697 15.9169 11.3471 15.9169 10.2512C15.9169 9.1552 16.0052 6.80723 15.6123 5.81841Z" fill="white" />
                                            </svg>
                                        </a>
                                        <a href="https://www.facebook.com/softvenceagency/" className="button-click" target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={9} height={18}
                                                viewBox="0 0 9 18" fill="none">
                                                <path
                                                    d="M2.60954 17.5291H5.66647V9.91283H8.22261L8.60864 6.9498H5.66647V5.05096C5.66647 4.19543 5.90643 3.61117 7.13755 3.61117H8.71297V0.950703C8.44171 0.919403 7.51315 0.835938 6.42809 0.835938C4.15365 0.835938 2.60954 2.22355 2.60954 4.75883V6.9498H0.0429688V9.91283H2.60954V17.5291Z"
                                                    fill="white"></path>
                                            </svg>
                                        </a>
                                        <a href="https://www.instagram.com/softvence/" className="button-click" target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20}
                                                viewBox="0 0 20 20" fill="none">
                                                <path
                                                    d="M9.75085 14.1068C7.61719 14.1068 5.89521 12.3848 5.89521 10.2512C5.89521 8.11751 7.61719 6.39554 9.75085 6.39554C11.8845 6.39554 13.6065 8.11751 13.6065 10.2512C13.6065 12.3848 11.8845 14.1068 9.75085 14.1068ZM9.75085 7.74529C8.37102 7.74529 7.24497 8.87134 7.24497 10.2512C7.24497 11.631 8.37102 12.7571 9.75085 12.7571C11.1307 12.7571 12.2567 11.631 12.2567 10.2512C12.2567 8.87134 11.1307 7.74529 9.75085 7.74529ZM13.7644 15.1633C13.2662 15.1633 12.8639 14.761 12.8639 14.2628C12.8639 13.7647 13.2662 13.3624 13.7644 13.3624C14.2626 13.3624 14.6649 13.7628 14.6649 14.2628C14.665 14.3811 14.6418 14.4983 14.5966 14.6076C14.5514 14.7169 14.4851 14.8163 14.4015 14.8999C14.3178 14.9835 14.2185 15.0499 14.1092 15.0951C13.9999 15.1403 13.8827 15.1635 13.7644 15.1633ZM17.2666 10.2512C17.2666 11.2889 17.276 12.3172 17.2177 13.353C17.1595 14.5561 16.885 15.6239 16.0052 16.5037C15.1236 17.3853 14.0577 17.6579 12.8545 17.7162C11.8168 17.7745 10.7885 17.7651 9.75273 17.7651C8.71504 17.7651 7.68674 17.7745 6.65093 17.7162C5.4478 17.6579 4.38003 17.3834 3.50024 16.5037C2.61858 15.622 2.34599 14.5561 2.28772 13.353C2.22944 12.3153 2.23884 11.287 2.23884 10.2512C2.23884 9.21536 2.22944 8.18518 2.28772 7.14937C2.34599 5.94624 2.62046 4.87847 3.50024 3.99868C4.38191 3.11702 5.4478 2.84444 6.65093 2.78616C7.68862 2.72788 8.71692 2.73728 9.75273 2.73728C10.7904 2.73728 11.8187 2.72788 12.8545 2.78616C14.0577 2.84444 15.1254 3.1189 16.0052 3.99868C16.8869 4.88035 17.1595 5.94624 17.2177 7.14937C17.2779 8.18518 17.2666 9.21348 17.2666 10.2512ZM15.6123 5.81841C15.4751 5.47627 15.3097 5.22061 15.0446 4.95743C14.7795 4.69236 14.5258 4.52693 14.1836 4.3897C13.1948 3.9968 10.8468 4.08516 9.75085 4.08516C8.65488 4.08516 6.30503 3.9968 5.31621 4.38782C4.97407 4.52505 4.71841 4.69048 4.45522 4.95554C4.19016 5.22061 4.02473 5.47439 3.8875 5.81653C3.49648 6.80723 3.58484 9.1552 3.58484 10.2512C3.58484 11.3471 3.49648 13.697 3.8875 14.6858C4.02473 15.028 4.19016 15.2836 4.45522 15.5468C4.72029 15.81 4.97407 15.9773 5.31621 16.1145C6.30503 16.5055 8.65488 16.4172 9.75085 16.4172C10.8468 16.4172 13.1967 16.5055 14.1855 16.1145C14.5276 15.9773 14.7833 15.8119 15.0465 15.5468C15.3115 15.2817 15.477 15.028 15.6142 14.6858C16.0052 13.697 15.9169 11.3471 15.9169 10.2512C15.9169 9.1552 16.0052 6.80723 15.6123 5.81841Z"
                                                    fill="white"></path>
                                            </svg>
                                        </a>
                                        <a href="https://www.linkedin.com/company/softvence-agency/" className="button-click" target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18}
                                                viewBox="0 0 18 18" fill="none">
                                                <path fillRule="evenodd" clipRule="evenodd"
                                                    d="M7.40209 7.07147H10.0715V8.40116C10.4561 7.63641 11.4422 6.94928 12.9235 6.94928C15.7633 6.94928 16.4375 8.4716 16.4375 11.2647V16.4375H13.5625V11.9008C13.5625 10.3102 13.178 9.41316 12.199 9.41316C10.8413 9.41316 10.2771 10.3799 10.2771 11.9V16.4375H7.40209V7.07147ZM2.47219 16.3153H5.34719V6.94928H2.47219V16.3153ZM5.75903 3.89531C5.75914 4.13629 5.71135 4.37489 5.61844 4.59723C5.52552 4.81958 5.38934 5.02124 5.21781 5.1905C4.87023 5.53595 4.39974 5.72931 3.90969 5.72813C3.4205 5.7278 2.9511 5.53492 2.603 5.19122C2.43209 5.02139 2.29637 4.8195 2.20362 4.59712C2.11087 4.37475 2.06292 4.13626 2.0625 3.89531C2.0625 3.40872 2.25656 2.94297 2.60372 2.59941C2.95151 2.25524 3.42111 2.06228 3.91041 2.0625C4.40059 2.0625 4.87066 2.25584 5.21781 2.59941C5.56425 2.94297 5.75903 3.40872 5.75903 3.89531Z"
                                                    fill="white"></path>
                                            </svg>
                                        </a>
                                        <a href="https://dribbble.com/Softvenceagency" className="button-click" target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                                                viewBox="0 0 24 24" fill="none">
                                                <path d="M18.5 4.79004C15.9 9.34004 10.89 11.95 5.67 11.48L2.5 11.19"
                                                    stroke="white" strokeWidth="1.5" strokeMiterlimit="10"
                                                    strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M5.5 19.37C8.1 14.82 13.11 12.21 18.33 12.68L21.5 12.97"
                                                    stroke="white" strokeWidth="1.5" strokeMiterlimit="10"
                                                    strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path
                                                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                                    stroke="white" strokeWidth="1.5" strokeMiterlimit="10"
                                                    strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path
                                                    d="M7.62988 3L10.8099 6.95C12.9399 9.59 14.4499 12.66 15.2499 15.95L16.4599 20.94"
                                                    stroke="white" strokeWidth="1.5" strokeMiterlimit="10"
                                                    strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </a>
                                        <a href="https://www.behance.net/softvenceagency" className="button-click" target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={19} height={18}
                                                viewBox="0 0 19 18" fill="none">
                                                <path fillRule="evenodd" clipRule="evenodd"
                                                    d="M8.2974 8.67935C9.1679 9.20447 9.75 10.1593 9.75 11.25C9.75 12.9069 8.40685 14.25 6.75 14.25H2.25V8.25V3.75H6C7.65685 3.75 9 5.09315 9 6.75C9 7.48473 8.73587 8.15777 8.2974 8.67935ZM3.75 9.75V12.75H6.75C7.57843 12.75 8.25 12.0784 8.25 11.25C8.25 10.4216 7.57843 9.75 6.75 9.75H6H3.75ZM13.9784 12.75C14.7587 12.75 15.2383 12.5904 15.4943 12.3502C15.6291 12.2237 15.6854 12.0829 15.6854 12H17.1854C17.1854 13.2204 16.0879 14.25 13.9784 14.25C11.8909 14.25 10.5 12.8969 10.5 10.5C10.5 8.27542 11.6854 6.75 13.875 6.75C16.0646 6.75 17.25 8.27542 17.25 10.5V11.25H12.0664C12.2701 12.2828 12.9356 12.75 13.9784 12.75ZM15.686 9.75C15.4997 8.76767 14.905 8.25 13.875 8.25C12.845 8.25 12.2503 8.76767 12.064 9.75H15.686ZM11.25 6V4.5H16.5V6H11.25ZM3.75 5.25V8.25H6C6.82843 8.25 7.5 7.57843 7.5 6.75C7.5 5.92157 6.82843 5.25 6 5.25H3.75Z"
                                                    fill="white"></path>
                                            </svg>
                                        </a>
                                        <a href="https://api.whatsapp.com/send?phone=19179149545" className="button-click" target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                <path d="M6.9 20.6C8.4 21.5 10.2 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 13.8 2.5 15.5 3.3 17L2.44044 20.306C2.24572 21.0549 2.93892 21.7317 3.68299 21.5191L6.9 20.6Z" stroke="#fff" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M16.5 14.8485C16.5 15.0105 16.4639 15.177 16.3873 15.339C16.3107 15.501 16.2116 15.654 16.0809 15.798C15.86 16.041 15.6167 16.2165 15.3418 16.329C15.0714 16.4415 14.7784 16.5 14.4629 16.5C14.0033 16.5 13.512 16.392 12.9937 16.1715C12.4755 15.951 11.9572 15.654 11.4434 15.2805C10.9251 14.9025 10.4339 14.484 9.9652 14.0205C9.501 13.5525 9.08187 13.062 8.70781 12.549C8.33826 12.036 8.04081 11.523 7.82449 11.0145C7.60816 10.5015 7.5 10.011 7.5 9.543C7.5 9.237 7.55408 8.9445 7.66224 8.6745C7.77041 8.4 7.94166 8.148 8.18052 7.923C8.46895 7.6395 8.78443 7.5 9.11793 7.5C9.24412 7.5 9.37031 7.527 9.48297 7.581C9.60015 7.635 9.70381 7.716 9.78493 7.833L10.8305 9.3045C10.9116 9.417 10.9702 9.5205 11.0108 9.6195C11.0513 9.714 11.0739 9.8085 11.0739 9.894C11.0739 10.002 11.0423 10.11 10.9792 10.2135C10.9206 10.317 10.835 10.425 10.7268 10.533L10.3843 10.8885C10.3348 10.938 10.3122 10.9965 10.3122 11.0685C10.3122 11.1045 10.3167 11.136 10.3257 11.172C10.3393 11.208 10.3528 11.235 10.3618 11.262C10.4429 11.4105 10.5826 11.604 10.7809 11.838C10.9837 12.072 11.2 12.3105 11.4344 12.549C11.6778 12.7875 11.9121 13.008 12.151 13.2105C12.3853 13.4085 12.5791 13.5435 12.7323 13.6245C12.7549 13.6335 12.7819 13.647 12.8135 13.6605C12.8495 13.674 12.8856 13.6785 12.9261 13.6785C13.0028 13.6785 13.0613 13.6515 13.1109 13.602L13.4534 13.2645C13.5661 13.152 13.6743 13.0665 13.7779 13.0125C13.8816 12.9495 13.9852 12.918 14.0979 12.918C14.1835 12.918 14.2737 12.936 14.3728 12.9765C14.472 13.017 14.5756 13.0755 14.6883 13.152L16.18 14.2095C16.2972 14.2905 16.3783 14.385 16.4279 14.4975C16.473 14.61 16.5 14.7225 16.5 14.8485Z" stroke="#fff" strokeWidth="1.5" strokeMiterlimit="10" />
                                            </svg>
                                        </a>


                                        {/* More icons truncated for this task, adding at least one */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <header className="main--header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-3 col-3">
                            <a href="/" className="logo">
                                <img loading="lazy" className="img-fluid" src="/assets/images/logo.jpg" alt="Softvence Logo" />
                            </a>
                        </div>
                        <div className="col-md-9 col-9">
                            <div className="menu--wrapper">
                                <div className="header--btn">
                                    <Link href="/contact" className="button button-click header--btn contact--toggle">Get a Quote</Link>
                                </div>
                                <div className="hamburger--menu" onClick={toggleMenu}>
                                    <img src="https://softvence-assect.vercel.app/assets/images/hamburger.svg" alt="Menu" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
