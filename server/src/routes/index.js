import express from "express";
import userRoute from "./user.route.js";
import mediaRoute from "./media.route.js";
import personRoute from "./person.route.js";
import reviewRoute from "./review.route.js";
import paymentRoutes from "./payment.routes.js";

const router = express.Router();

router.use("/user", userRoute);
router.use("/person", personRoute);
router.use("/reviews", reviewRoute);
router.use("/payment", paymentRoutes);

// Move the mediaType route to the end
router.use("/:mediaType", mediaRoute);

export default router;