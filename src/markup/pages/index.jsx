import React  from 'react';

// Layout
//import Header from "../layout/header";
import Footer from "../layout/footer";

// Elements
import Header from "../layout/header";
import SliderOneSection from "../elements/home-slider/slider1";
import AboutUsOneSection from "../elements/about-us-1";
import ServicesSection from "../elements/services-1";
import ChooseUsSection from "../elements/choose-us";
import ScheduleServiceSection from "../elements/schedule-service";
import TeamOneSection from "../elements/team-1";
import TestimonialSection from "../elements/testimonial";
import LatestBlogSection from "../elements/latest-blog-slider";
import { useTranslation } from 'react-i18next';
import HeroBanner from '../elements/widget/HeroBanner';

function Index() {

	const { t } = useTranslation();



	const handleRefresh = (url) => {
		window.location.href = url;
	};
	
		
		return (
			<>
			
				<Header />
				
				<HeroBanner />

				{/* <h1>{t('welcome')}</h1>


					<button onClick={()=>handleRefresh("/en")}>English</button>
					<button onClick={()=>handleRefresh("/ar")}>Arabic</button> */}
				
				<AboutUsOneSection />
				
				<ServicesSection />
				
				<ChooseUsSection />
				
				<ScheduleServiceSection />
				
				<TeamOneSection />
				
				<TestimonialSection />
				
				<LatestBlogSection />
				
				<Footer />
				
			</>
		);
}

export default Index;