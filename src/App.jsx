import Menu from "./components/shared/menu.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/shared/theme-context.jsx";
import CursorBlob from "./components/shared/CursorBlob.jsx";
import { HelmetProvider } from "react-helmet-async";

import "./App.css";
import "./index.css";
import Home from "./components/pages/home/home.jsx";
import Work from "./components/pages/work/work.jsx";
import About from "./components/pages/about/about.jsx";
import Blog from "./components/pages/blog/blog.jsx";
import BlogContent from "./components/pages/blog/all-blogs/individual-blog.jsx";
import Footer from "./components/shared/footer.jsx";
import ScrollToTop from "./components/shared/scroll-to-top.jsx";
import TorresHeights from "./components/pages/case-studies/Torres Heights/torres-heights.jsx";
import Spaghetti from "./components/pages/case-studies/Spaghetti.jsx/Spaghetti.jsx";
import Mrp from "./components/pages/case-studies/mrp/mrp.jsx";
import HenleySpanish from "./components/pages/case-studies/Henley Spanish Centre/Henley-Spanish.jsx";
import SEO from "./components/SeoHead.jsx";

function App() {
  const helmetContext = {};

  return (
    <HelmetProvider context={helmetContext}>
      <BrowserRouter>
        <ThemeProvider>
          <div className="app">
            {/* Default SEO tags */}
            <SEO
              title="The Spaghetti Dev"
              description="Follow my journey as a developer through hands-on projects, coding insights, and real-world experiences."
              ogImage="/assets/SEO/seo-home.webp"
              canonicalUrl="https://thespaghetti.dev"
            />
            <CursorBlob />
            <Menu />
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/work" element={<Work />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogContent />} />
              <Route path="work/torres-heights" element={<TorresHeights />} />
              <Route path="work/spaghetti" element={<Spaghetti />} />
              <Route path="work/mrp" element={<Mrp />} />
              <Route
                path="work/henley-spanish-centre"
                element={<HenleySpanish />}
              />
            </Routes>
            <Footer />
          </div>
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
