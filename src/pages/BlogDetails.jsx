import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Col, Container, Form, FormGroup, Input, Row } from "reactstrap";
import blogData from "../assets/data/blogData";
import Helmet from "../components/Helmet/Helmet";

import "../styles/blog-details.css";

const BlogDetails = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ name: '', email: '', text: '' });

  useEffect(() => {
    const foundBlog = blogData.find((blog) => blog.title === slug);
    setBlog(foundBlog);

    // Simulate fetching comments (no backend)
    setComments([
      { id: 1, name: "John Doe", date: "14 July, 2024", text: "Great blog post!" }
    ]);

    window.scrollTo(0, 0);
  }, [slug]);

  const handleCommentChange = (e) => {
    const { name, value } = e.target;
    setNewComment({ ...newComment, [name]: value });
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();

    // Simulate posting the new comment (no backend)
    setComments([...comments, { id: Date.now(), ...newComment, date: new Date().toLocaleDateString() }]);
    
    // Show success toast message
    toast.success("Your comment has been posted successfully!");

    // Reset the form
    setNewComment({ name: '', email: '', text: '' });
  };

  return (
    <Helmet title={blog?.title || "Blog Details"}>
      <section className="blog-details-section">
        <Container>
          <Row>
            <Col lg="8" md="8">
              <div className="blog__details">
                <img src={blog?.imgUrl} alt={blog?.title} className="w-100 rounded" />
                <h2 className="section__title mt-4">{blog?.title}</h2>

                <div className="blog__publisher d-flex align-items-center gap-4 mb-4">
                  <span className="blog__author">
                    <i className="ri-user-line"></i> {blog?.author}
                  </span>
                  <span className="d-flex align-items-center gap-1 section__description">
                    <i className="ri-calendar-line"></i> {blog?.date}
                  </span>
                  <span className="d-flex align-items-center gap-1 section__description">
                    <i className="ri-time-line"></i> {blog?.time}
                  </span>
                </div>

                <p className="section__description">{blog?.description}</p>
                <h6 className="ps-5 fw-normal">
                  <blockquote className="fs-4">{blog?.quote}</blockquote>
                </h6>
                <p className="section__description">{blog?.description}</p>
              </div>

              <div className="comment__list mt-5">
                <h4 className="mb-5">{comments.length} Comments</h4>
                {comments.map((comment) => (
                  <div className="single__comment d-flex gap-3" key={comment.id}>
                    <img
                      src="https://www.clipartbest.com/cliparts/dT6/xrz/dT6xrznac.jpg"
                      alt="User"
                      className="rounded-circle"
                    />
                    <div className="comment__content">
                      <h6 className="fw-bold">{comment.name}</h6>
                      <p className="section__description mb-0">{comment.date}</p>
                      <p className="section__description">{comment.text}</p>
                      <span className="reply d-flex align-items-center gap-1">
                        <i className="ri-reply-line"></i> Reply
                      </span>
                    </div>
                  </div>
                ))}

                <div className="leave__comment-form mt-5">
                  <h4>Leave a Comment</h4>
                  <p className="section__description">
                    You must sign in to make a comment on this post.
                  </p>
                  <Form onSubmit={handleCommentSubmit}>
                    <FormGroup className="d-flex gap-3 mb-4">
                      <Input
                        type="text"
                        name="name"
                        value={newComment.name}
                        onChange={handleCommentChange}
                        placeholder="Full Name"
                        required
                      />
                      <Input
                        type="email"
                        name="email"
                        value={newComment.email}
                        onChange={handleCommentChange}
                        placeholder="Email"
                        required
                      />
                    </FormGroup>
                    <FormGroup>
                      <textarea
                        rows="5"
                        className="w-100 py-2 px-3"
                        name="text"
                        value={newComment.text}
                        onChange={handleCommentChange}
                        placeholder="Comment..."
                        required
                      ></textarea>
                    </FormGroup>
                    <Button className="btn comment__btn mt-3" color="primary">
                      Post a Comment
                    </Button>
                  </Form>
                </div>
              </div>
            </Col>

            <Col lg="4" md="4">
              <div className="recent__posts mb-4">
                <h5 className="fw-bold">Recent Posts</h5>
                {blogData.map((item) => (
                  <div className="recent__blog-post mb-4" key={item.id}>
                    <div className="recent__blog-item d-flex gap-3">
                      <img
                        src={item.imgUrl}
                        alt={item.title}
                        className="w-25 rounded"
                      />
                      <h6>
                        <Link to={`/blogs/${item.title}`}>{item.title}</Link>
                      </h6>
                    </div>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <ToastContainer />
    </Helmet>
  );
};

export default BlogDetails;
