import React, {Component} from 'react';
import { Link } from 'react-router-dom';

// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";

// Elements
import WidgetSearch from "../elements/widget/widget-search";
import WidgetRecentPosts from "../elements/widget/widget-recent-posts";
import WidgetGallery from "../elements/widget/widget-gallery";
import WidgetTag from "../elements/widget/widget-tag";

// Images
import bnrImg from "../../images/banner/Blogs.jpg";
import blogGridPic1 from "../../images/blog/grid/pic1.jpg";
import blogGridPic2 from "../../images/blog/grid/pic2.jpg";
import blogGridPic3 from "../../images/blog/grid/pic3.jpg";
import blogGridPic4 from "../../images/blog/grid/pic4.jpg";
import blogGridPic5 from "../../images/blog/grid/pic5.jpg";
import blogGridPic6 from "../../images/blog/grid/pic6.jpg";
import authorThumbPic1 from "../../images/testimonials/pic1.jpg";
import authorThumbPic2 from "../../images/testimonials/pic2.jpg";
import authorThumbPic3 from "../../images/testimonials/pic3.jpg";
import authorThumbPic4 from "../../images/testimonials/pic4.jpg";
import authorThumbPic5 from "../../images/testimonials/pic5.jpg";
import authorThumbPic6 from "../../images/testimonials/pic6.jpg";
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';

const BlogGridSidebar = () => {

  const [content, setContent] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);


  const [data, setData] = useState();

  useEffect(() => {
    axios.get(`https://swiss-backend.vercel.app/api/meta`).then((response) => {
      const meta = response.data.data.filter((i) => i.name === "blogs");
      setData(meta[0]);
      console.log(meta[0]);
    });
  }, []);

  useEffect(() => {
    axios.get(`https://swiss-backend.vercel.app/api/blogs/blog?page=${currentPage}`).then((response) => {
      setContent(response.data.data);
      console.log(response.data);
    });
  }, [currentPage]);

  useEffect(() => {
    axios.get("https://swiss-backend.vercel.app/api/blogs/blog").then((response) => {
      const totalBlogs = response.data.totalCount;
      const perPage = 8;
      const totalPages = Math.ceil(totalBlogs / perPage);
      setTotalPages(totalPages);
    });
  }, [currentPage]); // Make sure to include currentPage as a dependency


	
	
		return (
			<>
				<Helmet>
						<title>{data?.title}</title>
						<meta name="description" content={data?.content} />
				</Helmet>
				<Header />
				
				<div className="page-content bg-gray">
					
					<div className="page-banner ovbl-dark" style={{backgroundImage: "url("+bnrImg+")"}}>
						<div className="container">
							<div className="page-banner-entry text-center">
								<h1><span>Blogs</span></h1>
								<nav aria-label="breadcrumb" className="breadcrumb-row">
									<ul className="breadcrumb">
										<li className="breadcrumb-item"><Link to="/"><i className="las la-home"></i>Home</Link></li>
										<li className="breadcrumb-item active" aria-current="page">Blogs</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
					
					<section className="section-area section-sp2">
					   <div className="container">
							<div className="row">
								<div className="col-md-8 col-lg-8 col-xl-8 mb-30 mb-md-50">
									<div className="row">
										{content && content.slice().reverse().map((item) =>(
											<div className="col-xl-6 col-lg-6 col-md-6">
												<div className="blog-card style-1 bg-white shadow">
													<div className="post-media">
														<Link to={`/blog-details/${item.blogUrl}`}><img src={item.photo} style={{height:"250px"}} alt=""/></Link>
													</div>
													<div className="post-info">
														<h4 className="post-title"><Link to={`/blog-details/${item.blogUrl}`}>{item.title}</Link></h4>
														<div className="post-content">
															<p className="mb-0">{item.shortContent}</p>
														</div>
														<ul className="post-meta">
															<li className="author">
																{/* <img src={item.authorThumb} alt=""/> */}
																By {item.author}</li>
															<li className="date">{item.date}</li>
														</ul>
													</div>
												</div>
											</div>
										))}
										{!content && (<p>Loading...</p>)}
									</div>
									<div className="row">
										<div className="col-lg-12">
											<div className="pagination-bx text-center clearfix">
												<ul className="pagination">
													{/* Previous button */}
													<li className="previous">
														<Link to="#" onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}>
														Prev
														</Link>
													</li>

													{/* Page numbers */}
													{Array.from({ length: totalPages }).map((_, index) => (
														<li key={index} className={currentPage === index + 1 ? "active" : ""}>
														<Link to="#" onClick={() => setCurrentPage(index + 1)}>
															{index + 1}
														</Link>
														</li>
													))}

													{/* Next button */}
													<li className="next">
														<Link to="#" onClick={() => {
															if(totalPages > currentPage){
															setCurrentPage((prev) => prev + 1)
															}}}>
														Next
														</Link>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-4 col-lg-4 col-xl-4 mb-30">
									<aside className="side-bar sticky-top aside-bx">
										
										<WidgetRecentPosts content={content} />
										
										<WidgetGallery />
										
										
										
									</aside>
								</div>
							</div>
						</div>
					</section>
					
				
				</div>
				
				<Footer />
				
			</>
		)
}

export default BlogGridSidebar;