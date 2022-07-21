import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost.js';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';

const sections = [
  { title: 'Home', url: '#' },
  { title: 'All About Tik Tok', url: '#' },
  { title: 'Fun Facts', url: '#' },
  { title: 'Favorite Influencers', url: '#' }
];

const mainFeaturedPost = {
  title: 'TIKTOK' ,
  description:
  "Amazing app where people can express themselves!" ,
  image: 'https://cdn.smehost.net/dailyrindblogcom-orchardprod/wp-content/uploads/2021/07/TikTok_Banner-1.jpg',
  imageText: 'main image description',
};

const featuredPosts = [
  {
    title: 'TikTok History',
    date: 'Sep 2016',
    description:
      'Tiktok was created in September of 2016 in place of an app called Musical.ly. Everyone was upset that Musical.ly was gone, but those statements were soon regretted. Tiktok is now almost every teenager and kids favorite social media app.',
    image: 'https://play-lh.googleusercontent.com/2kdv4gGWKchMkThhxMYlWlkSouhx6BP50X1b7O7_Yl78fFCitAe3t4hLACuCyC9tsJA',
    imageLabel: 'Image Text',
  },
  {
    title: 'TikTok Statistics',
    description:
      'TikTok was the most downloaded app in 2021, 656 million downloads. It is the 6th most used social platform. It is predicted to surpass other platforms in the next couple of years.',
    image: 'https://blog.hootsuite.com/wp-content/uploads/2022/03/tiktok-stats-4.png',
    imageLabel: 'Image Text',
  },
];

const posts = [post1, post2, post3];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

const theme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="TikTok" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              tiktok={sidebar.tiktok}
              socials={sidebar.socials}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}