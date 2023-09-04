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
import AboutUsThreeSection from "../elements/about-us-3";

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
				<AboutUsFourSection/>
				
				
				
				<ServicesSection />

				<AboutUsThreeSection/>
				
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