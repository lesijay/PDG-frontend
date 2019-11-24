import React from "react";
import Sizing from "../components/Mockup/Sizing";
import Typography from "../components/Mockup/Typography"
import Button from "../components/Mockup/Button"

const Articles = ({Posts}) => {
  return (
    <Sizing backgroundColor="#fdf6e3" padding="4rem">
      <Sizing
        width="60%"
        height="4.5vh"
        backgroundColor="#291f20"
        padding="1.5rem"
        margin="0 auto"
        borderRadius="4rem"
      >
        <Typography
          fontSize="2rem"
          fontWeight="500"
          textAlign="center"
          color="#fff"
          letterSpacing="0.2rem"
        >
          PERSONAL DEVELOPMENT BEGINS WITH PERSONAL UNDERSTANDING
        </Typography>
      </Sizing>
      {Posts.map((items, i) => (
          <Sizing padding="1.5rem"
          margin="2rem" >
          <Sizing margin="2rem">
          <Typography fontSize="1.8rem" fontWeight="500" textAlign="left">
          {items.title}
          </Typography>
          </Sizing>
          <Sizing margin="2rem">
              <Typography fontSize="1.6rem" textAlign="left">
              {items.article}...
              <Button opacity="" opacity="0.75" width="8rem" backgroundColor="#e3b04b">read more</Button>
          </Typography>
          </Sizing >
          <Sizing margin="2rem">
          <Typography fontSize="1.2rem" textAlign="left" textDecoration="underline">
          {items.author}
          </Typography>
          </Sizing>
        </Sizing>
      ))}
      
    </Sizing>
  );
};

Articles.defaultProps = {
    Posts: [
        {
            title: "You are the BEST",
            article:"Lorem Ipsum is  simply dummy text of the printing and typesetting industry simply dummy text of the printing and typesetting industry simply dummy text of the printing and typesetting industry simply dummy text of the printing and typesetting industry. typesetting industry simply dummy text of the printing and typesetting",
            author:"M.L Zesch",
        },
        {
            title: "Accepting Yourself",
            article:"Lorem Ipsum is  simply dummy text of the printing and typesetting industry simply dummy text of the printing and typesetting industry simply dummy text of the printing and typesetting industry simply dummy text of the printing and typesetting industry.",
            author:"M.L Zesch",
        },
        {
            title: "Learn your love language",
            article:"Lorem Ipsum is  simply dummy text of the printing and typesetting industry simply dummy text of the printing and typesetting industry simply dummy text of the printing and typesetting industry simply dummy text of the printing and typesetting industry.",
            author:"M.L Zesch",
        }
    ]}

export default Articles;
