import React, { useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { getBlogs } from "../../actions/getBlogs";
const useStyles = makeStyles({
  root: {
    marginTop: "100px",
  },
});
const Blogs = ({
  match: {
    params: { id },
  },
  getBlogs,
  posts,
}) => {
  useEffect(() => {
    getBlogs();
  }, [getBlogs]);

  const classes = useStyles();

  const convertArrayToObject = (array, key) => {
    const initialValue = {};
    return array.reduce((obj, item) => {
      return {
        ...obj,
        [item[key]]: item,
      };
    }, initialValue);
  };

  const objectData = convertArrayToObject(posts, "id");

  console.log(objectData[id]);

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          {objectData[id].title.rendered}
        </Typography>
        <Typography variant="body2" component="p">
          {
            <div
              dangerouslySetInnerHTML={{
                __html: objectData[id].content.rendered,
              }}
            />
          }
        </Typography>
      </CardContent>
    </Card>
  );
};

const mapStateToProps = (state) => ({
  posts: state.Blogs.posts,
});
export default connect(mapStateToProps, { getBlogs })(Blogs);
