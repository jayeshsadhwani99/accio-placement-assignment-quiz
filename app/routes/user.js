import { registerUser } from "../controllers/user";

const router = app.router();

router.get("/user", registerUser);
