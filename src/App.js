import React, { useEffect } from "react";
import Navbar from "./Components/Navbar";
import BlogHome from "./Components/Blogs/BlogHome";
import { Grid, CircularProgress } from "@material-ui/core/";
// Redux
import { connect } from "react-redux";
import { getBlogs } from "./actions/getBlogs";
const App = ({ getBlogs, posts, loading }) => {
  useEffect(() => {
    getBlogs();
  }, [getBlogs]);

  console.log(posts);
  console.log(loading);
  if (loading) {
    return <CircularProgress className="loading" />;
  }
  return (
    <>
      <Navbar />
      {typeof posts === "undefined" ? (
        ""
      ) : (
        <div
          style={{
            marginTop: "100px",
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
              {posts.map((post) => (
                <BlogHome
                  key={post.id}
                  title={post.title.rendered}
                  description={
                    <section
                      dangerouslySetInnerHTML={{
                        __html: post.excerpt.rendered,
                      }}
                    />
                  }
                  image={post.jetpack_featured_media_url}
                  postid={post.id}
                />
              ))}
            </Grid>
          </Grid>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  posts: state.Blogs.posts,
  loading: state.Blogs.loading,
});
export default connect(mapStateToProps, { getBlogs })(App);
