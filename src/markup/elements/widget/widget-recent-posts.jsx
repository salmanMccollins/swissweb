import React from 'react';
import { Link } from 'react-router-dom';

// Import Images
import recentBlogImg1 from "../../../images/blog/recent-blog/pic1.jpg";
import recentBlogImg2 from "../../../images/blog/recent-blog/pic2.jpg";
import recentBlogImg3 from "../../../images/blog/recent-blog/pic3.jpg";

function WidgetRecentPosts(props){
		return(
			<>
				<div className="widget recent-posts-entry">
					<h5 className="widget-title">Recent Posts</h5>
					<div className="widget-post-bx">
						{props.content.slice(-3).reverse().map((item)=>(
						<div className="widget-post clearfix">
							<div className="ttr-post-media"> <img src={item.photo} width="200" height="143" alt=""/> </div>
							<div className="ttr-post-info">
								<div className="ttr-post-header">
									<h6 className="post-title"><Link to={`/blog-details/${item.blogUrl}`}>{item.title}</Link></h6>
								</div>
								<ul className="post-meta">
									<li className="author">By <Link href="#">{item.author}</Link></li>
								</ul>
							</div>
						</div>
						))}
						
						
					</div>
				</div>
				
			</>
		);
	}

export default WidgetRecentPosts;