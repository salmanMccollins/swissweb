import React, {Component} from 'react';
import { Link, useParams } from 'react-router-dom';

// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";

// Elements
import WidgetSearch from "../elements/widget/widget-search";
import WidgetRecentPosts from "../elements/widget/widget-recent-posts";
import WidgetGallery from "../elements/widget/widget-gallery";
import WidgetTag from "../elements/widget/widget-tag";
import AuthorProfile from "../elements/author-profile";
import CommentList from "../elements/comment-list";
import CommentRespond from "../elements/comment-respond";

// Images
import bnrImg from "../../images/banner/bnr4.jpg";
import testPic1 from "../../images/testimonials/pic1.jpg";
import defaultPic1 from "../../images/blog/default/pic1.jpg";
import galleryPic2 from "../../images/gallery/pic2.jpg";
import galleryPic5 from "../../images/gallery/pic5.jpg";
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { EditorState, convertFromRaw, Editor } from "draft-js";

function BlogDetails() {

	const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const { blogUrl } = useParams();
  const [content, setContent] = useState([]);
  const [blogData, setBlogData] = useState(null);
  const [isMounted, setIsMounted] = useState(true); // Add a state variable for tracking mount status

useEffect(() => {
  loadContent();
}, [blogData]);

	const loadContent = () => {
	if (!blogData || !blogData.content) return;

	let content2;
	try {
		content2 = convertFromRaw(JSON.parse(blogData.content));
		console.log('Parsed content:', content2);
	} catch (error) {
		console.error('Error parsing content:', error);
	}

	setEditorState(EditorState.createWithContent(content2));
	};


  useEffect(() => {
    axios.get('https://swiss-backend.vercel.app/api/blogs/blog/ind').then((response) => {
      if (isMounted) {
        setContent(response.data);
      }
    });
  }, [isMounted]);

  useEffect(() => {
    const matchingBlog = content.find((blog) => blog.blogUrl === blogUrl);
    if (isMounted) {
      setBlogData(matchingBlog);
      loadContent();
    }

    console.log(matchingBlog);
  }, [content, blogUrl, isMounted]);

  if (!blogData) {
    return <div>Loading...</div>;
  }
		return (
			<>
				
				<Header />
				
				<div className="page-content bg-white">
					
					<div className="page-banner ovbl-dark" style={{backgroundImage: "url("+blogData.photo+")"}}>
						<div className="container">
							<div className="page-banner-entry text-center">
								<h1><span>{blogData.title}</span></h1>
								<nav aria-label="breadcrumb" className="breadcrumb-row">
									<ul className="breadcrumb">
										<li className="breadcrumb-item"><Link to="/"><i className="las la-home"></i>Home</Link></li>
										<li className="breadcrumb-item active" aria-current="page">Blog Details</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
					
					<section className="section-area section-sp2 bg-white">
						<div className="container">
							<div className="row">
								<div className="col-md-12 col-lg-8 col-xl-8 mb-30 mb-md-60">
									<div className="blog-lg blog-single">
										{/* <div className="action-box blog-lg">
											<img src={defaultPic1} alt=""/>
										</div> */}
										<div className="info-bx">
											{/* <ul className="post-meta">
												<li className="author"><img src={testPic1} alt=""/>By <Link to="#">{blogData.author}</Link></li>
												<li className="date"><Link to="#">{blogData.date}</Link></li>
											</ul>
											<div className="ttr-post-title">
												<h3 className="post-title">{blogData.title}</h3>
											</div> */}
											<div className="ttr-post-text">
												{blogData.video && (
													<>
													<video autoplay controls src={blogData.video} width={"100%"} style={{marginBottom:"30px"}} />
													</>
												)}
												{/* {blogData.content} */}
												<Editor editorState={editorState} readOnly />
											</div>
											{/* <div className="ttr-post-footer">
												<div className="post-tags">
													<strong>TAGS:</strong>
													<Link to="#">{blogData.tags}</Link> 
													<Link to="#">REPAIRING</Link> 
													<Link to="#">TECHNICIALS</Link> 
												</div>
												<div className="share-post ms-auto">
													<ul className="social-media">
														<li><strong>SHARE:</strong></li>
														<li><a target="_blank" href="https://www.facebook.com/" rel="noreferrer" className="btn btn-primary"><i className="fa fa-facebook"></i></a></li>
														<li><a target="_blank" href="https://www.google.com/" rel="noreferrer" className="btn btn-primary"><i className="fa fa-google-plus"></i></a></li>
														<li><a target="_blank" href="https://www.linkedin.com/" rel="noreferrer" className="btn btn-primary"><i className="fa fa-linkedin"></i></a></li>
														<li><a target="_blank" href="https://twitter.com/" rel="noreferrer" className="btn btn-primary"><i className="fa fa-twitter"></i></a></li>
													</ul>
												</div>
											</div> */}
										</div>
									</div>
									
									{/* <AuthorProfile /> */}
									
									{/* <div className="clear" id="comment-list">
										<div className="comments-area" id="comments">
											<h5 className="widget-title">8 Comments</h5>
											<div className="clearfix">
												
												<CommentList />
												
												<CommentRespond />
												
											</div>
										</div>
									</div> */}
								</div>
								<div className="col-md-12 col-lg-4 col-xl-4 mb-30">
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
		);
}

export default BlogDetails;