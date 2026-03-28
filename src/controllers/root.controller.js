import { check, validationResult } from 'express-validator';
import dotenv from 'dotenv';

// Derive the equivalent of __dirname
import { fileURLToPath } from 'url';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const page_logo = process.env.PAGELOGO;

// Home Page
const index_view = async (req, res) => {
    try {
        res.render('index', {
            pageTitle: "Home",
            pageLogo: page_logo
        });
    } catch (err) {
        res.status(500).render('./errors/500', { message: 'Internal Server Error', error: err.message });
    }
};

// About Page
const about_view = async (req, res) => {
    try {
        res.render('about', {
            pageTitle: "About Us",
            pageLogo: page_logo
        });
    } catch (err) {
        res.status(500).render('./errors/500', { message: 'Internal Server Error', error: err.message });
    }
};

// Services Page
const services_view = async (req, res) => {
    try {
        res.render('services', {
            pageTitle: "Our Services",
            pageLogo: page_logo
        });
    } catch (err) {
        res.status(500).render('./errors/500', { message: 'Internal Server Error', error: err.message });
    }
};

// Projects Page
const projects_view = async (req, res) => {
    try {
        res.render('projects', {
            pageTitle: "Projects",
            pageLogo: page_logo
        });
    } catch (err) {
        res.status(500).render('./errors/500', { message: 'Internal Server Error', error: err.message });
    }
};

// Contact Page
const contact_view = async (req, res) => {
    try {
        res.render('contact', {
            pageTitle: "Contact Us",
            pageLogo: page_logo
        });
    } catch (err) {
        res.status(500).render('./errors/500', { message: 'Internal Server Error', error: err.message });
    }
};

export {
    index_view,
    about_view,
    services_view,
    projects_view,
    contact_view
};