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

function Index() {

	const { t, i18n } = useTranslation();


	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	};
	
		
		return (
			<>
			
				<Header />
				
				<SliderOneSection />

				<h1>{t('welcome')}</h1>

				    <div>
					<button onClick={() => changeLanguage('en')}>English</button>
					<button onClick={() => changeLanguage('ar')}>Arabic</button>
					</div>
				
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