import React  from 'react';

// Layout
//import Header from "../layout/header";
import Footer from "../layout/footer";

// Elements
import Header from "../layout/header";
import ServicesSection from "../elements/services-1";
import ChooseUsSection from "../elements/choose-us";
import ScheduleServiceSection from "../elements/schedule-service";
import TeamOneSection from "../elements/team-1";
import TestimonialSection from "../elements/testimonial";
import LatestBlogSection from "../elements/latest-blog-slider";
import { useTranslation } from 'react-i18next';
import HeroBanner from '../elements/widget/HeroBanner';
import AboutUsFourSection from "../elements/about-us-4";
import ServicesNew from '../elements/widget/Services-new';
import OurBrandsLayout from '../elements/widget/OurBrandsLayout';
import InstagramBox from '../elements/widget/InstagramBox';
import { Helmet } from "react-helmet";
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function Index() {

	const { t } = useTranslation();



	const handleRefresh = (url) => {
		window.location.href = url;
	};

	const [data, setData] = useState()

	useEffect(() => {
    axios.get(`https://swiss-backend.vercel.app/api/meta`).then((response) => {
	  const meta = response.data.data.filter(i => i.name === "index")
	  setData(meta[0])
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
				
				<HeroBanner />

				{/* <h1>{t('welcome')}</h1>


					<button onClick={()=>handleRefresh("/en")}>English</button>
					<button onClick={()=>handleRefresh("/ar")}>Arabic</button> */}
				<AboutUsFourSection/>
				
				
				
				<ServicesNew />
				<OurBrandsLayout/>
				
				
				
				<ScheduleServiceSection />
				<TestimonialSection />
				<ChooseUsSection />
				
				
				
				{/* <LatestBlogSection /> */}
				
				<InstagramBox/>
				<Footer />
				
			</>
		);
}

export default Index;