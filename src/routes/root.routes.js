import { Router } from "express";
import { 
    index_view,
    about_view,
    services_view,
    projects_view,
    contact_view
} from "../controllers/root.controller.js";
import { dashboard_view } from "../controllers/admin.controller.js";

const router = Router();

// Public Routes
router.get('/', index_view);
router.get('/about', about_view);
router.get('/services', services_view);
router.get('/projects', projects_view);
router.get('/contact', contact_view);

// Admin Route
router.get('/admin', dashboard_view);

export default router;