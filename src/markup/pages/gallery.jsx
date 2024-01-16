import React, {Component, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";

// Elements
import GallerySection from "../elements/gallery/content2";

// Images
import bnrImg from "../../images/banner/bnr1.jpg";
import axios from 'axios';
import { Helmet } from 'react-helmet';

function Gallery2() {

	const [data, setData] = useState();
	useEffect(() => {
		axios.get(`https://swiss-backend.vercel.app/api/meta`).then((response) => {
		const meta = response.data.data.filter((i) => i.name === "services");
		setData(meta[0]);
		console.log(meta[0]);
		});
	}, []);
	
		return (
			<>
				<Helmet>
					<title>{data?.title}</title>
					<meta name="description" content={data?.content} />
				</Helmet>
				<Header />
				
				<div className="page-content bg-white">
					
					<div className="page-banner ovbl-dark" style={{backgroundImage: "url("+bnrImg+")"}}>
						<div className="container">
							<div className="page-banner-entry text-center">
								<h1><span>Our Gallery</span></h1>
								<nav aria-label="breadcrumb" className="breadcrumb-row">
									<ul className="breadcrumb">
										<li className="breadcrumb-item"><Link to="/"><i className="las la-home"></i>Home</Link></li>
										<li className="breadcrumb-item active" aria-current="page">Our Gallery</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
					
					<div className="section-area section-sp2 bg-white">
						<div className="container">
							<GallerySection />
						</div>
					</div>
				
				</div>
				
				<Footer />
				
			</>
		);
}

export default Gallery2;