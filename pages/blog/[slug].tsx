import { GetStaticPaths, GetStaticProps } from "next";

//@ts-ignore
export const BlogPost = ({ date }) => {
    return <h1>{date}</h1>;
};

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        // [get most read posts]

        paths: [],  // how many posts you want to put online
        fallback: false
    };
};

export const getStaticProps: GetStaticProps = async () => {
  
    return {
      props: {
        date: new Date().toISOString(),
      },
  
      revalidate: 60 * 60 * 4,
    };
  };

export default getStaticPaths;
