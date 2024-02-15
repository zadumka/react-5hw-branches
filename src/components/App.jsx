import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { ToastContainer } from "react-toastify";

import Navigation from "./Navigation/Navigation.jsx";

import "./App.module.css";
import "react-toastify/dist/ReactToastify.css";

const HomePage = lazy(() => import("../mypages/HomePage/HomePage.jsx"));
const MoviesPage = lazy(() => import("../mypages/MoviesPage/MoviesPage.jsx"));
const MovieDetailsPage = lazy(() =>
  import("../mypages/MovieDetailsPage/MovieDetailsPage.jsx")
);
const NotFoundPage = lazy(() =>
  import("../mypages/NotFoundPage/NotFoundPage.jsx")
);
const MovieCasts = lazy(() => import("./MovieCasts/MovieCasts.jsx"));
const MovieReviews = lazy(() => import("./MovieReviews/MovieReviews.jsx"));

function App() {
  return (
    <>
      <Navigation />
      <ToastContainer />

      <Suspense fallback={<b>Loading page...</b>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCasts />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
