import express from "express";
import { getMoviesByCategory, getSimilarMovies, getTrendingMovie, getMovieTrailers, getMovieDetails } from "../controllers/movie.controller"; 

const router = express.Router();

router.get("/trending", getTrendingMovie);
router.get("/:id/trailers", getMovieTrailers);
router.get("/:id/details", getMovieDetails);
router.get("/:id/similar", getSimilarMovies);
router.get("/:category", getMoviesByCategory);

export default router;