'use client';

import React, { useEffect } from 'react';
import Preloader from '@/components/Preloader';
import Header from '@/components/Header';
import ContactMarquee from '@/components/ContactMarquee';
import ContactPopup from '@/components/ContactPopup';
import Footer from '@/components/Footer';

export default function Page() {


	return (
		<div id="page" className="site">
			<div className="parent--wrapper">
				<Header />
				<main>
					{/* Copied Content */}


					<section className="inner--hero--area about--inner--hero">
						<div className="container">
							<div className="row">
								<div className="col-md-12">
									<div className="inner--hero--text">
										<h1 data-splitting>Impossible Gets									<svg className="char" xmlns="http://www.w3.org/2000/svg" width="110" height="104"
											viewBox="0 0 110 104" fill="none">
											<path
												d="M55 0L60.0256 50.0829L109.21 39.386L63.1315 59.6421L88.5038 103.114L55 65.55L21.4962 103.114L46.8685 59.6421L0.78978 39.386L49.9744 50.0829L55 0Z"
												fill="#00AB0C" />
										</svg>
											<br />
										</h1>
										<h2 data-splitting><span className="primary--dark">Possible</span> With Us</h2>

								     <a href="/contact" className="rotate--circle--wrapper circle--hero">
                                            <div className="circle--outer">
                                                <img loading="lazy" src="data:image/png+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABDPSURBVHgB7Z3hddy2EoVvcvI/6iDjCuJXQZAKolRgvgqiDsxXgZUKRFdgpQJvKrBTgTcVWK7Ab6/BEblcANyVtNoleb9zcOQFQFriYojBzGAAiHPlYlNeb8qnTfm6KR825WZTDEIsHEMUDArFZfs5bErT1r8sXMt+9aZcjfQTYrI0iIJwkWh717YNsbb+c3v9bfv5HTTriBlBoaBKdVloH84MhigMdaKeAvIhcy/NMGJyBEQBuTjgmgbpWQXtfTirXCXaeM0tRJbvIc6NOxzOz5vyZ+F+f7V9+gTEGeaXxDVsO0RAZ4sE5PxYIw7qQ9Qf9v1YaOf9XgzqqML9vSlfEAWizw3yKt6iWKqA8MuvcJ5wML/dlDdIv8Xd3NvnX5QX4pw9hgL0G6J6xRJ69aG916pXx88VxGKoEfXyc4WCQUHgGqFCHLQU6vdtnQ36X7dtKdj3K7aF4GVbZ+39+9c22BYOtNeu2v/7D8gqNisuMnUUkIDzpkIcmGvEGaBG/u/h4KVj0Xr11tYPZxwK1IfetX2jgAtlitD2/Qo5LWcDBaFK1JfeulPEEIWJfy//LgoABzL/zqFQsa1v1WL/CtszSwr37LO9gSxgs6BGWhACDjenTgEOcl9jpf42Q/y7+0aAGnFGoDCtkKc0u4gJUCF+yX1K6hQFp8ay4Mwx9JkExGf0CWl/CamQ97WIiUDhuEnU18jPIjkv85yxRB0FpKRepdYyOShkFcTZUSOtF48tyuUUi2uK3MuiQll4HD7Hd23fc7YSLoIKuyZP1q0y/WukZxHOOvwyJSR5+NzGZg9DF4HMviuIk2KIg5tvq9dtHRenubcgBSBk7lNB5BizbHkfCkeD+JwpUNcQZ4EhfjluYSktJNlOAdJssT+G8mDneoMCVPfqOCMrVOXM4Bf1GWXdl18a1ygSkKeBM7evN9xs7I7HlxDPQsD+Hlv2y4V2i6eFapQLRoXOysV/f81c49uIb3p9xSNw/be/zhjDZxLNEsfFsBvWUqPbPz/kFeL3smr7sbhqbBAPZo34tjnkYfILqiFOgUcI9zHsrlMcrm/kgHwEfIC+bnCrVS4U3DFoBjkVwzgvMmYmllr8CAK2VSZ+9tkkQJwbDba/l30W7bxmXy+9SND3ggd0uuw+s4k4LYb8ot2pocjgR9EgqlcUhv7MwZ98sAZxruxr9rXB55fQ9/qNgM7sRz3UEn0qxIe8gh7aFGF81qEqlEcdGxaKhySsEGeHGt3a4jLRd7htVEwHQ+cnsbZuH0dijYUKiSGd6Azo9osPH6Die6aNIarKX3vl/cg1r9t+ixISQ144HE7Jw4d3BZkC54AHjY7NIC4cFRY2kxjGN98EzHM7rNgPD4C8GtQZFoIhqlFvCn322aAj5scr5L3ui4JTLIUkFWMVoPCDJSLhGJATEsVSLQ8PTK2xQAz5hMgVumhd39O8xEQKS4fqdo2FEdAlMCtl5KvQmfMaaHEuFgCdfZ7VMBVoaIP+tFI0EOJwDBPDc8WGTBtnlTEnkRD74CZhw4Tg7LEqtBu0b1k8jn4OrqM5kH/AcfA0MDnWiGdajB38IkQKjpt37b//gyOOoWMdoHOH8SnvR0RBEeIQOFtQRadQHFU4jslY9C1VsE+QtUocRoVxlYpjyjABaqTP5jCMBysKkWJsb7ur9mdnAKJEXybqa3RpYPiHvYdCCcTD4TiqMm2e7qnBmWkmhnIoMutrxF+cf0SAEA+jxu7sQGHgy/dsM6NQOM7yFxOzw/1rDEuiOhXQOZ7P0mXQ3/FVQYjjY4iJOjwncI28SmU4IYbO2VdDJ5+K8yGgOzGrpP4flWH0pWH7GAIhTgXH4DW69e9ZuRRqaDYRz4uhG2v8OQxj4sL+rNbJhii1qewkQjw1DDvpZ2YcnkfJthucIRWEOD7DqI0G2ymiPDuKEItkOGNQnerPKJd4IMcKVhTiOflzU/7ofaZa31+U30KIBeOb8D6h2+L94Fmjz3cQYj5UiMLCEPgVhBDngaGLxhViMeyz5dYQBYNbZLXYEWJAg10ni29M4WKIThqDENPC8ERbLz4MbmSIdudrdInhriHEtPC0t4+O0aJ65VnYDbvbZQOUaFpME47tR5uDeQM/Dci3NPYJkElNTI+AJ0xgaIizxjAi0nd4VRDi/OF45Sa/z225xW6YypPhi/QGQpw3AV3CkOEuRP77ydfQvPkllIBBnDcBXejJCvlc0Qe7L7jCp8RVkAlXTBcO/hpH2E1oiKqTq1ESFiEyBGwLixyDQmSg6uVhxUJMGUN8+bM8qQrGm2mvuZgqhs6i1S+vU51TOwrHpOluU77gCAsfIY6MIWpA3Af1a/vT/12hixgp3mBsUe59DEJMi1J2eMOeTkN2aNAtyilx9KB7LlTP1C7ElPAza6zQ5xoHOg1De4ELi1uxpF6JqWGIM0SJCo94+V9AgiGmi88gpTHcQFs3xILhGqTOtBnyR5cLsQgCds84vEC3p0mzh1g8DLL1vNH+0yN8d1BeLLFUAjqLFqN57yCEeBiyTgnRcW+x9bxYFeJ0cwUhloELAR3gtik/o0t6zc9MiH3lAsKKNYRYBv1zC7n2YFLEj5vyd/vTLVv3uH1YEbpiCaxR3gDI+m9bOr7rXfBTrwOliJL1T9v2sVcnxNS5bUtT6EN/yXeuYlE4KCzWlpe9nwFRP/sb8jKKebBG2TBl6E0GvktwDFm6xFwIKCeMo7Fq5R848CsIsSy4xkjtInyF3WOkhVgchigkLO/a4qEn9+4OhZqIpVOh83/QENVAxighDsOQXrS8hvaei4VjiLrXKtHmObBkwRJzw/MsjNIgLlBS+PEGNYSYFw2itco3SmWFZSzVCSWtZDMWYqoYOuuVC8vWsoKJ4zhLrAs3+QitQ8Q8WSOGU73dlBeb8j/EJHIUFC4vKgoITVpWuAnb/oUQ82aNqHaFTfkv4rj/5kisUVahdMSamDM14hokdTxbALqFOBNm9RcqbHwPZXIX84bCQYHwU6hqJKy2hm5V3y8raP0h5kmFbragkIRUp2GoibWFErSCXO5ivni8VQONcyGOi0EIsUOFuFBfQYjlEVKVQ3NXDcViieXQH/+fcg0sdMGvIMQ8MWy/+AM6k+8KcRF/4R37DVXvBvKBiLmyRufO8FispLm3bhvpKLRePf89diKPEFPF0B0DXaGLv7JhR3rPG2yfSUhhuWw/C7EUaqQni3soLBViHIq732nF8lgVIeaOodsoGMaSNoReaVDORCfEnKggD7sQQgghxAFwjeF7oCrEJURyjd0/H+QO0rnEMnjb/vS0uz+hk4F1W5is/f7U2wbl06X8JB5ZssRc8UNzKAe04l73G1l5k+jIOvePsFxCiAUS0AVnuTCs0c0sbNfsIRYLBz+FwrPNSRjEXOEYf40HsIbORBDzh9YrT1DyGd35nFw+WOnCBkrvI5YFhcQX5R5a5XugdjBItRLLxgXm3hi17wE6bublhbQZ/w4hFo47Uaiv+S5Dj+4VYpFQKDybu+tjDaKgvEE0AxuEWCg10pnmLtt6gxBiC0MUDnnRhRhg0AlTQmRhWHA/aMvjtFhXQ4gFQ3e8L8orbFuzVpBTUSwYWrL6+YL61iw5E8Vi+CFTb4jHrv2F6IZfQQhxj2YJIbB/qInj3nX+vEOcXdYQQnzzpPtGqlVb+PlBsfVCzAkPMwmDemvrryDEQgmIM4UV2pXkWiwWOgVvR/pQQLQbUcyO7/fowwX5x5E+XyDLl5gh+wgIheOXQrshbqJaQ4gFwpmhpELpqDaxeGilorWqaj970KKfo2AQYuFU2E4sx7KChEOcF/7yPpnR6CWUXE6cH4Zuq3j/cM4KZwKFhiHxNAsbhHg+DFEYVuic2X725llFe9ToQlBeQYjnoUHeUFQhjseAE2CZ+oBo+QoQ4viMjbUGg+MMnoMK5RxZNZRDSxwfQzkUilR4oCtiH0dhDqpQ60L7MHWQEMfgrv1phT4PNig9RkBeIB5TNYasXeKYUEBWKAsIX+YNnpkGZb2uQrQsCHFsSj4PTz7y7ATksy2yTvm0xKkwxBAoPzXNcCJqdM6Yi/YXocTyF/sAIU4Ds4A2iCFSJ1fxK2yHoPgBJFp7iGPgcYE+1uicNkwAgzzo4rhQbXKNxc+roaaiDXti8fhiO6WZ1IhCIq1FLJZU0pA+fhinEIvDENccJfwwziflMY5CIZ4bG2l/chVLAiKmwBoxN8IfhT4e3i7EIhjOBgH5vR1u+jUIsQBqRPPtRaLeT1qmUFToPOYy84rFYIgzQkpI2NYgBihS7aoh865YIIa8kAghICER4hs8PYBrCa4rwqDNICERC4aDnoP/K7q4Kl+Ic7/RZVskJAX0UOaNC4mbalkoFBSQFTqhYXlyb/nUqREfjIRk3gyFZAjNuBXk69jBoBOs5sRloW1MSEQPPqyxCE4xLQxRXXpd6OPfu4RkBL5J3iXqra2X53SaVBjPdGjQoryIHxqaejgB0YMqAZkuXHznEn44bFtBs8gOnvTBEm2sCxBTgS+63AxAM+4naIY4CAoHp9/UQs6gI6enBAd+SZUyxO/zZnCNQWSpkd82yXXHDcpQeAziXOAaovRCo5r8ue3Df+sF+EB8w74V+lQYT2Isng8OdA7+2z36+WE3Eo4HEJBXuxyDMjmeCqpFXE/4esPazyt0i/ESbpCR0eUBuE28LvQxdPmScu0GcUwMne/CVSbCQV+a1f2EZC3UH0GVqedDdYsXv5jrTL9LjL/FxOMxdC+q/mzPZ19lrgkQRyGgcyTx3w3ys8wVlCf4KQiIRpL3baky/Wps7x33qFzxDLi+6/l/nbEvLHVE1wX0BtsXn6lrxOfsSRJyhpPQtnFGaaAX1LMSsPul8AvILeIbdAFw79t+/aA46b9lchZEf4a5Y/YM20nN9ZxPSGqGcPopKSt0X5qC4fbDk0WnMIzHVdWQdfGkuMc2ZybkW67q9c2FU7ONqsNNW2osw/Toxo4UhvGUOv0XkDhTKuSncJ9dSsJh6HRqz7fUDOrmylhIyJhq1ECL8MniXz7XHR+QD59+V2hzp9eceYylqWQgEWeOO6pKewvGnFk5HZxC52ZPDq6A6eJhIYcSoLXcpPEAuNLGm5KfhEIwFB43NffVsev28xuchoD4O7nFiIJr+1++l5rFdUqF3bMoLyEmjaGsR9fIB9Q1iTbWpczDhihodfpW94PQsD8U8Bt0Juoq0ceFuG7vzWtcZTyEkpp1gS6uyoVwBfmRFkFpBhmGSRjKb9qA/FFgrsrt6w8wdM650P4e/TgnhwN7uA3gAmXTd4p91SyDfBqLwgfTq0F9hd3BPhbXVTI5B4yfktSHb+zbxO80fMuvkZ5ZxvZiDBkK1QUkCPgB4m5TfkVUS2xT3iIOOgrDbdvuWNs2Rmpg2Z7X9vlx8LlJ9PmItED+syk/Y3/u2nu9af/Ne/6O+VvwiuiEqQgHBoXkBbrwid825a9EPyvcJ/T6DbFN+Rf7c43tfS4BacFbI/075QQnBWea923/L5vyJ+KzWEGIBJw9UgtWV0Nyqstwj3Uf3m+FwzBE9ekWXYhMShVM7YUZUweHv1sFqVTiCQjowrmtV+emX8tcx0GeE559cUtSfyDnFv8GbUEWJ8IQZ4Ov2DZ7WuGaQ2OWOOArjAtDyTAgP4U4Ke40y6kmFbrAR1e/AvZbG7g651kkDfmtxWukLVkvIbXpUXwHcUxeohvcLG469c9jsE+zKb8gWpZomaqwaw2ztv0O4kn5P3Y9gWZs2p5JAAAAAElFTkSuQmCC" alt="Get a Quote" style={{ animation: 'rotate 10s linear infinite' }} />
                                            </div>
                                            <div className="circle--inner">
                                                <p>CLICK <br />HERE!</p>
                                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M37.6455 30.0625L24.9997 42.7083L12.3538 30.0625" stroke="white" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M25 7.29297L25 42.3555" stroke="white" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <style jsx>{`
                                                @keyframes rotate {
                                                    from { transform: rotate(0deg); }
                                                    to { transform: rotate(360deg); }
                                                }
                                            `}</style>
                                        </a>
									</div>
								</div>
							</div>
						</div>
					</section>



					<section className="about--image--area">
						<div className="about--image--wrapper">
							<img src="https://softvence.agency/wp-content/uploads/al_opt_content/IMAGE/softvence.agency/wp-content/uploads/2024/03/Thumnail-3.png?bv_host=softvence.agency&amp;bv-resized-infos=bv_resized_mobile%3A480%2A446%3Bbv_resized_ipad%3A820%2A762%3Bbv_resized_desktop%3A826%2A768" loading="lazy" className="w-100 bv-tag-attr-replace bv-lazyload-tag-img" alt="" />
						</div>
					</section>


					<section className="who--we--are--area" data-aos="fade-In" data-aos-duration="1000">
						<div className="container">
							<div className="row title--row">
								<div className="col-lg-3 mt_20">
									<div className="single--title">
										<h3 className="common--sub--heading mt_10" data-aos="fade-up" data-aos-duration="1000">WHO
											WE ARE</h3>
									</div>
								</div>
								<div className="col-lg-9 mt_20">
									<div className="about--right--text">
										<p className="common--para" data-aos="fade-up" data-aos-duration="1000">We are a digital agency focused on web design and development, where we go beyond creating websites & develop digital experiences that connect with vision! <br /><br />

											Our passionate team of designers, developers, researchers, and strategists share a passion for innovation that combines creativity and functionality to drive success. <br /><br />

											Softvence is not just a design agency; it's a strategic partner on your journey to digital excellence. Explore the possibilities with Softvence Agency – where innovation meets impact.
										</p>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-12">

									<div className="counter--wrapper">

										<div className="counter--box" data-aos="fade-In" data-aos-duration="1000"
											data-aos-delay="300">
											<p>Clients Served</p>
											<h2>
												<span className="counter">40000</span>
												<p>+</p>
											</h2>
										</div>

										<div className="counter--box" data-aos="fade-In" data-aos-duration="1000"
											data-aos-delay="600">
											<p>Team Members</p>
											<h2>
												<span className="counter">400</span>
												<p>+</p>
											</h2>
										</div>

										<div className="counter--box" data-aos="fade-In" data-aos-duration="1000"
											data-aos-delay="900">
											<p>Years Of Experience</p>
											<h2 className="primary--color">
												<span className="counter primary--color">7</span>
												<p className="primary--color">+</p>
											</h2>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>


					<section className="why--choose--us--area section section-dark" data-aos="fade-In" data-aos-duration="1000">
						<div className="container">
							<div className="row title--row">
								<div className="col-lg-3 mt_20">
									<div className="single--title">
										<h3 className="common--sub--heading mt_10" data-aos="fade-up" data-aos-duration="1000">WHY
											CHOOSE US</h3>
									</div>
								</div>
								<div className="col-lg-9 mt_20">
									<div className="about--right--text">
										<h2 className="common--heading" data-aos="fade-up" data-aos-duration="1000">Choose Excellence- Elevate Your Digital Journey With <span className="primary--color">Softvence Agency.</span>
										</h2>
									</div>
								</div>
							</div>

							<div className="choose--cards--wrapper">

								<div className="choose--card" data-aos="fade-up" data-aos-duration="1000">
									<p className="card--num">01</p>
									<div className="choose--text--content">
										<h4>Transparent Communication</h4>
										<p>Elevate trust through clear, honest dialogue, ensuring a partnership built on transparency and shared understanding.</p>
									</div>
									<div className="hover--revel--img">
										<img bv-data-src="https://softvence.agency/wp-content/uploads/al_opt_content/IMAGE/softvence.agency/wp-content/uploads/2024/02/case-studies1.png?bv_host=softvence.agency&amp;bv-resized-infos=bv_resized_mobile%3A480%2A360%3Bbv_resized_ipad%3A820%2A615%3Bbv_resized_desktop%3A1024%2A768" className="bv-tag-attr-replace bv-lazyload-tag-img" loading="lazy" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" />
									</div>
								</div>
								<div className="choose--card" data-aos="fade-up" data-aos-duration="1000">
									<p className="card--num">02</p>
									<div className="choose--text--content">
										<h4>Free Consultation</h4>
										<p>Explore possibilities risk-free with our complimentary consultation, guiding you towards informed decisions for success.</p>
									</div>
									<div className="hover--revel--img">
										<img bv-data-src="https://softvence.agency/wp-content/uploads/al_opt_content/IMAGE/softvence.agency/wp-content/uploads/2024/02/blog1.png?bv_host=softvence.agency&amp;bv-resized-infos=bv_resized_mobile%3A427%2A357%3Bbv_resized_ipad%3A427%2A357%3Bbv_resized_desktop%3A427%2A357" className="bv-tag-attr-replace bv-lazyload-tag-img" loading="lazy" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" />
									</div>
								</div>
								<div className="choose--card" data-aos="fade-up" data-aos-duration="1000">
									<p className="card--num">03</p>
									<div className="choose--text--content">
										<h4>Years of Experience</h4>
										<p>Benefit from our seasoned expertise, gained through years of navigating the digital landscape, ensuring optimal solutions.</p>
									</div>
									<div className="hover--revel--img">
										<img bv-data-src="https://softvence.agency/wp-content/uploads/al_opt_content/IMAGE/softvence.agency/wp-content/uploads/2024/02/team2.png?bv_host=softvence.agency&amp;bv-resized-infos=bv_resized_mobile%3A359%2A443%3Bbv_resized_ipad%3A359%2A443%3Bbv_resized_desktop%3A359%2A443" className="bv-tag-attr-replace bv-lazyload-tag-img" loading="lazy" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" />
									</div>
								</div>
								<div className="choose--card" data-aos="fade-up" data-aos-duration="1000">
									<p className="card--num">04</p>
									<div className="choose--text--content">
										<h4>Innovative Excellence</h4>
										<p>Experience innovation that goes beyond boundaries, as we continuously strive for excellence in crafting digital solutions.</p>
									</div>
									<div className="hover--revel--img">
										<img bv-data-src="https://softvence.agency/wp-content/uploads/al_opt_content/IMAGE/softvence.agency/wp-content/uploads/2024/02/blog1.png?bv_host=softvence.agency&amp;bv-resized-infos=bv_resized_mobile%3A427%2A357%3Bbv_resized_ipad%3A427%2A357%3Bbv_resized_desktop%3A427%2A357" className="bv-tag-attr-replace bv-lazyload-tag-img" loading="lazy" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" />
									</div>
								</div>
								<div className="choose--card" data-aos="fade-up" data-aos-duration="1000">
									<p className="card--num">05</p>
									<div className="choose--text--content">
										<h4>30 Days of Ongoing Support</h4>
										<p>Beyond project completion, relish peace of mind with our unwavering support for 30 days, ensuring a seamless transition.</p>
									</div>
									<div className="hover--revel--img">
										<img bv-data-src="https://softvence.agency/wp-content/uploads/al_opt_content/IMAGE/softvence.agency/wp-content/uploads/2024/02/image-57.png?bv_host=softvence.agency&amp;bv-resized-infos=bv_resized_mobile%3A480%2A755%3Bbv_resized_ipad%3A538%2A846%3Bbv_resized_desktop%3A538%2A846" className="bv-tag-attr-replace bv-lazyload-tag-img" loading="lazy" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" />
									</div>
								</div>
							</div>
						</div>
					</section>


					<section className="team--area">
						<div className="container">
							<div className="row title--row">
								<div className="col-lg-3 mt_20">
									<div className="single--title">
										<h3 className="common--sub--heading mt_10" data-aos="fade-up" data-aos-duration="1000">OUR
											TEAM</h3>
									</div>
								</div>
								<div className="col-lg-9 mt_20">
									<div className="about--right--text">
										<h2 className="common--heading" data-aos="fade-up" data-aos-duration="1000">
											Meet the Softvence Pioneers of <span className="primary--dark">Digital Innovation.</span>
										</h2>
										<p className="common--para" data-aos="fade-up" data-aos-duration="1000">
											Our team, a fusion of creativity and expertise, is dedicated to crafting unparalleled digital experiences. With diverse talents in design, development, research, and strategy, we converge to elevate your vision. Each member embodies our commitment to innovation, ensuring every project reflects the pinnacle of excellence. Meet the architects of your digital success at Softvence Agency.
										</p>
									</div>
								</div>
							</div>

							<div className="owl-carousel team--slider" data-aos="fade-In" data-aos-duration="1000">
								<div className="item">
									<div className="team--box img--small">
										<img bv-data-src="https://softvence.agency/wp-content/uploads/al_opt_content/IMAGE/softvence.agency/wp-content/uploads/2024/02/team1.png?bv_host=softvence.agency&amp;bv-resized-infos=bv_resized_mobile%3A464%2A544%3Bbv_resized_ipad%3A464%2A544%3Bbv_resized_desktop%3A464%2A544" className="bv-tag-attr-replace bv-lazyload-tag-img" loading="lazy" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" />
									</div>
								</div>
								<div className="item">
									<div className="team--box img--large">
										<img bv-data-src="https://softvence.agency/wp-content/uploads/al_opt_content/IMAGE/softvence.agency/wp-content/uploads/2024/02/team2.png?bv_host=softvence.agency&amp;bv-resized-infos=bv_resized_mobile%3A359%2A443%3Bbv_resized_ipad%3A359%2A443%3Bbv_resized_desktop%3A359%2A443" className="bv-tag-attr-replace bv-lazyload-tag-img" loading="lazy" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" />
									</div>
								</div>
							</div>
						</div>
					</section>


					<section className="award--area section section-dark" data-aos="fade-In" data-aos-duration="1000">
						<div className="container">
							<div className="row title--row">
								<div className="col-lg-3 mt_20">
									<div className="single--title">
										<h3 className="common--sub--heading mt_10" data-aos="fade-up" data-aos-duration="1000">
											AWARDS WE GOT</h3>
									</div>
								</div>
								<div className="col-lg-9 mt_20">
									<div className="about--right--text">
										<h2 className="common--heading" data-aos="fade-up" data-aos-duration="1000">
											Embark on Excellence with Softvence- Celebrating Our <span className="primary--color">Award-Winning Achievements.</span>
										</h2>
									</div>
								</div>
							</div>
							<div className="row mt_100">
								<div className="col-lg-4 col-sm-6 mt_20" data-aos="fade-up" data-aos-duration="1000">
									<div className="marketplace--box">

										<svg xmlns="http://www.w3.org/2000/svg" width="168" height="53" viewBox="0 0 168 53"
											fill="none">
											<path
												d="M148.421 25.8716H143.035C139.552 25.8716 137.649 28.4644 137.649 32.9833V49.1328H127.248V25.8716H122.9C119.416 25.8716 117.514 28.4644 117.514 32.9833V49.1328H107.088V17.1795H117.514V22.0441C119.243 18.2166 121.516 17.1795 124.975 17.1795H137.649V22.0441C139.379 18.2166 141.652 17.1795 145.11 17.1795H148.594L148.421 25.8716ZM104.667 35.5761H83.1231C83.6419 39.2307 85.8901 41.1321 89.5466 41.1321C92.3137 41.1321 94.2408 39.9221 94.9325 38.0207L104.123 40.6135C101.875 46.1696 96.3161 49.4538 89.5466 49.4538C78.256 49.4538 73.043 40.6135 73.043 32.9586C73.043 25.5012 77.5642 16.6362 88.8548 16.6362C100.837 16.6362 104.84 25.6493 104.84 32.44C104.84 34.0204 104.84 34.8847 104.667 35.5761ZM94.7843 29.5015C94.6113 26.7358 92.536 24.2912 89.0525 24.2912C85.7666 24.2912 83.8395 25.674 83.1478 29.5015H94.7843ZM55.0076 49.1081H64.0253L75.4889 17.3523H65.0629L59.5041 35.9218L53.9452 17.1795H43.5193L55.0076 49.1081ZM12.6615 49.1081H22.9145V25.8716H32.8216V49.1328H43.0746V17.1795H22.9392V15.2781C22.9392 13.2038 24.4957 11.7963 26.7686 11.7963H32.8463V3.12891H25.2121C17.7509 3.12891 12.7109 7.82066 12.7109 14.5867V17.1795H6.80615V25.8469H12.7109V49.1081H12.6615Z"
												fill="#131313" />
											<path
												d="M154.844 49.9734C158.328 49.9734 161.268 47.0102 161.268 43.5531C161.268 40.0713 158.328 37.1328 154.844 37.1328C151.361 37.1328 148.421 40.096 148.421 43.5531C148.421 47.0349 151.386 49.9734 154.844 49.9734Z"
												fill="#1DBF73" />
										</svg>
										<p>Pro Seller Badge</p>
									</div>
								</div>
								<div className="col-lg-4 col-sm-6 mt_20" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
									<div className="marketplace--box">

										<svg xmlns="http://www.w3.org/2000/svg" width="198" height="58" viewBox="0 0 198 58"
											fill="none">
											<g clipPath="url(#clip0_3370_5722)">
												<path
													d="M126.457 13.34C117.756 13.34 110.795 20.3 110.795 29C110.795 37.7 117.756 44.66 126.457 44.66C135.158 44.66 142.119 37.7 142.119 29C142.119 20.3 135.158 13.34 126.457 13.34ZM126.457 38.28C121.43 38.28 117.176 34.22 117.176 29C117.176 23.78 121.236 19.72 126.457 19.72C131.484 19.72 135.738 23.78 135.738 28.8067C135.738 34.0267 131.678 38.28 126.457 38.28ZM161.262 20.88C156.814 20.88 153.141 24.5533 153.141 29V43.8867H146.373V14.3067H153.141V18.9467C155.074 16.0467 158.361 14.3067 161.842 14.3067H163.969V20.88H161.262ZM93.1992 14.3067L98.2266 34.8L103.834 14.3067H110.408L101.9 43.8867H95.1328L89.9121 23.2L84.6914 43.8867H77.9238L69.416 14.3067H75.9902L81.5977 34.8L86.8184 14.3067H93.1992ZM183.691 27.84C188.719 25.1333 191.619 19.9133 191.619 14.1133H185.045C185.045 19.14 180.984 23.0067 176.15 23.0067H175.184V0H168.416V43.8867H175.184V29.9667H175.957C176.73 29.9667 177.504 30.3533 177.891 30.9333L187.365 43.8867H195.486L183.691 27.84Z"
													fill="#131313" />
												<path
													d="M53.3672 13.3412C46.0195 13.3412 40.4121 18.1745 38.0918 25.9079C34.6113 20.6879 32.0977 14.8879 30.3574 8.89453H22.4297V29.3879C22.4297 33.4479 19.1426 36.7345 15.082 36.7345C11.0215 36.7345 7.73438 33.4479 7.73438 29.3879V9.08786H0V29.5812C0 37.8945 6.76758 44.8545 15.2754 44.8545C23.7832 44.8545 30.5508 38.0879 30.5508 29.5812V26.1012C32.0977 29.3879 34.0312 32.4812 36.1582 35.3812L31.3242 58.0012H39.4453L42.9258 41.5679C46.0195 43.6945 49.6934 44.8545 53.5605 44.8545C62.2617 44.8545 69.2227 37.8945 69.2227 29.1945C69.0293 20.4945 62.0684 13.3412 53.3672 13.3412ZM53.3672 36.9279C50.0801 36.7345 46.9863 35.5745 44.4727 33.4479L45.0527 30.3545V30.1612C45.6328 26.8745 47.5664 21.2679 53.1738 21.2679C57.4277 21.0745 60.9082 24.5545 61.1016 28.8079C61.2949 33.0612 57.8145 36.5412 53.5605 36.7345L53.3672 36.9279Z"
													fill="#6FDA44" />
											</g>
											<defs>
												<clipPath id="clip0_3370_5722">
													<rect width="198" height="58" fill="white" />
												</clipPath>
											</defs>
										</svg>
										<p>Top Rated Plus</p>
									</div>
								</div>
								<div className="col-lg-4 col-sm-6 mt_20" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">

									<div className="marketplace--box">
										<svg xmlns="http://www.w3.org/2000/svg" width="198" height="56" viewBox="0 0 198 56"
											fill="none">
											<g clipPath="url(#clip0_3370_5725)">
												<path fillRule="evenodd" clipRule="evenodd"
													d="M194.794 29.9765C195.171 29.5067 195.926 29.5067 196.303 30.0704L197.717 32.0437C198 32.4196 198 32.9834 197.717 33.3593C195.171 36.6481 190.834 39.749 185.46 40.0309C181.311 40.3128 177.823 38.7153 175.937 35.7084C175.56 35.1446 174.711 35.0507 174.334 35.6145C172.071 38.6214 169.431 40.9705 166.603 41.0645C161.606 41.3464 160.191 37.9636 161.417 30.6342C161.511 29.8825 160.851 29.3187 160.191 29.5067C159.154 29.7886 158.023 29.8825 156.891 29.7886C156.42 29.7886 155.949 30.0705 155.854 30.4463C153.969 36.5541 149.631 42.1921 143.88 42.474C140.203 42.6619 134.829 40.5947 135.3 31.8558C135.3 31.1041 134.734 30.6342 134.074 30.8222C132.943 31.198 131.717 31.292 130.491 31.198C130.02 31.198 129.549 31.4799 129.454 31.8558C127.569 37.9636 123.231 43.6016 117.48 43.8835C113.803 44.0714 108.429 42.0041 108.9 33.2653C108.9 32.5136 108.334 32.0437 107.674 32.2317C106.543 32.6075 105.317 32.7015 104.091 32.6075C103.62 32.6075 103.149 32.8894 103.054 33.2653C101.169 39.3731 96.8315 45.0111 91.08 45.293C88.44 45.4809 84.9515 44.4473 83.3486 40.6886C83.0658 39.9369 82.1229 39.8429 81.6515 40.5007C79.3886 43.6016 76.6543 45.9507 73.8258 46.1387C70.9029 46.3266 69.3 45.105 68.5457 43.0378C68.2629 42.286 67.4143 42.0981 66.8486 42.6619C64.8686 45.0111 62.5115 46.7025 60.2486 46.8904C56.6658 47.0783 54.5915 44.4473 54.4972 41.2524C54.3086 37.4938 55.9115 33.1713 57.7029 28.3791C57.9858 27.7213 57.5143 26.9696 56.8543 26.9696C55.8172 26.9696 54.5915 26.7816 53.5543 26.5937C53.0829 26.4997 52.5172 26.7816 52.4229 27.3454C50.2543 34.9567 47.0486 42.38 44.22 46.7964C43.9372 47.2662 43.2772 47.4542 42.8058 47.0783L40.7315 45.5749C40.26 45.293 40.1658 44.6352 40.4486 44.1654C44.4086 37.7757 47.9915 27.8153 49.2172 20.4859C49.3115 20.0161 49.6886 19.6402 50.16 19.6402L52.9886 19.4523C53.6486 19.4523 54.12 20.0161 54.0257 20.6738V20.7678C53.9315 21.3316 54.3086 21.8954 54.8743 21.9894C57.42 22.3652 61.0972 22.3652 63.6429 22.2713C64.3972 22.2713 64.8686 23.023 64.5857 23.6808C62.5115 29.1308 59.7772 36.6481 59.9657 39.561C60.06 40.8766 60.6258 41.6283 61.6629 41.5343C63.6429 41.4403 66.7543 37.3998 69.1115 32.9834C69.1115 32.8894 69.2057 32.7955 69.2057 32.7015C69.96 29.2248 71.1857 25.2782 72.3172 21.3316L72.4115 21.0497C72.5058 20.6738 72.8829 20.3919 73.26 20.298L76.6543 20.11C77.3143 20.11 77.88 20.7678 77.6915 21.4256C77.5029 21.9894 77.3143 22.5532 77.22 23.117C74.2972 32.7955 71.7515 40.8766 75.1457 40.6886C77.3143 40.5947 80.4258 36.836 83.0658 31.6679C83.0658 31.5739 83.16 31.4799 83.16 31.386C83.2543 30.7282 83.4429 29.9765 83.6315 29.2248C85.14 23.023 86.9315 16.9152 88.7229 10.8074C89.2886 8.92808 89.8543 7.04875 90.3258 5.16943C90.42 4.79357 90.7972 4.4177 91.2686 4.4177L94.7572 4.22977C95.4172 4.22977 95.9829 4.88753 95.7943 5.5453C94.38 9.86774 92.9657 14.3781 91.6457 18.7945C91.3629 19.7342 92.4 20.4859 93.1543 19.9221C94.4743 18.9825 96.0772 18.4187 97.5857 18.3247C101.451 18.1368 104.091 21.2376 104.374 26.0299C104.374 26.3118 104.374 26.5937 104.374 26.8756C104.374 27.4394 104.751 27.8153 105.317 27.9092C107.109 28.0972 108.994 27.5334 110.409 26.2178C110.597 26.1239 110.691 25.9359 110.691 25.748C112.106 20.204 113.709 14.754 115.311 9.20998C115.877 7.33065 116.349 5.45133 116.914 3.57201C117.009 3.19614 117.386 2.82028 117.857 2.82028L121.346 2.63235C122.006 2.63235 122.571 3.29011 122.383 3.94787C120.969 8.27031 119.554 12.7807 118.234 17.1971C117.951 18.1368 118.989 18.8885 119.743 18.3247C121.063 17.385 122.666 16.8212 124.174 16.7273C128.04 16.5393 130.68 19.6402 130.963 24.4325C130.963 24.7144 130.963 24.9963 130.963 25.2782C130.963 25.842 131.34 26.2178 131.906 26.3118C133.697 26.4997 135.583 25.9359 136.997 24.6204C137.186 24.5265 137.28 24.3385 137.28 24.1506C138.694 18.6066 140.297 13.1566 141.9 7.61255C142.466 5.73323 142.937 3.85391 143.503 1.97458C143.597 1.59872 143.974 1.22286 144.446 1.22286L147.934 1.03492C148.594 1.03492 149.16 1.69269 148.971 2.35045C147.557 6.67289 146.143 11.1833 144.823 15.5997C144.54 16.5393 145.577 17.2911 146.331 16.7273C147.651 15.7876 149.254 15.2238 150.763 15.1298C154.629 14.9419 157.269 18.0428 157.551 22.8351C157.551 23.117 157.551 23.3989 157.551 23.6808C157.551 24.2446 157.929 24.6204 158.494 24.7144C160.286 24.9023 162.077 24.3385 163.491 23.2109C163.68 23.117 163.774 22.929 163.774 22.6471C165.377 16.4454 167.829 8.17635 170.091 0.377161C170.186 0.00129664 170.563 -0.280602 170.94 -0.374568L174.334 -0.5625C174.994 -0.5625 175.56 0.0952629 175.371 0.753026C172.166 11.2772 169.62 20.3919 168.206 25.842C166.32 33.1713 166.226 35.3326 168.394 35.1446C170.186 35.0507 172.637 32.5136 174.9 28.661C174.994 28.473 174.994 28.3791 175.089 28.1911C175.371 20.4859 180.18 13.4384 187.251 13.0626C191.966 12.7807 194.606 16.3514 194.794 19.8281C195.171 26.4997 188.477 30.8222 182.066 30.4463C181.311 30.3524 180.746 31.198 181.123 31.8558C182.066 33.7351 183.951 34.8627 187.157 34.6748C189.514 35.0507 192.814 32.3256 194.794 29.9765ZM88.44 31.8558C86.9315 37.9636 88.7229 40.3128 91.1743 40.2188C95.1343 40.0309 98.9057 32.7955 98.6229 27.2515C98.5286 24.8083 97.1143 23.5868 95.4172 23.6808C92.5886 23.8687 89.6657 26.9696 88.44 31.8558ZM114.84 30.3523C113.331 36.4601 115.123 38.8093 117.574 38.7153C121.534 38.5274 125.306 31.292 125.023 25.748C124.929 23.3049 123.514 22.0833 121.817 22.1773C119.083 22.3652 116.066 25.4661 114.84 30.3523ZM141.334 28.8489C139.826 34.9567 141.617 37.3058 144.069 37.2119C148.029 37.0239 151.8 29.7886 151.517 24.2446C151.423 21.8014 150.009 20.5799 148.311 20.6738C145.483 20.8618 142.56 23.9627 141.334 28.8489ZM189.137 20.8618C189.137 19.2643 188.1 18.1368 186.497 18.2307C183.386 18.4187 180.934 21.8014 180.086 25.9359C179.991 26.5937 180.463 27.1575 181.123 27.1575C185.177 27.0635 189.231 24.3385 189.137 20.8618ZM41.8629 23.8687C41.4858 11.4652 33.3772 3.29011 21.4029 3.75994C16.2172 3.94787 10.3715 5.92116 5.94004 9.30394C5.5629 9.58584 5.37433 10.2436 5.65718 10.7134L7.5429 13.7203C7.82575 14.2841 8.58004 14.3781 9.05147 14.0022C12.4458 11.1833 16.9715 9.39791 21.4029 9.20998C29.6058 8.83411 35.64 14.0962 35.9229 24.1506C36.3943 35.8964 28.4743 49.3335 15.7458 50.0852C15.2743 50.0852 14.8029 50.0852 14.3315 50.0852C13.6715 50.0852 13.2 49.4275 13.3886 48.7697C15.84 38.9033 18.6686 28.2851 21.5915 18.4187C21.78 17.7609 21.3086 17.0092 20.5543 17.1031L16.9715 17.385C16.5943 17.385 16.2172 17.6669 16.0286 18.1368C13.2 27.8153 10.3715 38.3395 7.92004 48.2059C7.73147 48.7697 7.16575 49.1456 6.69432 48.9576C5.37432 48.4878 4.14861 48.018 3.11147 47.3602C2.64004 47.0783 1.98004 47.2663 1.69718 47.83L0.0943253 51.1189C-0.188532 51.5887 3.9544e-05 52.2465 0.471468 52.4344C4.05433 54.5016 9.61718 55.6292 15.18 55.3473C33.3772 54.3137 42.3343 37.5877 41.8629 23.8687ZM77.5972 8.64618C75.4286 8.74014 73.4486 11.2772 73.5429 13.8143C73.6372 15.5057 74.7686 16.7273 76.4658 16.6333C78.6343 16.5393 80.7086 13.9083 80.6143 11.3712C80.52 9.67981 79.2 8.55221 77.5972 8.64618Z"
													fill="#131313" />
											</g>
											<defs>
												<clipPath id="clip0_3370_5725">
													<rect width="198" height="55.44" fill="white" />
												</clipPath>
											</defs>
										</svg>
										<p>Top Design Agency</p>
									</div>
								</div>
							</div>
						</div>
					</section>


					<section className="portfolio--intro--area section section-light">
						<div className="container">
							<div className="row">
								<div className="col-md-12 mt_20">
									<div className="about--right--text">
										<h2 className="common--heading" data-aos="fade-up" data-aos-duration="1000">
											We have been working with different client<br /> bases from different regions of the
											world.<br /> We are <span className="primary--dark">establishing ourselves</span> as one
											of the<br /> prominent international <span className="primary--dark">digital service<br />
												providing agency.</span>
											<svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43"
												fill="none">
												<path
													d="M21.5 0L23.5162 7.48823C25.0914 13.3387 29.6613 17.9086 35.5118 19.4838L43 21.5L35.5118 23.5162C29.6613 25.0914 25.0914 29.6613 23.5162 35.5118L21.5 43L19.4838 35.5118C17.9086 29.6613 13.3387 25.0914 7.48823 23.5162L0 21.5L7.48823 19.4838C13.3387 17.9086 17.9086 13.3387 19.4838 7.48823L21.5 0Z"
													fill="#06540B" />
											</svg>
										</h2>
										<div className="portfolio--links">
											<a href="#" className="button buttonv2 button-click" data-aos="fade-up"
												data-aos-duration="1000">Our Portfolio</a>
											<ul className="hover--portfolio--icons">
												<li>
													<a href="https://www.facebook.com/softvenceagency/" className="button-click" target="_blank">
														<svg xmlns="http://www.w3.org/2000/svg" width="15" height="28"
															viewBox="0 0 15 28" fill="none">
															<path
																d="M4.61074 27.7614H9.6924V15.1006H13.9416L14.5833 10.175H9.6924V7.0185C9.6924 5.59633 10.0913 4.6251 12.1378 4.6251H14.7567V0.202497C14.3058 0.150467 12.7622 0.0117188 10.9585 0.0117188C7.17759 0.0117188 4.61074 2.31841 4.61074 6.53288V10.175H0.344238V15.1006H4.61074V27.7614Z"
																fill="white" />
														</svg>
													</a>
												</li>
												<li>
													<a href="https://www.instagram.com/softvence/" className="button-click" target="_blank">
														<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
															viewBox="0 0 32 32" fill="none">
															<path
																d="M16.0016 22.41C12.4547 22.41 9.59224 19.5475 9.59224 16.0006C9.59224 12.4538 12.4547 9.59126 16.0016 9.59126C19.5485 9.59126 22.411 12.4538 22.411 16.0006C22.411 19.5475 19.5485 22.41 16.0016 22.41ZM16.0016 11.835C13.7079 11.835 11.836 13.7069 11.836 16.0006C11.836 18.2944 13.7079 20.1663 16.0016 20.1663C18.2954 20.1663 20.1672 18.2944 20.1672 16.0006C20.1672 13.7069 18.2954 11.835 16.0016 11.835ZM22.6735 24.1663C21.8454 24.1663 21.1766 23.4975 21.1766 22.6694C21.1766 21.8413 21.8454 21.1725 22.6735 21.1725C23.5016 21.1725 24.1704 21.8381 24.1704 22.6694C24.1706 22.866 24.1321 23.0608 24.0569 23.2425C23.9818 23.4242 23.8715 23.5893 23.7325 23.7284C23.5934 23.8674 23.4283 23.9777 23.2466 24.0528C23.0649 24.128 22.8701 24.1665 22.6735 24.1663ZM28.4954 16.0006C28.4954 17.7256 28.511 19.435 28.4141 21.1569C28.3172 23.1569 27.861 24.9319 26.3985 26.3944C24.9329 27.86 23.161 28.3131 21.161 28.41C19.436 28.5069 17.7266 28.4913 16.0047 28.4913C14.2797 28.4913 12.5704 28.5069 10.8485 28.41C8.84849 28.3131 7.07349 27.8569 5.61099 26.3944C4.14536 24.9288 3.69224 23.1569 3.59536 21.1569C3.49849 19.4319 3.51411 17.7225 3.51411 16.0006C3.51411 14.2788 3.49849 12.5663 3.59536 10.8444C3.69224 8.84438 4.14849 7.06938 5.61099 5.60688C7.07661 4.14126 8.84849 3.68813 10.8485 3.59126C12.5735 3.49438 14.2829 3.51001 16.0047 3.51001C17.7297 3.51001 19.4391 3.49438 21.161 3.59126C23.161 3.68813 24.936 4.14438 26.3985 5.60688C27.8641 7.07251 28.3172 8.84438 28.4141 10.8444C28.5141 12.5663 28.4954 14.2756 28.4954 16.0006ZM25.7454 8.63188C25.5172 8.06313 25.2422 7.63813 24.8016 7.20063C24.361 6.76001 23.9391 6.48501 23.3704 6.25688C21.7266 5.60376 17.8235 5.75063 16.0016 5.75063C14.1797 5.75063 10.2735 5.60376 8.62974 6.25376C8.06099 6.48188 7.63599 6.75688 7.19849 7.19751C6.75786 7.63813 6.48286 8.06001 6.25474 8.62876C5.60474 10.2756 5.75161 14.1788 5.75161 16.0006C5.75161 17.8225 5.60474 21.7288 6.25474 23.3725C6.48286 23.9413 6.75786 24.3663 7.19849 24.8038C7.63911 25.2413 8.06099 25.5194 8.62974 25.7475C10.2735 26.3975 14.1797 26.2506 16.0016 26.2506C17.8235 26.2506 21.7297 26.3975 23.3735 25.7475C23.9422 25.5194 24.3672 25.2444 24.8047 24.8038C25.2454 24.3631 25.5204 23.9413 25.7485 23.3725C26.3985 21.7288 26.2516 17.8225 26.2516 16.0006C26.2516 14.1788 26.3985 10.2756 25.7454 8.63188Z"
																fill="white" />
														</svg>
													</a>
												</li>
												<li>
													<a href="https://www.linkedin.com/company/softvence-agency/" className="button-click" target="_blank">
														<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
															viewBox="0 0 30 30" fill="none">
															<path fillRule="evenodd" clipRule="evenodd"
																d="M11.928 11.3774H16.3655V13.5878C17.0047 12.3165 18.644 11.1743 21.1065 11.1743C25.8271 11.1743 26.9479 13.7049 26.9479 18.3479V26.9469H22.1686V19.4053C22.1686 16.7612 21.5294 15.2701 19.9021 15.2701C17.6451 15.2701 16.7072 16.8771 16.7072 19.4041V26.9469H11.928V11.3774ZM3.7328 26.7438H8.51202V11.1743H3.7328V26.7438ZM9.19664 6.09754C9.19682 6.49812 9.11737 6.89475 8.96292 7.26437C8.80847 7.63398 8.5821 7.96921 8.29695 8.25058C7.71915 8.82483 6.93704 9.14626 6.12241 9.14429C5.30921 9.14374 4.52891 8.82312 3.95025 8.25177C3.66614 7.96945 3.44053 7.63384 3.28635 7.26418C3.13217 6.89452 3.05245 6.49806 3.05176 6.09754C3.05176 5.28865 3.37436 4.51442 3.95145 3.9433C4.52959 3.37118 5.31023 3.05042 6.1236 3.05078C6.93846 3.05078 7.71986 3.37218 8.29695 3.9433C8.87285 4.51442 9.19664 5.28865 9.19664 6.09754Z"
																fill="white" />
														</svg>
													</a>
												</li>
												<li>
													<a href="https://dribbble.com/Softvenceagency" className="button-click" target="_blank">
														<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
															viewBox="0 0 24 24" fill="none">
															<path
																d="M18.5 4.79004C15.9 9.34004 10.89 11.95 5.67 11.48L2.5 11.19"
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
												</li>
												<li>
													<a href="https://www.behance.net/softvenceagency" className="button-click" target="_blank">
														<svg xmlns="http://www.w3.org/2000/svg" width="31" height="31"
															viewBox="0 0 31 31" fill="none">
															<path fillRule="evenodd" clipRule="evenodd"
																d="M12.754 15.0497C14.201 15.9226 15.1687 17.5098 15.1687 19.323C15.1687 22.0773 12.9359 24.31 10.1817 24.31H2.70117V14.336V6.85547H8.93494C11.6892 6.85547 13.9219 9.08823 13.9219 11.8425C13.9219 13.0638 13.4829 14.1827 12.754 15.0497ZM5.19468 16.8295V21.8165H10.1817C11.5588 21.8165 12.6752 20.7001 12.6752 19.323C12.6752 17.9459 11.5588 16.8295 10.1817 16.8295H8.93494H5.19468ZM22.1977 21.8165C23.4949 21.8165 24.2921 21.5512 24.7176 21.152C24.9418 20.9417 25.0354 20.7076 25.0354 20.5698H27.5289C27.5289 22.5985 25.7045 24.31 22.1977 24.31C18.7277 24.31 16.4155 22.0607 16.4155 18.0763C16.4155 14.3782 18.386 11.8425 22.0258 11.8425C25.6657 11.8425 27.6362 14.3782 27.6362 18.0763V19.323H19.0194C19.3579 21.0399 20.4643 21.8165 22.1977 21.8165ZM25.0363 16.8295C24.7267 15.1965 23.7381 14.336 22.0258 14.336C20.3136 14.336 19.325 15.1965 19.0154 16.8295H25.0363ZM17.6622 10.5957V8.10222H26.3895V10.5957H17.6622ZM5.19468 9.34898V14.336H8.93494C10.3121 14.336 11.4284 13.2196 11.4284 11.8425C11.4284 10.4654 10.3121 9.34898 8.93494 9.34898H5.19468Z"
																fill="white" />
														</svg>
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>


					<section className="marquee--area about--marque--area" data-aos="fade-up" data-aos-duration="1000">
						<div className="marquee--wrapper">
							<div className="marquee">
								<div className="marquee__inner-wrap">
									<div className="marquee__inner">
										<div className="marquee__img">
											<svg xmlns="http://www.w3.org/2000/svg" width="60" height="33" viewBox="0 0 60 33"
												fill="none">
												<path fillRule="evenodd" clipRule="evenodd"
													d="M-45.4155 30.604L-45.4156 30.604C-46.098 30.6739 -46.7907 30.7449 -47.5001 30.8323L-53.191 14.3686V31.5328C-54.9694 31.708 -56.5699 31.9415 -58.2891 32.2334V0.765625H-53.5467L-47.0851 18.6305V0.765625H-42.0463V30.1901C-43.1597 30.3728 -44.2731 30.4869 -45.4155 30.604ZM-28.7037 12.2648L-28.7036 12.2648C-27.5257 12.2363 -26.3752 12.2085 -25.5072 12.2085V17.1125C-27.7006 17.1125 -30.3089 17.1125 -32.2059 17.2293V24.527C-31.2822 24.4713 -30.3524 24.4097 -29.4186 24.3479L-29.4186 24.3479L-29.4185 24.3479L-29.4185 24.3478L-29.4184 24.3478L-29.4184 24.3478C-27.4158 24.2151 -25.3945 24.0812 -23.3731 24.0016V28.7305L-37.1854 29.7814V0.765625H-23.3731V5.6697H-32.2059V12.3252C-31.2045 12.3252 -29.939 12.2946 -28.7037 12.2648ZM-10.0351 5.72808H-4.87778C-4.87778 5.72808 -4.87778 0.765625 -4.8185 0.765625H-20.172V5.72808H-15.0147V28.3802C-13.4141 28.3218 -11.695 28.3218 -10.0351 28.3218V5.72808ZM3.24446 11.9749H10.0617V16.879H3.24446V28.0299H-1.67578V0.765625H12.255V5.6697H3.24446V11.9749ZM25.5455 23.9444C23.8312 23.8451 22.1036 23.7451 20.376 23.7097V0.765625H15.3965V28.3218C19.961 28.4386 24.407 28.6721 28.853 28.964V24.1184C27.7585 24.0725 26.6547 24.0086 25.5455 23.9444ZM34.743 29.422L34.7432 29.422C35.8114 29.4856 36.8961 29.5502 37.9808 29.6646V0.765625H33.0605V29.3143C33.6151 29.3548 34.1767 29.3882 34.743 29.422ZM53.4537 15.7114L59.7967 0.765625H54.2837L50.7861 8.99746L47.5257 0.765625H42.1905L48 15.5362L41.5977 29.8982C42.3091 29.9916 43.0205 30.0663 43.7318 30.141C44.7989 30.2531 45.8659 30.3652 46.9329 30.5403L50.6083 22.1918L54.1651 31.2993C54.8294 31.4015 55.4865 31.5109 56.1414 31.62C57.3565 31.8223 58.5641 32.0233 59.7967 32.175L53.4537 15.7114Z"
													fill="white" />
											</svg>
										</div>
										<div className="marquee__img">
											<svg xmlns="http://www.w3.org/2000/svg" width="120" height="31" viewBox="0 0 120 31"
												fill="none">
												<path fillRule="evenodd" clipRule="evenodd"
													d="M17.9285 2.59615C17.9285 3.8195 16.8615 4.86809 15.6166 4.86809C14.3717 4.86809 13.3047 3.8195 13.3047 2.59615C13.3047 1.3728 14.3717 0.324219 15.6166 0.324219C16.8615 0.324219 17.9285 1.3728 17.9285 2.59615ZM15.616 6.73242C14.2526 6.73242 13.1855 7.78101 13.1855 9.12086C13.1855 10.4607 14.2526 11.5093 15.616 11.5093C16.9795 11.5093 18.0465 10.4607 18.0465 9.12086C18.0465 7.72275 16.9795 6.73242 15.616 6.73242ZM13.1271 15.5287C13.1271 14.1888 14.2534 13.082 15.6169 13.082C16.9803 13.082 18.1659 14.1888 18.1066 15.5287C18.1066 16.8686 16.9803 17.9754 15.6169 17.9754C14.2534 17.9754 13.1271 16.8686 13.1271 15.5287ZM15.616 19.5479C14.2526 19.5479 13.1855 20.5964 13.1855 21.9363C13.1855 23.2762 14.2526 24.3247 15.616 24.3247C16.9795 24.3247 18.0465 23.2762 18.0465 21.9363C18.0465 20.6547 16.9795 19.5479 15.616 19.5479ZM13.3047 28.4028C13.3047 27.1794 14.3717 26.1309 15.6166 26.1309C16.9208 26.1309 17.9285 27.1794 17.9285 28.4028C17.9285 29.6261 16.8615 30.6747 15.6166 30.6747C14.3717 30.6747 13.3047 29.6261 13.3047 28.4028ZM22.0198 6.44141C20.5378 6.44141 19.293 7.66476 19.293 9.12112C19.293 10.5775 20.5378 11.8008 22.0198 11.8008C23.5018 11.8008 24.7467 10.5775 24.7467 9.12112C24.7467 7.66476 23.5018 6.44141 22.0198 6.44141ZM19.1738 15.5872C19.1738 14.0144 20.478 12.791 22.0193 12.791C23.5605 12.791 24.8647 14.0144 24.8647 15.5872C24.8647 17.1601 23.5605 18.3835 22.0193 18.3835C20.4187 18.3835 19.1738 17.1019 19.1738 15.5872ZM22.0198 19.2568C20.5378 19.2568 19.293 20.4802 19.293 21.9366C19.293 23.3929 20.5378 24.6163 22.0198 24.6163C23.5018 24.6163 24.7467 23.3929 24.7467 21.9366C24.7467 20.4802 23.5018 19.2568 22.0198 19.2568ZM25.457 15.5289C25.457 13.7813 26.939 12.4414 28.5989 12.4414C30.2587 12.4414 31.6222 13.7813 31.7407 15.5289C31.7407 17.2765 30.3773 18.6164 28.5989 18.6164C26.8205 18.6164 25.457 17.16 25.457 15.5289ZM9.15488 7.02344C8.02856 7.02344 7.08008 7.95551 7.08008 9.06235C7.08008 10.1692 8.02856 11.1013 9.15488 11.1013C10.2812 11.1013 11.2297 10.1692 11.2297 9.06235C11.2297 7.95551 10.3405 7.02344 9.15488 7.02344ZM6.96289 15.5285C6.96289 14.3051 7.91137 13.373 9.15625 13.373C10.4011 13.373 11.3496 14.3051 11.3496 15.5285C11.3496 16.7518 10.4011 17.6839 9.15625 17.6839C7.91137 17.6839 6.96289 16.7518 6.96289 15.5285ZM9.15488 19.8398C8.02856 19.8398 7.08008 20.7719 7.08008 21.8788C7.08008 22.9856 8.02856 23.9177 9.15488 23.9177C10.2812 23.9177 11.2297 22.9856 11.2297 21.8788C11.2297 20.7719 10.3405 19.8398 9.15488 19.8398ZM0.796875 15.587C0.796875 14.5384 1.62679 13.7228 2.69383 13.7228C3.76087 13.7228 4.59079 14.5384 4.59079 15.587C4.59079 16.6355 3.76087 17.4511 2.69383 17.4511C1.62679 17.4511 0.796875 16.6355 0.796875 15.587Z"
													fill="white" />
												<path
													d="M55.3349 11.5703C55.0978 11.5703 54.9199 11.8033 54.9199 11.9781V28.1147C54.9199 28.3477 55.157 28.5224 55.3349 28.5224H57.2911C57.5282 28.5224 57.7061 28.2894 57.7061 28.1147V11.9781C57.7061 11.7451 57.469 11.5703 57.2911 11.5703H55.3349Z"
													fill="white" />
												<path
													d="M56.4028 4.75391C55.3358 4.75391 54.5059 5.56947 54.5059 6.61806C54.5059 7.66664 55.3358 8.48221 56.4028 8.48221C57.4699 8.48221 58.2998 7.66664 58.2998 6.61806C58.2998 5.56947 57.4106 4.75391 56.4028 4.75391Z"
													fill="white" />
												<path
													d="M97.4247 11.5703C97.1876 11.5703 97.0098 11.8033 97.0098 11.9781V28.1147C97.0098 28.3477 97.2469 28.5224 97.4247 28.5224H99.381C99.6181 28.5224 99.7959 28.2894 99.7959 28.1147V11.9781C99.7959 11.7451 99.5588 11.5703 99.381 11.5703H97.4247Z"
													fill="white" />
												<path
													d="M98.3716 4.75391C97.3045 4.75391 96.4746 5.56947 96.4746 6.61806C96.4746 7.66664 97.3045 8.48221 98.3716 8.48221C99.4386 8.48221 100.269 7.66664 100.269 6.61806C100.269 5.56947 99.4386 4.75391 98.3716 4.75391Z"
													fill="white" />
												<path fillRule="evenodd" clipRule="evenodd"
													d="M118.387 26.756C118.375 26.8126 118.345 26.881 118.272 26.9494C118.272 27.0659 118.149 27.1824 117.902 27.1242L117.997 27.2334C117.984 27.2382 117.973 27.241 117.964 27.241H117.779L117.778 27.2407H117.531V27.0663V26.542H117.964C118.087 26.542 118.21 26.542 118.272 26.6585C118.345 26.6585 118.375 26.699 118.387 26.756ZM117.531 27.2407H117.47V27.765H117.223V26.3086H117.778H118.025C118.149 26.3086 118.272 26.4251 118.272 26.4251C118.396 26.4251 118.396 26.5416 118.396 26.5416V26.6581C118.396 26.6822 118.396 26.7162 118.387 26.756C118.396 26.7958 118.396 26.8437 118.396 26.8915C118.396 27.008 118.396 27.1245 118.272 27.1245C118.2 27.1245 118.128 27.1645 118.068 27.1976C118.041 27.2122 118.017 27.2255 117.997 27.2334L118.458 27.765H118.211L117.779 27.241H117.531V27.2407Z"
													fill="white" />
												<path fillRule="evenodd" clipRule="evenodd"
													d="M116.453 27.0664C116.453 26.3674 117.105 25.7266 117.817 25.7266C118.587 25.7266 119.18 26.3091 119.18 27.0664C119.18 27.7655 118.528 28.4063 117.817 28.4063C117.105 28.4063 116.453 27.7655 116.453 27.0664ZM116.572 27.0661C116.572 27.7652 117.106 28.2895 117.817 28.2895C118.469 28.2895 119.062 27.7652 119.062 27.0661C119.062 26.3671 118.529 25.8428 117.817 25.8428C117.106 25.8428 116.572 26.3671 116.572 27.0661Z"
													fill="white" />
												<path
													d="M71.6371 14.1918C71.8743 14.1918 72.0521 13.9588 72.0521 13.7841V11.8617C72.0521 11.6286 71.815 11.4539 71.6371 11.4539H67.4283V5.27888C67.4283 5.04586 67.1911 4.87109 67.0133 4.87109H65.0571C64.8199 4.87109 64.6421 5.10411 64.6421 5.27888V11.4539H62.5673C62.3302 11.4539 62.1523 11.6869 62.1523 11.8617V13.7841C62.1523 14.0171 62.3895 14.1918 62.5673 14.1918H64.6421V23.5126C64.6421 26.3671 66.5983 28.2312 69.4438 28.2312H71.5186C71.7557 28.2312 71.9335 27.9982 71.9335 27.8235V25.901C71.9335 25.668 71.6964 25.4933 71.5186 25.4933H69.7402C68.3767 25.4933 67.4283 24.5612 67.4283 23.1048V14.1336H71.6371V14.1918Z"
													fill="white" />
												<path
													d="M113.252 14.1918C113.489 14.1918 113.667 13.9588 113.667 13.7841V11.8617C113.667 11.6286 113.43 11.4539 113.252 11.4539H109.043V5.27888C109.043 5.04586 108.806 4.87109 108.629 4.87109H106.672C106.435 4.87109 106.257 5.10411 106.257 5.27888V11.4539H104.183C103.945 11.4539 103.768 11.6869 103.768 11.8617V13.7841C103.768 14.0171 104.005 14.1918 104.183 14.1918H106.257V23.5126C106.257 26.3671 108.214 28.2312 111.059 28.2312H113.134C113.371 28.2312 113.549 27.9982 113.549 27.8235V25.901C113.549 25.668 113.312 25.4933 113.134 25.4933H111.237C109.873 25.4933 108.925 24.5612 108.925 23.1048V14.1336H113.193L113.252 14.1918Z"
													fill="white" />
												<path
													d="M42.8862 14.1907V27.9388C42.8862 28.1718 43.1234 28.3466 43.3012 28.3466H45.2574C45.4946 28.3466 45.6724 28.1136 45.6724 27.9388V14.1907H50.2962C50.5334 14.1907 50.7112 13.9577 50.7112 13.7829V11.8605C50.7112 11.6275 50.4741 11.4527 50.2962 11.4527H45.6724V7.84092C45.6724 6.38455 46.7394 5.39422 47.9843 5.39422H50.2962C50.5334 5.39422 50.7112 5.1612 50.7112 4.98644V3.06403C50.7112 2.83101 50.4741 2.65625 50.2962 2.65625H48.1029C45.1982 2.65625 42.8862 5.04469 42.8862 7.78266V11.4527H40.8114C40.5743 11.4527 40.3965 11.6857 40.3965 11.8605V13.7829C40.3965 14.0159 40.6336 14.1907 40.8114 14.1907H42.8862Z"
													fill="white" />
												<path fillRule="evenodd" clipRule="evenodd"
													d="M84.7375 10.9277C87.0494 10.9277 89.2428 11.8598 90.7841 13.4909C92.3253 15.1221 93.1553 17.394 93.1553 19.899C93.1553 26.1322 88.8278 28.9284 84.6782 28.9284C80.4693 28.9284 76.2012 26.1905 76.2012 19.899V2.94685C76.2012 2.77208 76.379 2.53906 76.6161 2.53906H78.5724C78.7502 2.53906 78.9873 2.71383 78.9873 2.94685V13.1997C80.3508 11.8598 82.5441 10.9277 84.7375 10.9277ZM78.9277 19.9575C78.9277 23.045 80.469 26.3073 84.6779 26.3073C88.8868 26.3073 90.3688 23.045 90.4281 19.9575C90.4281 16.2292 88.1161 13.666 84.6779 13.666C81.2397 13.666 78.9277 16.171 78.9277 19.9575Z"
													fill="white" />
											</svg>
										</div>
										<div className="marquee__img">
											<svg xmlns="http://www.w3.org/2000/svg" width="119" height="39" viewBox="0 0 119 39"
												fill="none">
												<path
													d="M29.2361 13.7558H15.4143V17.8313H25.2431C24.7517 23.574 19.9602 26.1058 15.4758 26.1058C9.70135 26.1058 4.66408 21.5363 4.66408 15.176C4.66408 8.93927 9.45563 4.12277 15.4758 4.12277C20.1445 4.12277 22.8474 7.08677 22.8474 7.08677L25.6732 4.12277C25.6732 4.12277 21.9874 0.047268 15.2915 0.047268C6.7527 -0.014482 0.179688 7.21027 0.179688 15.0525C0.179688 22.7095 6.38412 30.1813 15.5372 30.1813C23.5845 30.1813 29.4818 24.6855 29.4818 16.4728C29.4818 14.7438 29.2361 13.7558 29.2361 13.7558Z"
													fill="white" />
												<path fillRule="evenodd" clipRule="evenodd"
													d="M30.7715 20.3635C30.7715 15.1765 34.8259 10.7305 40.4774 10.7305C45.1461 10.7305 50.1834 14.065 50.2448 20.487C50.2448 26.168 45.9447 30.1817 40.6003 30.1817C34.703 30.1817 30.7715 25.674 30.7715 20.3635ZM45.9446 20.4873C45.9446 16.9058 43.3031 14.6211 40.5387 14.6211C37.4058 14.6211 35.01 17.0911 35.0715 20.4256C35.0715 23.8836 37.4672 26.3536 40.5387 26.3536C43.3645 26.3536 45.9446 24.0688 45.9446 20.4873Z"
													fill="white" />
												<path fillRule="evenodd" clipRule="evenodd"
													d="M51.9043 20.3635C51.9043 15.1765 55.9587 10.7305 61.6102 10.7305C66.2789 10.7305 71.3162 14.065 71.3776 20.487C71.3776 26.168 67.0775 30.1817 61.7331 30.1817C55.8358 30.1817 51.9043 25.674 51.9043 20.3635ZM67.0774 20.4873C67.0774 16.9058 64.4359 14.6211 61.6716 14.6211C58.5386 14.6211 56.1428 17.0911 56.2043 20.4256C56.2043 23.8836 58.6001 26.3536 61.6716 26.3536C64.4973 26.3536 67.0774 24.0688 67.0774 20.4873Z"
													fill="white" />
												<path fillRule="evenodd" clipRule="evenodd"
													d="M73.0352 20.4877C73.0352 15.3625 77.0895 10.793 82.3111 10.793C84.584 10.793 86.304 11.6575 87.4098 13.016V11.3487H91.4642V28.824C91.4642 35.6782 87.5326 38.951 82.3725 38.951C77.6424 38.951 75.0009 36.0487 73.7109 33.27L77.4581 31.7262C78.011 32.9612 79.4853 35.1842 82.434 35.1842C85.5055 35.1842 87.5326 33.1465 87.5326 29.812V27.8977C86.3655 29.1945 84.9526 30.2442 82.1882 30.2442C77.7653 30.2442 73.0352 26.2922 73.0352 20.4877ZM87.8394 20.5491C87.8394 16.8441 85.1979 14.6211 82.6793 14.6211C79.9764 14.6211 77.3349 16.7823 77.2734 20.6108C77.2734 24.1306 79.8535 26.4153 82.6179 26.4153C85.2593 26.4153 87.8394 24.3776 87.8394 20.5491Z"
													fill="white" />
												<path fillRule="evenodd" clipRule="evenodd"
													d="M100.617 20.4252C100.617 14.6207 104.733 10.7305 109.647 10.7305C113.456 10.7305 116.343 13.324 117.633 16.288L118.309 17.8935L105.347 23.3275C106.146 24.8095 107.374 26.2915 110.077 26.2915C112.473 26.2915 113.948 24.9947 114.808 23.6362L118.186 25.921C116.712 27.897 114.132 30.1817 110.077 30.1817C105.224 30.1817 100.617 26.5385 100.617 20.4252ZM113.395 16.5967C112.78 15.4235 111.552 14.4972 109.77 14.4972C107.006 14.4972 104.303 17.3995 104.794 20.24L113.395 16.5967Z"
													fill="white" />
												<path d="M94.4746 29.6247H98.7133V0.972656H94.4746V29.6247Z" fill="white" />
											</svg>
										</div>
										<div className="marquee__img">
											<svg xmlns="http://www.w3.org/2000/svg" width="119" height="37" viewBox="0 0 119 37"
												fill="none">
												<path fillRule="evenodd" clipRule="evenodd"
													d="M33.5255 24.8799C33.7025 25.2916 33.8794 25.762 34.0564 26.2325C34.5872 27.5851 34.7052 28.8789 34.5283 30.1728C34.1154 32.878 32.3458 35.2304 29.7505 36.2889C28.8067 36.7006 27.804 36.877 26.7422 36.877C26.4473 36.877 26.0934 36.877 25.7985 36.8182C24.5598 36.7006 23.3211 36.289 22.0824 35.5832C20.6078 34.7599 19.1332 33.5249 17.4816 31.7606C15.83 33.5249 14.4144 34.7599 12.8807 35.5832C11.6421 36.289 10.4034 36.6418 9.16468 36.8182C9.01726 36.8182 8.8551 36.8329 8.69294 36.8476L8.6928 36.8476C8.53059 36.8623 8.36838 36.877 8.22092 36.877C7.15919 36.877 6.15644 36.7006 5.21268 36.2889C2.67632 35.2304 0.788799 32.9368 0.375904 30.1728C0.198948 28.8201 0.375904 27.5263 0.847784 26.2325C1.02474 25.7032 1.20169 25.2916 1.37865 24.8799C1.67358 24.233 1.9685 23.5861 2.20444 22.998L2.26343 22.9392C4.85877 17.4111 7.57208 11.8242 10.4034 6.29609L10.5213 6.06086C10.8163 5.53159 11.1112 4.94351 11.4061 4.35544L11.4061 4.35538C11.4855 4.23092 11.565 4.10429 11.6453 3.97632L11.6453 3.97632L11.6453 3.97631C11.9823 3.4391 12.334 2.8783 12.7628 2.35586C14.0015 0.944427 15.653 0.121094 17.4816 0.121094C19.2511 0.121094 20.9617 0.944427 22.1414 2.41466C22.7312 3.06157 23.1441 3.76728 23.4981 4.41419L23.4981 4.41429C23.793 5.00235 24.0879 5.59041 24.3828 6.11966L24.5008 6.3549C27.3911 11.883 30.1044 17.4699 32.6407 22.998H32.6997C32.9357 23.5861 33.2306 24.233 33.5255 24.8799ZM62.5458 9.35455C62.5458 10.7072 61.484 11.7657 60.1274 11.7657C58.7707 11.7657 57.709 10.7072 57.709 9.35455C57.709 8.00193 58.7707 6.94336 60.1274 6.94336C61.543 7.00217 62.5458 8.06074 62.5458 9.35455ZM52.6962 14.1761V14.7642C52.6962 14.7642 51.5755 13.2939 49.0981 13.2939C45.0871 13.2939 41.9609 16.352 41.9609 20.5863C41.9609 24.7618 45.0871 27.8787 49.0981 27.8787C51.5755 27.8787 52.6962 26.3497 52.6962 26.3497V26.9966C52.6962 27.2906 52.9322 27.5258 53.2271 27.5258H56.2353V13.6468H53.2271C52.8732 13.6468 52.6962 13.882 52.6962 14.1761ZM49.6879 24.5274C51.0446 24.5274 52.1653 23.8217 52.6962 22.9983V18.0583C52.1653 17.2938 50.9856 16.5293 49.6879 16.5293C47.3285 16.5293 45.5 17.9995 45.5 20.5283C45.5 23.0572 47.3285 24.5274 49.6879 24.5274ZM58.3574 13.6475H61.8965V27.4677H58.3574V13.6475ZM107.67 14.7647C107.67 14.7647 108.849 13.2944 111.268 13.2944C115.279 13.2944 118.405 16.3525 118.405 20.528C118.405 24.7035 115.279 27.8204 111.268 27.8204C108.79 27.8204 107.67 26.2913 107.67 26.2913V26.9382C107.67 27.2323 107.434 27.4675 107.139 27.4675H104.131V7.00181H107.67V14.7647ZM110.678 24.4678C109.322 24.4678 108.26 23.7621 107.67 22.9388V17.9988C108.201 17.2343 109.38 16.4697 110.678 16.4697C113.038 16.4697 114.866 17.94 114.866 20.4688C114.866 22.9976 113.038 24.4678 110.678 24.4678ZM102.303 27.5258V19.2925C102.303 16.9401 101.831 15.6463 100.651 14.6466C99.5896 13.7644 98.2919 13.2939 96.7583 13.2939C95.4016 13.2939 94.045 13.7056 92.9832 14.7642V14.1761C92.9832 13.882 92.7473 13.6468 92.4524 13.6468H89.6211V27.5258H93.1602V17.8811C93.868 17.0578 94.9887 16.5285 96.0505 16.5285C97.997 16.5285 98.7638 17.4106 98.7638 19.7042V27.5258H102.303ZM81.0085 13.2944C78.5901 13.2944 77.4104 14.7647 77.4104 14.7647V7.00181H73.8713V27.4675H76.8795C77.1745 27.4675 77.4104 27.2323 77.4104 26.9382V26.2913C77.4104 26.2913 78.5311 27.8204 81.0085 27.8204C85.0195 27.8204 88.1457 24.7035 88.1457 20.528C88.2047 16.3525 85.0785 13.2944 81.0085 13.2944ZM77.4102 22.9388C78 23.7621 79.0617 24.4678 80.4184 24.4678C82.7778 24.4678 84.6063 22.9976 84.6063 20.4688C84.6063 17.94 82.7778 16.4697 80.4184 16.4697C79.1207 16.4697 77.941 17.2343 77.4102 17.9988V22.9388ZM70.8626 13.2939C71.9243 13.2939 72.5142 13.4704 72.5142 13.4704V16.7637C72.5142 16.7637 69.5649 15.7639 67.7364 17.8811V27.5258H64.1973V13.6468H67.2055C67.5004 13.6468 67.7364 13.882 67.7364 14.1761V14.7642C68.3262 13.9997 69.7419 13.2939 70.8626 13.2939ZM17.4226 28.1144C15.4171 25.5856 14.1194 23.2332 13.7065 21.2925C13.5296 20.4692 13.4706 19.7047 13.5886 19.0578C13.6475 18.4697 13.8835 17.9404 14.1784 17.5287C14.8862 16.5289 16.0659 15.882 17.4226 15.882C18.7792 15.882 20.0179 16.4701 20.6668 17.5287C20.9617 17.9992 21.1976 18.4697 21.2566 19.0578C21.3746 19.7047 21.3156 20.4692 21.1386 21.2925C20.7258 23.2332 19.4281 25.5856 17.4226 28.1144ZM28.8067 34.1718C30.6352 33.4661 31.9329 31.8194 32.1689 29.8787C32.2868 28.879 32.1689 27.9968 31.9919 27.0559C31.928 26.8648 31.8469 26.6738 31.7578 26.4641C31.6823 26.2865 31.6012 26.0954 31.52 25.8797C31.3726 25.5856 31.2398 25.2769 31.1071 24.9681C30.9744 24.6594 30.8417 24.3506 30.6942 24.0566V23.9978C28.1579 18.5285 25.4446 12.9416 22.6133 7.47228L22.4953 7.23705L22.4953 7.23702C22.2004 6.64893 21.9054 6.06085 21.6105 5.53157C21.3156 4.94347 20.9617 4.35538 20.5488 3.8849C19.782 3.00276 18.7203 2.53228 17.5995 2.53228C16.4788 2.53228 15.4171 3.00276 14.6503 3.8849C14.2374 4.41419 13.8835 4.94347 13.5886 5.53157C13.2936 6.11966 12.9987 6.70776 12.7038 7.23705L12.5858 7.47228C9.69555 12.9416 6.98223 18.5285 4.44587 23.9978L4.38689 24.0566C4.09196 24.6447 3.79704 25.2916 3.5611 25.8797C3.38414 26.2913 3.20719 26.703 3.08922 27.0559C2.67632 28.1144 2.61734 28.9966 2.73531 29.9375C2.97125 31.8194 4.26892 33.4661 6.09746 34.2306C6.92325 34.5247 7.86701 34.7011 8.86975 34.5835C9.81351 34.4659 10.7573 34.1718 11.701 33.6425C12.9987 32.878 14.3554 31.7606 15.889 30.0551C13.4706 27.0559 11.937 24.2918 11.4061 21.8806C11.1112 20.7632 11.0522 19.7047 11.2292 18.7637C11.4061 17.8228 11.701 16.9994 12.2319 16.2349C13.3526 14.647 15.2991 13.6473 17.4226 13.6473C19.5461 13.6473 21.4926 14.5882 22.6133 16.2349C23.1441 16.9994 23.4391 17.8228 23.616 18.7637C23.734 19.7047 23.675 20.7632 23.4391 21.8806C22.8492 24.2918 21.3746 26.997 18.9562 29.9963C20.4898 31.7018 21.7875 32.8192 23.1441 33.5837C24.1469 34.113 25.0317 34.407 25.9754 34.5247C26.9782 34.6423 27.9219 34.5247 28.8067 34.1718Z"
													fill="white" />
											</svg>
										</div>
										<div className="marquee__img">
											<svg xmlns="http://www.w3.org/2000/svg" width="136" height="39" viewBox="0 0 136 39"
												fill="none">
												<path
													d="M24.7247 3.43111C24.184 1.65952 22.2916 0.70559 20.5343 1.25069C18.777 1.7958 17.8308 3.70366 18.3715 5.47524L27.0227 32.3216C27.631 33.9569 29.3882 34.9108 31.0779 34.4339C32.8352 33.8888 33.9166 32.049 33.3759 30.2775C33.3759 30.2093 24.7247 3.43111 24.7247 3.43111Z"
													fill="white" />
												<path
													d="M11.3419 7.86079C10.8012 6.08921 8.90876 5.13528 7.1515 5.68038C5.39424 6.22548 4.44802 8.13335 4.98871 9.90493L13.6399 36.7513C14.2481 38.3866 16.0054 39.3405 17.6951 38.8636C19.4523 38.3184 20.5337 36.4787 19.993 34.7071C19.993 34.639 11.3419 7.86079 11.3419 7.86079Z"
													fill="white" />
												<path
													d="M35.6731 25.7103C37.4304 25.1652 38.3766 23.2574 37.8359 21.4858C37.2952 19.7142 35.4028 18.7603 33.6455 19.3054L6.94861 27.9589C5.32652 28.5721 4.3803 30.3437 4.85341 32.0472C5.39411 33.8188 7.21896 34.909 8.97622 34.3639C9.1114 34.3639 35.6731 25.7103 35.6731 25.7103Z"
													fill="white" />
												<path
													d="M12.4907 33.2751C14.248 32.7299 16.4783 31.9804 18.8439 31.1628C18.3032 29.3912 17.5597 27.1426 16.7487 24.7578L10.3955 26.8701L12.4907 33.2751Z"
													fill="white" />
												<path
													d="M25.9399 28.8454C28.3731 28.0277 30.6034 27.3463 32.2931 26.7331C31.7524 24.9615 31.009 22.713 30.1979 20.3281L23.8447 22.4404L25.9399 28.8454Z"
													fill="white" />
												<path
													d="M31.2794 12.1518C33.0366 11.6066 33.9828 9.69879 33.4421 7.9272C32.9014 6.15561 31.009 5.20168 29.2517 5.74679L2.62244 14.4684C1.00035 15.0817 0.0541306 16.8533 0.52724 18.5567C1.06794 20.3964 2.89279 21.4866 4.65005 20.8734C4.71764 20.8734 31.2794 12.1518 31.2794 12.1518Z"
													fill="white" />
												<path
													d="M8.16453 19.7165C9.9218 19.1714 12.1522 18.4218 14.5177 17.6042C13.7067 15.1512 13.0308 12.9027 12.4225 11.1992L6.06934 13.3115L8.16453 19.7165Z"
													fill="white" />
												<path
													d="M21.5473 15.3532C23.9805 14.5355 26.2109 13.8541 27.9005 13.2409C27.0895 10.7879 26.4136 8.53939 25.8053 6.83594L19.4521 8.94821L21.5473 15.3532Z"
													fill="white" />
												<path
													d="M62.6395 10.5177C63.7885 11.0628 63.9237 11.4035 62.9774 13.1751C62.0312 15.0148 61.8285 15.0829 60.6119 14.606C59.125 13.9927 57.3001 13.5157 56.0836 13.5157C54.1235 13.5157 52.8394 14.1971 52.8394 15.2873C52.8394 18.8305 64.1264 16.9226 64.1264 24.5541C64.1264 28.3698 60.8822 30.8909 56.016 30.8909C53.4477 30.8909 50.2711 30.0051 48.1083 28.9149C47.0269 28.3698 46.9593 28.0291 47.9055 26.1894C48.7166 24.6222 48.9869 24.4178 50.1359 24.8948C52.0283 25.7124 54.3263 26.3257 55.9484 26.3257C57.7732 26.3257 58.9222 25.5762 58.9222 24.486C58.9222 21.0109 47.4324 22.6462 47.4324 15.2873C47.4324 11.4035 50.6766 8.74609 55.4753 8.74609C57.7732 8.95051 60.6795 9.63189 62.6395 10.5177Z"
													fill="white" />
												<path
													d="M71.7645 1.52218V29.8676C71.7645 30.2764 71.2914 30.7533 70.6832 30.7533H67.7093C67.0335 30.7533 66.6279 30.2764 66.6279 29.8676V1.52218C66.6279 0.0912827 67.0335 0.0231448 69.1962 0.0231448C71.6294 -0.0449932 71.7645 0.159421 71.7645 1.52218Z"
													fill="white" />
												<path fillRule="evenodd" clipRule="evenodd"
													d="M92.7151 29.595V17.3983C92.7151 12.0836 89.133 8.94922 83.4557 8.94922C80.8874 8.94922 78.0488 9.76687 76.0211 11.1296C74.9397 11.811 74.9397 12.1517 76.0211 13.8551C77.1701 15.5586 77.3729 15.6267 78.4543 15.0135C79.806 14.1958 81.4957 13.6507 82.915 13.6507C85.8889 13.6507 87.6461 15.0135 87.6461 17.262V18.6929C86.2268 18.0797 84.4695 17.739 82.5771 17.739C77.5081 17.739 74.1963 20.4645 74.1963 24.5528C74.1963 28.3685 77.1701 30.9578 81.5633 30.9578C83.8612 30.9578 86.1592 30.0038 87.7137 28.2323L87.6461 29.5269C87.5785 30.2083 88.0516 30.6852 88.7275 30.6852H91.6338C92.242 30.6852 92.7151 30.2764 92.7151 29.595ZM82.1713 26.8698C80.3464 26.8698 79.1299 25.9158 79.1299 24.4849C79.1299 22.7133 80.9547 21.3506 83.6582 21.3506C84.9424 21.3506 86.4293 21.555 87.5783 22.032V23.9398C86.4293 25.7796 84.4017 26.8698 82.1713 26.8698Z"
													fill="white" />
												<path
													d="M112.79 10.5836C113.871 11.1968 113.871 11.5375 112.722 13.3772C111.641 15.0807 111.438 15.217 110.221 14.6037C109.343 14.1268 107.856 13.7179 106.707 13.7179C102.99 13.7179 100.556 16.1709 100.556 19.9185C100.556 23.8023 102.99 26.3916 106.707 26.3916C107.991 26.3916 109.613 25.9146 110.627 25.3014C111.708 24.6881 111.911 24.6881 113.06 26.3916C114.074 27.9588 114.074 28.2994 113.128 28.9808C111.505 30.1392 108.87 31.025 106.572 31.025C99.7453 31.025 95.1494 26.596 95.1494 19.9866C95.1494 13.3772 99.7453 9.01641 106.639 9.01641C108.802 8.94827 111.235 9.62965 112.79 10.5836Z"
													fill="white" />
												<path
													d="M135.162 28.0281C136.04 29.1183 135.702 29.5272 133.54 30.2767C131.377 31.0943 131.039 31.0262 130.295 30.0041L124.145 21.7594L121.374 24.4168V29.7997C121.374 30.2085 120.901 30.6855 120.293 30.6855H117.319C116.643 30.6855 116.237 30.2085 116.237 29.7997V1.52247C116.237 0.0915754 116.643 0.0234375 118.806 0.0234375C121.306 0.0234375 121.374 0.227851 121.374 1.52247V17.603L129.755 9.49461C130.701 8.60882 131.174 8.67695 132.864 9.76716C134.689 10.9255 134.824 11.2662 133.945 12.152L127.727 18.2844L135.162 28.0281Z"
													fill="white" />
											</svg>
										</div>
										<div className="marquee__img">
											<svg xmlns="http://www.w3.org/2000/svg" width="120" height="31" viewBox="0 0 120 31"
												fill="none">
												<path fillRule="evenodd" clipRule="evenodd"
													d="M17.8299 2.59615C17.8299 3.8195 16.7629 4.86809 15.518 4.86809C14.2731 4.86809 13.2061 3.8195 13.2061 2.59615C13.2061 1.3728 14.2731 0.324219 15.518 0.324219C16.7629 0.324219 17.8299 1.3728 17.8299 2.59615ZM15.5193 6.73242C14.1559 6.73242 13.0889 7.78101 13.0889 9.12086C13.0889 10.4607 14.1559 11.5093 15.5193 11.5093C16.8828 11.5093 17.9498 10.4607 17.9498 9.12086C17.9498 7.72275 16.8828 6.73242 15.5193 6.73242ZM13.0303 15.5287C13.0303 14.1889 14.1566 13.082 15.52 13.082C16.8835 13.082 18.0691 14.1889 18.0098 15.5287C18.0098 16.8686 16.8835 17.9754 15.52 17.9754C14.1566 17.9754 13.0303 16.8686 13.0303 15.5287ZM15.5193 19.5479C14.1559 19.5479 13.0889 20.5964 13.0889 21.9363C13.0889 23.2762 14.1559 24.3247 15.5193 24.3247C16.8828 24.3247 17.9498 23.2762 17.9498 21.9363C17.9498 20.6547 16.8828 19.5479 15.5193 19.5479ZM13.2061 28.4028C13.2061 27.1794 14.2731 26.1309 15.518 26.1309C16.8221 26.1309 17.8299 27.1794 17.8299 28.4028C17.8299 29.6261 16.7629 30.6747 15.518 30.6747C14.2731 30.6747 13.2061 29.6261 13.2061 28.4028ZM21.9212 6.44141C20.4392 6.44141 19.1943 7.66476 19.1943 9.12112C19.1943 10.5775 20.4392 11.8008 21.9212 11.8008C23.4032 11.8008 24.6481 10.5775 24.6481 9.12112C24.6481 7.66476 23.4032 6.44141 21.9212 6.44141ZM19.0732 15.5872C19.0732 14.0144 20.3774 12.791 21.9187 12.791C23.46 12.791 24.7641 14.0144 24.7641 15.5872C24.7641 17.1601 23.46 18.3835 21.9187 18.3835C20.3181 18.3835 19.0732 17.1019 19.0732 15.5872ZM21.9212 19.2568C20.4392 19.2568 19.1943 20.4802 19.1943 21.9366C19.1943 23.3929 20.4392 24.6163 21.9212 24.6163C23.4032 24.6163 24.6481 23.3929 24.6481 21.9366C24.6481 20.4802 23.4032 19.2568 21.9212 19.2568ZM25.3584 15.5289C25.3584 13.7813 26.8404 12.4414 28.5002 12.4414C30.1601 12.4414 31.5235 13.7813 31.6421 15.5289C31.6421 17.2765 30.2786 18.6164 28.5002 18.6164C26.7218 18.6164 25.3584 17.16 25.3584 15.5289ZM9.0582 7.02344C7.93188 7.02344 6.9834 7.95551 6.9834 9.06235C6.9834 10.1692 7.93188 11.1013 9.0582 11.1013C10.1845 11.1013 11.133 10.1692 11.133 9.06235C11.133 7.95551 10.2438 7.02344 9.0582 7.02344ZM6.8623 15.5285C6.8623 14.3051 7.81078 13.373 9.05566 13.373C10.3005 13.373 11.249 14.3051 11.249 15.5285C11.249 16.7518 10.3005 17.6839 9.05566 17.6839C7.81078 17.6839 6.8623 16.7518 6.8623 15.5285ZM9.0582 19.8398C7.93188 19.8398 6.9834 20.7719 6.9834 21.8788C6.9834 22.9856 7.93188 23.9177 9.0582 23.9177C10.1845 23.9177 11.133 22.9856 11.133 21.8788C11.133 20.7719 10.2438 19.8398 9.0582 19.8398ZM0.698242 15.587C0.698242 14.5384 1.52816 13.7228 2.5952 13.7228C3.66224 13.7228 4.49216 14.5384 4.49216 15.587C4.49216 16.6355 3.66224 17.4511 2.5952 17.4511C1.52816 17.4511 0.698242 16.6355 0.698242 15.587Z"
													fill="white" />
												<path
													d="M55.2343 11.5703C54.9972 11.5703 54.8193 11.8033 54.8193 11.9781V28.1147C54.8193 28.3477 55.0565 28.5224 55.2343 28.5224H57.1905C57.4277 28.5224 57.6055 28.2894 57.6055 28.1147V11.9781C57.6055 11.7451 57.3684 11.5703 57.1905 11.5703H55.2343Z"
													fill="white" />
												<path
													d="M56.3022 4.75391C55.2352 4.75391 54.4053 5.56947 54.4053 6.61806C54.4053 7.66664 55.2352 8.48221 56.3022 8.48221C57.3693 8.48221 58.1992 7.66664 58.1992 6.61806C58.1992 5.56947 57.31 4.75391 56.3022 4.75391Z"
													fill="white" />
												<path
													d="M97.3241 11.5703C97.087 11.5703 96.9092 11.8033 96.9092 11.9781V28.1147C96.9092 28.3477 97.1463 28.5224 97.3241 28.5224H99.2804C99.5175 28.5224 99.6953 28.2894 99.6953 28.1147V11.9781C99.6953 11.7451 99.4582 11.5703 99.2804 11.5703H97.3241Z"
													fill="white" />
												<path
													d="M98.271 4.75391C97.2039 4.75391 96.374 5.56947 96.374 6.61806C96.374 7.66664 97.2039 8.48221 98.271 8.48221C99.338 8.48221 100.168 7.66664 100.168 6.61806C100.168 5.56947 99.338 4.75391 98.271 4.75391Z"
													fill="white" />
												<path fillRule="evenodd" clipRule="evenodd"
													d="M118.289 26.756C118.276 26.8126 118.246 26.881 118.174 26.9494C118.174 27.0659 118.05 27.1824 117.803 27.1242L117.898 27.2334C117.886 27.2382 117.874 27.241 117.865 27.241H117.68L117.68 27.2407H117.433V27.0663V26.542H117.865C117.988 26.542 118.112 26.542 118.174 26.6585C118.246 26.6585 118.276 26.699 118.289 26.756ZM117.433 27.2407H117.371V27.765H117.124V26.3086H117.68H117.927C118.05 26.3086 118.174 26.4251 118.174 26.4251C118.297 26.4251 118.297 26.5416 118.297 26.5416V26.6581C118.297 26.6822 118.297 26.7162 118.289 26.756C118.297 26.7958 118.297 26.8437 118.297 26.8915C118.297 27.008 118.297 27.1245 118.174 27.1245C118.101 27.1245 118.029 27.1645 117.969 27.1976C117.943 27.2122 117.919 27.2255 117.898 27.2334L118.359 27.765H118.112L117.68 27.241H117.433V27.2407Z"
													fill="white" />
												<path fillRule="evenodd" clipRule="evenodd"
													d="M116.351 27.0664C116.351 26.3674 117.003 25.7266 117.714 25.7266C118.485 25.7266 119.077 26.3091 119.077 27.0664C119.077 27.7655 118.425 28.4063 117.714 28.4063C117.003 28.4063 116.351 27.7655 116.351 27.0664ZM116.468 27.0661C116.468 27.7652 117.001 28.2895 117.713 28.2895C118.365 28.2895 118.958 27.7652 118.958 27.0661C118.958 26.3671 118.424 25.8428 117.713 25.8428C117.001 25.8428 116.468 26.3671 116.468 27.0661Z"
													fill="white" />
												<path
													d="M71.5346 14.1918C71.7717 14.1918 71.9496 13.9588 71.9496 13.7841V11.8617C71.9496 11.6286 71.7124 11.4539 71.5346 11.4539H67.3257V5.27888C67.3257 5.04586 67.0886 4.87109 66.9108 4.87109H64.9545C64.7174 4.87109 64.5396 5.10411 64.5396 5.27888V11.4539H62.4648C62.2276 11.4539 62.0498 11.6869 62.0498 11.8617V13.7841C62.0498 14.0171 62.2869 14.1918 62.4648 14.1918H64.5396V23.5126C64.5396 26.3671 66.4958 28.2312 69.3412 28.2312H71.416C71.6532 28.2312 71.831 27.9982 71.831 27.8235V25.901C71.831 25.668 71.5939 25.4933 71.416 25.4933H69.6376C68.2742 25.4933 67.3257 24.5612 67.3257 23.1048V14.1336H71.5346V14.1918Z"
													fill="white" />
												<path
													d="M113.152 14.1918C113.389 14.1918 113.567 13.9588 113.567 13.7841V11.8617C113.567 11.6286 113.33 11.4539 113.152 11.4539H108.943V5.27888C108.943 5.04586 108.706 4.87109 108.528 4.87109H106.572C106.335 4.87109 106.157 5.10411 106.157 5.27888V11.4539H104.082C103.845 11.4539 103.667 11.6869 103.667 11.8617V13.7841C103.667 14.0171 103.904 14.1918 104.082 14.1918H106.157V23.5126C106.157 26.3671 108.113 28.2312 110.958 28.2312H113.033C113.27 28.2312 113.448 27.9982 113.448 27.8235V25.901C113.448 25.668 113.211 25.4933 113.033 25.4933H111.136C109.773 25.4933 108.824 24.5612 108.824 23.1048V14.1336H113.093L113.152 14.1918Z"
													fill="white" />
												<path
													d="M42.7857 14.1907V27.9388C42.7857 28.1718 43.0228 28.3466 43.2006 28.3466H45.1569C45.394 28.3466 45.5718 28.1136 45.5718 27.9388V14.1907H50.1957C50.4328 14.1907 50.6106 13.9577 50.6106 13.7829V11.8605C50.6106 11.6275 50.3735 11.4527 50.1957 11.4527H45.5718V7.84092C45.5718 6.38455 46.6389 5.39422 47.8837 5.39422H50.1957C50.4328 5.39422 50.6106 5.1612 50.6106 4.98644V3.06403C50.6106 2.83101 50.3735 2.65625 50.1957 2.65625H48.0023C45.0976 2.65625 42.7857 5.04469 42.7857 7.78266V11.4527H40.7109C40.4737 11.4527 40.2959 11.6857 40.2959 11.8605V13.7829C40.2959 14.0159 40.533 14.1907 40.7109 14.1907H42.7857Z"
													fill="white" />
												<path fillRule="evenodd" clipRule="evenodd"
													d="M84.6369 10.9277C86.9488 10.9277 89.1422 11.8598 90.6835 13.4909C92.2247 15.1221 93.0547 17.394 93.0547 19.899C93.0547 26.1322 88.7272 28.9284 84.5776 28.9284C80.3687 28.9284 76.1006 26.1905 76.1006 19.899V2.94685C76.1006 2.77208 76.2784 2.53906 76.5155 2.53906H78.4718C78.6496 2.53906 78.8867 2.71383 78.8867 2.94685V13.1997C80.2502 11.8598 82.4435 10.9277 84.6369 10.9277ZM78.8271 19.9575C78.8271 23.045 80.3684 26.3073 84.5773 26.3073C88.7862 26.3073 90.2682 23.045 90.3275 19.9575C90.3275 16.2292 88.0155 13.666 84.5773 13.666C81.1391 13.666 78.8271 16.171 78.8271 19.9575Z"
													fill="white" />
											</svg>
										</div>
										<div className="marquee__img">
											<svg xmlns="http://www.w3.org/2000/svg" width="119" height="37" viewBox="0 0 119 37"
												fill="none">
												<path fillRule="evenodd" clipRule="evenodd"
													d="M33.2946 24.8799C33.4715 25.2916 33.6485 25.762 33.8254 26.2325C34.3563 27.5851 34.4743 28.8789 34.2973 30.1728C33.8844 32.878 32.1149 35.2304 29.5195 36.2889C28.5758 36.7006 27.573 36.877 26.5113 36.877C26.2163 36.877 25.8624 36.877 25.5675 36.8182C24.3288 36.7006 23.0901 36.289 21.8515 35.5832C20.3768 34.7599 18.9022 33.5249 17.2506 31.7606C15.599 33.5249 14.1834 34.7599 12.6498 35.5832C11.4111 36.289 10.1724 36.6418 8.93372 36.8182C8.7863 36.8182 8.62414 36.8329 8.46198 36.8476L8.46184 36.8476C8.29963 36.8623 8.13742 36.877 7.98996 36.877C6.92823 36.877 5.92548 36.7006 4.98172 36.2889C2.44536 35.2304 0.557842 32.9368 0.144947 30.1728C-0.0320086 28.8201 0.144947 27.5263 0.616827 26.2325C0.793782 25.7032 0.970738 25.2916 1.14769 24.8799C1.44262 24.233 1.73754 23.5861 1.97348 22.998L2.03247 22.9392C4.62781 17.4111 7.34113 11.8242 10.1724 6.29609L10.2904 6.06086C10.5853 5.53159 10.8802 4.94351 11.1751 4.35544L11.1752 4.35538C11.2546 4.23092 11.334 4.10429 11.4143 3.97632L11.4143 3.97632L11.4143 3.97631C11.7513 3.4391 12.1031 2.8783 12.5318 2.35586C13.7705 0.944427 15.4221 0.121094 17.2506 0.121094C19.0202 0.121094 20.7307 0.944427 21.9104 2.41466C22.5003 3.06157 22.9132 3.76728 23.2671 4.41419L23.2671 4.41429C23.5621 5.00235 23.857 5.59041 24.1519 6.11966L24.2698 6.3549C27.1601 11.883 29.8734 17.4699 32.4098 22.998H32.4688C32.7047 23.5861 32.9996 24.233 33.2946 24.8799ZM62.3168 9.35455C62.3168 10.7072 61.255 11.7657 59.8984 11.7657C58.5417 11.7657 57.48 10.7072 57.48 9.35455C57.48 8.00193 58.5417 6.94336 59.8984 6.94336C61.314 7.00217 62.3168 8.06074 62.3168 9.35455ZM52.4653 14.1761V14.7642C52.4653 14.7642 51.3445 13.2939 48.8672 13.2939C44.8562 13.2939 41.73 16.352 41.73 20.5863C41.73 24.7618 44.8562 27.8787 48.8672 27.8787C51.3445 27.8787 52.4653 26.3497 52.4653 26.3497V26.9966C52.4653 27.2906 52.7012 27.5258 52.9961 27.5258H56.0044V13.6468H52.9961C52.6422 13.6468 52.4653 13.882 52.4653 14.1761ZM49.457 24.5274C50.8136 24.5274 51.9344 23.8217 52.4652 22.9983V18.0583C51.9344 17.2938 50.7547 16.5293 49.457 16.5293C47.0976 16.5293 45.269 17.9995 45.269 20.5283C45.269 23.0572 47.0976 24.5274 49.457 24.5274ZM58.1284 13.6475H61.6675V27.4677H58.1284V13.6475ZM107.437 14.7648C107.437 14.7648 108.617 13.2946 111.035 13.2946C115.046 13.2946 118.172 16.3527 118.172 20.5281C118.172 24.7036 115.046 27.8205 111.035 27.8205C108.558 27.8205 107.437 26.2915 107.437 26.2915V26.9384C107.437 27.2324 107.201 27.4677 106.906 27.4677H103.898V7.00195H107.437V14.7648ZM110.445 24.4678C109.089 24.4678 108.027 23.7621 107.437 22.9388V17.9988C107.968 17.2343 109.148 16.4697 110.445 16.4697C112.805 16.4697 114.633 17.94 114.633 20.4688C114.633 22.9976 112.805 24.4678 110.445 24.4678ZM102.072 27.5258V19.2925C102.072 16.9401 101.6 15.6463 100.42 14.6466C99.3586 13.7644 98.0609 13.2939 96.5273 13.2939C95.1707 13.2939 93.814 13.7056 92.7523 14.7642V14.1761C92.7523 13.882 92.5163 13.6468 92.2214 13.6468H89.3901V27.5258H92.9292V17.8811C93.6371 17.0578 94.7578 16.5285 95.8195 16.5285C97.766 16.5285 98.5328 17.4106 98.5328 19.7042V27.5258H102.072ZM80.7775 13.2944C78.3591 13.2944 77.1794 14.7647 77.1794 14.7647V7.00181H73.6403V27.4675H76.6486C76.9435 27.4675 77.1794 27.2323 77.1794 26.9382V26.2913C77.1794 26.2913 78.3002 27.8204 80.7775 27.8204C84.7885 27.8204 87.9147 24.7035 87.9147 20.528C87.9737 16.3525 84.8475 13.2944 80.7775 13.2944ZM77.1792 22.9388C77.7691 23.7621 78.8308 24.4678 80.1874 24.4678C82.5468 24.4678 84.3754 22.9976 84.3754 20.4688C84.3754 17.94 82.5468 16.4697 80.1874 16.4697C78.8898 16.4697 77.7101 17.2343 77.1792 17.9988V22.9388ZM70.6336 13.2939C71.6953 13.2939 72.2852 13.4704 72.2852 13.4704V16.7637C72.2852 16.7637 69.3359 15.7639 67.5074 17.8811V27.5258H63.9683V13.6468H66.9765C67.2714 13.6468 67.5074 13.882 67.5074 14.1761V14.7642C68.0972 13.9997 69.5129 13.2939 70.6336 13.2939ZM17.1916 28.1144C15.1861 25.5856 13.8885 23.2332 13.4756 21.2925C13.2986 20.4692 13.2396 19.7047 13.3576 19.0578C13.4166 18.4697 13.6525 17.9404 13.9475 17.5287C14.6553 16.5289 15.835 15.882 17.1916 15.882C18.5483 15.882 19.787 16.4701 20.4358 17.5287C20.7307 17.9992 20.9667 18.4697 21.0257 19.0578C21.1436 19.7047 21.0846 20.4692 20.9077 21.2925C20.4948 23.2332 19.1971 25.5856 17.1916 28.1144ZM28.5738 34.1717C30.4023 33.466 31.7 31.8194 31.936 29.8787C32.0539 28.8789 31.936 27.9967 31.759 27.0558C31.6951 26.8648 31.614 26.6737 31.5249 26.464C31.4494 26.2864 31.3683 26.0954 31.2871 25.8796C31.1397 25.5856 31.0069 25.2768 30.8742 24.9681C30.7415 24.6593 30.6088 24.3506 30.4613 24.0565V23.9977C27.925 18.5284 25.2117 12.9415 22.3804 7.47223L22.2624 7.23699C21.9675 6.64889 21.6726 6.0608 21.3776 5.53151C21.0827 4.94342 20.7288 4.35532 20.3159 3.88485C19.5491 3.0027 18.4874 2.53223 17.3666 2.53223C16.2459 2.53223 15.1842 3.0027 14.4174 3.88485C14.0045 4.41413 13.6506 4.94342 13.3557 5.53151L13.3556 5.5316C13.0607 6.11966 12.7658 6.70773 12.4709 7.23699L12.3529 7.47223C9.46264 12.9415 6.74933 18.5284 4.21297 23.9977L4.15399 24.0565C3.85906 24.6446 3.56413 25.2915 3.32819 25.8796C3.15124 26.2913 2.97428 26.7029 2.85631 27.0558C2.44342 28.1144 2.38443 28.9965 2.5024 29.9375C2.73834 31.8194 4.03602 33.466 5.86455 34.2306C6.69034 34.5246 7.6341 34.701 8.63685 34.5834C9.58061 34.4658 10.5244 34.1717 11.4681 33.6425C12.7658 32.8779 14.1225 31.7606 15.6561 30.0551C13.2377 27.0558 11.7041 24.2917 11.1732 21.8806C10.8783 20.7632 10.8193 19.7046 10.9963 18.7637C11.1732 17.8227 11.4681 16.9994 11.999 16.2348C13.1197 14.647 15.0662 13.6472 17.1897 13.6472C19.3131 13.6472 21.2597 14.5882 22.3804 16.2348C22.9112 16.9994 23.2062 17.8227 23.3831 18.7637C23.5011 19.7046 23.4421 20.7632 23.2062 21.8806C22.6163 24.2917 21.1417 26.997 18.7233 29.9963C20.2569 31.7017 21.5546 32.8191 22.9112 33.5837C23.914 34.1129 24.7988 34.407 25.7425 34.5246C26.7453 34.6422 27.689 34.5246 28.5738 34.1717Z"
													fill="white" />
											</svg>
										</div>
										<div className="marquee__img">
											<svg xmlns="http://www.w3.org/2000/svg" width="136" height="39" viewBox="0 0 136 39"
												fill="none">
												<path
													d="M24.7247 3.43111C24.184 1.65952 22.2916 0.70559 20.5343 1.25069C18.777 1.7958 17.8308 3.70366 18.3715 5.47524L27.0227 32.3216C27.631 33.9569 29.3882 34.9108 31.0779 34.4339C32.8352 33.8888 33.9166 32.049 33.3759 30.2775C33.3759 30.2093 24.7247 3.43111 24.7247 3.43111Z"
													fill="white" />
												<path
													d="M11.3419 7.86079C10.8012 6.08921 8.90876 5.13528 7.1515 5.68038C5.39424 6.22548 4.44802 8.13335 4.98871 9.90493L13.6399 36.7513C14.2481 38.3866 16.0054 39.3405 17.6951 38.8636C19.4523 38.3184 20.5337 36.4787 19.993 34.7071C19.993 34.639 11.3419 7.86079 11.3419 7.86079Z"
													fill="white" />
												<path
													d="M35.6731 25.7103C37.4304 25.1652 38.3766 23.2574 37.8359 21.4858C37.2952 19.7142 35.4028 18.7603 33.6455 19.3054L6.94861 27.9589C5.32652 28.5721 4.3803 30.3437 4.85341 32.0472C5.39411 33.8188 7.21896 34.909 8.97622 34.3639C9.1114 34.3639 35.6731 25.7103 35.6731 25.7103Z"
													fill="white" />
												<path
													d="M12.4907 33.2751C14.248 32.7299 16.4783 31.9804 18.8439 31.1628C18.3032 29.3912 17.5597 27.1426 16.7487 24.7578L10.3955 26.8701L12.4907 33.2751Z"
													fill="white" />
												<path
													d="M25.9399 28.8454C28.3731 28.0277 30.6034 27.3463 32.2931 26.7331C31.7524 24.9615 31.009 22.713 30.1979 20.3281L23.8447 22.4404L25.9399 28.8454Z"
													fill="white" />
												<path
													d="M31.2794 12.1518C33.0366 11.6066 33.9828 9.69879 33.4421 7.9272C32.9014 6.15561 31.009 5.20168 29.2517 5.74679L2.62244 14.4684C1.00035 15.0817 0.0541306 16.8533 0.52724 18.5567C1.06794 20.3964 2.89279 21.4866 4.65005 20.8734C4.71764 20.8734 31.2794 12.1518 31.2794 12.1518Z"
													fill="white" />
												<path
													d="M8.16453 19.7165C9.9218 19.1714 12.1522 18.4218 14.5177 17.6042C13.7067 15.1512 13.0308 12.9027 12.4225 11.1992L6.06934 13.3115L8.16453 19.7165Z"
													fill="white" />
												<path
													d="M21.5473 15.3532C23.9805 14.5355 26.2109 13.8541 27.9005 13.2409C27.0895 10.7879 26.4136 8.53939 25.8053 6.83594L19.4521 8.94821L21.5473 15.3532Z"
													fill="white" />
												<path
													d="M62.6395 10.5177C63.7885 11.0628 63.9237 11.4035 62.9774 13.1751C62.0312 15.0148 61.8285 15.0829 60.6119 14.606C59.125 13.9927 57.3001 13.5157 56.0836 13.5157C54.1235 13.5157 52.8394 14.1971 52.8394 15.2873C52.8394 18.8305 64.1264 16.9226 64.1264 24.5541C64.1264 28.3698 60.8822 30.8909 56.016 30.8909C53.4477 30.8909 50.2711 30.0051 48.1083 28.9149C47.0269 28.3698 46.9593 28.0291 47.9055 26.1894C48.7166 24.6222 48.9869 24.4178 50.1359 24.8948C52.0283 25.7124 54.3263 26.3257 55.9484 26.3257C57.7732 26.3257 58.9222 25.5762 58.9222 24.486C58.9222 21.0109 47.4324 22.6462 47.4324 15.2873C47.4324 11.4035 50.6766 8.74609 55.4753 8.74609C57.7732 8.95051 60.6795 9.63189 62.6395 10.5177Z"
													fill="white" />
												<path
													d="M71.7645 1.52218V29.8676C71.7645 30.2764 71.2914 30.7533 70.6832 30.7533H67.7093C67.0335 30.7533 66.6279 30.2764 66.6279 29.8676V1.52218C66.6279 0.0912827 67.0335 0.0231448 69.1962 0.0231448C71.6294 -0.0449932 71.7645 0.159421 71.7645 1.52218Z"
													fill="white" />
												<path fillRule="evenodd" clipRule="evenodd"
													d="M92.7151 29.595V17.3983C92.7151 12.0836 89.133 8.94922 83.4557 8.94922C80.8874 8.94922 78.0488 9.76687 76.0211 11.1296C74.9397 11.811 74.9397 12.1517 76.0211 13.8551C77.1701 15.5586 77.3729 15.6267 78.4543 15.0135C79.806 14.1958 81.4957 13.6507 82.915 13.6507C85.8889 13.6507 87.6461 15.0135 87.6461 17.262V18.6929C86.2268 18.0797 84.4695 17.739 82.5771 17.739C77.5081 17.739 74.1963 20.4645 74.1963 24.5528C74.1963 28.3685 77.1701 30.9578 81.5633 30.9578C83.8612 30.9578 86.1592 30.0038 87.7137 28.2323L87.6461 29.5269C87.5785 30.2083 88.0516 30.6852 88.7275 30.6852H91.6338C92.242 30.6852 92.7151 30.2764 92.7151 29.595ZM82.1713 26.8698C80.3464 26.8698 79.1299 25.9158 79.1299 24.4849C79.1299 22.7133 80.9547 21.3506 83.6582 21.3506C84.9424 21.3506 86.4293 21.555 87.5783 22.032V23.9398C86.4293 25.7796 84.4017 26.8698 82.1713 26.8698Z"
													fill="white" />
												<path
													d="M112.79 10.5836C113.871 11.1968 113.871 11.5375 112.722 13.3772C111.641 15.0807 111.438 15.217 110.221 14.6037C109.343 14.1268 107.856 13.7179 106.707 13.7179C102.99 13.7179 100.556 16.1709 100.556 19.9185C100.556 23.8023 102.99 26.3916 106.707 26.3916C107.991 26.3916 109.613 25.9146 110.627 25.3014C111.708 24.6881 111.911 24.6881 113.06 26.3916C114.074 27.9588 114.074 28.2994 113.128 28.9808C111.505 30.1392 108.87 31.025 106.572 31.025C99.7453 31.025 95.1494 26.596 95.1494 19.9866C95.1494 13.3772 99.7453 9.01641 106.639 9.01641C108.802 8.94827 111.235 9.62965 112.79 10.5836Z"
													fill="white" />
												<path
													d="M135.162 28.0281C136.04 29.1183 135.702 29.5272 133.54 30.2767C131.377 31.0943 131.039 31.0262 130.295 30.0041L124.145 21.7594L121.374 24.4168V29.7997C121.374 30.2085 120.901 30.6855 120.293 30.6855H117.319C116.643 30.6855 116.237 30.2085 116.237 29.7997V1.52247C116.237 0.0915754 116.643 0.0234375 118.806 0.0234375C121.306 0.0234375 121.374 0.227851 121.374 1.52247V17.603L129.755 9.49461C130.701 8.60882 131.174 8.67695 132.864 9.76716C134.689 10.9255 134.824 11.2662 133.945 12.152L127.727 18.2844L135.162 28.0281Z"
													fill="white" />
											</svg>
										</div>
										<div className="marquee__img">
											<svg xmlns="http://www.w3.org/2000/svg" width="119" height="37" viewBox="0 0 119 37"
												fill="none">
												<path fillRule="evenodd" clipRule="evenodd"
													d="M33.5255 24.8799C33.7025 25.2916 33.8794 25.762 34.0564 26.2325C34.5872 27.5851 34.7052 28.8789 34.5283 30.1728C34.1154 32.878 32.3458 35.2304 29.7505 36.2889C28.8067 36.7006 27.804 36.877 26.7422 36.877C26.4473 36.877 26.0934 36.877 25.7985 36.8182C24.5598 36.7006 23.3211 36.289 22.0824 35.5832C20.6078 34.7599 19.1332 33.5249 17.4816 31.7606C15.83 33.5249 14.4144 34.7599 12.8807 35.5832C11.6421 36.289 10.4034 36.6418 9.16468 36.8182C9.01726 36.8182 8.8551 36.8329 8.69294 36.8476L8.6928 36.8476C8.53059 36.8623 8.36838 36.877 8.22092 36.877C7.15919 36.877 6.15644 36.7006 5.21268 36.2889C2.67632 35.2304 0.788799 32.9368 0.375904 30.1728C0.198948 28.8201 0.375904 27.5263 0.847784 26.2325C1.02474 25.7032 1.20169 25.2916 1.37865 24.8799C1.67358 24.233 1.9685 23.5861 2.20444 22.998L2.26343 22.9392C4.85877 17.4111 7.57208 11.8242 10.4034 6.29609L10.5213 6.06086C10.8163 5.53159 11.1112 4.94351 11.4061 4.35544L11.4061 4.35538C11.4855 4.23092 11.565 4.10429 11.6453 3.97632L11.6453 3.97632L11.6453 3.97631C11.9823 3.4391 12.334 2.8783 12.7628 2.35586C14.0015 0.944427 15.653 0.121094 17.4816 0.121094C19.2511 0.121094 20.9617 0.944427 22.1414 2.41466C22.7312 3.06157 23.1441 3.76728 23.4981 4.41419L23.4981 4.41429C23.793 5.00235 24.0879 5.59041 24.3828 6.11966L24.5008 6.3549C27.3911 11.883 30.1044 17.4699 32.6407 22.998H32.6997C32.9357 23.5861 33.2306 24.233 33.5255 24.8799ZM62.5458 9.35455C62.5458 10.7072 61.484 11.7657 60.1274 11.7657C58.7707 11.7657 57.709 10.7072 57.709 9.35455C57.709 8.00193 58.7707 6.94336 60.1274 6.94336C61.543 7.00217 62.5458 8.06074 62.5458 9.35455ZM52.6962 14.1761V14.7642C52.6962 14.7642 51.5755 13.2939 49.0981 13.2939C45.0871 13.2939 41.9609 16.352 41.9609 20.5863C41.9609 24.7618 45.0871 27.8787 49.0981 27.8787C51.5755 27.8787 52.6962 26.3497 52.6962 26.3497V26.9966C52.6962 27.2906 52.9322 27.5258 53.2271 27.5258H56.2353V13.6468H53.2271C52.8732 13.6468 52.6962 13.882 52.6962 14.1761ZM49.6879 24.5274C51.0446 24.5274 52.1653 23.8217 52.6962 22.9983V18.0583C52.1653 17.2938 50.9856 16.5293 49.6879 16.5293C47.3285 16.5293 45.5 17.9995 45.5 20.5283C45.5 23.0572 47.3285 24.5274 49.6879 24.5274ZM58.3574 13.6475H61.8965V27.4677H58.3574V13.6475ZM107.67 14.7647C107.67 14.7647 108.849 13.2944 111.268 13.2944C115.279 13.2944 118.405 16.3525 118.405 20.528C118.405 24.7035 115.279 27.8204 111.268 27.8204C108.79 27.8204 107.67 26.2913 107.67 26.2913V26.9382C107.67 27.2323 107.434 27.4675 107.139 27.4675H104.131V7.00181H107.67V14.7647ZM110.678 24.4678C109.322 24.4678 108.26 23.7621 107.67 22.9388V17.9988C108.201 17.2343 109.38 16.4697 110.678 16.4697C113.038 16.4697 114.866 17.94 114.866 20.4688C114.866 22.9976 113.038 24.4678 110.678 24.4678ZM102.303 27.5258V19.2925C102.303 16.9401 101.831 15.6463 100.651 14.6466C99.5896 13.7644 98.2919 13.2939 96.7583 13.2939C95.4016 13.2939 94.045 13.7056 92.9832 14.7642V14.1761C92.9832 13.882 92.7473 13.6468 92.4524 13.6468H89.6211V27.5258H93.1602V17.8811C93.868 17.0578 94.9887 16.5285 96.0505 16.5285C97.997 16.5285 98.7638 17.4106 98.7638 19.7042V27.5258H102.303ZM81.0085 13.2944C78.5901 13.2944 77.4104 14.7647 77.4104 14.7647V7.00181H73.8713V27.4675H76.8795C77.1745 27.4675 77.4104 27.2323 77.4104 26.9382V26.2913C77.4104 26.2913 78.5311 27.8204 81.0085 27.8204C85.0195 27.8204 88.1457 24.7035 88.1457 20.528C88.2047 16.3525 85.0785 13.2944 81.0085 13.2944ZM77.4102 22.9388C78 23.7621 79.0617 24.4678 80.4184 24.4678C82.7778 24.4678 84.6063 22.9976 84.6063 20.4688C84.6063 17.94 82.7778 16.4697 80.4184 16.4697C79.1207 16.4697 77.941 17.2343 77.4102 17.9988V22.9388ZM70.8626 13.2939C71.9243 13.2939 72.5142 13.4704 72.5142 13.4704V16.7637C72.5142 16.7637 69.5649 15.7639 67.7364 17.8811V27.5258H64.1973V13.6468H67.2055C67.5004 13.6468 67.7364 13.882 67.7364 14.1761V14.7642C68.3262 13.9997 69.7419 13.2939 70.8626 13.2939ZM17.4226 28.1144C15.4171 25.5856 14.1194 23.2332 13.7065 21.2925C13.5296 20.4692 13.4706 19.7047 13.5886 19.0578C13.6475 18.4697 13.8835 17.9404 14.1784 17.5287C14.8862 16.5289 16.0659 15.882 17.4226 15.882C18.7792 15.882 20.0179 16.4701 20.6668 17.5287C20.9617 17.9992 21.1976 18.4697 21.2566 19.0578C21.3746 19.7047 21.3156 20.4692 21.1386 21.2925C20.7258 23.2332 19.4281 25.5856 17.4226 28.1144ZM28.8067 34.1718C30.6352 33.4661 31.9329 31.8194 32.1689 29.8787C32.2868 28.879 32.1689 27.9968 31.9919 27.0559C31.928 26.8648 31.8469 26.6738 31.7578 26.4641C31.6823 26.2865 31.6012 26.0954 31.52 25.8797C31.3726 25.5856 31.2398 25.2769 31.1071 24.9681C30.9744 24.6594 30.8417 24.3506 30.6942 24.0566V23.9978C28.1579 18.5285 25.4446 12.9416 22.6133 7.47228L22.4953 7.23705L22.4953 7.23702C22.2004 6.64893 21.9054 6.06085 21.6105 5.53157C21.3156 4.94347 20.9617 4.35538 20.5488 3.8849C19.782 3.00276 18.7203 2.53228 17.5995 2.53228C16.4788 2.53228 15.4171 3.00276 14.6503 3.8849C14.2374 4.41419 13.8835 4.94347 13.5886 5.53157C13.2936 6.11966 12.9987 6.70776 12.7038 7.23705L12.5858 7.47228C9.69555 12.9416 6.98223 18.5285 4.44587 23.9978L4.38689 24.0566C4.09196 24.6447 3.79704 25.2916 3.5611 25.8797C3.38414 26.2913 3.20719 26.703 3.08922 27.0559C2.67632 28.1144 2.61734 28.9966 2.73531 29.9375C2.97125 31.8194 4.26892 33.4661 6.09746 34.2306C6.92325 34.5247 7.86701 34.7011 8.86975 34.5835C9.81351 34.4659 10.7573 34.1718 11.701 33.6425C12.9987 32.878 14.3554 31.7606 15.889 30.0551C13.4706 27.0559 11.937 24.2918 11.4061 21.8806C11.1112 20.7632 11.0522 19.7047 11.2292 18.7637C11.4061 17.8228 11.701 16.9994 12.2319 16.2349C13.3526 14.647 15.2991 13.6473 17.4226 13.6473C19.5461 13.6473 21.4926 14.5882 22.6133 16.2349C23.1441 16.9994 23.4391 17.8228 23.616 18.7637C23.734 19.7047 23.675 20.7632 23.4391 21.8806C22.8492 24.2918 21.3746 26.997 18.9562 29.9963C20.4898 31.7018 21.7875 32.8192 23.1441 33.5837C24.1469 34.113 25.0317 34.407 25.9754 34.5247C26.9782 34.6423 27.9219 34.5247 28.8067 34.1718Z"
													fill="white" />
											</svg>
										</div>
										<div className="marquee__img">
											<svg xmlns="http://www.w3.org/2000/svg" width="136" height="39" viewBox="0 0 136 39"
												fill="none">
												<path
													d="M24.7247 3.43111C24.184 1.65952 22.2916 0.70559 20.5343 1.25069C18.777 1.7958 17.8308 3.70366 18.3715 5.47524L27.0227 32.3216C27.631 33.9569 29.3882 34.9108 31.0779 34.4339C32.8352 33.8888 33.9166 32.049 33.3759 30.2775C33.3759 30.2093 24.7247 3.43111 24.7247 3.43111Z"
													fill="white" />
												<path
													d="M11.3419 7.86079C10.8012 6.08921 8.90876 5.13528 7.1515 5.68038C5.39424 6.22548 4.44802 8.13335 4.98871 9.90493L13.6399 36.7513C14.2481 38.3866 16.0054 39.3405 17.6951 38.8636C19.4523 38.3184 20.5337 36.4787 19.993 34.7071C19.993 34.639 11.3419 7.86079 11.3419 7.86079Z"
													fill="white" />
												<path
													d="M35.6731 25.7103C37.4304 25.1652 38.3766 23.2574 37.8359 21.4858C37.2952 19.7142 35.4028 18.7603 33.6455 19.3054L6.94861 27.9589C5.32652 28.5721 4.3803 30.3437 4.85341 32.0472C5.39411 33.8188 7.21896 34.909 8.97622 34.3639C9.1114 34.3639 35.6731 25.7103 35.6731 25.7103Z"
													fill="white" />
												<path
													d="M12.4907 33.2751C14.248 32.7299 16.4783 31.9804 18.8439 31.1628C18.3032 29.3912 17.5597 27.1426 16.7487 24.7578L10.3955 26.8701L12.4907 33.2751Z"
													fill="white" />
												<path
													d="M25.9399 28.8454C28.3731 28.0277 30.6034 27.3463 32.2931 26.7331C31.7524 24.9615 31.009 22.713 30.1979 20.3281L23.8447 22.4404L25.9399 28.8454Z"
													fill="white" />
												<path
													d="M31.2794 12.1518C33.0366 11.6066 33.9828 9.69879 33.4421 7.9272C32.9014 6.15561 31.009 5.20168 29.2517 5.74679L2.62244 14.4684C1.00035 15.0817 0.0541306 16.8533 0.52724 18.5567C1.06794 20.3964 2.89279 21.4866 4.65005 20.8734C4.71764 20.8734 31.2794 12.1518 31.2794 12.1518Z"
													fill="white" />
												<path
													d="M8.16453 19.7165C9.9218 19.1714 12.1522 18.4218 14.5177 17.6042C13.7067 15.1512 13.0308 12.9027 12.4225 11.1992L6.06934 13.3115L8.16453 19.7165Z"
													fill="white" />
												<path
													d="M21.5473 15.3532C23.9805 14.5355 26.2109 13.8541 27.9005 13.2409C27.0895 10.7879 26.4136 8.53939 25.8053 6.83594L19.4521 8.94821L21.5473 15.3532Z"
													fill="white" />
												<path
													d="M62.6395 10.5177C63.7885 11.0628 63.9237 11.4035 62.9774 13.1751C62.0312 15.0148 61.8285 15.0829 60.6119 14.606C59.125 13.9927 57.3001 13.5157 56.0836 13.5157C54.1235 13.5157 52.8394 14.1971 52.8394 15.2873C52.8394 18.8305 64.1264 16.9226 64.1264 24.5541C64.1264 28.3698 60.8822 30.8909 56.016 30.8909C53.4477 30.8909 50.2711 30.0051 48.1083 28.9149C47.0269 28.3698 46.9593 28.0291 47.9055 26.1894C48.7166 24.6222 48.9869 24.4178 50.1359 24.8948C52.0283 25.7124 54.3263 26.3257 55.9484 26.3257C57.7732 26.3257 58.9222 25.5762 58.9222 24.486C58.9222 21.0109 47.4324 22.6462 47.4324 15.2873C47.4324 11.4035 50.6766 8.74609 55.4753 8.74609C57.7732 8.95051 60.6795 9.63189 62.6395 10.5177Z"
													fill="white" />
												<path
													d="M71.7645 1.52218V29.8676C71.7645 30.2764 71.2914 30.7533 70.6832 30.7533H67.7093C67.0335 30.7533 66.6279 30.2764 66.6279 29.8676V1.52218C66.6279 0.0912827 67.0335 0.0231448 69.1962 0.0231448C71.6294 -0.0449932 71.7645 0.159421 71.7645 1.52218Z"
													fill="white" />
												<path fillRule="evenodd" clipRule="evenodd"
													d="M92.7151 29.595V17.3983C92.7151 12.0836 89.133 8.94922 83.4557 8.94922C80.8874 8.94922 78.0488 9.76687 76.0211 11.1296C74.9397 11.811 74.9397 12.1517 76.0211 13.8551C77.1701 15.5586 77.3729 15.6267 78.4543 15.0135C79.806 14.1958 81.4957 13.6507 82.915 13.6507C85.8889 13.6507 87.6461 15.0135 87.6461 17.262V18.6929C86.2268 18.0797 84.4695 17.739 82.5771 17.739C77.5081 17.739 74.1963 20.4645 74.1963 24.5528C74.1963 28.3685 77.1701 30.9578 81.5633 30.9578C83.8612 30.9578 86.1592 30.0038 87.7137 28.2323L87.6461 29.5269C87.5785 30.2083 88.0516 30.6852 88.7275 30.6852H91.6338C92.242 30.6852 92.7151 30.2764 92.7151 29.595ZM82.1713 26.8698C80.3464 26.8698 79.1299 25.9158 79.1299 24.4849C79.1299 22.7133 80.9547 21.3506 83.6582 21.3506C84.9424 21.3506 86.4293 21.555 87.5783 22.032V23.9398C86.4293 25.7796 84.4017 26.8698 82.1713 26.8698Z"
													fill="white" />
												<path
													d="M112.79 10.5836C113.871 11.1968 113.871 11.5375 112.722 13.3772C111.641 15.0807 111.438 15.217 110.221 14.6037C109.343 14.1268 107.856 13.7179 106.707 13.7179C102.99 13.7179 100.556 16.1709 100.556 19.9185C100.556 23.8023 102.99 26.3916 106.707 26.3916C107.991 26.3916 109.613 25.9146 110.627 25.3014C111.708 24.6881 111.911 24.6881 113.06 26.3916C114.074 27.9588 114.074 28.2994 113.128 28.9808C111.505 30.1392 108.87 31.025 106.572 31.025C99.7453 31.025 95.1494 26.596 95.1494 19.9866C95.1494 13.3772 99.7453 9.01641 106.639 9.01641C108.802 8.94827 111.235 9.62965 112.79 10.5836Z"
													fill="white" />
												<path
													d="M135.162 28.0281C136.04 29.1183 135.702 29.5272 133.54 30.2767C131.377 31.0943 131.039 31.0262 130.295 30.0041L124.145 21.7594L121.374 24.4168V29.7997C121.374 30.2085 120.901 30.6855 120.293 30.6855H117.319C116.643 30.6855 116.237 30.2085 116.237 29.7997V1.52247C116.237 0.0915754 116.643 0.0234375 118.806 0.0234375C121.306 0.0234375 121.374 0.227851 121.374 1.52247V17.603L129.755 9.49461C130.701 8.60882 131.174 8.67695 132.864 9.76716C134.689 10.9255 134.824 11.2662 133.945 12.152L127.727 18.2844L135.162 28.0281Z"
													fill="white" />
											</svg>
										</div>
										<div className="marquee__img">
											<svg xmlns="http://www.w3.org/2000/svg" width="120" height="31" viewBox="0 0 120 31"
												fill="none">
												<path fillRule="evenodd" clipRule="evenodd"
													d="M17.8299 2.59615C17.8299 3.8195 16.7629 4.86809 15.518 4.86809C14.2731 4.86809 13.2061 3.8195 13.2061 2.59615C13.2061 1.3728 14.2731 0.324219 15.518 0.324219C16.7629 0.324219 17.8299 1.3728 17.8299 2.59615ZM15.5193 6.73242C14.1559 6.73242 13.0889 7.78101 13.0889 9.12086C13.0889 10.4607 14.1559 11.5093 15.5193 11.5093C16.8828 11.5093 17.9498 10.4607 17.9498 9.12086C17.9498 7.72275 16.8828 6.73242 15.5193 6.73242ZM13.0303 15.5287C13.0303 14.1889 14.1566 13.082 15.52 13.082C16.8835 13.082 18.0691 14.1889 18.0098 15.5287C18.0098 16.8686 16.8835 17.9754 15.52 17.9754C14.1566 17.9754 13.0303 16.8686 13.0303 15.5287ZM15.5193 19.5479C14.1559 19.5479 13.0889 20.5964 13.0889 21.9363C13.0889 23.2762 14.1559 24.3247 15.5193 24.3247C16.8828 24.3247 17.9498 23.2762 17.9498 21.9363C17.9498 20.6547 16.8828 19.5479 15.5193 19.5479ZM13.2061 28.4028C13.2061 27.1794 14.2731 26.1309 15.518 26.1309C16.8221 26.1309 17.8299 27.1794 17.8299 28.4028C17.8299 29.6261 16.7629 30.6747 15.518 30.6747C14.2731 30.6747 13.2061 29.6261 13.2061 28.4028ZM21.9212 6.44141C20.4392 6.44141 19.1943 7.66476 19.1943 9.12112C19.1943 10.5775 20.4392 11.8008 21.9212 11.8008C23.4032 11.8008 24.6481 10.5775 24.6481 9.12112C24.6481 7.66476 23.4032 6.44141 21.9212 6.44141ZM19.0732 15.5872C19.0732 14.0144 20.3774 12.791 21.9187 12.791C23.46 12.791 24.7641 14.0144 24.7641 15.5872C24.7641 17.1601 23.46 18.3835 21.9187 18.3835C20.3181 18.3835 19.0732 17.1019 19.0732 15.5872ZM21.9212 19.2568C20.4392 19.2568 19.1943 20.4802 19.1943 21.9366C19.1943 23.3929 20.4392 24.6163 21.9212 24.6163C23.4032 24.6163 24.6481 23.3929 24.6481 21.9366C24.6481 20.4802 23.4032 19.2568 21.9212 19.2568ZM25.3584 15.5289C25.3584 13.7813 26.8404 12.4414 28.5002 12.4414C30.1601 12.4414 31.5235 13.7813 31.6421 15.5289C31.6421 17.2765 30.2786 18.6164 28.5002 18.6164C26.7218 18.6164 25.3584 17.16 25.3584 15.5289ZM9.0582 7.02344C7.93188 7.02344 6.9834 7.95551 6.9834 9.06235C6.9834 10.1692 7.93188 11.1013 9.0582 11.1013C10.1845 11.1013 11.133 10.1692 11.133 9.06235C11.133 7.95551 10.2438 7.02344 9.0582 7.02344ZM6.8623 15.5285C6.8623 14.3051 7.81078 13.373 9.05566 13.373C10.3005 13.373 11.249 14.3051 11.249 15.5285C11.249 16.7518 10.3005 17.6839 9.05566 17.6839C7.81078 17.6839 6.8623 16.7518 6.8623 15.5285ZM9.0582 19.8398C7.93188 19.8398 6.9834 20.7719 6.9834 21.8788C6.9834 22.9856 7.93188 23.9177 9.0582 23.9177C10.1845 23.9177 11.133 22.9856 11.133 21.8788C11.133 20.7719 10.2438 19.8398 9.0582 19.8398ZM0.698242 15.587C0.698242 14.5384 1.52816 13.7228 2.5952 13.7228C3.66224 13.7228 4.49216 14.5384 4.49216 15.587C4.49216 16.6355 3.66224 17.4511 2.5952 17.4511C1.52816 17.4511 0.698242 16.6355 0.698242 15.587Z"
													fill="white" />
												<path
													d="M55.2343 11.5703C54.9972 11.5703 54.8193 11.8033 54.8193 11.9781V28.1147C54.8193 28.3477 55.0565 28.5224 55.2343 28.5224H57.1905C57.4277 28.5224 57.6055 28.2894 57.6055 28.1147V11.9781C57.6055 11.7451 57.3684 11.5703 57.1905 11.5703H55.2343Z"
													fill="white" />
												<path
													d="M56.3022 4.75391C55.2352 4.75391 54.4053 5.56947 54.4053 6.61806C54.4053 7.66664 55.2352 8.48221 56.3022 8.48221C57.3693 8.48221 58.1992 7.66664 58.1992 6.61806C58.1992 5.56947 57.31 4.75391 56.3022 4.75391Z"
													fill="white" />
												<path
													d="M97.3241 11.5703C97.087 11.5703 96.9092 11.8033 96.9092 11.9781V28.1147C96.9092 28.3477 97.1463 28.5224 97.3241 28.5224H99.2804C99.5175 28.5224 99.6953 28.2894 99.6953 28.1147V11.9781C99.6953 11.7451 99.4582 11.5703 99.2804 11.5703H97.3241Z"
													fill="white" />
												<path
													d="M98.271 4.75391C97.2039 4.75391 96.374 5.56947 96.374 6.61806C96.374 7.66664 97.2039 8.48221 98.271 8.48221C99.338 8.48221 100.168 7.66664 100.168 6.61806C100.168 5.56947 99.338 4.75391 98.271 4.75391Z"
													fill="white" />
												<path fillRule="evenodd" clipRule="evenodd"
													d="M118.289 26.756C118.276 26.8126 118.246 26.881 118.174 26.9494C118.174 27.0659 118.05 27.1824 117.803 27.1242L117.898 27.2334C117.886 27.2382 117.874 27.241 117.865 27.241H117.68L117.68 27.2407H117.433V27.0663V26.542H117.865C117.988 26.542 118.112 26.542 118.174 26.6585C118.246 26.6585 118.276 26.699 118.289 26.756ZM117.433 27.2407H117.371V27.765H117.124V26.3086H117.68H117.927C118.05 26.3086 118.174 26.4251 118.174 26.4251C118.297 26.4251 118.297 26.5416 118.297 26.5416V26.6581C118.297 26.6822 118.297 26.7162 118.289 26.756C118.297 26.7958 118.297 26.8437 118.297 26.8915C118.297 27.008 118.297 27.1245 118.174 27.1245C118.101 27.1245 118.029 27.1645 117.969 27.1976C117.943 27.2122 117.919 27.2255 117.898 27.2334L118.359 27.765H118.112L117.68 27.241H117.433V27.2407Z"
													fill="white" />
												<path fillRule="evenodd" clipRule="evenodd"
													d="M116.351 27.0664C116.351 26.3674 117.003 25.7266 117.714 25.7266C118.485 25.7266 119.077 26.3091 119.077 27.0664C119.077 27.7655 118.425 28.4063 117.714 28.4063C117.003 28.4063 116.351 27.7655 116.351 27.0664ZM116.468 27.0661C116.468 27.7652 117.001 28.2895 117.713 28.2895C118.365 28.2895 118.958 27.7652 118.958 27.0661C118.958 26.3671 118.424 25.8428 117.713 25.8428C117.001 25.8428 116.468 26.3671 116.468 27.0661Z"
													fill="white" />
												<path
													d="M71.5346 14.1918C71.7717 14.1918 71.9496 13.9588 71.9496 13.7841V11.8617C71.9496 11.6286 71.7124 11.4539 71.5346 11.4539H67.3257V5.27888C67.3257 5.04586 67.0886 4.87109 66.9108 4.87109H64.9545C64.7174 4.87109 64.5396 5.10411 64.5396 5.27888V11.4539H62.4648C62.2276 11.4539 62.0498 11.6869 62.0498 11.8617V13.7841C62.0498 14.0171 62.2869 14.1918 62.4648 14.1918H64.5396V23.5126C64.5396 26.3671 66.4958 28.2312 69.3412 28.2312H71.416C71.6532 28.2312 71.831 27.9982 71.831 27.8235V25.901C71.831 25.668 71.5939 25.4933 71.416 25.4933H69.6376C68.2742 25.4933 67.3257 24.5612 67.3257 23.1048V14.1336H71.5346V14.1918Z"
													fill="white" />
												<path
													d="M113.152 14.1918C113.389 14.1918 113.567 13.9588 113.567 13.7841V11.8617C113.567 11.6286 113.33 11.4539 113.152 11.4539H108.943V5.27888C108.943 5.04586 108.706 4.87109 108.528 4.87109H106.572C106.335 4.87109 106.157 5.10411 106.157 5.27888V11.4539H104.082C103.845 11.4539 103.667 11.6869 103.667 11.8617V13.7841C103.667 14.0171 103.904 14.1918 104.082 14.1918H106.157V23.5126C106.157 26.3671 108.113 28.2312 110.958 28.2312H113.033C113.27 28.2312 113.448 27.9982 113.448 27.8235V25.901C113.448 25.668 113.211 25.4933 113.033 25.4933H111.136C109.773 25.4933 108.824 24.5612 108.824 23.1048V14.1336H113.093L113.152 14.1918Z"
													fill="white" />
												<path
													d="M42.7857 14.1907V27.9388C42.7857 28.1718 43.0228 28.3466 43.2006 28.3466H45.1569C45.394 28.3466 45.5718 28.1136 45.5718 27.9388V14.1907H50.1957C50.4328 14.1907 50.6106 13.9577 50.6106 13.7829V11.8605C50.6106 11.6275 50.3735 11.4527 50.1957 11.4527H45.5718V7.84092C45.5718 6.38455 46.6389 5.39422 47.8837 5.39422H50.1957C50.4328 5.39422 50.6106 5.1612 50.6106 4.98644V3.06403C50.6106 2.83101 50.3735 2.65625 50.1957 2.65625H48.0023C45.0976 2.65625 42.7857 5.04469 42.7857 7.78266V11.4527H40.7109C40.4737 11.4527 40.2959 11.6857 40.2959 11.8605V13.7829C40.2959 14.0159 40.533 14.1907 40.7109 14.1907H42.7857Z"
													fill="white" />
												<path fillRule="evenodd" clipRule="evenodd"
													d="M84.6369 10.9277C86.9488 10.9277 89.1422 11.8598 90.6835 13.4909C92.2247 15.1221 93.0547 17.394 93.0547 19.899C93.0547 26.1322 88.7272 28.9284 84.5776 28.9284C80.3687 28.9284 76.1006 26.1905 76.1006 19.899V2.94685C76.1006 2.77208 76.2784 2.53906 76.5155 2.53906H78.4718C78.6496 2.53906 78.8867 2.71383 78.8867 2.94685V13.1997C80.2502 11.8598 82.4435 10.9277 84.6369 10.9277ZM78.8271 19.9575C78.8271 23.045 80.3684 26.3073 84.5773 26.3073C88.7862 26.3073 90.2682 23.045 90.3275 19.9575C90.3275 16.2292 88.0155 13.666 84.5773 13.666C81.1391 13.666 78.8271 16.171 78.8271 19.9575Z"
													fill="white" />
											</svg>
										</div>
										<div className="marquee__img">
											<svg xmlns="http://www.w3.org/2000/svg" width="119" height="37" viewBox="0 0 119 37"
												fill="none">
												<path fillRule="evenodd" clipRule="evenodd"
													d="M33.2946 24.8799C33.4715 25.2916 33.6485 25.762 33.8254 26.2325C34.3563 27.5851 34.4743 28.8789 34.2973 30.1728C33.8844 32.878 32.1149 35.2304 29.5195 36.2889C28.5758 36.7006 27.573 36.877 26.5113 36.877C26.2163 36.877 25.8624 36.877 25.5675 36.8182C24.3288 36.7006 23.0901 36.289 21.8515 35.5832C20.3768 34.7599 18.9022 33.5249 17.2506 31.7606C15.599 33.5249 14.1834 34.7599 12.6498 35.5832C11.4111 36.289 10.1724 36.6418 8.93372 36.8182C8.7863 36.8182 8.62414 36.8329 8.46198 36.8476L8.46184 36.8476C8.29963 36.8623 8.13742 36.877 7.98996 36.877C6.92823 36.877 5.92548 36.7006 4.98172 36.2889C2.44536 35.2304 0.557842 32.9368 0.144947 30.1728C-0.0320086 28.8201 0.144947 27.5263 0.616827 26.2325C0.793782 25.7032 0.970738 25.2916 1.14769 24.8799C1.44262 24.233 1.73754 23.5861 1.97348 22.998L2.03247 22.9392C4.62781 17.4111 7.34113 11.8242 10.1724 6.29609L10.2904 6.06086C10.5853 5.53159 10.8802 4.94351 11.1751 4.35544L11.1752 4.35538C11.2546 4.23092 11.334 4.10429 11.4143 3.97632L11.4143 3.97632L11.4143 3.97631C11.7513 3.4391 12.1031 2.8783 12.5318 2.35586C13.7705 0.944427 15.4221 0.121094 17.2506 0.121094C19.0202 0.121094 20.7307 0.944427 21.9104 2.41466C22.5003 3.06157 22.9132 3.76728 23.2671 4.41419L23.2671 4.41429C23.5621 5.00235 23.857 5.59041 24.1519 6.11966L24.2698 6.3549C27.1601 11.883 29.8734 17.4699 32.4098 22.998H32.4688C32.7047 23.5861 32.9996 24.233 33.2946 24.8799ZM62.3168 9.35455C62.3168 10.7072 61.255 11.7657 59.8984 11.7657C58.5417 11.7657 57.48 10.7072 57.48 9.35455C57.48 8.00193 58.5417 6.94336 59.8984 6.94336C61.314 7.00217 62.3168 8.06074 62.3168 9.35455ZM52.4653 14.1761V14.7642C52.4653 14.7642 51.3445 13.2939 48.8672 13.2939C44.8562 13.2939 41.73 16.352 41.73 20.5863C41.73 24.7618 44.8562 27.8787 48.8672 27.8787C51.3445 27.8787 52.4653 26.3497 52.4653 26.3497V26.9966C52.4653 27.2906 52.7012 27.5258 52.9961 27.5258H56.0044V13.6468H52.9961C52.6422 13.6468 52.4653 13.882 52.4653 14.1761ZM49.457 24.5274C50.8136 24.5274 51.9344 23.8217 52.4652 22.9983V18.0583C51.9344 17.2938 50.7547 16.5293 49.457 16.5293C47.0976 16.5293 45.269 17.9995 45.269 20.5283C45.269 23.0572 47.0976 24.5274 49.457 24.5274ZM58.1284 13.6475H61.6675V27.4677H58.1284V13.6475ZM107.437 14.7648C107.437 14.7648 108.617 13.2946 111.035 13.2946C115.046 13.2946 118.172 16.3527 118.172 20.5281C118.172 24.7036 115.046 27.8205 111.035 27.8205C108.558 27.8205 107.437 26.2915 107.437 26.2915V26.9384C107.437 27.2324 107.201 27.4677 106.906 27.4677H103.898V7.00195H107.437V14.7648ZM110.445 24.4678C109.089 24.4678 108.027 23.7621 107.437 22.9388V17.9988C107.968 17.2343 109.148 16.4697 110.445 16.4697C112.805 16.4697 114.633 17.94 114.633 20.4688C114.633 22.9976 112.805 24.4678 110.445 24.4678ZM102.072 27.5258V19.2925C102.072 16.9401 101.6 15.6463 100.42 14.6466C99.3586 13.7644 98.0609 13.2939 96.5273 13.2939C95.1707 13.2939 93.814 13.7056 92.7523 14.7642V14.1761C92.7523 13.882 92.5163 13.6468 92.2214 13.6468H89.3901V27.5258H92.9292V17.8811C93.6371 17.0578 94.7578 16.5285 95.8195 16.5285C97.766 16.5285 98.5328 17.4106 98.5328 19.7042V27.5258H102.072ZM80.7775 13.2944C78.3591 13.2944 77.1794 14.7647 77.1794 14.7647V7.00181H73.6403V27.4675H76.6486C76.9435 27.4675 77.1794 27.2323 77.1794 26.9382V26.2913C77.1794 26.2913 78.3002 27.8204 80.7775 27.8204C84.7885 27.8204 87.9147 24.7035 87.9147 20.528C87.9737 16.3525 84.8475 13.2944 80.7775 13.2944ZM77.1792 22.9388C77.7691 23.7621 78.8308 24.4678 80.1874 24.4678C82.5468 24.4678 84.3754 22.9976 84.3754 20.4688C84.3754 17.94 82.5468 16.4697 80.1874 16.4697C78.8898 16.4697 77.7101 17.2343 77.1792 17.9988V22.9388ZM70.6336 13.2939C71.6953 13.2939 72.2852 13.4704 72.2852 13.4704V16.7637C72.2852 16.7637 69.3359 15.7639 67.5074 17.8811V27.5258H63.9683V13.6468H66.9765C67.2714 13.6468 67.5074 13.882 67.5074 14.1761V14.7642C68.0972 13.9997 69.5129 13.2939 70.6336 13.2939ZM17.1916 28.1144C15.1861 25.5856 13.8885 23.2332 13.4756 21.2925C13.2986 20.4692 13.2396 19.7047 13.3576 19.0578C13.4166 18.4697 13.6525 17.9404 13.9475 17.5287C14.6553 16.5289 15.835 15.882 17.1916 15.882C18.5483 15.882 19.787 16.4701 20.4358 17.5287C20.7307 17.9992 20.9667 18.4697 21.0257 19.0578C21.1436 19.7047 21.0846 20.4692 20.9077 21.2925C20.4948 23.2332 19.1971 25.5856 17.1916 28.1144ZM28.5738 34.1717C30.4023 33.466 31.7 31.8194 31.936 29.8787C32.0539 28.8789 31.936 27.9967 31.759 27.0558C31.6951 26.8648 31.614 26.6737 31.5249 26.464C31.4494 26.2864 31.3683 26.0954 31.2871 25.8796C31.1397 25.5856 31.0069 25.2768 30.8742 24.9681C30.7415 24.6593 30.6088 24.3506 30.4613 24.0565V23.9977C27.925 18.5284 25.2117 12.9415 22.3804 7.47223L22.2624 7.23699C21.9675 6.64889 21.6726 6.0608 21.3776 5.53151C21.0827 4.94342 20.7288 4.35532 20.3159 3.88485C19.5491 3.0027 18.4874 2.53223 17.3666 2.53223C16.2459 2.53223 15.1842 3.0027 14.4174 3.88485C14.0045 4.41413 13.6506 4.94342 13.3557 5.53151L13.3556 5.5316C13.0607 6.11966 12.7658 6.70773 12.4709 7.23699L12.3529 7.47223C9.46264 12.9415 6.74933 18.5284 4.21297 23.9977L4.15399 24.0565C3.85906 24.6446 3.56413 25.2915 3.32819 25.8796C3.15124 26.2913 2.97428 26.7029 2.85631 27.0558C2.44342 28.1144 2.38443 28.9965 2.5024 29.9375C2.73834 31.8194 4.03602 33.466 5.86455 34.2306C6.69034 34.5246 7.6341 34.701 8.63685 34.5834C9.58061 34.4658 10.5244 34.1717 11.4681 33.6425C12.7658 32.8779 14.1225 31.7606 15.6561 30.0551C13.2377 27.0558 11.7041 24.2917 11.1732 21.8806C10.8783 20.7632 10.8193 19.7046 10.9963 18.7637C11.1732 17.8227 11.4681 16.9994 11.999 16.2348C13.1197 14.647 15.0662 13.6472 17.1897 13.6472C19.3131 13.6472 21.2597 14.5882 22.3804 16.2348C22.9112 16.9994 23.2062 17.8227 23.3831 18.7637C23.5011 19.7046 23.4421 20.7632 23.2062 21.8806C22.6163 24.2917 21.1417 26.997 18.7233 29.9963C20.2569 31.7017 21.5546 32.8191 22.9112 33.5837C23.914 34.1129 24.7988 34.407 25.7425 34.5246C26.7453 34.6422 27.689 34.5246 28.5738 34.1717Z"
													fill="white" />
											</svg>
										</div>
										<div className="marquee__img">
											<svg xmlns="http://www.w3.org/2000/svg" width="136" height="39" viewBox="0 0 136 39"
												fill="none">
												<path
													d="M24.7247 3.43111C24.184 1.65952 22.2916 0.70559 20.5343 1.25069C18.777 1.7958 17.8308 3.70366 18.3715 5.47524L27.0227 32.3216C27.631 33.9569 29.3882 34.9108 31.0779 34.4339C32.8352 33.8888 33.9166 32.049 33.3759 30.2775C33.3759 30.2093 24.7247 3.43111 24.7247 3.43111Z"
													fill="white" />
												<path
													d="M11.3419 7.86079C10.8012 6.08921 8.90876 5.13528 7.1515 5.68038C5.39424 6.22548 4.44802 8.13335 4.98871 9.90493L13.6399 36.7513C14.2481 38.3866 16.0054 39.3405 17.6951 38.8636C19.4523 38.3184 20.5337 36.4787 19.993 34.7071C19.993 34.639 11.3419 7.86079 11.3419 7.86079Z"
													fill="white" />
												<path
													d="M35.6731 25.7103C37.4304 25.1652 38.3766 23.2574 37.8359 21.4858C37.2952 19.7142 35.4028 18.7603 33.6455 19.3054L6.94861 27.9589C5.32652 28.5721 4.3803 30.3437 4.85341 32.0472C5.39411 33.8188 7.21896 34.909 8.97622 34.3639C9.1114 34.3639 35.6731 25.7103 35.6731 25.7103Z"
													fill="white" />
												<path
													d="M12.4907 33.2751C14.248 32.7299 16.4783 31.9804 18.8439 31.1628C18.3032 29.3912 17.5597 27.1426 16.7487 24.7578L10.3955 26.8701L12.4907 33.2751Z"
													fill="white" />
												<path
													d="M25.9399 28.8454C28.3731 28.0277 30.6034 27.3463 32.2931 26.7331C31.7524 24.9615 31.009 22.713 30.1979 20.3281L23.8447 22.4404L25.9399 28.8454Z"
													fill="white" />
												<path
													d="M31.2794 12.1518C33.0366 11.6066 33.9828 9.69879 33.4421 7.9272C32.9014 6.15561 31.009 5.20168 29.2517 5.74679L2.62244 14.4684C1.00035 15.0817 0.0541306 16.8533 0.52724 18.5567C1.06794 20.3964 2.89279 21.4866 4.65005 20.8734C4.71764 20.8734 31.2794 12.1518 31.2794 12.1518Z"
													fill="white" />
												<path
													d="M8.16453 19.7165C9.9218 19.1714 12.1522 18.4218 14.5177 17.6042C13.7067 15.1512 13.0308 12.9027 12.4225 11.1992L6.06934 13.3115L8.16453 19.7165Z"
													fill="white" />
												<path
													d="M21.5473 15.3532C23.9805 14.5355 26.2109 13.8541 27.9005 13.2409C27.0895 10.7879 26.4136 8.53939 25.8053 6.83594L19.4521 8.94821L21.5473 15.3532Z"
													fill="white" />
												<path
													d="M62.6395 10.5177C63.7885 11.0628 63.9237 11.4035 62.9774 13.1751C62.0312 15.0148 61.8285 15.0829 60.6119 14.606C59.125 13.9927 57.3001 13.5157 56.0836 13.5157C54.1235 13.5157 52.8394 14.1971 52.8394 15.2873C52.8394 18.8305 64.1264 16.9226 64.1264 24.5541C64.1264 28.3698 60.8822 30.8909 56.016 30.8909C53.4477 30.8909 50.2711 30.0051 48.1083 28.9149C47.0269 28.3698 46.9593 28.0291 47.9055 26.1894C48.7166 24.6222 48.9869 24.4178 50.1359 24.8948C52.0283 25.7124 54.3263 26.3257 55.9484 26.3257C57.7732 26.3257 58.9222 25.5762 58.9222 24.486C58.9222 21.0109 47.4324 22.6462 47.4324 15.2873C47.4324 11.4035 50.6766 8.74609 55.4753 8.74609C57.7732 8.95051 60.6795 9.63189 62.6395 10.5177Z"
													fill="white" />
												<path
													d="M71.7645 1.52218V29.8676C71.7645 30.2764 71.2914 30.7533 70.6832 30.7533H67.7093C67.0335 30.7533 66.6279 30.2764 66.6279 29.8676V1.52218C66.6279 0.0912827 67.0335 0.0231448 69.1962 0.0231448C71.6294 -0.0449932 71.7645 0.159421 71.7645 1.52218Z"
													fill="white" />
												<path fillRule="evenodd" clipRule="evenodd"
													d="M92.7151 29.595V17.3983C92.7151 12.0836 89.133 8.94922 83.4557 8.94922C80.8874 8.94922 78.0488 9.76687 76.0211 11.1296C74.9397 11.811 74.9397 12.1517 76.0211 13.8551C77.1701 15.5586 77.3729 15.6267 78.4543 15.0135C79.806 14.1958 81.4957 13.6507 82.915 13.6507C85.8889 13.6507 87.6461 15.0135 87.6461 17.262V18.6929C86.2268 18.0797 84.4695 17.739 82.5771 17.739C77.5081 17.739 74.1963 20.4645 74.1963 24.5528C74.1963 28.3685 77.1701 30.9578 81.5633 30.9578C83.8612 30.9578 86.1592 30.0038 87.7137 28.2323L87.6461 29.5269C87.5785 30.2083 88.0516 30.6852 88.7275 30.6852H91.6338C92.242 30.6852 92.7151 30.2764 92.7151 29.595ZM82.1713 26.8698C80.3464 26.8698 79.1299 25.9158 79.1299 24.4849C79.1299 22.7133 80.9547 21.3506 83.6582 21.3506C84.9424 21.3506 86.4293 21.555 87.5783 22.032V23.9398C86.4293 25.7796 84.4017 26.8698 82.1713 26.8698Z"
													fill="white" />
												<path
													d="M112.79 10.5836C113.871 11.1968 113.871 11.5375 112.722 13.3772C111.641 15.0807 111.438 15.217 110.221 14.6037C109.343 14.1268 107.856 13.7179 106.707 13.7179C102.99 13.7179 100.556 16.1709 100.556 19.9185C100.556 23.8023 102.99 26.3916 106.707 26.3916C107.991 26.3916 109.613 25.9146 110.627 25.3014C111.708 24.6881 111.911 24.6881 113.06 26.3916C114.074 27.9588 114.074 28.2994 113.128 28.9808C111.505 30.1392 108.87 31.025 106.572 31.025C99.7453 31.025 95.1494 26.596 95.1494 19.9866C95.1494 13.3772 99.7453 9.01641 106.639 9.01641C108.802 8.94827 111.235 9.62965 112.79 10.5836Z"
													fill="white" />
												<path
													d="M135.162 28.0281C136.04 29.1183 135.702 29.5272 133.54 30.2767C131.377 31.0943 131.039 31.0262 130.295 30.0041L124.145 21.7594L121.374 24.4168V29.7997C121.374 30.2085 120.901 30.6855 120.293 30.6855H117.319C116.643 30.6855 116.237 30.2085 116.237 29.7997V1.52247C116.237 0.0915754 116.643 0.0234375 118.806 0.0234375C121.306 0.0234375 121.374 0.227851 121.374 1.52247V17.603L129.755 9.49461C130.701 8.60882 131.174 8.67695 132.864 9.76716C134.689 10.9255 134.824 11.2662 133.945 12.152L127.727 18.2844L135.162 28.0281Z"
													fill="white" />
											</svg>
										</div>
										<div className="marquee__img">
											<svg xmlns="http://www.w3.org/2000/svg" width="120" height="31" viewBox="0 0 120 31"
												fill="none">
												<path fillRule="evenodd" clipRule="evenodd"
													d="M17.9285 2.59615C17.9285 3.8195 16.8615 4.86809 15.6166 4.86809C14.3717 4.86809 13.3047 3.8195 13.3047 2.59615C13.3047 1.3728 14.3717 0.324219 15.6166 0.324219C16.8615 0.324219 17.9285 1.3728 17.9285 2.59615ZM15.616 6.73242C14.2526 6.73242 13.1855 7.78101 13.1855 9.12086C13.1855 10.4607 14.2526 11.5093 15.616 11.5093C16.9795 11.5093 18.0465 10.4607 18.0465 9.12086C18.0465 7.72275 16.9795 6.73242 15.616 6.73242ZM13.1271 15.5287C13.1271 14.1888 14.2534 13.082 15.6169 13.082C16.9803 13.082 18.1659 14.1888 18.1066 15.5287C18.1066 16.8686 16.9803 17.9754 15.6169 17.9754C14.2534 17.9754 13.1271 16.8686 13.1271 15.5287ZM15.616 19.5479C14.2526 19.5479 13.1855 20.5964 13.1855 21.9363C13.1855 23.2762 14.2526 24.3247 15.616 24.3247C16.9795 24.3247 18.0465 23.2762 18.0465 21.9363C18.0465 20.6547 16.9795 19.5479 15.616 19.5479ZM13.3047 28.4028C13.3047 27.1794 14.3717 26.1309 15.6166 26.1309C16.9208 26.1309 17.9285 27.1794 17.9285 28.4028C17.9285 29.6261 16.8615 30.6747 15.6166 30.6747C14.3717 30.6747 13.3047 29.6261 13.3047 28.4028ZM22.0198 6.44141C20.5378 6.44141 19.293 7.66476 19.293 9.12112C19.293 10.5775 20.5378 11.8008 22.0198 11.8008C23.5018 11.8008 24.7467 10.5775 24.7467 9.12112C24.7467 7.66476 23.5018 6.44141 22.0198 6.44141ZM19.1738 15.5872C19.1738 14.0144 20.478 12.791 22.0193 12.791C23.5605 12.791 24.8647 14.0144 24.8647 15.5872C24.8647 17.1601 23.5605 18.3835 22.0193 18.3835C20.4187 18.3835 19.1738 17.1019 19.1738 15.5872ZM22.0198 19.2568C20.5378 19.2568 19.293 20.4802 19.293 21.9366C19.293 23.3929 20.5378 24.6163 22.0198 24.6163C23.5018 24.6163 24.7467 23.3929 24.7467 21.9366C24.7467 20.4802 23.5018 19.2568 22.0198 19.2568ZM25.457 15.5289C25.457 13.7813 26.939 12.4414 28.5989 12.4414C30.2587 12.4414 31.6222 13.7813 31.7407 15.5289C31.7407 17.2765 30.3773 18.6164 28.5989 18.6164C26.8205 18.6164 25.457 17.16 25.457 15.5289ZM9.15488 7.02344C8.02856 7.02344 7.08008 7.95551 7.08008 9.06235C7.08008 10.1692 8.02856 11.1013 9.15488 11.1013C10.2812 11.1013 11.2297 10.1692 11.2297 9.06235C11.2297 7.95551 10.3405 7.02344 9.15488 7.02344ZM6.96289 15.5285C6.96289 14.3051 7.91137 13.373 9.15625 13.373C10.4011 13.373 11.3496 14.3051 11.3496 15.5285C11.3496 16.7518 10.4011 17.6839 9.15625 17.6839C7.91137 17.6839 6.96289 16.7518 6.96289 15.5285ZM9.15488 19.8398C8.02856 19.8398 7.08008 20.7719 7.08008 21.8788C7.08008 22.9856 8.02856 23.9177 9.15488 23.9177C10.2812 23.9177 11.2297 22.9856 11.2297 21.8788C11.2297 20.7719 10.3405 19.8398 9.15488 19.8398ZM0.796875 15.587C0.796875 14.5384 1.62679 13.7228 2.69383 13.7228C3.76087 13.7228 4.59079 14.5384 4.59079 15.587C4.59079 16.6355 3.76087 17.4511 2.69383 17.4511C1.62679 17.4511 0.796875 16.6355 0.796875 15.587Z"
													fill="white" />
												<path
													d="M55.3349 11.5703C55.0978 11.5703 54.9199 11.8033 54.9199 11.9781V28.1147C54.9199 28.3477 55.157 28.5224 55.3349 28.5224H57.2911C57.5282 28.5224 57.7061 28.2894 57.7061 28.1147V11.9781C57.7061 11.7451 57.469 11.5703 57.2911 11.5703H55.3349Z"
													fill="white" />
												<path
													d="M56.4028 4.75391C55.3358 4.75391 54.5059 5.56947 54.5059 6.61806C54.5059 7.66664 55.3358 8.48221 56.4028 8.48221C57.4699 8.48221 58.2998 7.66664 58.2998 6.61806C58.2998 5.56947 57.4106 4.75391 56.4028 4.75391Z"
													fill="white" />
												<path
													d="M97.4247 11.5703C97.1876 11.5703 97.0098 11.8033 97.0098 11.9781V28.1147C97.0098 28.3477 97.2469 28.5224 97.4247 28.5224H99.381C99.6181 28.5224 99.7959 28.2894 99.7959 28.1147V11.9781C99.7959 11.7451 99.5588 11.5703 99.381 11.5703H97.4247Z"
													fill="white" />
												<path
													d="M98.3716 4.75391C97.3045 4.75391 96.4746 5.56947 96.4746 6.61806C96.4746 7.66664 97.3045 8.48221 98.3716 8.48221C99.4386 8.48221 100.269 7.66664 100.269 6.61806C100.269 5.56947 99.4386 4.75391 98.3716 4.75391Z"
													fill="white" />
												<path fillRule="evenodd" clipRule="evenodd"
													d="M118.387 26.756C118.375 26.8126 118.345 26.881 118.272 26.9494C118.272 27.0659 118.149 27.1824 117.902 27.1242L117.997 27.2334C117.984 27.2382 117.973 27.241 117.964 27.241H117.779L117.778 27.2407H117.531V27.0663V26.542H117.964C118.087 26.542 118.21 26.542 118.272 26.6585C118.345 26.6585 118.375 26.699 118.387 26.756ZM117.531 27.2407H117.47V27.765H117.223V26.3086H117.778H118.025C118.149 26.3086 118.272 26.4251 118.272 26.4251C118.396 26.4251 118.396 26.5416 118.396 26.5416V26.6581C118.396 26.6822 118.396 26.7162 118.387 26.756C118.396 26.7958 118.396 26.8437 118.396 26.8915C118.396 27.008 118.396 27.1245 118.272 27.1245C118.2 27.1245 118.128 27.1645 118.068 27.1976C118.041 27.2122 118.017 27.2255 117.997 27.2334L118.458 27.765H118.211L117.779 27.241H117.531V27.2407Z"
													fill="white" />
												<path fillRule="evenodd" clipRule="evenodd"
													d="M116.453 27.0664C116.453 26.3674 117.105 25.7266 117.817 25.7266C118.587 25.7266 119.18 26.3091 119.18 27.0664C119.18 27.7655 118.528 28.4063 117.817 28.4063C117.105 28.4063 116.453 27.7655 116.453 27.0664ZM116.572 27.0661C116.572 27.7652 117.106 28.2895 117.817 28.2895C118.469 28.2895 119.062 27.7652 119.062 27.0661C119.062 26.3671 118.529 25.8428 117.817 25.8428C117.106 25.8428 116.572 26.3671 116.572 27.0661Z"
													fill="white" />
												<path
													d="M71.6371 14.1918C71.8743 14.1918 72.0521 13.9588 72.0521 13.7841V11.8617C72.0521 11.6286 71.815 11.4539 71.6371 11.4539H67.4283V5.27888C67.4283 5.04586 67.1911 4.87109 67.0133 4.87109H65.0571C64.8199 4.87109 64.6421 5.10411 64.6421 5.27888V11.4539H62.5673C62.3302 11.4539 62.1523 11.6869 62.1523 11.8617V13.7841C62.1523 14.0171 62.3895 14.1918 62.5673 14.1918H64.6421V23.5126C64.6421 26.3671 66.5983 28.2312 69.4438 28.2312H71.5186C71.7557 28.2312 71.9335 27.9982 71.9335 27.8235V25.901C71.9335 25.668 71.6964 25.4933 71.5186 25.4933H69.7402C68.3767 25.4933 67.4283 24.5612 67.4283 23.1048V14.1336H71.6371V14.1918Z"
													fill="white" />
												<path
													d="M113.252 14.1918C113.489 14.1918 113.667 13.9588 113.667 13.7841V11.8617C113.667 11.6286 113.43 11.4539 113.252 11.4539H109.043V5.27888C109.043 5.04586 108.806 4.87109 108.629 4.87109H106.672C106.435 4.87109 106.257 5.10411 106.257 5.27888V11.4539H104.183C103.945 11.4539 103.768 11.6869 103.768 11.8617V13.7841C103.768 14.0171 104.005 14.1918 104.183 14.1918H106.257V23.5126C106.257 26.3671 108.214 28.2312 111.059 28.2312H113.134C113.371 28.2312 113.549 27.9982 113.549 27.8235V25.901C113.549 25.668 113.312 25.4933 113.134 25.4933H111.237C109.873 25.4933 108.925 24.5612 108.925 23.1048V14.1336H113.193L113.252 14.1918Z"
													fill="white" />
												<path
													d="M42.8862 14.1907V27.9388C42.8862 28.1718 43.1234 28.3466 43.3012 28.3466H45.2574C45.4946 28.3466 45.6724 28.1136 45.6724 27.9388V14.1907H50.2962C50.5334 14.1907 50.7112 13.9577 50.7112 13.7829V11.8605C50.7112 11.6275 50.4741 11.4527 50.2962 11.4527H45.6724V7.84092C45.6724 6.38455 46.7394 5.39422 47.9843 5.39422H50.2962C50.5334 5.39422 50.7112 5.1612 50.7112 4.98644V3.06403C50.7112 2.83101 50.4741 2.65625 50.2962 2.65625H48.1029C45.1982 2.65625 42.8862 5.04469 42.8862 7.78266V11.4527H40.8114C40.5743 11.4527 40.3965 11.6857 40.3965 11.8605V13.7829C40.3965 14.0159 40.6336 14.1907 40.8114 14.1907H42.8862Z"
													fill="white" />
												<path fillRule="evenodd" clipRule="evenodd"
													d="M84.7375 10.9277C87.0494 10.9277 89.2428 11.8598 90.7841 13.4909C92.3253 15.1221 93.1553 17.394 93.1553 19.899C93.1553 26.1322 88.8278 28.9284 84.6782 28.9284C80.4693 28.9284 76.2012 26.1905 76.2012 19.899V2.94685C76.2012 2.77208 76.379 2.53906 76.6161 2.53906H78.5724C78.7502 2.53906 78.9873 2.71383 78.9873 2.94685V13.1997C80.3508 11.8598 82.5441 10.9277 84.7375 10.9277ZM78.9277 19.9575C78.9277 23.045 80.469 26.3073 84.6779 26.3073C88.8868 26.3073 90.3688 23.045 90.4281 19.9575C90.4281 16.2292 88.1161 13.666 84.6779 13.666C81.2397 13.666 78.9277 16.171 78.9277 19.9575Z"
													fill="white" />
											</svg>
										</div>
										<div className="marquee__img">
											<svg xmlns="http://www.w3.org/2000/svg" width="119" height="39" viewBox="0 0 119 39"
												fill="none">
												<path
													d="M29.2361 13.7558H15.4143V17.8313H25.2431C24.7517 23.574 19.9602 26.1058 15.4758 26.1058C9.70135 26.1058 4.66408 21.5363 4.66408 15.176C4.66408 8.93927 9.45563 4.12277 15.4758 4.12277C20.1445 4.12277 22.8474 7.08677 22.8474 7.08677L25.6732 4.12277C25.6732 4.12277 21.9874 0.047268 15.2915 0.047268C6.7527 -0.014482 0.179688 7.21027 0.179688 15.0525C0.179688 22.7095 6.38412 30.1813 15.5372 30.1813C23.5845 30.1813 29.4818 24.6855 29.4818 16.4728C29.4818 14.7438 29.2361 13.7558 29.2361 13.7558Z"
													fill="white" />
												<path fillRule="evenodd" clipRule="evenodd"
													d="M30.7715 20.3635C30.7715 15.1765 34.8259 10.7305 40.4774 10.7305C45.1461 10.7305 50.1834 14.065 50.2448 20.487C50.2448 26.168 45.9447 30.1817 40.6003 30.1817C34.703 30.1817 30.7715 25.674 30.7715 20.3635ZM45.9446 20.4873C45.9446 16.9058 43.3031 14.6211 40.5387 14.6211C37.4058 14.6211 35.01 17.0911 35.0715 20.4256C35.0715 23.8836 37.4672 26.3536 40.5387 26.3536C43.3645 26.3536 45.9446 24.0688 45.9446 20.4873Z"
													fill="white" />
												<path fillRule="evenodd" clipRule="evenodd"
													d="M51.9043 20.3635C51.9043 15.1765 55.9587 10.7305 61.6102 10.7305C66.2789 10.7305 71.3162 14.065 71.3776 20.487C71.3776 26.168 67.0775 30.1817 61.7331 30.1817C55.8358 30.1817 51.9043 25.674 51.9043 20.3635ZM67.0774 20.4873C67.0774 16.9058 64.4359 14.6211 61.6716 14.6211C58.5386 14.6211 56.1428 17.0911 56.2043 20.4256C56.2043 23.8836 58.6001 26.3536 61.6716 26.3536C64.4973 26.3536 67.0774 24.0688 67.0774 20.4873Z"
													fill="white" />
												<path fillRule="evenodd" clipRule="evenodd"
													d="M73.0352 20.4877C73.0352 15.3625 77.0895 10.793 82.3111 10.793C84.584 10.793 86.304 11.6575 87.4098 13.016V11.3487H91.4642V28.824C91.4642 35.6782 87.5326 38.951 82.3725 38.951C77.6424 38.951 75.0009 36.0487 73.7109 33.27L77.4581 31.7262C78.011 32.9612 79.4853 35.1842 82.434 35.1842C85.5055 35.1842 87.5326 33.1465 87.5326 29.812V27.8977C86.3655 29.1945 84.9526 30.2442 82.1882 30.2442C77.7653 30.2442 73.0352 26.2922 73.0352 20.4877ZM87.8394 20.5491C87.8394 16.8441 85.1979 14.6211 82.6793 14.6211C79.9764 14.6211 77.3349 16.7823 77.2734 20.6108C77.2734 24.1306 79.8535 26.4153 82.6179 26.4153C85.2593 26.4153 87.8394 24.3776 87.8394 20.5491Z"
													fill="white" />
												<path fillRule="evenodd" clipRule="evenodd"
													d="M100.617 20.4252C100.617 14.6207 104.733 10.7305 109.647 10.7305C113.456 10.7305 116.343 13.324 117.633 16.288L118.309 17.8935L105.347 23.3275C106.146 24.8095 107.374 26.2915 110.077 26.2915C112.473 26.2915 113.948 24.9947 114.808 23.6362L118.186 25.921C116.712 27.897 114.132 30.1817 110.077 30.1817C105.224 30.1817 100.617 26.5385 100.617 20.4252ZM113.395 16.5967C112.78 15.4235 111.552 14.4972 109.77 14.4972C107.006 14.4972 104.303 17.3995 104.794 20.24L113.395 16.5967Z"
													fill="white" />
												<path d="M94.4746 29.6247H98.7133V0.972656H94.4746V29.6247Z" fill="white" />
											</svg>
										</div>
										<div className="marquee__img">
											<svg xmlns="http://www.w3.org/2000/svg" width="119" height="37" viewBox="0 0 119 37"
												fill="none">
												<path fillRule="evenodd" clipRule="evenodd"
													d="M33.5255 24.8799C33.7025 25.2916 33.8794 25.762 34.0564 26.2325C34.5872 27.5851 34.7052 28.8789 34.5283 30.1728C34.1154 32.878 32.3458 35.2304 29.7505 36.2889C28.8067 36.7006 27.804 36.877 26.7422 36.877C26.4473 36.877 26.0934 36.877 25.7985 36.8182C24.5598 36.7006 23.3211 36.289 22.0824 35.5832C20.6078 34.7599 19.1332 33.5249 17.4816 31.7606C15.83 33.5249 14.4144 34.7599 12.8807 35.5832C11.6421 36.289 10.4034 36.6418 9.16468 36.8182C9.01726 36.8182 8.8551 36.8329 8.69294 36.8476L8.6928 36.8476C8.53059 36.8623 8.36838 36.877 8.22092 36.877C7.15919 36.877 6.15644 36.7006 5.21268 36.2889C2.67632 35.2304 0.788799 32.9368 0.375904 30.1728C0.198948 28.8201 0.375904 27.5263 0.847784 26.2325C1.02474 25.7032 1.20169 25.2916 1.37865 24.8799C1.67358 24.233 1.9685 23.5861 2.20444 22.998L2.26343 22.9392C4.85877 17.4111 7.57208 11.8242 10.4034 6.29609L10.5213 6.06086C10.8163 5.53159 11.1112 4.94351 11.4061 4.35544L11.4061 4.35538C11.4855 4.23092 11.565 4.10429 11.6453 3.97632L11.6453 3.97632L11.6453 3.97631C11.9823 3.4391 12.334 2.8783 12.7628 2.35586C14.0015 0.944427 15.653 0.121094 17.4816 0.121094C19.2511 0.121094 20.9617 0.944427 22.1414 2.41466C22.7312 3.06157 23.1441 3.76728 23.4981 4.41419L23.4981 4.41429C23.793 5.00235 24.0879 5.59041 24.3828 6.11966L24.5008 6.3549C27.3911 11.883 30.1044 17.4699 32.6407 22.998H32.6997C32.9357 23.5861 33.2306 24.233 33.5255 24.8799ZM62.5458 9.35455C62.5458 10.7072 61.484 11.7657 60.1274 11.7657C58.7707 11.7657 57.709 10.7072 57.709 9.35455C57.709 8.00193 58.7707 6.94336 60.1274 6.94336C61.543 7.00217 62.5458 8.06074 62.5458 9.35455ZM52.6962 14.1761V14.7642C52.6962 14.7642 51.5755 13.2939 49.0981 13.2939C45.0871 13.2939 41.9609 16.352 41.9609 20.5863C41.9609 24.7618 45.0871 27.8787 49.0981 27.8787C51.5755 27.8787 52.6962 26.3497 52.6962 26.3497V26.9966C52.6962 27.2906 52.9322 27.5258 53.2271 27.5258H56.2353V13.6468H53.2271C52.8732 13.6468 52.6962 13.882 52.6962 14.1761ZM49.6879 24.5274C51.0446 24.5274 52.1653 23.8217 52.6962 22.9983V18.0583C52.1653 17.2938 50.9856 16.5293 49.6879 16.5293C47.3285 16.5293 45.5 17.9995 45.5 20.5283C45.5 23.0572 47.3285 24.5274 49.6879 24.5274ZM58.3574 13.6475H61.8965V27.4677H58.3574V13.6475ZM107.67 14.7647C107.67 14.7647 108.849 13.2944 111.268 13.2944C115.279 13.2944 118.405 16.3525 118.405 20.528C118.405 24.7035 115.279 27.8204 111.268 27.8204C108.79 27.8204 107.67 26.2913 107.67 26.2913V26.9382C107.67 27.2323 107.434 27.4675 107.139 27.4675H104.131V7.00181H107.67V14.7647ZM110.678 24.4678C109.322 24.4678 108.26 23.7621 107.67 22.9388V17.9988C108.201 17.2343 109.38 16.4697 110.678 16.4697C113.038 16.4697 114.866 17.94 114.866 20.4688C114.866 22.9976 113.038 24.4678 110.678 24.4678ZM102.303 27.5258V19.2925C102.303 16.9401 101.831 15.6463 100.651 14.6466C99.5896 13.7644 98.2919 13.2939 96.7583 13.2939C95.4016 13.2939 94.045 13.7056 92.9832 14.7642V14.1761C92.9832 13.882 92.7473 13.6468 92.4524 13.6468H89.6211V27.5258H93.1602V17.8811C93.868 17.0578 94.9887 16.5285 96.0505 16.5285C97.997 16.5285 98.7638 17.4106 98.7638 19.7042V27.5258H102.303ZM81.0085 13.2944C78.5901 13.2944 77.4104 14.7647 77.4104 14.7647V7.00181H73.8713V27.4675H76.8795C77.1745 27.4675 77.4104 27.2323 77.4104 26.9382V26.2913C77.4104 26.2913 78.5311 27.8204 81.0085 27.8204C85.0195 27.8204 88.1457 24.7035 88.1457 20.528C88.2047 16.3525 85.0785 13.2944 81.0085 13.2944ZM77.4102 22.9388C78 23.7621 79.0617 24.4678 80.4184 24.4678C82.7778 24.4678 84.6063 22.9976 84.6063 20.4688C84.6063 17.94 82.7778 16.4697 80.4184 16.4697C79.1207 16.4697 77.941 17.2343 77.4102 17.9988V22.9388ZM70.8626 13.2939C71.9243 13.2939 72.5142 13.4704 72.5142 13.4704V16.7637C72.5142 16.7637 69.5649 15.7639 67.7364 17.8811V27.5258H64.1973V13.6468H67.2055C67.5004 13.6468 67.7364 13.882 67.7364 14.1761V14.7642C68.3262 13.9997 69.7419 13.2939 70.8626 13.2939ZM17.4226 28.1144C15.4171 25.5856 14.1194 23.2332 13.7065 21.2925C13.5296 20.4692 13.4706 19.7047 13.5886 19.0578C13.6475 18.4697 13.8835 17.9404 14.1784 17.5287C14.8862 16.5289 16.0659 15.882 17.4226 15.882C18.7792 15.882 20.0179 16.4701 20.6668 17.5287C20.9617 17.9992 21.1976 18.4697 21.2566 19.0578C21.3746 19.7047 21.3156 20.4692 21.1386 21.2925C20.7258 23.2332 19.4281 25.5856 17.4226 28.1144ZM28.8067 34.1718C30.6352 33.4661 31.9329 31.8194 32.1689 29.8787C32.2868 28.879 32.1689 27.9968 31.9919 27.0559C31.928 26.8648 31.8469 26.6738 31.7578 26.4641C31.6823 26.2865 31.6012 26.0954 31.52 25.8797C31.3726 25.5856 31.2398 25.2769 31.1071 24.9681C30.9744 24.6594 30.8417 24.3506 30.6942 24.0566V23.9978C28.1579 18.5285 25.4446 12.9416 22.6133 7.47228L22.4953 7.23705L22.4953 7.23702C22.2004 6.64893 21.9054 6.06085 21.6105 5.53157C21.3156 4.94347 20.9617 4.35538 20.5488 3.8849C19.782 3.00276 18.7203 2.53228 17.5995 2.53228C16.4788 2.53228 15.4171 3.00276 14.6503 3.8849C14.2374 4.41419 13.8835 4.94347 13.5886 5.53157C13.2936 6.11966 12.9987 6.70776 12.7038 7.23705L12.5858 7.47228C9.69555 12.9416 6.98223 18.5285 4.44587 23.9978L4.38689 24.0566C4.09196 24.6447 3.79704 25.2916 3.5611 25.8797C3.38414 26.2913 3.20719 26.703 3.08922 27.0559C2.67632 28.1144 2.61734 28.9966 2.73531 29.9375C2.97125 31.8194 4.26892 33.4661 6.09746 34.2306C6.92325 34.5247 7.86701 34.7011 8.86975 34.5835C9.81351 34.4659 10.7573 34.1718 11.701 33.6425C12.9987 32.878 14.3554 31.7606 15.889 30.0551C13.4706 27.0559 11.937 24.2918 11.4061 21.8806C11.1112 20.7632 11.0522 19.7047 11.2292 18.7637C11.4061 17.8228 11.701 16.9994 12.2319 16.2349C13.3526 14.647 15.2991 13.6473 17.4226 13.6473C19.5461 13.6473 21.4926 14.5882 22.6133 16.2349C23.1441 16.9994 23.4391 17.8228 23.616 18.7637C23.734 19.7047 23.675 20.7632 23.4391 21.8806C22.8492 24.2918 21.3746 26.997 18.9562 29.9963C20.4898 31.7018 21.7875 32.8192 23.1441 33.5837C24.1469 34.113 25.0317 34.407 25.9754 34.5247C26.9782 34.6423 27.9219 34.5247 28.8067 34.1718Z"
													fill="white" />
											</svg>
										</div>
										<div className="marquee__img">
											<svg xmlns="http://www.w3.org/2000/svg" width="136" height="39" viewBox="0 0 136 39"
												fill="none">
												<path
													d="M24.7247 3.43111C24.184 1.65952 22.2916 0.70559 20.5343 1.25069C18.777 1.7958 17.8308 3.70366 18.3715 5.47524L27.0227 32.3216C27.631 33.9569 29.3882 34.9108 31.0779 34.4339C32.8352 33.8888 33.9166 32.049 33.3759 30.2775C33.3759 30.2093 24.7247 3.43111 24.7247 3.43111Z"
													fill="white" />
												<path
													d="M11.3419 7.86079C10.8012 6.08921 8.90876 5.13528 7.1515 5.68038C5.39424 6.22548 4.44802 8.13335 4.98871 9.90493L13.6399 36.7513C14.2481 38.3866 16.0054 39.3405 17.6951 38.8636C19.4523 38.3184 20.5337 36.4787 19.993 34.7071C19.993 34.639 11.3419 7.86079 11.3419 7.86079Z"
													fill="white" />
												<path
													d="M35.6731 25.7103C37.4304 25.1652 38.3766 23.2574 37.8359 21.4858C37.2952 19.7142 35.4028 18.7603 33.6455 19.3054L6.94861 27.9589C5.32652 28.5721 4.3803 30.3437 4.85341 32.0472C5.39411 33.8188 7.21896 34.909 8.97622 34.3639C9.1114 34.3639 35.6731 25.7103 35.6731 25.7103Z"
													fill="white" />
												<path
													d="M12.4907 33.2751C14.248 32.7299 16.4783 31.9804 18.8439 31.1628C18.3032 29.3912 17.5597 27.1426 16.7487 24.7578L10.3955 26.8701L12.4907 33.2751Z"
													fill="white" />
												<path
													d="M25.9399 28.8454C28.3731 28.0277 30.6034 27.3463 32.2931 26.7331C31.7524 24.9615 31.009 22.713 30.1979 20.3281L23.8447 22.4404L25.9399 28.8454Z"
													fill="white" />
												<path
													d="M31.2794 12.1518C33.0366 11.6066 33.9828 9.69879 33.4421 7.9272C32.9014 6.15561 31.009 5.20168 29.2517 5.74679L2.62244 14.4684C1.00035 15.0817 0.0541306 16.8533 0.52724 18.5567C1.06794 20.3964 2.89279 21.4866 4.65005 20.8734C4.71764 20.8734 31.2794 12.1518 31.2794 12.1518Z"
													fill="white" />
												<path
													d="M8.16453 19.7165C9.9218 19.1714 12.1522 18.4218 14.5177 17.6042C13.7067 15.1512 13.0308 12.9027 12.4225 11.1992L6.06934 13.3115L8.16453 19.7165Z"
													fill="white" />
												<path
													d="M21.5473 15.3532C23.9805 14.5355 26.2109 13.8541 27.9005 13.2409C27.0895 10.7879 26.4136 8.53939 25.8053 6.83594L19.4521 8.94821L21.5473 15.3532Z"
													fill="white" />
												<path
													d="M62.6395 10.5177C63.7885 11.0628 63.9237 11.4035 62.9774 13.1751C62.0312 15.0148 61.8285 15.0829 60.6119 14.606C59.125 13.9927 57.3001 13.5157 56.0836 13.5157C54.1235 13.5157 52.8394 14.1971 52.8394 15.2873C52.8394 18.8305 64.1264 16.9226 64.1264 24.5541C64.1264 28.3698 60.8822 30.8909 56.016 30.8909C53.4477 30.8909 50.2711 30.0051 48.1083 28.9149C47.0269 28.3698 46.9593 28.0291 47.9055 26.1894C48.7166 24.6222 48.9869 24.4178 50.1359 24.8948C52.0283 25.7124 54.3263 26.3257 55.9484 26.3257C57.7732 26.3257 58.9222 25.5762 58.9222 24.486C58.9222 21.0109 47.4324 22.6462 47.4324 15.2873C47.4324 11.4035 50.6766 8.74609 55.4753 8.74609C57.7732 8.95051 60.6795 9.63189 62.6395 10.5177Z"
													fill="white" />
												<path
													d="M71.7645 1.52218V29.8676C71.7645 30.2764 71.2914 30.7533 70.6832 30.7533H67.7093C67.0335 30.7533 66.6279 30.2764 66.6279 29.8676V1.52218C66.6279 0.0912827 67.0335 0.0231448 69.1962 0.0231448C71.6294 -0.0449932 71.7645 0.159421 71.7645 1.52218Z"
													fill="white" />
												<path fillRule="evenodd" clipRule="evenodd"
													d="M92.7151 29.595V17.3983C92.7151 12.0836 89.133 8.94922 83.4557 8.94922C80.8874 8.94922 78.0488 9.76687 76.0211 11.1296C74.9397 11.811 74.9397 12.1517 76.0211 13.8551C77.1701 15.5586 77.3729 15.6267 78.4543 15.0135C79.806 14.1958 81.4957 13.6507 82.915 13.6507C85.8889 13.6507 87.6461 15.0135 87.6461 17.262V18.6929C86.2268 18.0797 84.4695 17.739 82.5771 17.739C77.5081 17.739 74.1963 20.4645 74.1963 24.5528C74.1963 28.3685 77.1701 30.9578 81.5633 30.9578C83.8612 30.9578 86.1592 30.0038 87.7137 28.2323L87.6461 29.5269C87.5785 30.2083 88.0516 30.6852 88.7275 30.6852H91.6338C92.242 30.6852 92.7151 30.2764 92.7151 29.595ZM82.1713 26.8698C80.3464 26.8698 79.1299 25.9158 79.1299 24.4849C79.1299 22.7133 80.9547 21.3506 83.6582 21.3506C84.9424 21.3506 86.4293 21.555 87.5783 22.032V23.9398C86.4293 25.7796 84.4017 26.8698 82.1713 26.8698Z"
													fill="white" />
												<path
													d="M112.79 10.5836C113.871 11.1968 113.871 11.5375 112.722 13.3772C111.641 15.0807 111.438 15.217 110.221 14.6037C109.343 14.1268 107.856 13.7179 106.707 13.7179C102.99 13.7179 100.556 16.1709 100.556 19.9185C100.556 23.8023 102.99 26.3916 106.707 26.3916C107.991 26.3916 109.613 25.9146 110.627 25.3014C111.708 24.6881 111.911 24.6881 113.06 26.3916C114.074 27.9588 114.074 28.2994 113.128 28.9808C111.505 30.1392 108.87 31.025 106.572 31.025C99.7453 31.025 95.1494 26.596 95.1494 19.9866C95.1494 13.3772 99.7453 9.01641 106.639 9.01641C108.802 8.94827 111.235 9.62965 112.79 10.5836Z"
													fill="white" />
												<path
													d="M135.162 28.0281C136.04 29.1183 135.702 29.5272 133.54 30.2767C131.377 31.0943 131.039 31.0262 130.295 30.0041L124.145 21.7594L121.374 24.4168V29.7997C121.374 30.2085 120.901 30.6855 120.293 30.6855H117.319C116.643 30.6855 116.237 30.2085 116.237 29.7997V1.52247C116.237 0.0915754 116.643 0.0234375 118.806 0.0234375C121.306 0.0234375 121.374 0.227851 121.374 1.52247V17.603L129.755 9.49461C130.701 8.60882 131.174 8.67695 132.864 9.76716C134.689 10.9255 134.824 11.2662 133.945 12.152L127.727 18.2844L135.162 28.0281Z"
													fill="white" />
											</svg>
										</div>
										<div className="marquee__img">
											<svg xmlns="http://www.w3.org/2000/svg" width="120" height="31" viewBox="0 0 120 31"
												fill="none">
												<path fillRule="evenodd" clipRule="evenodd"
													d="M17.8299 2.59615C17.8299 3.8195 16.7629 4.86809 15.518 4.86809C14.2731 4.86809 13.2061 3.8195 13.2061 2.59615C13.2061 1.3728 14.2731 0.324219 15.518 0.324219C16.7629 0.324219 17.8299 1.3728 17.8299 2.59615ZM15.5193 6.73242C14.1559 6.73242 13.0889 7.78101 13.0889 9.12086C13.0889 10.4607 14.1559 11.5093 15.5193 11.5093C16.8828 11.5093 17.9498 10.4607 17.9498 9.12086C17.9498 7.72275 16.8828 6.73242 15.5193 6.73242ZM13.0303 15.5287C13.0303 14.1889 14.1566 13.082 15.52 13.082C16.8835 13.082 18.0691 14.1889 18.0098 15.5287C18.0098 16.8686 16.8835 17.9754 15.52 17.9754C14.1566 17.9754 13.0303 16.8686 13.0303 15.5287ZM15.5193 19.5479C14.1559 19.5479 13.0889 20.5964 13.0889 21.9363C13.0889 23.2762 14.1559 24.3247 15.5193 24.3247C16.8828 24.3247 17.9498 23.2762 17.9498 21.9363C17.9498 20.6547 16.8828 19.5479 15.5193 19.5479ZM13.2061 28.4028C13.2061 27.1794 14.2731 26.1309 15.518 26.1309C16.8221 26.1309 17.8299 27.1794 17.8299 28.4028C17.8299 29.6261 16.7629 30.6747 15.518 30.6747C14.2731 30.6747 13.2061 29.6261 13.2061 28.4028ZM21.9212 6.44141C20.4392 6.44141 19.1943 7.66476 19.1943 9.12112C19.1943 10.5775 20.4392 11.8008 21.9212 11.8008C23.4032 11.8008 24.6481 10.5775 24.6481 9.12112C24.6481 7.66476 23.4032 6.44141 21.9212 6.44141ZM19.0732 15.5872C19.0732 14.0144 20.3774 12.791 21.9187 12.791C23.46 12.791 24.7641 14.0144 24.7641 15.5872C24.7641 17.1601 23.46 18.3835 21.9187 18.3835C20.3181 18.3835 19.0732 17.1019 19.0732 15.5872ZM21.9212 19.2568C20.4392 19.2568 19.1943 20.4802 19.1943 21.9366C19.1943 23.3929 20.4392 24.6163 21.9212 24.6163C23.4032 24.6163 24.6481 23.3929 24.6481 21.9366C24.6481 20.4802 23.4032 19.2568 21.9212 19.2568ZM25.3584 15.5289C25.3584 13.7813 26.8404 12.4414 28.5002 12.4414C30.1601 12.4414 31.5235 13.7813 31.6421 15.5289C31.6421 17.2765 30.2786 18.6164 28.5002 18.6164C26.7218 18.6164 25.3584 17.16 25.3584 15.5289ZM9.0582 7.02344C7.93188 7.02344 6.9834 7.95551 6.9834 9.06235C6.9834 10.1692 7.93188 11.1013 9.0582 11.1013C10.1845 11.1013 11.133 10.1692 11.133 9.06235C11.133 7.95551 10.2438 7.02344 9.0582 7.02344ZM6.8623 15.5285C6.8623 14.3051 7.81078 13.373 9.05566 13.373C10.3005 13.373 11.249 14.3051 11.249 15.5285C11.249 16.7518 10.3005 17.6839 9.05566 17.6839C7.81078 17.6839 6.8623 16.7518 6.8623 15.5285ZM9.0582 19.8398C7.93188 19.8398 6.9834 20.7719 6.9834 21.8788C6.9834 22.9856 7.93188 23.9177 9.0582 23.9177C10.1845 23.9177 11.133 22.9856 11.133 21.8788C11.133 20.7719 10.2438 19.8398 9.0582 19.8398ZM0.698242 15.587C0.698242 14.5384 1.52816 13.7228 2.5952 13.7228C3.66224 13.7228 4.49216 14.5384 4.49216 15.587C4.49216 16.6355 3.66224 17.4511 2.5952 17.4511C1.52816 17.4511 0.698242 16.6355 0.698242 15.587Z"
													fill="white" />
												<path
													d="M55.2343 11.5703C54.9972 11.5703 54.8193 11.8033 54.8193 11.9781V28.1147C54.8193 28.3477 55.0565 28.5224 55.2343 28.5224H57.1905C57.4277 28.5224 57.6055 28.2894 57.6055 28.1147V11.9781C57.6055 11.7451 57.3684 11.5703 57.1905 11.5703H55.2343Z"
													fill="white" />
												<path
													d="M56.3022 4.75391C55.2352 4.75391 54.4053 5.56947 54.4053 6.61806C54.4053 7.66664 55.2352 8.48221 56.3022 8.48221C57.3693 8.48221 58.1992 7.66664 58.1992 6.61806C58.1992 5.56947 57.31 4.75391 56.3022 4.75391Z"
													fill="white" />
												<path
													d="M97.3241 11.5703C97.087 11.5703 96.9092 11.8033 96.9092 11.9781V28.1147C96.9092 28.3477 97.1463 28.5224 97.3241 28.5224H99.2804C99.5175 28.5224 99.6953 28.2894 99.6953 28.1147V11.9781C99.6953 11.7451 99.4582 11.5703 99.2804 11.5703H97.3241Z"
													fill="white" />
												<path
													d="M98.271 4.75391C97.2039 4.75391 96.374 5.56947 96.374 6.61806C96.374 7.66664 97.2039 8.48221 98.271 8.48221C99.338 8.48221 100.168 7.66664 100.168 6.61806C100.168 5.56947 99.338 4.75391 98.271 4.75391Z"
													fill="white" />
												<path fillRule="evenodd" clipRule="evenodd"
													d="M118.289 26.756C118.276 26.8126 118.246 26.881 118.174 26.9494C118.174 27.0659 118.05 27.1824 117.803 27.1242L117.898 27.2334C117.886 27.2382 117.874 27.241 117.865 27.241H117.68L117.68 27.2407H117.433V27.0663V26.542H117.865C117.988 26.542 118.112 26.542 118.174 26.6585C118.246 26.6585 118.276 26.699 118.289 26.756ZM117.433 27.2407H117.371V27.765H117.124V26.3086H117.68H117.927C118.05 26.3086 118.174 26.4251 118.174 26.4251C118.297 26.4251 118.297 26.5416 118.297 26.5416V26.6581C118.297 26.6822 118.297 26.7162 118.289 26.756C118.297 26.7958 118.297 26.8437 118.297 26.8915C118.297 27.008 118.297 27.1245 118.174 27.1245C118.101 27.1245 118.029 27.1645 117.969 27.1976C117.943 27.2122 117.919 27.2255 117.898 27.2334L118.359 27.765H118.112L117.68 27.241H117.433V27.2407Z"
													fill="white" />
												<path fillRule="evenodd" clipRule="evenodd"
													d="M116.351 27.0664C116.351 26.3674 117.003 25.7266 117.714 25.7266C118.485 25.7266 119.077 26.3091 119.077 27.0664C119.077 27.7655 118.425 28.4063 117.714 28.4063C117.003 28.4063 116.351 27.7655 116.351 27.0664ZM116.468 27.0661C116.468 27.7652 117.001 28.2895 117.713 28.2895C118.365 28.2895 118.958 27.7652 118.958 27.0661C118.958 26.3671 118.424 25.8428 117.713 25.8428C117.001 25.8428 116.468 26.3671 116.468 27.0661Z"
													fill="white" />
												<path
													d="M71.5346 14.1918C71.7717 14.1918 71.9496 13.9588 71.9496 13.7841V11.8617C71.9496 11.6286 71.7124 11.4539 71.5346 11.4539H67.3257V5.27888C67.3257 5.04586 67.0886 4.87109 66.9108 4.87109H64.9545C64.7174 4.87109 64.5396 5.10411 64.5396 5.27888V11.4539H62.4648C62.2276 11.4539 62.0498 11.6869 62.0498 11.8617V13.7841C62.0498 14.0171 62.2869 14.1918 62.4648 14.1918H64.5396V23.5126C64.5396 26.3671 66.4958 28.2312 69.3412 28.2312H71.416C71.6532 28.2312 71.831 27.9982 71.831 27.8235V25.901C71.831 25.668 71.5939 25.4933 71.416 25.4933H69.6376C68.2742 25.4933 67.3257 24.5612 67.3257 23.1048V14.1336H71.5346V14.1918Z"
													fill="white" />
												<path
													d="M113.152 14.1918C113.389 14.1918 113.567 13.9588 113.567 13.7841V11.8617C113.567 11.6286 113.33 11.4539 113.152 11.4539H108.943V5.27888C108.943 5.04586 108.706 4.87109 108.528 4.87109H106.572C106.335 4.87109 106.157 5.10411 106.157 5.27888V11.4539H104.082C103.845 11.4539 103.667 11.6869 103.667 11.8617V13.7841C103.667 14.0171 103.904 14.1918 104.082 14.1918H106.157V23.5126C106.157 26.3671 108.113 28.2312 110.958 28.2312H113.033C113.27 28.2312 113.448 27.9982 113.448 27.8235V25.901C113.448 25.668 113.211 25.4933 113.033 25.4933H111.136C109.773 25.4933 108.824 24.5612 108.824 23.1048V14.1336H113.093L113.152 14.1918Z"
													fill="white" />
												<path
													d="M42.7857 14.1907V27.9388C42.7857 28.1718 43.0228 28.3466 43.2006 28.3466H45.1569C45.394 28.3466 45.5718 28.1136 45.5718 27.9388V14.1907H50.1957C50.4328 14.1907 50.6106 13.9577 50.6106 13.7829V11.8605C50.6106 11.6275 50.3735 11.4527 50.1957 11.4527H45.5718V7.84092C45.5718 6.38455 46.6389 5.39422 47.8837 5.39422H50.1957C50.4328 5.39422 50.6106 5.1612 50.6106 4.98644V3.06403C50.6106 2.83101 50.3735 2.65625 50.1957 2.65625H48.0023C45.0976 2.65625 42.7857 5.04469 42.7857 7.78266V11.4527H40.7109C40.4737 11.4527 40.2959 11.6857 40.2959 11.8605V13.7829C40.2959 14.0159 40.533 14.1907 40.7109 14.1907H42.7857Z"
													fill="white" />
												<path fillRule="evenodd" clipRule="evenodd"
													d="M84.6369 10.9277C86.9488 10.9277 89.1422 11.8598 90.6835 13.4909C92.2247 15.1221 93.0547 17.394 93.0547 19.899C93.0547 26.1322 88.7272 28.9284 84.5776 28.9284C80.3687 28.9284 76.1006 26.1905 76.1006 19.899V2.94685C76.1006 2.77208 76.2784 2.53906 76.5155 2.53906H78.4718C78.6496 2.53906 78.8867 2.71383 78.8867 2.94685V13.1997C80.2502 11.8598 82.4435 10.9277 84.6369 10.9277ZM78.8271 19.9575C78.8271 23.045 80.3684 26.3073 84.5773 26.3073C88.7862 26.3073 90.2682 23.045 90.3275 19.9575C90.3275 16.2292 88.0155 13.666 84.5773 13.666C81.1391 13.666 78.8271 16.171 78.8271 19.9575Z"
													fill="white" />
											</svg>
										</div>
										<div className="marquee__img">
											<svg xmlns="http://www.w3.org/2000/svg" width="119" height="37" viewBox="0 0 119 37"
												fill="none">
												<path fillRule="evenodd" clipRule="evenodd"
													d="M33.2946 24.8799C33.4715 25.2916 33.6485 25.762 33.8254 26.2325C34.3563 27.5851 34.4743 28.8789 34.2973 30.1728C33.8844 32.878 32.1149 35.2304 29.5195 36.2889C28.5758 36.7006 27.573 36.877 26.5113 36.877C26.2163 36.877 25.8624 36.877 25.5675 36.8182C24.3288 36.7006 23.0901 36.289 21.8515 35.5832C20.3768 34.7599 18.9022 33.5249 17.2506 31.7606C15.599 33.5249 14.1834 34.7599 12.6498 35.5832C11.4111 36.289 10.1724 36.6418 8.93372 36.8182C8.7863 36.8182 8.62414 36.8329 8.46198 36.8476L8.46184 36.8476C8.29963 36.8623 8.13742 36.877 7.98996 36.877C6.92823 36.877 5.92548 36.7006 4.98172 36.2889C2.44536 35.2304 0.557842 32.9368 0.144947 30.1728C-0.0320086 28.8201 0.144947 27.5263 0.616827 26.2325C0.793782 25.7032 0.970738 25.2916 1.14769 24.8799C1.44262 24.233 1.73754 23.5861 1.97348 22.998L2.03247 22.9392C4.62781 17.4111 7.34113 11.8242 10.1724 6.29609L10.2904 6.06086C10.5853 5.53159 10.8802 4.94351 11.1751 4.35544L11.1752 4.35538C11.2546 4.23092 11.334 4.10429 11.4143 3.97632L11.4143 3.97632L11.4143 3.97631C11.7513 3.4391 12.1031 2.8783 12.5318 2.35586C13.7705 0.944427 15.4221 0.121094 17.2506 0.121094C19.0202 0.121094 20.7307 0.944427 21.9104 2.41466C22.5003 3.06157 22.9132 3.76728 23.2671 4.41419L23.2671 4.41429C23.5621 5.00235 23.857 5.59041 24.1519 6.11966L24.2698 6.3549C27.1601 11.883 29.8734 17.4699 32.4098 22.998H32.4688C32.7047 23.5861 32.9996 24.233 33.2946 24.8799ZM62.3168 9.35455C62.3168 10.7072 61.255 11.7657 59.8984 11.7657C58.5417 11.7657 57.48 10.7072 57.48 9.35455C57.48 8.00193 58.5417 6.94336 59.8984 6.94336C61.314 7.00217 62.3168 8.06074 62.3168 9.35455ZM52.4653 14.1761V14.7642C52.4653 14.7642 51.3445 13.2939 48.8672 13.2939C44.8562 13.2939 41.73 16.352 41.73 20.5863C41.73 24.7618 44.8562 27.8787 48.8672 27.8787C51.3445 27.8787 52.4653 26.3497 52.4653 26.3497V26.9966C52.4653 27.2906 52.7012 27.5258 52.9961 27.5258H56.0044V13.6468H52.9961C52.6422 13.6468 52.4653 13.882 52.4653 14.1761ZM49.457 24.5274C50.8136 24.5274 51.9344 23.8217 52.4652 22.9983V18.0583C51.9344 17.2938 50.7547 16.5293 49.457 16.5293C47.0976 16.5293 45.269 17.9995 45.269 20.5283C45.269 23.0572 47.0976 24.5274 49.457 24.5274ZM58.1284 13.6475H61.6675V27.4677H58.1284V13.6475ZM107.437 14.7648C107.437 14.7648 108.617 13.2946 111.035 13.2946C115.046 13.2946 118.172 16.3527 118.172 20.5281C118.172 24.7036 115.046 27.8205 111.035 27.8205C108.558 27.8205 107.437 26.2915 107.437 26.2915V26.9384C107.437 27.2324 107.201 27.4677 106.906 27.4677H103.898V7.00195H107.437V14.7648ZM110.445 24.4678C109.089 24.4678 108.027 23.7621 107.437 22.9388V17.9988C107.968 17.2343 109.148 16.4697 110.445 16.4697C112.805 16.4697 114.633 17.94 114.633 20.4688C114.633 22.9976 112.805 24.4678 110.445 24.4678ZM102.072 27.5258V19.2925C102.072 16.9401 101.6 15.6463 100.42 14.6466C99.3586 13.7644 98.0609 13.2939 96.5273 13.2939C95.1707 13.2939 93.814 13.7056 92.7523 14.7642V14.1761C92.7523 13.882 92.5163 13.6468 92.2214 13.6468H89.3901V27.5258H92.9292V17.8811C93.6371 17.0578 94.7578 16.5285 95.8195 16.5285C97.766 16.5285 98.5328 17.4106 98.5328 19.7042V27.5258H102.072ZM80.7775 13.2944C78.3591 13.2944 77.1794 14.7647 77.1794 14.7647V7.00181H73.6403V27.4675H76.6486C76.9435 27.4675 77.1794 27.2323 77.1794 26.9382V26.2913C77.1794 26.2913 78.3002 27.8204 80.7775 27.8204C84.7885 27.8204 87.9147 24.7035 87.9147 20.528C87.9737 16.3525 84.8475 13.2944 80.7775 13.2944ZM77.1792 22.9388C77.7691 23.7621 78.8308 24.4678 80.1874 24.4678C82.5468 24.4678 84.3754 22.9976 84.3754 20.4688C84.3754 17.94 82.5468 16.4697 80.1874 16.4697C78.8898 16.4697 77.7101 17.2343 77.1792 17.9988V22.9388ZM70.6336 13.2939C71.6953 13.2939 72.2852 13.4704 72.2852 13.4704V16.7637C72.2852 16.7637 69.3359 15.7639 67.5074 17.8811V27.5258H63.9683V13.6468H66.9765C67.2714 13.6468 67.5074 13.882 67.5074 14.1761V14.7642C68.0972 13.9997 69.5129 13.2939 70.6336 13.2939ZM17.1916 28.1144C15.1861 25.5856 13.8885 23.2332 13.4756 21.2925C13.2986 20.4692 13.2396 19.7047 13.3576 19.0578C13.4166 18.4697 13.6525 17.9404 13.9475 17.5287C14.6553 16.5289 15.835 15.882 17.1916 15.882C18.5483 15.882 19.787 16.4701 20.4358 17.5287C20.7307 17.9992 20.9667 18.4697 21.0257 19.0578C21.1436 19.7047 21.0846 20.4692 20.9077 21.2925C20.4948 23.2332 19.1971 25.5856 17.1916 28.1144ZM28.5738 34.1717C30.4023 33.466 31.7 31.8194 31.936 29.8787C32.0539 28.8789 31.936 27.9967 31.759 27.0558C31.6951 26.8648 31.614 26.6737 31.5249 26.464C31.4494 26.2864 31.3683 26.0954 31.2871 25.8796C31.1397 25.5856 31.0069 25.2768 30.8742 24.9681C30.7415 24.6593 30.6088 24.3506 30.4613 24.0565V23.9977C27.925 18.5284 25.2117 12.9415 22.3804 7.47223L22.2624 7.23699C21.9675 6.64889 21.6726 6.0608 21.3776 5.53151C21.0827 4.94342 20.7288 4.35532 20.3159 3.88485C19.5491 3.0027 18.4874 2.53223 17.3666 2.53223C16.2459 2.53223 15.1842 3.0027 14.4174 3.88485C14.0045 4.41413 13.6506 4.94342 13.3557 5.53151L13.3556 5.5316C13.0607 6.11966 12.7658 6.70773 12.4709 7.23699L12.3529 7.47223C9.46264 12.9415 6.74933 18.5284 4.21297 23.9977L4.15399 24.0565C3.85906 24.6446 3.56413 25.2915 3.32819 25.8796C3.15124 26.2913 2.97428 26.7029 2.85631 27.0558C2.44342 28.1144 2.38443 28.9965 2.5024 29.9375C2.73834 31.8194 4.03602 33.466 5.86455 34.2306C6.69034 34.5246 7.6341 34.701 8.63685 34.5834C9.58061 34.4658 10.5244 34.1717 11.4681 33.6425C12.7658 32.8779 14.1225 31.7606 15.6561 30.0551C13.2377 27.0558 11.7041 24.2917 11.1732 21.8806C10.8783 20.7632 10.8193 19.7046 10.9963 18.7637C11.1732 17.8227 11.4681 16.9994 11.999 16.2348C13.1197 14.647 15.0662 13.6472 17.1897 13.6472C19.3131 13.6472 21.2597 14.5882 22.3804 16.2348C22.9112 16.9994 23.2062 17.8227 23.3831 18.7637C23.5011 19.7046 23.4421 20.7632 23.2062 21.8806C22.6163 24.2917 21.1417 26.997 18.7233 29.9963C20.2569 31.7017 21.5546 32.8191 22.9112 33.5837C23.914 34.1129 24.7988 34.407 25.7425 34.5246C26.7453 34.6422 27.689 34.5246 28.5738 34.1717Z"
													fill="white" />
											</svg>
										</div>
										<div className="marquee__img">
											<svg xmlns="http://www.w3.org/2000/svg" width="136" height="39" viewBox="0 0 136 39"
												fill="none">
												<path
													d="M24.7247 3.43111C24.184 1.65952 22.2916 0.70559 20.5343 1.25069C18.777 1.7958 17.8308 3.70366 18.3715 5.47524L27.0227 32.3216C27.631 33.9569 29.3882 34.9108 31.0779 34.4339C32.8352 33.8888 33.9166 32.049 33.3759 30.2775C33.3759 30.2093 24.7247 3.43111 24.7247 3.43111Z"
													fill="white" />
												<path
													d="M11.3419 7.86079C10.8012 6.08921 8.90876 5.13528 7.1515 5.68038C5.39424 6.22548 4.44802 8.13335 4.98871 9.90493L13.6399 36.7513C14.2481 38.3866 16.0054 39.3405 17.6951 38.8636C19.4523 38.3184 20.5337 36.4787 19.993 34.7071C19.993 34.639 11.3419 7.86079 11.3419 7.86079Z"
													fill="white" />
												<path
													d="M35.6731 25.7103C37.4304 25.1652 38.3766 23.2574 37.8359 21.4858C37.2952 19.7142 35.4028 18.7603 33.6455 19.3054L6.94861 27.9589C5.32652 28.5721 4.3803 30.3437 4.85341 32.0472C5.39411 33.8188 7.21896 34.909 8.97622 34.3639C9.1114 34.3639 35.6731 25.7103 35.6731 25.7103Z"
													fill="white" />
												<path
													d="M12.4907 33.2751C14.248 32.7299 16.4783 31.9804 18.8439 31.1628C18.3032 29.3912 17.5597 27.1426 16.7487 24.7578L10.3955 26.8701L12.4907 33.2751Z"
													fill="white" />
												<path
													d="M25.9399 28.8454C28.3731 28.0277 30.6034 27.3463 32.2931 26.7331C31.7524 24.9615 31.009 22.713 30.1979 20.3281L23.8447 22.4404L25.9399 28.8454Z"
													fill="white" />
												<path
													d="M31.2794 12.1518C33.0366 11.6066 33.9828 9.69879 33.4421 7.9272C32.9014 6.15561 31.009 5.20168 29.2517 5.74679L2.62244 14.4684C1.00035 15.0817 0.0541306 16.8533 0.52724 18.5567C1.06794 20.3964 2.89279 21.4866 4.65005 20.8734C4.71764 20.8734 31.2794 12.1518 31.2794 12.1518Z"
													fill="white" />
												<path
													d="M8.16453 19.7165C9.9218 19.1714 12.1522 18.4218 14.5177 17.6042C13.7067 15.1512 13.0308 12.9027 12.4225 11.1992L6.06934 13.3115L8.16453 19.7165Z"
													fill="white" />
												<path
													d="M21.5473 15.3532C23.9805 14.5355 26.2109 13.8541 27.9005 13.2409C27.0895 10.7879 26.4136 8.53939 25.8053 6.83594L19.4521 8.94821L21.5473 15.3532Z"
													fill="white" />
												<path
													d="M62.6395 10.5177C63.7885 11.0628 63.9237 11.4035 62.9774 13.1751C62.0312 15.0148 61.8285 15.0829 60.6119 14.606C59.125 13.9927 57.3001 13.5157 56.0836 13.5157C54.1235 13.5157 52.8394 14.1971 52.8394 15.2873C52.8394 18.8305 64.1264 16.9226 64.1264 24.5541C64.1264 28.3698 60.8822 30.8909 56.016 30.8909C53.4477 30.8909 50.2711 30.0051 48.1083 28.9149C47.0269 28.3698 46.9593 28.0291 47.9055 26.1894C48.7166 24.6222 48.9869 24.4178 50.1359 24.8948C52.0283 25.7124 54.3263 26.3257 55.9484 26.3257C57.7732 26.3257 58.9222 25.5762 58.9222 24.486C58.9222 21.0109 47.4324 22.6462 47.4324 15.2873C47.4324 11.4035 50.6766 8.74609 55.4753 8.74609C57.7732 8.95051 60.6795 9.63189 62.6395 10.5177Z"
													fill="white" />
												<path
													d="M71.7645 1.52218V29.8676C71.7645 30.2764 71.2914 30.7533 70.6832 30.7533H67.7093C67.0335 30.7533 66.6279 30.2764 66.6279 29.8676V1.52218C66.6279 0.0912827 67.0335 0.0231448 69.1962 0.0231448C71.6294 -0.0449932 71.7645 0.159421 71.7645 1.52218Z"
													fill="white" />
												<path fillRule="evenodd" clipRule="evenodd"
													d="M92.7151 29.595V17.3983C92.7151 12.0836 89.133 8.94922 83.4557 8.94922C80.8874 8.94922 78.0488 9.76687 76.0211 11.1296C74.9397 11.811 74.9397 12.1517 76.0211 13.8551C77.1701 15.5586 77.3729 15.6267 78.4543 15.0135C79.806 14.1958 81.4957 13.6507 82.915 13.6507C85.8889 13.6507 87.6461 15.0135 87.6461 17.262V18.6929C86.2268 18.0797 84.4695 17.739 82.5771 17.739C77.5081 17.739 74.1963 20.4645 74.1963 24.5528C74.1963 28.3685 77.1701 30.9578 81.5633 30.9578C83.8612 30.9578 86.1592 30.0038 87.7137 28.2323L87.6461 29.5269C87.5785 30.2083 88.0516 30.6852 88.7275 30.6852H91.6338C92.242 30.6852 92.7151 30.2764 92.7151 29.595ZM82.1713 26.8698C80.3464 26.8698 79.1299 25.9158 79.1299 24.4849C79.1299 22.7133 80.9547 21.3506 83.6582 21.3506C84.9424 21.3506 86.4293 21.555 87.5783 22.032V23.9398C86.4293 25.7796 84.4017 26.8698 82.1713 26.8698Z"
													fill="white" />
												<path
													d="M112.79 10.5836C113.871 11.1968 113.871 11.5375 112.722 13.3772C111.641 15.0807 111.438 15.217 110.221 14.6037C109.343 14.1268 107.856 13.7179 106.707 13.7179C102.99 13.7179 100.556 16.1709 100.556 19.9185C100.556 23.8023 102.99 26.3916 106.707 26.3916C107.991 26.3916 109.613 25.9146 110.627 25.3014C111.708 24.6881 111.911 24.6881 113.06 26.3916C114.074 27.9588 114.074 28.2994 113.128 28.9808C111.505 30.1392 108.87 31.025 106.572 31.025C99.7453 31.025 95.1494 26.596 95.1494 19.9866C95.1494 13.3772 99.7453 9.01641 106.639 9.01641C108.802 8.94827 111.235 9.62965 112.79 10.5836Z"
													fill="white" />
												<path
													d="M135.162 28.0281C136.04 29.1183 135.702 29.5272 133.54 30.2767C131.377 31.0943 131.039 31.0262 130.295 30.0041L124.145 21.7594L121.374 24.4168V29.7997C121.374 30.2085 120.901 30.6855 120.293 30.6855H117.319C116.643 30.6855 116.237 30.2085 116.237 29.7997V1.52247C116.237 0.0915754 116.643 0.0234375 118.806 0.0234375C121.306 0.0234375 121.374 0.227851 121.374 1.52247V17.603L129.755 9.49461C130.701 8.60882 131.174 8.67695 132.864 9.76716C134.689 10.9255 134.824 11.2662 133.945 12.152L127.727 18.2844L135.162 28.0281Z"
													fill="white" />
											</svg>
										</div>
										<div className="marquee__img">
											<svg xmlns="http://www.w3.org/2000/svg" width="119" height="37" viewBox="0 0 119 37"
												fill="none">
												<path fillRule="evenodd" clipRule="evenodd"
													d="M33.5255 24.8799C33.7025 25.2916 33.8794 25.762 34.0564 26.2325C34.5872 27.5851 34.7052 28.8789 34.5283 30.1728C34.1154 32.878 32.3458 35.2304 29.7505 36.2889C28.8067 36.7006 27.804 36.877 26.7422 36.877C26.4473 36.877 26.0934 36.877 25.7985 36.8182C24.5598 36.7006 23.3211 36.289 22.0824 35.5832C20.6078 34.7599 19.1332 33.5249 17.4816 31.7606C15.83 33.5249 14.4144 34.7599 12.8807 35.5832C11.6421 36.289 10.4034 36.6418 9.16468 36.8182C9.01726 36.8182 8.8551 36.8329 8.69294 36.8476L8.6928 36.8476C8.53059 36.8623 8.36838 36.877 8.22092 36.877C7.15919 36.877 6.15644 36.7006 5.21268 36.2889C2.67632 35.2304 0.788799 32.9368 0.375904 30.1728C0.198948 28.8201 0.375904 27.5263 0.847784 26.2325C1.02474 25.7032 1.20169 25.2916 1.37865 24.8799C1.67358 24.233 1.9685 23.5861 2.20444 22.998L2.26343 22.9392C4.85877 17.4111 7.57208 11.8242 10.4034 6.29609L10.5213 6.06086C10.8163 5.53159 11.1112 4.94351 11.4061 4.35544L11.4061 4.35538C11.4855 4.23092 11.565 4.10429 11.6453 3.97632L11.6453 3.97632L11.6453 3.97631C11.9823 3.4391 12.334 2.8783 12.7628 2.35586C14.0015 0.944427 15.653 0.121094 17.4816 0.121094C19.2511 0.121094 20.9617 0.944427 22.1414 2.41466C22.7312 3.06157 23.1441 3.76728 23.4981 4.41419L23.4981 4.41429C23.793 5.00235 24.0879 5.59041 24.3828 6.11966L24.5008 6.3549C27.3911 11.883 30.1044 17.4699 32.6407 22.998H32.6997C32.9357 23.5861 33.2306 24.233 33.5255 24.8799ZM62.5458 9.35455C62.5458 10.7072 61.484 11.7657 60.1274 11.7657C58.7707 11.7657 57.709 10.7072 57.709 9.35455C57.709 8.00193 58.7707 6.94336 60.1274 6.94336C61.543 7.00217 62.5458 8.06074 62.5458 9.35455ZM52.6962 14.1761V14.7642C52.6962 14.7642 51.5755 13.2939 49.0981 13.2939C45.0871 13.2939 41.9609 16.352 41.9609 20.5863C41.9609 24.7618 45.0871 27.8787 49.0981 27.8787C51.5755 27.8787 52.6962 26.3497 52.6962 26.3497V26.9966C52.6962 27.2906 52.9322 27.5258 53.2271 27.5258H56.2353V13.6468H53.2271C52.8732 13.6468 52.6962 13.882 52.6962 14.1761ZM49.6879 24.5274C51.0446 24.5274 52.1653 23.8217 52.6962 22.9983V18.0583C52.1653 17.2938 50.9856 16.5293 49.6879 16.5293C47.3285 16.5293 45.5 17.9995 45.5 20.5283C45.5 23.0572 47.3285 24.5274 49.6879 24.5274ZM58.3574 13.6475H61.8965V27.4677H58.3574V13.6475ZM107.67 14.7647C107.67 14.7647 108.849 13.2944 111.268 13.2944C115.279 13.2944 118.405 16.3525 118.405 20.528C118.405 24.7035 115.279 27.8204 111.268 27.8204C108.79 27.8204 107.67 26.2913 107.67 26.2913V26.9382C107.67 27.2323 107.434 27.4675 107.139 27.4675H104.131V7.00181H107.67V14.7647ZM110.678 24.4678C109.322 24.4678 108.26 23.7621 107.67 22.9388V17.9988C108.201 17.2343 109.38 16.4697 110.678 16.4697C113.038 16.4697 114.866 17.94 114.866 20.4688C114.866 22.9976 113.038 24.4678 110.678 24.4678ZM102.303 27.5258V19.2925C102.303 16.9401 101.831 15.6463 100.651 14.6466C99.5896 13.7644 98.2919 13.2939 96.7583 13.2939C95.4016 13.2939 94.045 13.7056 92.9832 14.7642V14.1761C92.9832 13.882 92.7473 13.6468 92.4524 13.6468H89.6211V27.5258H93.1602V17.8811C93.868 17.0578 94.9887 16.5285 96.0505 16.5285C97.997 16.5285 98.7638 17.4106 98.7638 19.7042V27.5258H102.303ZM81.0085 13.2944C78.5901 13.2944 77.4104 14.7647 77.4104 14.7647V7.00181H73.8713V27.4675H76.8795C77.1745 27.4675 77.4104 27.2323 77.4104 26.9382V26.2913C77.4104 26.2913 78.5311 27.8204 81.0085 27.8204C85.0195 27.8204 88.1457 24.7035 88.1457 20.528C88.2047 16.3525 85.0785 13.2944 81.0085 13.2944ZM77.4102 22.9388C78 23.7621 79.0617 24.4678 80.4184 24.4678C82.7778 24.4678 84.6063 22.9976 84.6063 20.4688C84.6063 17.94 82.7778 16.4697 80.4184 16.4697C79.1207 16.4697 77.941 17.2343 77.4102 17.9988V22.9388ZM70.8626 13.2939C71.9243 13.2939 72.5142 13.4704 72.5142 13.4704V16.7637C72.5142 16.7637 69.5649 15.7639 67.7364 17.8811V27.5258H64.1973V13.6468H67.2055C67.5004 13.6468 67.7364 13.882 67.7364 14.1761V14.7642C68.3262 13.9997 69.7419 13.2939 70.8626 13.2939ZM17.4226 28.1144C15.4171 25.5856 14.1194 23.2332 13.7065 21.2925C13.5296 20.4692 13.4706 19.7047 13.5886 19.0578C13.6475 18.4697 13.8835 17.9404 14.1784 17.5287C14.8862 16.5289 16.0659 15.882 17.4226 15.882C18.7792 15.882 20.0179 16.4701 20.6668 17.5287C20.9617 17.9992 21.1976 18.4697 21.2566 19.0578C21.3746 19.7047 21.3156 20.4692 21.1386 21.2925C20.7258 23.2332 19.4281 25.5856 17.4226 28.1144ZM28.8067 34.1718C30.6352 33.4661 31.9329 31.8194 32.1689 29.8787C32.2868 28.879 32.1689 27.9968 31.9919 27.0559C31.928 26.8648 31.8469 26.6738 31.7578 26.4641C31.6823 26.2865 31.6012 26.0954 31.52 25.8797C31.3726 25.5856 31.2398 25.2769 31.1071 24.9681C30.9744 24.6594 30.8417 24.3506 30.6942 24.0566V23.9978C28.1579 18.5285 25.4446 12.9416 22.6133 7.47228L22.4953 7.23705L22.4953 7.23702C22.2004 6.64893 21.9054 6.06085 21.6105 5.53157C21.3156 4.94347 20.9617 4.35538 20.5488 3.8849C19.782 3.00276 18.7203 2.53228 17.5995 2.53228C16.4788 2.53228 15.4171 3.00276 14.6503 3.8849C14.2374 4.41419 13.8835 4.94347 13.5886 5.53157C13.2936 6.11966 12.9987 6.70776 12.7038 7.23705L12.5858 7.47228C9.69555 12.9416 6.98223 18.5285 4.44587 23.9978L4.38689 24.0566C4.09196 24.6447 3.79704 25.2916 3.5611 25.8797C3.38414 26.2913 3.20719 26.703 3.08922 27.0559C2.67632 28.1144 2.61734 28.9966 2.73531 29.9375C2.97125 31.8194 4.26892 33.4661 6.09746 34.2306C6.92325 34.5247 7.86701 34.7011 8.86975 34.5835C9.81351 34.4659 10.7573 34.1718 11.701 33.6425C12.9987 32.878 14.3554 31.7606 15.889 30.0551C13.4706 27.0559 11.937 24.2918 11.4061 21.8806C11.1112 20.7632 11.0522 19.7047 11.2292 18.7637C11.4061 17.8228 11.701 16.9994 12.2319 16.2349C13.3526 14.647 15.2991 13.6473 17.4226 13.6473C19.5461 13.6473 21.4926 14.5882 22.6133 16.2349C23.1441 16.9994 23.4391 17.8228 23.616 18.7637C23.734 19.7047 23.675 20.7632 23.4391 21.8806C22.8492 24.2918 21.3746 26.997 18.9562 29.9963C20.4898 31.7018 21.7875 32.8192 23.1441 33.5837C24.1469 34.113 25.0317 34.407 25.9754 34.5247C26.9782 34.6423 27.9219 34.5247 28.8067 34.1718Z"
													fill="white" />
											</svg>
										</div>
										<div className="marquee__img">
											<svg xmlns="http://www.w3.org/2000/svg" width="136" height="39" viewBox="0 0 136 39"
												fill="none">
												<path
													d="M24.7247 3.43111C24.184 1.65952 22.2916 0.70559 20.5343 1.25069C18.777 1.7958 17.8308 3.70366 18.3715 5.47524L27.0227 32.3216C27.631 33.9569 29.3882 34.9108 31.0779 34.4339C32.8352 33.8888 33.9166 32.049 33.3759 30.2775C33.3759 30.2093 24.7247 3.43111 24.7247 3.43111Z"
													fill="white" />
												<path
													d="M11.3419 7.86079C10.8012 6.08921 8.90876 5.13528 7.1515 5.68038C5.39424 6.22548 4.44802 8.13335 4.98871 9.90493L13.6399 36.7513C14.2481 38.3866 16.0054 39.3405 17.6951 38.8636C19.4523 38.3184 20.5337 36.4787 19.993 34.7071C19.993 34.639 11.3419 7.86079 11.3419 7.86079Z"
													fill="white" />
												<path
													d="M35.6731 25.7103C37.4304 25.1652 38.3766 23.2574 37.8359 21.4858C37.2952 19.7142 35.4028 18.7603 33.6455 19.3054L6.94861 27.9589C5.32652 28.5721 4.3803 30.3437 4.85341 32.0472C5.39411 33.8188 7.21896 34.909 8.97622 34.3639C9.1114 34.3639 35.6731 25.7103 35.6731 25.7103Z"
													fill="white" />
												<path
													d="M12.4907 33.2751C14.248 32.7299 16.4783 31.9804 18.8439 31.1628C18.3032 29.3912 17.5597 27.1426 16.7487 24.7578L10.3955 26.8701L12.4907 33.2751Z"
													fill="white" />
												<path
													d="M25.9399 28.8454C28.3731 28.0277 30.6034 27.3463 32.2931 26.7331C31.7524 24.9615 31.009 22.713 30.1979 20.3281L23.8447 22.4404L25.9399 28.8454Z"
													fill="white" />
												<path
													d="M31.2794 12.1518C33.0366 11.6066 33.9828 9.69879 33.4421 7.9272C32.9014 6.15561 31.009 5.20168 29.2517 5.74679L2.62244 14.4684C1.00035 15.0817 0.0541306 16.8533 0.52724 18.5567C1.06794 20.3964 2.89279 21.4866 4.65005 20.8734C4.71764 20.8734 31.2794 12.1518 31.2794 12.1518Z"
													fill="white" />
												<path
													d="M8.16453 19.7165C9.9218 19.1714 12.1522 18.4218 14.5177 17.6042C13.7067 15.1512 13.0308 12.9027 12.4225 11.1992L6.06934 13.3115L8.16453 19.7165Z"
													fill="white" />
												<path
													d="M21.5473 15.3532C23.9805 14.5355 26.2109 13.8541 27.9005 13.2409C27.0895 10.7879 26.4136 8.53939 25.8053 6.83594L19.4521 8.94821L21.5473 15.3532Z"
													fill="white" />
												<path
													d="M62.6395 10.5177C63.7885 11.0628 63.9237 11.4035 62.9774 13.1751C62.0312 15.0148 61.8285 15.0829 60.6119 14.606C59.125 13.9927 57.3001 13.5157 56.0836 13.5157C54.1235 13.5157 52.8394 14.1971 52.8394 15.2873C52.8394 18.8305 64.1264 16.9226 64.1264 24.5541C64.1264 28.3698 60.8822 30.8909 56.016 30.8909C53.4477 30.8909 50.2711 30.0051 48.1083 28.9149C47.0269 28.3698 46.9593 28.0291 47.9055 26.1894C48.7166 24.6222 48.9869 24.4178 50.1359 24.8948C52.0283 25.7124 54.3263 26.3257 55.9484 26.3257C57.7732 26.3257 58.9222 25.5762 58.9222 24.486C58.9222 21.0109 47.4324 22.6462 47.4324 15.2873C47.4324 11.4035 50.6766 8.74609 55.4753 8.74609C57.7732 8.95051 60.6795 9.63189 62.6395 10.5177Z"
													fill="white" />
												<path
													d="M71.7645 1.52218V29.8676C71.7645 30.2764 71.2914 30.7533 70.6832 30.7533H67.7093C67.0335 30.7533 66.6279 30.2764 66.6279 29.8676V1.52218C66.6279 0.0912827 67.0335 0.0231448 69.1962 0.0231448C71.6294 -0.0449932 71.7645 0.159421 71.7645 1.52218Z"
													fill="white" />
												<path fillRule="evenodd" clipRule="evenodd"
													d="M92.7151 29.595V17.3983C92.7151 12.0836 89.133 8.94922 83.4557 8.94922C80.8874 8.94922 78.0488 9.76687 76.0211 11.1296C74.9397 11.811 74.9397 12.1517 76.0211 13.8551C77.1701 15.5586 77.3729 15.6267 78.4543 15.0135C79.806 14.1958 81.4957 13.6507 82.915 13.6507C85.8889 13.6507 87.6461 15.0135 87.6461 17.262V18.6929C86.2268 18.0797 84.4695 17.739 82.5771 17.739C77.5081 17.739 74.1963 20.4645 74.1963 24.5528C74.1963 28.3685 77.1701 30.9578 81.5633 30.9578C83.8612 30.9578 86.1592 30.0038 87.7137 28.2323L87.6461 29.5269C87.5785 30.2083 88.0516 30.6852 88.7275 30.6852H91.6338C92.242 30.6852 92.7151 30.2764 92.7151 29.595ZM82.1713 26.8698C80.3464 26.8698 79.1299 25.9158 79.1299 24.4849C79.1299 22.7133 80.9547 21.3506 83.6582 21.3506C84.9424 21.3506 86.4293 21.555 87.5783 22.032V23.9398C86.4293 25.7796 84.4017 26.8698 82.1713 26.8698Z"
													fill="white" />
												<path
													d="M112.79 10.5836C113.871 11.1968 113.871 11.5375 112.722 13.3772C111.641 15.0807 111.438 15.217 110.221 14.6037C109.343 14.1268 107.856 13.7179 106.707 13.7179C102.99 13.7179 100.556 16.1709 100.556 19.9185C100.556 23.8023 102.99 26.3916 106.707 26.3916C107.991 26.3916 109.613 25.9146 110.627 25.3014C111.708 24.6881 111.911 24.6881 113.06 26.3916C114.074 27.9588 114.074 28.2994 113.128 28.9808C111.505 30.1392 108.87 31.025 106.572 31.025C99.7453 31.025 95.1494 26.596 95.1494 19.9866C95.1494 13.3772 99.7453 9.01641 106.639 9.01641C108.802 8.94827 111.235 9.62965 112.79 10.5836Z"
													fill="white" />
												<path
													d="M135.162 28.0281C136.04 29.1183 135.702 29.5272 133.54 30.2767C131.377 31.0943 131.039 31.0262 130.295 30.0041L124.145 21.7594L121.374 24.4168V29.7997C121.374 30.2085 120.901 30.6855 120.293 30.6855H117.319C116.643 30.6855 116.237 30.2085 116.237 29.7997V1.52247C116.237 0.0915754 116.643 0.0234375 118.806 0.0234375C121.306 0.0234375 121.374 0.227851 121.374 1.52247V17.603L129.755 9.49461C130.701 8.60882 131.174 8.67695 132.864 9.76716C134.689 10.9255 134.824 11.2662 133.945 12.152L127.727 18.2844L135.162 28.0281Z"
													fill="white" />
											</svg>
										</div>
										<div className="marquee__img">
											<svg xmlns="http://www.w3.org/2000/svg" width="120" height="31" viewBox="0 0 120 31"
												fill="none">
												<path fillRule="evenodd" clipRule="evenodd"
													d="M17.8299 2.59615C17.8299 3.8195 16.7629 4.86809 15.518 4.86809C14.2731 4.86809 13.2061 3.8195 13.2061 2.59615C13.2061 1.3728 14.2731 0.324219 15.518 0.324219C16.7629 0.324219 17.8299 1.3728 17.8299 2.59615ZM15.5193 6.73242C14.1559 6.73242 13.0889 7.78101 13.0889 9.12086C13.0889 10.4607 14.1559 11.5093 15.5193 11.5093C16.8828 11.5093 17.9498 10.4607 17.9498 9.12086C17.9498 7.72275 16.8828 6.73242 15.5193 6.73242ZM13.0303 15.5287C13.0303 14.1889 14.1566 13.082 15.52 13.082C16.8835 13.082 18.0691 14.1889 18.0098 15.5287C18.0098 16.8686 16.8835 17.9754 15.52 17.9754C14.1566 17.9754 13.0303 16.8686 13.0303 15.5287ZM15.5193 19.5479C14.1559 19.5479 13.0889 20.5964 13.0889 21.9363C13.0889 23.2762 14.1559 24.3247 15.5193 24.3247C16.8828 24.3247 17.9498 23.2762 17.9498 21.9363C17.9498 20.6547 16.8828 19.5479 15.5193 19.5479ZM13.2061 28.4028C13.2061 27.1794 14.2731 26.1309 15.518 26.1309C16.8221 26.1309 17.8299 27.1794 17.8299 28.4028C17.8299 29.6261 16.7629 30.6747 15.518 30.6747C14.2731 30.6747 13.2061 29.6261 13.2061 28.4028ZM21.9212 6.44141C20.4392 6.44141 19.1943 7.66476 19.1943 9.12112C19.1943 10.5775 20.4392 11.8008 21.9212 11.8008C23.4032 11.8008 24.6481 10.5775 24.6481 9.12112C24.6481 7.66476 23.4032 6.44141 21.9212 6.44141ZM19.0732 15.5872C19.0732 14.0144 20.3774 12.791 21.9187 12.791C23.46 12.791 24.7641 14.0144 24.7641 15.5872C24.7641 17.1601 23.46 18.3835 21.9187 18.3835C20.3181 18.3835 19.0732 17.1019 19.0732 15.5872ZM21.9212 19.2568C20.4392 19.2568 19.1943 20.4802 19.1943 21.9366C19.1943 23.3929 20.4392 24.6163 21.9212 24.6163C23.4032 24.6163 24.6481 23.3929 24.6481 21.9366C24.6481 20.4802 23.4032 19.2568 21.9212 19.2568ZM25.3584 15.5289C25.3584 13.7813 26.8404 12.4414 28.5002 12.4414C30.1601 12.4414 31.5235 13.7813 31.6421 15.5289C31.6421 17.2765 30.2786 18.6164 28.5002 18.6164C26.7218 18.6164 25.3584 17.16 25.3584 15.5289ZM9.0582 7.02344C7.93188 7.02344 6.9834 7.95551 6.9834 9.06235C6.9834 10.1692 7.93188 11.1013 9.0582 11.1013C10.1845 11.1013 11.133 10.1692 11.133 9.06235C11.133 7.95551 10.2438 7.02344 9.0582 7.02344ZM6.8623 15.5285C6.8623 14.3051 7.81078 13.373 9.05566 13.373C10.3005 13.373 11.249 14.3051 11.249 15.5285C11.249 16.7518 10.3005 17.6839 9.05566 17.6839C7.81078 17.6839 6.8623 16.7518 6.8623 15.5285ZM9.0582 19.8398C7.93188 19.8398 6.9834 20.7719 6.9834 21.8788C6.9834 22.9856 7.93188 23.9177 9.0582 23.9177C10.1845 23.9177 11.133 22.9856 11.133 21.8788C11.133 20.7719 10.2438 19.8398 9.0582 19.8398ZM0.698242 15.587C0.698242 14.5384 1.52816 13.7228 2.5952 13.7228C3.66224 13.7228 4.49216 14.5384 4.49216 15.587C4.49216 16.6355 3.66224 17.4511 2.5952 17.4511C1.52816 17.4511 0.698242 16.6355 0.698242 15.587Z"
													fill="white" />
												<path
													d="M55.2343 11.5703C54.9972 11.5703 54.8193 11.8033 54.8193 11.9781V28.1147C54.8193 28.3477 55.0565 28.5224 55.2343 28.5224H57.1905C57.4277 28.5224 57.6055 28.2894 57.6055 28.1147V11.9781C57.6055 11.7451 57.3684 11.5703 57.1905 11.5703H55.2343Z"
													fill="white" />
												<path
													d="M56.3022 4.75391C55.2352 4.75391 54.4053 5.56947 54.4053 6.61806C54.4053 7.66664 55.2352 8.48221 56.3022 8.48221C57.3693 8.48221 58.1992 7.66664 58.1992 6.61806C58.1992 5.56947 57.31 4.75391 56.3022 4.75391Z"
													fill="white" />
												<path
													d="M97.3241 11.5703C97.087 11.5703 96.9092 11.8033 96.9092 11.9781V28.1147C96.9092 28.3477 97.1463 28.5224 97.3241 28.5224H99.2804C99.5175 28.5224 99.6953 28.2894 99.6953 28.1147V11.9781C99.6953 11.7451 99.4582 11.5703 99.2804 11.5703H97.3241Z"
													fill="white" />
												<path
													d="M98.271 4.75391C97.2039 4.75391 96.374 5.56947 96.374 6.61806C96.374 7.66664 97.2039 8.48221 98.271 8.48221C99.338 8.48221 100.168 7.66664 100.168 6.61806C100.168 5.56947 99.338 4.75391 98.271 4.75391Z"
													fill="white" />
												<path fillRule="evenodd" clipRule="evenodd"
													d="M118.289 26.756C118.276 26.8126 118.246 26.881 118.174 26.9494C118.174 27.0659 118.05 27.1824 117.803 27.1242L117.898 27.2334C117.886 27.2382 117.874 27.241 117.865 27.241H117.68L117.68 27.2407H117.433V27.0663V26.542H117.865C117.988 26.542 118.112 26.542 118.174 26.6585C118.246 26.6585 118.276 26.699 118.289 26.756ZM117.433 27.2407H117.371V27.765H117.124V26.3086H117.68H117.927C118.05 26.3086 118.174 26.4251 118.174 26.4251C118.297 26.4251 118.297 26.5416 118.297 26.5416V26.6581C118.297 26.6822 118.297 26.7162 118.289 26.756C118.297 26.7958 118.297 26.8437 118.297 26.8915C118.297 27.008 118.297 27.1245 118.174 27.1245C118.101 27.1245 118.029 27.1645 117.969 27.1976C117.943 27.2122 117.919 27.2255 117.898 27.2334L118.359 27.765H118.112L117.68 27.241H117.433V27.2407Z"
													fill="white" />
												<path fillRule="evenodd" clipRule="evenodd"
													d="M116.351 27.0664C116.351 26.3674 117.003 25.7266 117.714 25.7266C118.485 25.7266 119.077 26.3091 119.077 27.0664C119.077 27.7655 118.425 28.4063 117.714 28.4063C117.003 28.4063 116.351 27.7655 116.351 27.0664ZM116.468 27.0661C116.468 27.7652 117.001 28.2895 117.713 28.2895C118.365 28.2895 118.958 27.7652 118.958 27.0661C118.958 26.3671 118.424 25.8428 117.713 25.8428C117.001 25.8428 116.468 26.3671 116.468 27.0661Z"
													fill="white" />
												<path
													d="M71.5346 14.1918C71.7717 14.1918 71.9496 13.9588 71.9496 13.7841V11.8617C71.9496 11.6286 71.7124 11.4539 71.5346 11.4539H67.3257V5.27888C67.3257 5.04586 67.0886 4.87109 66.9108 4.87109H64.9545C64.7174 4.87109 64.5396 5.10411 64.5396 5.27888V11.4539H62.4648C62.2276 11.4539 62.0498 11.6869 62.0498 11.8617V13.7841C62.0498 14.0171 62.2869 14.1918 62.4648 14.1918H64.5396V23.5126C64.5396 26.3671 66.4958 28.2312 69.3412 28.2312H71.416C71.6532 28.2312 71.831 27.9982 71.831 27.8235V25.901C71.831 25.668 71.5939 25.4933 71.416 25.4933H69.6376C68.2742 25.4933 67.3257 24.5612 67.3257 23.1048V14.1336H71.5346V14.1918Z"
													fill="white" />
												<path
													d="M113.152 14.1918C113.389 14.1918 113.567 13.9588 113.567 13.7841V11.8617C113.567 11.6286 113.33 11.4539 113.152 11.4539H108.943V5.27888C108.943 5.04586 108.706 4.87109 108.528 4.87109H106.572C106.335 4.87109 106.157 5.10411 106.157 5.27888V11.4539H104.082C103.845 11.4539 103.667 11.6869 103.667 11.8617V13.7841C103.667 14.0171 103.904 14.1918 104.082 14.1918H106.157V23.5126C106.157 26.3671 108.113 28.2312 110.958 28.2312H113.033C113.27 28.2312 113.448 27.9982 113.448 27.8235V25.901C113.448 25.668 113.211 25.4933 113.033 25.4933H111.136C109.773 25.4933 108.824 24.5612 108.824 23.1048V14.1336H113.093L113.152 14.1918Z"
													fill="white" />
												<path
													d="M42.7857 14.1907V27.9388C42.7857 28.1718 43.0228 28.3466 43.2006 28.3466H45.1569C45.394 28.3466 45.5718 28.1136 45.5718 27.9388V14.1907H50.1957C50.4328 14.1907 50.6106 13.9577 50.6106 13.7829V11.8605C50.6106 11.6275 50.3735 11.4527 50.1957 11.4527H45.5718V7.84092C45.5718 6.38455 46.6389 5.39422 47.8837 5.39422H50.1957C50.4328 5.39422 50.6106 5.1612 50.6106 4.98644V3.06403C50.6106 2.83101 50.3735 2.65625 50.1957 2.65625H48.0023C45.0976 2.65625 42.7857 5.04469 42.7857 7.78266V11.4527H40.7109C40.4737 11.4527 40.2959 11.6857 40.2959 11.8605V13.7829C40.2959 14.0159 40.533 14.1907 40.7109 14.1907H42.7857Z"
													fill="white" />
												<path fillRule="evenodd" clipRule="evenodd"
													d="M84.6369 10.9277C86.9488 10.9277 89.1422 11.8598 90.6835 13.4909C92.2247 15.1221 93.0547 17.394 93.0547 19.899C93.0547 26.1322 88.7272 28.9284 84.5776 28.9284C80.3687 28.9284 76.1006 26.1905 76.1006 19.899V2.94685C76.1006 2.77208 76.2784 2.53906 76.5155 2.53906H78.4718C78.6496 2.53906 78.8867 2.71383 78.8867 2.94685V13.1997C80.2502 11.8598 82.4435 10.9277 84.6369 10.9277ZM78.8271 19.9575C78.8271 23.045 80.3684 26.3073 84.5773 26.3073C88.7862 26.3073 90.2682 23.045 90.3275 19.9575C90.3275 16.2292 88.0155 13.666 84.5773 13.666C81.1391 13.666 78.8271 16.171 78.8271 19.9575Z"
													fill="white" />
											</svg>
										</div>
										<div className="marquee__img">
											<svg xmlns="http://www.w3.org/2000/svg" width="119" height="37" viewBox="0 0 119 37"
												fill="none">
												<path fillRule="evenodd" clipRule="evenodd"
													d="M33.2946 24.8799C33.4715 25.2916 33.6485 25.762 33.8254 26.2325C34.3563 27.5851 34.4743 28.8789 34.2973 30.1728C33.8844 32.878 32.1149 35.2304 29.5195 36.2889C28.5758 36.7006 27.573 36.877 26.5113 36.877C26.2163 36.877 25.8624 36.877 25.5675 36.8182C24.3288 36.7006 23.0901 36.289 21.8515 35.5832C20.3768 34.7599 18.9022 33.5249 17.2506 31.7606C15.599 33.5249 14.1834 34.7599 12.6498 35.5832C11.4111 36.289 10.1724 36.6418 8.93372 36.8182C8.7863 36.8182 8.62414 36.8329 8.46198 36.8476L8.46184 36.8476C8.29963 36.8623 8.13742 36.877 7.98996 36.877C6.92823 36.877 5.92548 36.7006 4.98172 36.2889C2.44536 35.2304 0.557842 32.9368 0.144947 30.1728C-0.0320086 28.8201 0.144947 27.5263 0.616827 26.2325C0.793782 25.7032 0.970738 25.2916 1.14769 24.8799C1.44262 24.233 1.73754 23.5861 1.97348 22.998L2.03247 22.9392C4.62781 17.4111 7.34113 11.8242 10.1724 6.29609L10.2904 6.06086C10.5853 5.53159 10.8802 4.94351 11.1751 4.35544L11.1752 4.35538C11.2546 4.23092 11.334 4.10429 11.4143 3.97632L11.4143 3.97632L11.4143 3.97631C11.7513 3.4391 12.1031 2.8783 12.5318 2.35586C13.7705 0.944427 15.4221 0.121094 17.2506 0.121094C19.0202 0.121094 20.7307 0.944427 21.9104 2.41466C22.5003 3.06157 22.9132 3.76728 23.2671 4.41419L23.2671 4.41429C23.5621 5.00235 23.857 5.59041 24.1519 6.11966L24.2698 6.3549C27.1601 11.883 29.8734 17.4699 32.4098 22.998H32.4688C32.7047 23.5861 32.9996 24.233 33.2946 24.8799ZM62.3168 9.35455C62.3168 10.7072 61.255 11.7657 59.8984 11.7657C58.5417 11.7657 57.48 10.7072 57.48 9.35455C57.48 8.00193 58.5417 6.94336 59.8984 6.94336C61.314 7.00217 62.3168 8.06074 62.3168 9.35455ZM52.4653 14.1761V14.7642C52.4653 14.7642 51.3445 13.2939 48.8672 13.2939C44.8562 13.2939 41.73 16.352 41.73 20.5863C41.73 24.7618 44.8562 27.8787 48.8672 27.8787C51.3445 27.8787 52.4653 26.3497 52.4653 26.3497V26.9966C52.4653 27.2906 52.7012 27.5258 52.9961 27.5258H56.0044V13.6468H52.9961C52.6422 13.6468 52.4653 13.882 52.4653 14.1761ZM49.457 24.5274C50.8136 24.5274 51.9344 23.8217 52.4652 22.9983V18.0583C51.9344 17.2938 50.7547 16.5293 49.457 16.5293C47.0976 16.5293 45.269 17.9995 45.269 20.5283C45.269 23.0572 47.0976 24.5274 49.457 24.5274ZM58.1284 13.6475H61.6675V27.4677H58.1284V13.6475ZM107.437 14.7648C107.437 14.7648 108.617 13.2946 111.035 13.2946C115.046 13.2946 118.172 16.3527 118.172 20.5281C118.172 24.7036 115.046 27.8205 111.035 27.8205C108.558 27.8205 107.437 26.2915 107.437 26.2915V26.9384C107.437 27.2324 107.201 27.4677 106.906 27.4677H103.898V7.00195H107.437V14.7648ZM110.445 24.4678C109.089 24.4678 108.027 23.7621 107.437 22.9388V17.9988C107.968 17.2343 109.148 16.4697 110.445 16.4697C112.805 16.4697 114.633 17.94 114.633 20.4688C114.633 22.9976 112.805 24.4678 110.445 24.4678ZM102.072 27.5258V19.2925C102.072 16.9401 101.6 15.6463 100.42 14.6466C99.3586 13.7644 98.0609 13.2939 96.5273 13.2939C95.1707 13.2939 93.814 13.7056 92.7523 14.7642V14.1761C92.7523 13.882 92.5163 13.6468 92.2214 13.6468H89.3901V27.5258H92.9292V17.8811C93.6371 17.0578 94.7578 16.5285 95.8195 16.5285C97.766 16.5285 98.5328 17.4106 98.5328 19.7042V27.5258H102.072ZM80.7775 13.2944C78.3591 13.2944 77.1794 14.7647 77.1794 14.7647V7.00181H73.6403V27.4675H76.6486C76.9435 27.4675 77.1794 27.2323 77.1794 26.9382V26.2913C77.1794 26.2913 78.3002 27.8204 80.7775 27.8204C84.7885 27.8204 87.9147 24.7035 87.9147 20.528C87.9737 16.3525 84.8475 13.2944 80.7775 13.2944ZM77.1792 22.9388C77.7691 23.7621 78.8308 24.4678 80.1874 24.4678C82.5468 24.4678 84.3754 22.9976 84.3754 20.4688C84.3754 17.94 82.5468 16.4697 80.1874 16.4697C78.8898 16.4697 77.7101 17.2343 77.1792 17.9988V22.9388ZM70.6336 13.2939C71.6953 13.2939 72.2852 13.4704 72.2852 13.4704V16.7637C72.2852 16.7637 69.3359 15.7639 67.5074 17.8811V27.5258H63.9683V13.6468H66.9765C67.2714 13.6468 67.5074 13.882 67.5074 14.1761V14.7642C68.0972 13.9997 69.5129 13.2939 70.6336 13.2939ZM17.1916 28.1144C15.1861 25.5856 13.8885 23.2332 13.4756 21.2925C13.2986 20.4692 13.2396 19.7047 13.3576 19.0578C13.4166 18.4697 13.6525 17.9404 13.9475 17.5287C14.6553 16.5289 15.835 15.882 17.1916 15.882C18.5483 15.882 19.787 16.4701 20.4358 17.5287C20.7307 17.9992 20.9667 18.4697 21.0257 19.0578C21.1436 19.7047 21.0846 20.4692 20.9077 21.2925C20.4948 23.2332 19.1971 25.5856 17.1916 28.1144ZM28.5738 34.1717C30.4023 33.466 31.7 31.8194 31.936 29.8787C32.0539 28.8789 31.936 27.9967 31.759 27.0558C31.6951 26.8648 31.614 26.6737 31.5249 26.464C31.4494 26.2864 31.3683 26.0954 31.2871 25.8796C31.1397 25.5856 31.0069 25.2768 30.8742 24.9681C30.7415 24.6593 30.6088 24.3506 30.4613 24.0565V23.9977C27.925 18.5284 25.2117 12.9415 22.3804 7.47223L22.2624 7.23699C21.9675 6.64889 21.6726 6.0608 21.3776 5.53151C21.0827 4.94342 20.7288 4.35532 20.3159 3.88485C19.5491 3.0027 18.4874 2.53223 17.3666 2.53223C16.2459 2.53223 15.1842 3.0027 14.4174 3.88485C14.0045 4.41413 13.6506 4.94342 13.3557 5.53151L13.3556 5.5316C13.0607 6.11966 12.7658 6.70773 12.4709 7.23699L12.3529 7.47223C9.46264 12.9415 6.74933 18.5284 4.21297 23.9977L4.15399 24.0565C3.85906 24.6446 3.56413 25.2915 3.32819 25.8796C3.15124 26.2913 2.97428 26.7029 2.85631 27.0558C2.44342 28.1144 2.38443 28.9965 2.5024 29.9375C2.73834 31.8194 4.03602 33.466 5.86455 34.2306C6.69034 34.5246 7.6341 34.701 8.63685 34.5834C9.58061 34.4658 10.5244 34.1717 11.4681 33.6425C12.7658 32.8779 14.1225 31.7606 15.6561 30.0551C13.2377 27.0558 11.7041 24.2917 11.1732 21.8806C10.8783 20.7632 10.8193 19.7046 10.9963 18.7637C11.1732 17.8227 11.4681 16.9994 11.999 16.2348C13.1197 14.647 15.0662 13.6472 17.1897 13.6472C19.3131 13.6472 21.2597 14.5882 22.3804 16.2348C22.9112 16.9994 23.2062 17.8227 23.3831 18.7637C23.5011 19.7046 23.4421 20.7632 23.2062 21.8806C22.6163 24.2917 21.1417 26.997 18.7233 29.9963C20.2569 31.7017 21.5546 32.8191 22.9112 33.5837C23.914 34.1129 24.7988 34.407 25.7425 34.5246C26.7453 34.6422 27.689 34.5246 28.5738 34.1717Z"
													fill="white" />
											</svg>
										</div>
										<div className="marquee__img">
											<svg xmlns="http://www.w3.org/2000/svg" width="136" height="39" viewBox="0 0 136 39"
												fill="none">
												<path
													d="M24.7247 3.43111C24.184 1.65952 22.2916 0.70559 20.5343 1.25069C18.777 1.7958 17.8308 3.70366 18.3715 5.47524L27.0227 32.3216C27.631 33.9569 29.3882 34.9108 31.0779 34.4339C32.8352 33.8888 33.9166 32.049 33.3759 30.2775C33.3759 30.2093 24.7247 3.43111 24.7247 3.43111Z"
													fill="white" />
												<path
													d="M11.3419 7.86079C10.8012 6.08921 8.90876 5.13528 7.1515 5.68038C5.39424 6.22548 4.44802 8.13335 4.98871 9.90493L13.6399 36.7513C14.2481 38.3866 16.0054 39.3405 17.6951 38.8636C19.4523 38.3184 20.5337 36.4787 19.993 34.7071C19.993 34.639 11.3419 7.86079 11.3419 7.86079Z"
													fill="white" />
												<path
													d="M35.6731 25.7103C37.4304 25.1652 38.3766 23.2574 37.8359 21.4858C37.2952 19.7142 35.4028 18.7603 33.6455 19.3054L6.94861 27.9589C5.32652 28.5721 4.3803 30.3437 4.85341 32.0472C5.39411 33.8188 7.21896 34.909 8.97622 34.3639C9.1114 34.3639 35.6731 25.7103 35.6731 25.7103Z"
													fill="white" />
												<path
													d="M12.4907 33.2751C14.248 32.7299 16.4783 31.9804 18.8439 31.1628C18.3032 29.3912 17.5597 27.1426 16.7487 24.7578L10.3955 26.8701L12.4907 33.2751Z"
													fill="white" />
												<path
													d="M25.9399 28.8454C28.3731 28.0277 30.6034 27.3463 32.2931 26.7331C31.7524 24.9615 31.009 22.713 30.1979 20.3281L23.8447 22.4404L25.9399 28.8454Z"
													fill="white" />
												<path
													d="M31.2794 12.1518C33.0366 11.6066 33.9828 9.69879 33.4421 7.9272C32.9014 6.15561 31.009 5.20168 29.2517 5.74679L2.62244 14.4684C1.00035 15.0817 0.0541306 16.8533 0.52724 18.5567C1.06794 20.3964 2.89279 21.4866 4.65005 20.8734C4.71764 20.8734 31.2794 12.1518 31.2794 12.1518Z"
													fill="white" />
												<path
													d="M8.16453 19.7165C9.9218 19.1714 12.1522 18.4218 14.5177 17.6042C13.7067 15.1512 13.0308 12.9027 12.4225 11.1992L6.06934 13.3115L8.16453 19.7165Z"
													fill="white" />
												<path
													d="M21.5473 15.3532C23.9805 14.5355 26.2109 13.8541 27.9005 13.2409C27.0895 10.7879 26.4136 8.53939 25.8053 6.83594L19.4521 8.94821L21.5473 15.3532Z"
													fill="white" />
												<path
													d="M62.6395 10.5177C63.7885 11.0628 63.9237 11.4035 62.9774 13.1751C62.0312 15.0148 61.8285 15.0829 60.6119 14.606C59.125 13.9927 57.3001 13.5157 56.0836 13.5157C54.1235 13.5157 52.8394 14.1971 52.8394 15.2873C52.8394 18.8305 64.1264 16.9226 64.1264 24.5541C64.1264 28.3698 60.8822 30.8909 56.016 30.8909C53.4477 30.8909 50.2711 30.0051 48.1083 28.9149C47.0269 28.3698 46.9593 28.0291 47.9055 26.1894C48.7166 24.6222 48.9869 24.4178 50.1359 24.8948C52.0283 25.7124 54.3263 26.3257 55.9484 26.3257C57.7732 26.3257 58.9222 25.5762 58.9222 24.486C58.9222 21.0109 47.4324 22.6462 47.4324 15.2873C47.4324 11.4035 50.6766 8.74609 55.4753 8.74609C57.7732 8.95051 60.6795 9.63189 62.6395 10.5177Z"
													fill="white" />
												<path
													d="M71.7645 1.52218V29.8676C71.7645 30.2764 71.2914 30.7533 70.6832 30.7533H67.7093C67.0335 30.7533 66.6279 30.2764 66.6279 29.8676V1.52218C66.6279 0.0912827 67.0335 0.0231448 69.1962 0.0231448C71.6294 -0.0449932 71.7645 0.159421 71.7645 1.52218Z"
													fill="white" />
												<path fillRule="evenodd" clipRule="evenodd"
													d="M92.7151 29.595V17.3983C92.7151 12.0836 89.133 8.94922 83.4557 8.94922C80.8874 8.94922 78.0488 9.76687 76.0211 11.1296C74.9397 11.811 74.9397 12.1517 76.0211 13.8551C77.1701 15.5586 77.3729 15.6267 78.4543 15.0135C79.806 14.1958 81.4957 13.6507 82.915 13.6507C85.8889 13.6507 87.6461 15.0135 87.6461 17.262V18.6929C86.2268 18.0797 84.4695 17.739 82.5771 17.739C77.5081 17.739 74.1963 20.4645 74.1963 24.5528C74.1963 28.3685 77.1701 30.9578 81.5633 30.9578C83.8612 30.9578 86.1592 30.0038 87.7137 28.2323L87.6461 29.5269C87.5785 30.2083 88.0516 30.6852 88.7275 30.6852H91.6338C92.242 30.6852 92.7151 30.2764 92.7151 29.595ZM82.1713 26.8698C80.3464 26.8698 79.1299 25.9158 79.1299 24.4849C79.1299 22.7133 80.9547 21.3506 83.6582 21.3506C84.9424 21.3506 86.4293 21.555 87.5783 22.032V23.9398C86.4293 25.7796 84.4017 26.8698 82.1713 26.8698Z"
													fill="white" />
												<path
													d="M112.79 10.5836C113.871 11.1968 113.871 11.5375 112.722 13.3772C111.641 15.0807 111.438 15.217 110.221 14.6037C109.343 14.1268 107.856 13.7179 106.707 13.7179C102.99 13.7179 100.556 16.1709 100.556 19.9185C100.556 23.8023 102.99 26.3916 106.707 26.3916C107.991 26.3916 109.613 25.9146 110.627 25.3014C111.708 24.6881 111.911 24.6881 113.06 26.3916C114.074 27.9588 114.074 28.2994 113.128 28.9808C111.505 30.1392 108.87 31.025 106.572 31.025C99.7453 31.025 95.1494 26.596 95.1494 19.9866C95.1494 13.3772 99.7453 9.01641 106.639 9.01641C108.802 8.94827 111.235 9.62965 112.79 10.5836Z"
													fill="white" />
												<path
													d="M135.162 28.0281C136.04 29.1183 135.702 29.5272 133.54 30.2767C131.377 31.0943 131.039 31.0262 130.295 30.0041L124.145 21.7594L121.374 24.4168V29.7997C121.374 30.2085 120.901 30.6855 120.293 30.6855H117.319C116.643 30.6855 116.237 30.2085 116.237 29.7997V1.52247C116.237 0.0915754 116.643 0.0234375 118.806 0.0234375C121.306 0.0234375 121.374 0.227851 121.374 1.52247V17.603L129.755 9.49461C130.701 8.60882 131.174 8.67695 132.864 9.76716C134.689 10.9255 134.824 11.2662 133.945 12.152L127.727 18.2844L135.162 28.0281Z"
													fill="white" />
											</svg>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>


					<section className="testimonial--area section section-light">
						<div className="container">
							<div className="row title--row">
								<div className="col-lg-3 mt_20">
									<div className="single--title">
										<h3 className="common--sub--heading mt_10" data-aos="fade-up" data-aos-duration="1000">
											TESTIMONIALS</h3>
									</div>
								</div>
								<div className="col-lg-9 mt_20">
									<div className="testimonial--right--title">
										<h3 className="common--heading" data-aos="fade-up" data-aos-duration="1000">We value each
											and every client’s <span className="primary--dark">feedback</span> which helps us to<br />
											<span className="primary--dark">improve.</span>
										</h3>
									</div>
								</div>
								<div className="col-md-12">

									<div className="owl-carousel testi--slider" data-aos="fade-In" data-aos-duration="2000">


										<div className="item">
											<div className="testi--box">

												<div className="client--img--area">
													<img src="https://softvence.agency/wp-content/uploads/2024/02/image_2023_12_12T10_54_43_560Z.png" loading="lazy" alt="Steve Zee" />
													<a href="#" className="play--review">
														<svg viewBox="0 0 18 18" version="1.1" fill="#000">
															<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
															<g id="SVGRepo_tracerCarrier" strokeLinecap="round"
																strokeLinejoin="round"></g>
															<g id="SVGRepo_iconCarrier">
																<title>multimedia / 9 - multimedia, play icon</title>
																<g id="Free-Icons" stroke="none" strokeWidth="1" fill="#000"
																	fillRule="evenodd" strokeLinecap="round"
																	strokeLinejoin="round">
																	<g transform="translate(-749.000000, -379.000000)"
																		id="Group" stroke="#000" strokeWidth="2">
																		<g transform="translate(745.000000, 376.000000)"
																			id="Shape">
																			<path
																				d="M5,4.67805648 C5,4.56284567 5.03231968,4.44953549 5.09390785,4.34882312 C5.29405709,4.02152811 5.74836552,3.90360587 6.10863414,4.08543644 L20.6160344,11.4074417 C20.7378493,11.4689227 20.8382812,11.5601626 20.9059562,11.6708284 C21.1061054,11.9981234 20.976303,12.4108512 20.6160344,12.5926818 L6.10863414,19.9146871 C5.99777542,19.9706384 5.87304972,20 5.7462319,20 C5.3340994,20 5,19.6964791 5,19.322067 L5,4.67805648 Z">
																			</path>
																		</g>
																	</g>
																</g>
															</g>
														</svg>
													</a>
												</div>

												<div className="client--content">
													<p>Softvence Agency and their team were so professional. From the first discussion all the way through to the end they were exceptional. Their communication and patience are first class and this was so important to me whilst building a website. The quality of their work is superb! They have the skills to be able to do pretty much anything you ask of them and so this makes this very valuable. I will be using them for all future websites and any other website design and development help. Thanks team Softvence :)</p>
													<div className="company--name">
														<h4>Steve Zee. <span>Founder at iMU &amp; RegS Company</span></h4>
														<img src="https://softvence.agency/wp-content/uploads/2024/02/Gold-iMU-1.png" loading="lazy" alt="iMU Logo" />
													</div>
												</div>
											</div>
										</div>
										<div className="item">
											<div className="testi--box">

												<div className="client--img--area">
													<img src="https://softvence.agency/wp-content/uploads/2024/02/client3-scaled.jpg" loading="lazy" alt="Colin Hartlieb" />
													<a href="#" className="play--review">
														<svg viewBox="0 0 18 18" version="1.1"
															xmlns="http://www.w3.org/2000/svg"
															fill="#000">
															<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
															<g id="SVGRepo_tracerCarrier" strokeLinecap="round"
																strokeLinejoin="round"></g>
															<g id="SVGRepo_iconCarrier">
																<title>multimedia / 9 - multimedia, play icon</title>
																<g id="Free-Icons" stroke="none" strokeWidth="1" fill="#000"
																	fillRule="evenodd" strokeLinecap="round"
																	strokeLinejoin="round">
																	<g transform="translate(-749.000000, -379.000000)"
																		id="Group" stroke="#000" strokeWidth="2">
																		<g transform="translate(745.000000, 376.000000)"
																			id="Shape">
																			<path
																				d="M5,4.67805648 C5,4.56284567 5.03231968,4.44953549 5.09390785,4.34882312 C5.29405709,4.02152811 5.74836552,3.90360587 6.10863414,4.08543644 L20.6160344,11.4074417 C20.7378493,11.4689227 20.8382812,11.5601626 20.9059562,11.6708284 C21.1061054,11.9981234 20.976303,12.4108512 20.6160344,12.5926818 L6.10863414,19.9146871 C5.99777542,19.9706384 5.87304972,20 5.7462319,20 C5.3340994,20 5,19.6964791 5,19.322067 L5,4.67805648 Z">
																			</path>
																		</g>
																	</g>
																</g>
															</g>
														</svg>
													</a>
												</div>

												<div className="client--content">
													<p>Softvence Agency was amazing to work with. They went above and beyond with our project. They delivered the Webflow site just as our wireframe showed and he was able to work out any bugs or fixes we requested in the span of 3-4 weeks without hesitation. That tells you they actually care about customer satisfaction instead of just doing the bare minimum. I appreciate all your hard work on this, team Softvence! 5 out of 5 stars! I highly recommend Softvence Agency for any website design and development projects!</p>
													<div className="company--name">
														<h4>colin hartlieb. <span>Founder at colinwolfpack</span></h4>
														<img src="https://softvence.agency/wp-content/uploads/2024/02/softy_black.png" loading="lazy" alt="Colinwolfpack Logo" />
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>





				</main>
				<ContactMarquee />
				<ContactPopup />
				<Footer />
			</div>
		</div>
	);
}
