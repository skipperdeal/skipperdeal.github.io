<!-- Add this to your HTML file -->
<script defer src="/__/firebase/9.6.4/firebase-app.js"></script>
<script defer src="/__/firebase/9.6.4/firebase-firestore.js"></script>
<!-- Add the Firebase config -->
<script defer src=""firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLVkC_rFosbGHWFbTZ5cxUc6H7hKLju4Y",
  authDomain: "dealtech-solution.firebaseapp.com",
  projectId: "dealtech-solution",
  storageBucket: "dealtech-solution.appspot.com",
  messagingSenderId: "356828949645",
  appId: "1:356828949645:web:2e7f992064f8ae234486c4",
  measurementId: "G-FTWRJ2X5KQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);"></script>



<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DEALTECH</title>
    <!-- Bootstrap css -->
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
    <!-- Bootstrap Icons css -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
    <!-- Swiper slider css -->
    <link rel="stylesheet" href="assets/plugins/Swiper-slider/swiper-bundle.min.css">
    <!-- Glightbox popup css -->
    <link rel="stylesheet" href="assets/plugins/glightbox/glightbox.css">
    <!-- Animate css for animation -->
    <link rel="stylesheet" href="assets/plugins/animate-css/animate.css">
    <!-- aos css (Animation on scroll ) -->
    <link rel="stylesheet" href="assets/plugins/aos/aos.css">
    <!-- Fontawesome Icons css -->
    <link rel="stylesheet" href="assets/plugins/icons/css/fontawesome.css">
    <link rel="stylesheet" href="assets/plugins/icons/css/brands.css">
    <link rel="stylesheet" href="assets/plugins/icons/css/solid.css">
    <!-- Style css -->
    <link rel="stylesheet" href="assets/css/style.css">

    <!--[if IE]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->

</head>

<body>
    <!-- preloader -->
    <div id="preloader"></div>
    <!-- Progress circle scroll to top -->
    <div id="progress">
        <div id="progress-value">
            <i class="bi bi-arrow-up-short"></i>
        </div>
    </div>
    <!-- End -->
    <!-- Black Transparent Screen -->
    <span class="screen-darken"></span>
    <!-- End -->
    <section class="top-bar-section">
        <!-- Top bar Start -->
        <div class="py-2 border-bottom d-none d-lg-block top-nav-bar">
            <div class="container">
                <div class="row">
                    <div class="col-md-9">
                        <div class="top-bar-left list-unstyled">
                            <ul class="d-flex m-0 p-0">
                                <li>
                                    <i class="bi bi-telephone"></i>
                                    <a href="tel:">+254703495050</a>
                                </li>
                                <li>
                                    <i class="bi bi-geo-alt"></i>
                                    <span>Nairobi, Kenya</span>
                                </li>
                                <li>
                                    <i class="bi bi-envelope"></i>
                                    <a href="#">info@dealtech.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="top-bar-right list-unstyled">
                            <ul class="d-flex justify-content-end">
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <!-- End Top Bar -->

        <!-- Header section -->
        <header class="header" id="header">
            <div class="container">
                <!-- Navigation Wrapper -->
                <nav id="navbar_top" class="navbar navbar-expand-lg navbar-light">
                    <!-- Desktop Logo -->
                    <a href="index.html" class="logo navbar-brand ">
                        <img src="assets/img/logo.png" alt="logo">
                    </a>
                    <!-- End -->
                    <!-- Mobile menu bar button -->
                    <button class="navbar-toggler order-2 order-md-3" type="button" data-bs-toggle="collapse" data-trigger="navbar_main" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
                    <!-- End -->

                    <div class="mobile-offcanvas collapse navbar-collapse order-3 order-md-1" id="navbar_main">
                        <!-- Mobile slider menu from left -->
                        <div class="offcanvas-header1 ps-0 pt-0 mb-4">
                            <!-- Mobile logo -->
                            <a href="index.html" class="logo navbar-brand py-0">
                                <img src="assets/img/logo.png" alt="">
                            </a>
                            <!-- End -->
                            <!-- Mobile menu close button -->
                            <button class="btn-close float-end"></button>
                        </div>
                        <!-- End -->
                        <!-- Main menu for Desktop and Mobile -->
                        <ul class="navbar-nav mx-auto order-2">
                            <li class="nav-item">
                                <a href="index.html" class="nav-link">Home</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a href="about.html" class="nav-link">About Us</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                <div class="megasubmenu dropdown-menu">
                                    <div class="row gx-0">
                                        <div class="col-md-6">
                                            <h6 class="dropdown-header">Single Pages</h6>
                                            <ul class="ps-0">
                                                <li><a href="login.html" class="dropdown-item">SignIn</a></li>
                                                <li><a href="signup.html" class="dropdown-item">SignUp</a></li>
                                                   </ul>
                                        </div>
                                        <div class="col-md-6">
                                            <h6 class="dropdown-header">Product Pages</h6>
                                            <ul class="ps-0">
                                                <li><a href="shop.html" class="dropdown-item">Shop</a></li>
                                                <li><a href="product-details.html" class="dropdown-item">Product Details</a></li>
                                                <li><a href="shop-cart.html" class="dropdown-item">Shopping Cart</a></li>
                                                <li><a href="shop-checkout.html" class="dropdown-item">Checkout</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </li>
                            <li class="nav-item dropdown">
                                <a href="#" class="nav-link dropdown-toggle" id="navbarDropdown3" role="button" data-bs-toggle="dropdown">Blog</a>
                                <div class="dropdown-menu p-0 p-md-3">
                                    <ul class="ps-0">
                                        <li><a href="blog.html" class="dropdown-item">Blog Grid</a></li>
                                        <li><a href="blog-right-sidebar.html" class="dropdown-item">Blog Right Sidebar</a></li>
                                        <li><a href="blog-details.html" class="dropdown-item">Single Blog</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="nav-item">
                                <a href="contact.html" class="nav-link">Contact</a>
                            </li>
                        </ul>

                        <!-- Main menu for Desktop and Mobile End -->
                        <!-- Mobile menu Footer -->
                        <div class="offcanvas-menu-footer d-lg-none">
                            <div>
                                +254703495050<br>
                                <a href="#">Info@dealtech.com</a>
                                <nav class="social__links-type2 d-flex justify-content-start mt-2">
                                    <a href="#"><i class="bi bi-twitter twitter-color"></i></a>
                                    <a href="#"><i class="bi bi-facebook facebook-color"></i></a>
                                    <a href="#"><i class="bi bi-instagram instagram-color"></i></a>
                                </nav>
                            </div>

                        </div>
                        <!-- End -->
                    </div>
                    <!-- End -->
                    <!-- Top Right section for Search -->
                    <!-- Top Right section for Search, Cart and Register Login -->
                    <div class="navbar-second order-1 order-md-2 ms-auto me-2">
                        <ul class="navbar-nav flex-row ecom-group">
                            <!-- Search toggle from top -->
                            <li class="nav-item">
                                <!-- Search Icon -->
                                <a href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop"><i class="bi bi-search"></i></a>
                                <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                                    <div class="offcanvas-header container">
                                        <h5 id="offcanvasTopLabel">
                                            <a href="#" class="logo">
                                                <img src="assets/img/logo.png" alt="">
                                            </a>
                                        </h5>
                                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div class="offcanvas-body d-flex align-items-center justify-content-center">
                                        <div class="container">
                                            <div class="col-12">
                                                <div class="mb-5">
                                                    <h1>Search</h1>
                                                </div>
                                                <div class="search">
                                                    <input type="search" class="form-control" placeholder="Type keyword and hit search button">
                                                    <button class="btn"> <i class="bi bi-search"></i> </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <!-- End -->
                            <!-- Cart Top Right -->
                            <li class="nav-item position-relative">
                                <!-- Cart Icon -->
                                <a href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="bi bi-cart"></i>
                <span class="position-absolute translate-middle Badges cart-badges">3</span></a>
                                <!-- End -->

                                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                                    <div class="offcanvas-header">
                                        <h5 id="offcanvasRightLabel">SHOPPING CART</h5>
                                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div class="offcanvas-body">
                                        <div class="prd-cart-list">
                                            <ul>
                                                <!-- Item Card -->
                                                <li>
                                                    <div class="cart-prd d-flex">
                                                        <div class="img-cart-thumb me-3">
                                                            <img src="assets/img/prod-img-01.jpg" alt="">
                                                        </div>
                                                        <div class="cart-prd-description">
                                                            <h5>
                                                                <a href="#">Men's Clothing</a>
                                                            </h5>
                                                            <div class="qty-price-wrapper d-flex justify-content-between">
                                                                <div class="select-wrapper">
                                                                    <select class="form-select py-1">
                                  <option value="1" selected="">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                                </select>
                                                                </div>
                                                                <div class="cart-price">
                                                                    <span>Ksh: 3500.00</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="#">
                                                            <i class="bi bi-trash3"></i>
                                                        </a>
                                                    </div>
                                                </li>
                                                <!-- End -->
                                                <!-- Item Card -->
                                                <li>
                                                    <div class="cart-prd d-flex">
                                                        <div class="img-cart-thumb me-3">
                                                            <img src="assets/img/prod-img-02.jpg" alt="">
                                                        </div>
                                                        <div class="cart-prd-description">
                                                            <h5>
                                                                <a href="#">Kids</a>
                                                            </h5>
                                                            <div class="qty-price-wrapper d-flex justify-content-between">
                                                                <div class="select-wrapper">
                                                                    <select class="form-select py-1">
                                  <option value="1" selected="">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                                </select>
                                                                </div>
                                                                <div class="cart-price">
                                                                    <span>Ksh: 4500.00</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="#">
                                                            <i class="bi bi-trash3"></i>
                                                        </a>
                                                    </div>
                                                </li>
                                                <!-- End -->
                                                <!-- Item Card -->
                                                <li>
                                                    <div class="cart-prd d-flex">
                                                        <div class="img-cart-thumb me-3">
                                                            <img src="assets/img/prod-img-03.jpg" alt="">
                                                        </div>
                                                        <div class="cart-prd-description">
                                                            <h5>
                                                                <a href="#">Women Clothing</a>
                                                            </h5>
                                                            <div class="qty-price-wrapper d-flex justify-content-between">
                                                                <div class="select-wrapper">
                                                                    <select class="form-select py-1">
                                  <option value="1" selected="">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                                </select>
                                                                </div>
                                                                <div class="cart-price">
                                                                    <span>Ksh: 2500.00</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="#">
                                                            <i class="bi bi-trash3"></i>
                                                        </a>
                                                    </div>
                                                </li>
                                                <!-- End -->
                                            </ul>
                                        </div>
                                        <!-- Sub Total -->
                                        <div class="cart-chekout-box">
                                            <div class="subtotal d-flex justify-content-between mb-4">
                                                <span>Subtotal:</span>
                                                <span>Ksh: 7500.00</span>
                                            </div>
                                            <div class="chkout-btn d-grid">
                                                <a href="shop-cart.html" class="btn btn-outline mb-3 p-2">View Cart</a>
                                                <a href="shop-checkout.html" class="btn btn-primary p-2">Checkout</a>
                                            </div>
                                        </div>
                                        <!-- End -->
                                    </div>
                                </div>
                            </li>
                            <!-- Login -->
                            <li class="nav-item">
                                <a href="login.html"><i class="bi bi-person-fill"></i></a>
                            </li>
                            <!-- End -->
                        </ul>
                    </div>
                </nav>
                <!-- End -->
            </div>
        </header>
        <!-- End -->
    </section>


    <!-- main section -->
    <main>
        <!-- Hero Banner Slider -->
        <section>
            <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
                <!-- Slider Controller -->
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-label="slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <!-- End -->
                <div class="carousel-inner">
                    <!-- Slider one -->
                    <div class="carousel-item custom-height active bg-cover" style="background-image: url(assets/img/header-bg-2.jpg);">
                        <div class="pt-2">
                            <div class="container-fluid px-0">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class=" carousel-caption text-start center-align">
                                            <h3 class="subheading-style-01" style="width:fit-content;">
                                            </h3>
                                            <h1 class="animate__animated animate__zoomInUp mt-0">
                                            <br>70% OFF
                                            </h1>
                                            <p class="animate__animated animate__zoomInUp">
                                                FORM KALI KALI <br class="d-none d-md-block">
                                            </p>
                                            <div class="animate__animated animate__fadeInDown mt-4 ">
                                                <a class="btn btn-primary btn-size shadow-1 btn-radius-100 " href="#">Buy Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 d-none d-md-block animate__animated animate__fadeInUp">
                                        <div class="position-relative zindex-1">
                                            <img src="assets/img/girl-2.png" alt="Image" class="img-fluid">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End -->
                    <!-- Slider two -->
                    <div class="carousel-item custom-height gradient-bg01 bg-cover">
                        <div class="pt-2">
                            <div class="container-fluid px-0">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class=" carousel-caption text-start center-align">
                                            <h3 class="subheading-style-01" style="width:fit-content;">
                                            </h3>
                                            <h1 class="animate__animated animate__zoomInUp mt-0">
                                                CHRISTMAS SALE <br>70% OFF
                                            </h1>
                                            <p class="animate__animated animate__zoomInUp">
                                                 <br class="d-none d-md-block">
                                            </p>
                                            <div class="animate__animated animate__fadeInDown mt-4 ">
                                                <a class="btn btn-primary btn-size shadow-1 btn-radius-100 " href="#">Buy Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 d-none d-sm-block d-md-block ">
                                        <div class="position-relative zindex-1">
                                            <img src="assets/img/banner-2.png" alt="Image" class="img-fluid">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End -->

                </div>

                <!-- Previous Slider Controller Button -->
                <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
                <!-- End -->
                <!-- Next Slider Controller Button -->
                <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
                <!-- End -->
            </div>
        </section>
        <!-- End -->

        <!-- Info Section -->
        <section class="section py-5">
            <div class="container">
                <div class="row gy-4 gx-lg-4 gx-xl-5">
                    <!-- Col -->
                    <div class="col-md-6 col-lg-4">
                        <div class="d-flex flex-row service-support">
                            <div class="support-icon me-4"><i class="bi bi-truck"></i></div>
                            <div class="lh-1">
                                <h4 class="mb-1">Free Shipping Around Nairobi</h4>
                                <p>Free shipping on all orders over KSH 10,000.</p>
                            </div>
                        </div>
                    </div>
                    <!-- Col End -->
                    <!-- Col -->
                    <div class="col-md-6 col-lg-4">
                        <div class="d-flex flex-row service-support">
                            <div class="support-icon me-4"><i class="bi bi-basket"></i></div>
                            <div class="lh-1">
                                <h4 class="mb-1">30 Days Return</h4>
                                <p>100% money back guarantee</p>
                            </div>
                        </div>
                    </div>
                    <!-- Col End -->
                    <!-- Col -->
                    <div class="col-md-6 col-lg-4">
                        <div class="d-flex flex-row service-support">
                            <div class="support-icon me-4"><i class="bi bi-shield-check"></i></div>
                            <div class="lh-1">
                                <h4 class="mb-1">Online Secure Payment</h4>
                                <p>DEALTECH.</p>
                            </div>
                        </div>
                    </div>
                    <!-- Col End -->
                </div>
            </div>
        </section>
        <!-- End -->

        <!-- categories Section -->
        <section class="section py-3">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="swiper mySwiper">
                            <div class="section-heading-txt">
                                <h3 class="text-start">Shop By Category </h3>
                            </div>
                            <div class="swiper-button-next"></div>
                            <div class="swiper-button-prev"></div>
                            <div class="swiper-wrapper mb-5">
                                <div class="swiper-slide">
                                    <div class="card bg-yellow-02 border-0 rounded_corner-4">
                                        <div class="row p-4 gx-0">
                                            <div class="col-6">
                                                <span class="card-subtitle small">Women's Clothing</span>
                                                <h4 class="lh-1 mt-2">Shop the latest from top brand</h4>
                                                <a href="#" class="btn btn-primary btn-radius-100 mt-3 px-3 shadow">Show me all</a>
                                            </div>
                                            <div class="col-6">
                                                <img src="assets/img/prd-img-01.png" alt="img" class="img-fluid">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="card bg-yellow-02 border-0 rounded_corner-4">
                                        <div class="row p-4 gx-0">
                                            <div class="col-6">
                                                <span class="card-subtitle small">Sports Items</span>
                                                <h4 class="lh-1 mt-2">Give the gift of choose</h4>
                                                <a href="#" class="btn btn-primary btn-radius-100 mt-3 px-3 shadow">Show me all</a>
                                            </div>
                                            <div class="col-6">
                                                <img src="assets/img/ball.png" alt="img" class="img-fluid">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="card bg-yellow-02 border-0 rounded_corner-4">
                                        <div class="row p-4 gx-0">
                                            <div class="col-6">
                                                <span class="card-subtitle small">Kid's Cloths</span>
                                                <h4 class="lh-1 mt-2">Shop the latest from top brand</h4>
                                                <a href="#" class="btn btn-primary btn-radius-100 mt-3 px-3 shadow">Show me all</a>
                                            </div>
                                            <div class="col-6">
                                                <img src="assets/img/kids.png" alt="img" class="img-fluid">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="card bg-yellow-02 border-0 rounded_corner-4">
                                        <div class="row p-4 gx-0">
                                            <div class="col-6">
                                                <span class="card-subtitle small">Men's Clothing</span>
                                                <h4 class="lh-1 mt-2">Shop the latest from top brand</h4>
                                                <a href="#" class="btn btn-primary btn-radius-100 mt-3 px-3 shadow">Show me all</a>
                                            </div>
                                            <div class="col-6">
                                                <img src="assets/img/shirt.png" alt="img" class="img-fluid">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="card bg-yellow-02 border-0 rounded_corner-4">
                                        <div class="row p-4 gx-0">
                                            <div class="col-6">
                                                <span class="card-subtitle small">Shoes</span>
                                                <h4 class="lh-1 mt-2">Shop the latest from top brand</h4>
                                                <a href="#" class="btn btn-primary btn-radius-100 mt-3 px-3 shadow">Show me all</a>
                                            </div>
                                            <div class="col-6">
                                                <img src="assets/img/shoes.png" alt="img" class="img-fluid">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="card bg-yellow-02 border-0 rounded_corner-4">
                                        <div class="row p-4 gx-0">
                                            <div class="col-6">
                                                <span class="card-subtitle small">Sports Items</span>
                                                <h4 class="lh-1 mt-2">Give the gift of choose</h4>
                                                <a href="#" class="btn btn-primary btn-radius-100 mt-3 px-3 shadow">Show me all</a>
                                            </div>
                                            <div class="col-6">
                                                <img src="assets/img/ball.png" alt="img" class="img-fluid">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="card bg-yellow-02 border-0 rounded_corner-4">
                                        <div class="row p-4 gx-0">
                                            <div class="col-6">
                                                <span class="card-subtitle small">Men's Clothing</span>
                                                <h4 class="lh-1 mt-2">Shop the latest from top brand</h4>
                                                <a href="#" class="btn btn-primary btn-radius-100 mt-3 px-3 shadow">Show me all</a>
                                            </div>
                                            <div class="col-6">
                                                <img src="assets/img/shirt.png" alt="img" class="img-fluid">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="card bg-yellow-02 border-0 rounded_corner-4">
                                        <div class="row p-4 gx-0">
                                            <div class="col-6">
                                                <span class="card-subtitle small">Explore new arrivals</span>
                                                <h4 class="lh-1 mt-2">Shop the latest from top brand</h4>
                                                <a href="#" class="btn btn-primary btn-radius-100 mt-3 px-3 shadow">Show me all</a>
                                            </div>
                                            <div class="col-6">
                                                <img src="assets/img/prd-img-01.png" alt="img" class="img-fluid">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="swiper-pagination"></div> -->

                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End -->

        <!-- Featured Product Section -->
        <section class="section pt-5">
            <div class="container">
                <div class="swiper mySwiper">
                    <div class="section-heading-txt">
                        <h3 class="text-start">Featured Products </h3>
                    </div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-wrapper mb-5">
                        <!-- slide 1 -->
                        <div class="swiper-slide">
                            <!-- Product wrapper -->
                            <div class="courses card rounded_corner-4 overflow-hidden">
                                <!-- Product Image -->
                                <div class="img-box">
                                    <img src="assets/img/prod-img-01.jpg" alt="img" class="img-fluid primary-img">
                                    <img src="assets/img/prod-img-hover-01.jpg" alt="img" class="img-fluid primary-hover-img">
                                    <span class="c-category">20% Off</span>
                                    <a href="#" class="item_like" data-bs-toggle="tooltip" data-bs-placement="left" title="Quick view"><span><i class="bi bi-eye fs-5"></i></span></a>
                                    <a href="#" class="item_view" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><span><i class="bi bi-heart fs-5"></i></span></a>
                                </div>
                                <!-- Product Image End -->
                                <!-- Product Body Content -->
                                <div class="p-4 card-body">
                                    <div class="course_small-info d-flex justify-content-between">
                                        <div class="course_info-meta"> <span> Category</span> </div>
                                    </div>
                                    <h3 class="product-title"><a href="product-details.html">Brown Women Casual Top </a></h3>
                                    <div class="course_small-info mb-3">
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i> 4.5 <a href="#">(10)</a></div>
                                    <div class="price__group">
                                        <div class="price-box"><span>Ksh: 1599.00</span> <span>Ksh: 2000.00</span></div>
                                        <a href="shop-cart.html" class="btn btn__read-more btn__cart"><span class="btn-text">Add to Cart</span> <i class="bi bi-bag cirlce-bg"></i></a>
                                    </div>
                                </div>
                                <!-- Product Body Content End -->
                            </div>
                            <!-- Product wrapper End -->
                        </div>
                        <!-- slide 2 -->
                        <div class="swiper-slide">
                            <!-- Product wrapper -->
                            <div class="courses card rounded_corner-4 overflow-hidden">
                                <!-- Product Image -->
                                <div class="img-box">
                                    <img src="assets/img/prod-img-02.jpg" alt="img" class="img-fluid primary-img">
                                    <img src="assets/img/prod-img-hover-02.jpg" alt="img" class="img-fluid primary-hover-img">
                                    <span class="c-category">20% Off</span>
                                    <a href="#" class="item_like" data-bs-toggle="tooltip" data-bs-placement="left" title="Quick view"><span><i class="bi bi-eye fs-5"></i></span></a>
                                    <a href="#" class="item_view" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><span><i class="bi bi-heart fs-5"></i></span></a>
                                </div>
                                <!-- Product Image End -->
                                <!-- Product Body Content -->
                                <div class="p-4 card-body">
                                    <div class="course_small-info d-flex justify-content-between">
                                        <div class="course_info-meta"> <span> Category</span> </div>
                                    </div>
                                    <h3 class="product-title"><a href="product-details.html">Brown Women Casual Top </a></h3>
                                    <div class="course_small-info mb-3">
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i> 4.5 <a href="#">(10)</a></div>
                                    <div class="price__group">
                                        <div class="price-box"><span>Ksh: 1599.00</span> <span>Ksh: 2500.00</span></div>
                                        <a href="shop-cart.html" class="btn btn__read-more btn__cart"><span class="btn-text">Add to Cart</span> <i class="bi bi-bag cirlce-bg"></i></a>
                                    </div>
                                </div>
                                <!-- Product Body Content End -->
                            </div>
                            <!-- Product wrapper End -->
                        </div>
                        <!-- slide 3 -->
                        <div class="swiper-slide">
                            <!-- Product wrapper -->
                            <div class="courses card rounded_corner-4 overflow-hidden">
                                <!-- Product Image -->
                                <div class="img-box">
                                    <img src="assets/img/prod-img-03.jpg" alt="img" class="img-fluid primary-img">
                                    <img src="assets/img/prod-img-hover-03.jpg" alt="img" class="img-fluid primary-hover-img">
                                    <span class="c-category">20% Off</span>
                                    <a href="#" class="item_like" data-bs-toggle="tooltip" data-bs-placement="left" title="Quick view"><span><i class="bi bi-eye fs-5"></i></span></a>
                                    <a href="#" class="item_view" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><span><i class="bi bi-heart fs-5"></i></span></a>
                                </div>
                                <!-- Product Image End -->
                                <!-- Product Body Content -->
                                <div class="p-4 card-body">
                                    <div class="course_small-info d-flex justify-content-between">
                                        <div class="course_info-meta"> <span> Category</span> </div>
                                    </div>
                                    <h3 class="product-title"><a href="product-details.html">Brown Women Casual Top </a></h3>
                                    <div class="course_small-info mb-3">
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i> 4.5 <a href="#">(10)</a></div>
                                    <div class="price__group">
                                        <div class="price-box"><span>Ksh: 1000.00</span> <span>Ksh: 1200.00</span></div>
                                        <a href="shop-cart.html" class="btn btn__read-more btn__cart"><span class="btn-text">Add to Cart</span> <i class="bi bi-bag cirlce-bg"></i></a>
                                    </div>
                                </div>
                                <!-- Product Body Content End -->
                            </div>
                            <!-- Product wrapper End -->
                        </div>
                        <!-- slide 4 -->
                        <div class="swiper-slide">
                            <!-- Product wrapper -->
                            <div class="courses card rounded_corner-4 overflow-hidden">
                                <!-- Product Image -->
                                <div class="img-box">
                                    <img src="assets/img/prod-img-01.jpg" alt="img" class="img-fluid primary-img">
                                    <img src="assets/img/prod-img-hover-01.jpg" alt="img" class="img-fluid primary-hover-img">
                                    <span class="c-category">20% Off</span>
                                    <a href="#" class="item_like" data-bs-toggle="tooltip" data-bs-placement="left" title="Quick view"><span><i class="bi bi-eye fs-5"></i></span></a>
                                    <a href="#" class="item_view" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><span><i class="bi bi-heart fs-5"></i></span></a>
                                </div>
                                <!-- Product Image End -->
                                <!-- Product Body Content -->
                                <div class="p-4 card-body">
                                    <div class="course_small-info d-flex justify-content-between">
                                        <div class="course_info-meta"> <span> Category</span> </div>
                                    </div>
                                    <h3 class="product-title"><a href="product-details.html">Brown Women Casual Top </a></h3>
                                    <div class="course_small-info mb-3">
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i> 4.5 <a href="#">(10)</a></div>
                                    <div class="price__group">
                                        <div class="price-box"><span>Ksh: 750.00</span> <span>Ksh: 1000.00</span></div>
                                        <a href="shop-cart.html" class="btn btn__read-more btn__cart"><span class="btn-text">Add to Cart</span> <i class="bi bi-bag cirlce-bg"></i></a>
                                    </div>
                                </div>
                                <!-- Product Body Content End -->
                            </div>
                            <!-- Product wrapper End -->
                        </div>
                        <!-- slide 5 -->
                        <div class="swiper-slide">
                            <!-- Product wrapper -->
                            <div class="courses card rounded_corner-4 overflow-hidden">
                                <!-- Product Image -->
                                <div class="img-box">
                                    <img src="assets/img/prod-img-01.jpg" alt="img" class="img-fluid primary-img">
                                    <img src="assets/img/prod-img-hover-01.jpg" alt="img" class="img-fluid primary-hover-img">
                                    <span class="c-category">20% Off</span>
                                    <a href="#" class="item_like" data-bs-toggle="tooltip" data-bs-placement="left" title="Quick view"><span><i class="bi bi-eye fs-5"></i></span></a>
                                    <a href="#" class="item_view" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><span><i class="bi bi-heart fs-5"></i></span></a>
                                </div>
                                <!-- Product Image End -->
                                <!-- Product Body Content -->
                                <div class="p-4 card-body">
                                    <div class="course_small-info d-flex justify-content-between">
                                        <div class="course_info-meta"> <span> Category</span> </div>
                                    </div>
                                    <h3 class="product-title"><a href="product-details.html">Brown Women Casual Top </a></h3>
                                    <div class="course_small-info mb-3">
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i> 4.5 <a href="#">(10)</a></div>
                                    <div class="price__group">
                                        <div class="price-box"><span>Ksh: 1500.00</span> <span>Ksh: 2000.00</span></div>
                                        <a href="shop-cart.html" class="btn btn__read-more btn__cart"><span class="btn-text">Add to Cart</span> <i class="bi bi-bag cirlce-bg"></i></a>
                                    </div>
                                </div>
                                <!-- Product Body Content End -->
                            </div>
                            <!-- Product wrapper End -->
                        </div>
                        <!-- slide 6 -->
                        <div class="swiper-slide">
                            <!-- Product wrapper -->
                            <div class="courses card rounded_corner-4 overflow-hidden">
                                <!-- Product Image -->
                                <div class="img-box">
                                    <img src="assets/img/prod-img-01.jpg" alt="img" class="img-fluid primary-img">
                                    <img src="assets/img/prod-img-hover-01.jpg" alt="img" class="img-fluid primary-hover-img">
                                    <span class="c-category">20% Off</span>
                                    <a href="#" class="item_like" data-bs-toggle="tooltip" data-bs-placement="left" title="Quick view"><span><i class="bi bi-eye fs-5"></i></span></a>
                                    <a href="#" class="item_view" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><span><i class="bi bi-heart fs-5"></i></span></a>
                                </div>
                                <!-- Product Image End -->
                                <!-- Product Body Content -->
                                <div class="p-4 card-body">
                                    <div class="course_small-info d-flex justify-content-between">
                                        <div class="course_info-meta"> <span> Category</span> </div>
                                    </div>
                                    <h3 class="product-title">
                                        <a href="product-details.html">Brown Women Casual Top </a>
                                    </h3>
                                    <div class="course_small-info mb-3">
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i> 4.5 <a href="#">(10)</a></div>
                                    <div class="price__group">
                                        <div class="price-box"><span>Ksh: 1500.00</span> <span>Ksh: 2000.00</span></div>
                                        <a href="shop-cart.html" class="btn btn__read-more btn__cart"><span class="btn-text">Add to Cart</span> <i class="bi bi-bag cirlce-bg"></i></a>
                                    </div>
                                </div>
                                <!-- Product Body Content End -->
                            </div>
                            <!-- Product wrapper End -->
                        </div>
                    </div>

                </div>

            </div>
        </section>
        <!-- End -->

        <!-- Promotion Banner -->
        <div class="py-5 px-3 px-md-0">
            <div class="container jumbotron bg-color-light rounded_corner-4 bg-pos-full border aos-init aos-animate" data-aos="fade-up" data-aos-once="ture">
                <div class="row">
                    <div class="col-md-6 img order-2 order-md-1">
                        <img src="assets/img/girl.png" alt="image" class="img-fluid mt-n7">
                    </div>
                    <div class="col-md-6 order-1 order-md-2">
                        <div class="p-5">
                            <h4 class="subheading-style-01">Special Offers</h4>
                            <h2>Exclusive Collection For Winters</h2>
                            <p class="d-none d-lg-block">Indulge in the warmth of winter fashion at DealTech Solutions! Explore our Exclusive Winter Collection, where style meets comfort. Elevate your wardrobe with cozy essentials and chic trends. Unwrap the season's finest at DealTech Solutions. Shop now and stay fashionably warm! #DealTechFashion #WinterEssentials.</p>
                            <a href="#" class="btn btn-primary btn-size btn-radius-100 mt-5">Shop Now</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <!-- End -->


        <!-- New Arrivals Section -->
        <section class="section pt-5">
            <div class="container">
                <div class="swiper mySwiper">
                    <div class="section-heading-txt">
                        <h3 class="text-start">New Arrivals Products </h3>
                    </div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-wrapper mb-5">
                        <!-- slide 1 -->
                        <div class="swiper-slide">
                            <!-- Product wrapper -->
                            <div class="courses card rounded_corner-4 overflow-hidden">
                                <!-- Product Image -->
                                <div class="img-box">
                                    <img src="assets/img/prod-img-01.jpg" alt="img" class="img-fluid primary-img">
                                    <img src="assets/img/prod-img-hover-01.jpg" alt="img" class="img-fluid primary-hover-img">
                                    <span class="c-category">20% Off</span>
                                    <a href="#" class="item_like" data-bs-toggle="tooltip" data-bs-placement="left" title="Quick view"><span><i class="bi bi-eye fs-5"></i></span></a>
                                    <a href="#" class="item_view" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><span><i class="bi bi-heart fs-5"></i></span></a>
                                </div>
                                <!-- Product Image End -->
                                <!-- Product Body Content -->
                                <div class="p-4 card-body">
                                    <div class="course_small-info d-flex justify-content-between">
                                        <div class="course_info-meta"> <span> Category</span> </div>
                                    </div>
                                    <h3 class="product-title"><a href="product-details.html" <a> Men and Women Casual </a></h3>
                                    <div class="course_small-info mb-3">
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i> 4.5 <a href="#">(10)</a></div>
                                    <div class="price__group">
                                        <div class="price-box"><span>Ksh: 1500.00</span> <span>Ksh: 2000.00</span></div>
                                        <a href="shop-cart.html" class="btn btn__read-more btn__cart"><span class="btn-text">Add to Cart</span> <i class="bi bi-bag cirlce-bg"></i></a>
                                    </div>
                                </div>
                                <!-- Product Body Content End -->
                            </div>
                            <!-- Product wrapper End -->
                        </div>
                        <!-- slide 2 -->
                        <div class="swiper-slide">
                            <!-- Product wrapper -->
                            <div class="courses card rounded_corner-4 overflow-hidden">
                                <!-- Product Image -->
                                <div class="img-box">
                                    <img src="assets/img/prod-img-01.jpg" alt="img" class="img-fluid primary-img">
                                    <img src="assets/img/prod-img-hover-01.jpg" alt="img" class="img-fluid primary-hover-img">
                                    <span class="c-category">20% Off</span>
                                    <a href="#" class="item_like" data-bs-toggle="tooltip" data-bs-placement="left" title="Quick view"><span><i class="bi bi-eye fs-5"></i></span></a>
                                    <a href="#" class="item_view" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><span><i class="bi bi-heart fs-5"></i></span></a>
                                </div>
                                <!-- Product Image End -->
                                <!-- Product Body Content -->
                                <div class="p-4 card-body">
                                    <div class="course_small-info d-flex justify-content-between">
                                        <div class="course_info-meta"> <span> Category</span> </div>
                                    </div>
                                    <h3 class="product-title"><a href="product-details.html">NEW Casual</a></h3>
                                    <div class="course_small-info mb-3">
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i> 4.5 <a href="#">(10)</a></div>
                                    <div class="price__group">
                                        <div class="price-box"><span>Ksh: 1500.00</span> <span>Ksh: 2000.00</span></div>
                                        <a href="shop-cart.html" class="btn btn__read-more btn__cart"><span class="btn-text">Add to Cart</span> <i class="bi bi-bag cirlce-bg"></i></a>
                                    </div>
                                </div>
                                <!-- Product Body Content End -->
                            </div>
                            <!-- Product wrapper End -->
                        </div>
                        <!-- slide 3 -->
                        <div class="swiper-slide">
                            <!-- Product wrapper -->
                            <div class="courses card rounded_corner-4 overflow-hidden">
                                <!-- Product Image -->
                                <div class="img-box">
                                    <img src="assets/img/prod-img-01.jpg" alt="img" class="img-fluid primary-img">
                                    <img src="assets/img/prod-img-hover-01.jpg" alt="img" class="img-fluid primary-hover-img">
                                    <span class="c-category">20% Off</span>
                                    <a href="#" class="item_like" data-bs-toggle="tooltip" data-bs-placement="left" title="Quick view"><span><i class="bi bi-eye fs-5"></i></span></a>
                                    <a href="#" class="item_view" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><span><i class="bi bi-heart fs-5"></i></span></a>
                                </div>
                                <!-- Product Image End -->
                                <!-- Product Body Content -->
                                <div class="p-4 card-body">
                                    <div class="course_small-info d-flex justify-content-between">
                                        <div class="course_info-meta"> <span> Category</span> </div>
                                    </div>
                                    <h3 class="product-title"><a href="product-details.html">TRENDING Casual </a></h3>
                                    <div class="course_small-info mb-3">
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i> 4.5 <a href="#">(10)</a></div>
                                    <div class="price__group">
                                        <div class="price-box"><span>Ksh: 1500.00</span> <span>Ksh: 2000.00</span></div>
                                        <a href="shop-cart.html" class="btn btn__read-more btn__cart"><span class="btn-text">Add to Cart</span> <i class="bi bi-bag cirlce-bg"></i></a>
                                    </div>
                                </div>
                                <!-- Product Body Content End -->
                            </div>
                            <!-- Product wrapper End -->
                        </div>
                        <!-- slide 4 -->
                        <div class="swiper-slide">
                            <!-- Product wrapper -->
                            <div class="courses card rounded_corner-4 overflow-hidden">
                                <!-- Product Image -->
                                <div class="img-box">
                                    <img src="assets/img/prod-img-01.jpg" alt="img" class="img-fluid primary-img">
                                    <img src="assets/img/prod-img-hover-01.jpg" alt="img" class="img-fluid primary-hover-img">
                                    <span class="c-category">20% Off</span>
                                    <a href="#" class="item_like" data-bs-toggle="tooltip" data-bs-placement="left" title="Quick view"><span><i class="bi bi-eye fs-5"></i></span></a>
                                    <a href="#" class="item_view" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><span><i class="bi bi-heart fs-5"></i></span></a>
                                </div>
                                <!-- Product Image End -->
                                <!-- Product Body Content -->
                                <div class="p-4 card-body">
                                    <div class="course_small-info d-flex justify-content-between">
                                        <div class="course_info-meta"> <span> Category</span> </div>
                                    </div>
                                    <h3 class="product-title"><a href="product-details.html">Brown Women Casual Top </a></h3>
                                    <div class="course_small-info mb-3">
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i> 4.5 <a href="#">(10)</a></div>
                                    <div class="price__group">
                                        <div class="price-box"><span>Ksh: 1500.00</span> <span>Ksh: 2000.00</span></div>
                                        <a href="shop-cart.html" class="btn btn__read-more btn__cart"><span class="btn-text">Add to Cart</span> <i class="bi bi-bag cirlce-bg"></i></a>
                                    </div>
                                </div>
                                <!-- Product Body Content End -->
                            </div>
                            <!-- Product wrapper End -->
                        </div>
                        <!-- slide 5 -->
                        <div class="swiper-slide">
                            <!-- Product wrapper -->
                            <div class="courses card rounded_corner-4 overflow-hidden">
                                <!-- Product Image -->
                                <div class="img-box">
                                    <img src="assets/img/prod-img-01.jpg" alt="img" class="img-fluid primary-img">
                                    <img src="assets/img/prod-img-hover-01.jpg" alt="img" class="img-fluid primary-hover-img">
                                    <span class="c-category">20% Off</span>
                                    <a href="#" class="item_like" data-bs-toggle="tooltip" data-bs-placement="left" title="Quick view"><span><i class="bi bi-eye fs-5"></i></span></a>
                                    <a href="#" class="item_view" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><span><i class="bi bi-heart fs-5"></i></span></a>
                                </div>
                                <!-- Product Image End -->
                                <!-- Product Body Content -->
                                <div class="p-4 card-body">
                                    <div class="course_small-info d-flex justify-content-between">
                                        <div class="course_info-meta"> <span> Category</span> </div>
                                    </div>
                                    <h3 class="product-title"><a href="product-details.html">Brown Women Casual Top </a></h3>
                                    <div class="course_small-info mb-3">
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i> 4.5 <a href="#">(10)</a></div>
                                    <div class="price__group">
                                        <div class="price-box"><span>Ksh: 1500.00</span> <span>Ksh: 2000.00</span></div>
                                        <a href="shop-cart.html" class="btn btn__read-more btn__cart"><span class="btn-text">Add to Cart</span> <i class="bi bi-bag cirlce-bg"></i></a>
                                    </div>
                                </div>
                                <!-- Product Body Content End -->
                            </div>
                            <!-- Product wrapper End -->
                        </div>
                        <!-- slide 6 -->
                        <div class="swiper-slide">
                            <!-- Product wrapper -->
                            <div class="courses card rounded_corner-4 overflow-hidden">
                                <!-- Product Image -->
                                <div class="img-box">
                                    <img src="assets/img/prod-img-01.jpg" alt="img" class="img-fluid primary-img">
                                    <img src="assets/img/prod-img-hover-01.jpg" alt="img" class="img-fluid primary-hover-img">
                                    <span class="c-category">20% Off</span>
                                    <a href="#" class="item_like" data-bs-toggle="tooltip" data-bs-placement="left" title="Quick view"><span><i class="bi bi-eye fs-5"></i></span></a>
                                    <a href="#" class="item_view" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><span><i class="bi bi-heart fs-5"></i></span></a>
                                </div>
                                <!-- Product Image End -->
                                <!-- Product Body Content -->
                                <div class="p-4 card-body">
                                    <div class="course_small-info d-flex justify-content-between">
                                        <div class="course_info-meta"> <span> Category</span> </div>
                                    </div>
                                    <h3 class="product-title"><a href="product-details.html">Brown Women Casual Top </a></h3>
                                    <div class="course_small-info mb-3">
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i> 4.5 <a href="#">(10)</a></div>
                                    <div class="price__group">
                                        <div class="price-box"><span>Ksh: 1500.00</span> <span>Ksh: 2000.00</span></div>
                                        <a href="shop-cart.html" class="btn btn__read-more btn__cart"><span class="btn-text">Add to Cart</span> <i class="bi bi-bag cirlce-bg"></i></a>
                                    </div>
                                </div>
                                <!-- Product Body Content End -->
                            </div>
                            <!-- Product wrapper End -->
                        </div>
                    </div>

                </div>

            </div>
        </section>
        <!-- End -->

        <!-- Testimonials -->
        <section class="section pt-0">
            <div class="container-fluid">
                <div class="row g-4">
                    <div class="col-md-6 subs-bg">
                    </div>
                    <div class="col-md-6 bg-color-light">
                        <div class="section-heading-txt justify-content-center p-3" data-aos="fade-up" data-aos-once="ture">
                            <!-- Heading -->
                            <div class="section__heading-wrap align-items-center pt-4 mb-3">
                                <h2 class="heading-text">Customer Feedback</h2>
                            </div>
                            <div class="testi__comments-wrap" data-aos="fade-up" data-aos-once="true" data-aos-duration="700" data-aos-delay="20">
                                <div id="testimonials__slider" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                        <!-- Testimonial Comment one -->
                                        <div class="carousel-item text-center active">
                                            <div class="d-flex flex-column">
                                                <div class="testi-content flex-column align-items-center justify-content-center me-5">
                                                    <div class="test-img">
                                                        <img src="assets/img/01.jpg" alt="" class="">
                                                    </div>
                                                    <div class="content-group text-center mt-3">
                                                        <h3>Jane Kangai</h3>
                                                        <span>Fashion Designer</span>
                                                    </div>
                                                </div>
                                                <div class="testimonials-box text-center">
                                                    <i class="bi bi-quote"></i>
                                                    <p>"I absolutely love shopping at DEALTECH SOLUTIONS for my fashion needs. Their unique designs and quality fabrics keep me coming back for more!"</p>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Testimonial Comment Two -->
                                        <div class="carousel-item text-center">
                                            <div class="d-flex flex-column">
                                                <div class="testi-content flex-column align-items-center justify-content-center me-5">
                                                    <div class="test-img">
                                                        <img src="assets/img/05.jpg" alt="" class="img-fluid">
                                                    </div>
                                                    <div class="content-group mt-3">
                                                        <h3>Abdullahi Ahmedinasir</h3>
                                                        <span>Happy Customer</span>
                                                    </div>
                                                </div>
                                                <div class="testimonials-box text-center">
                                                    <i class="bi bi-quote"></i>
                                                    <p>"DEALTECH SOLUTIONS has a fantastic collection of trendy and stylish clothing. The shopping experience is always delightful, and the staff is friendly and helpful."</p>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Testimonial Comment Three -->
                                        <div class="carousel-item text-center">
                                            <div class="d-flex flex-column">
                                                <div class="testi-content flex-column align-items-center justify-content-center me-5">
                                                    <div class="test-img">
                                                        <img src="assets/img/06.jpg" alt="img">
                                                    </div>
                                                    <div class="content-group mt-3">
                                                        <h3>Nancy Odhiambo</h3>
                                                        <span>Satisfied Shopper</span>
                                                    </div>
                                                </div>
                                                <div class="testimonials-box text-center">
                                                    <i class="bi bi-quote"></i>
                                                    <p>"Finding unique and elegant fashion pieces is effortless at DEALTECH SOLUTIONS. Their collection reflects the latest trends, and the quality is superb."</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Slider controllers -->
                                    <div class="carousel-indicators">
                                        <button type="button" data-bs-target="#testimonials__slider" data-bs-slide-to="0" class="active" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#testimonials__slider" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#testimonials__slider" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                    <!-- End -->
                                </div>
                            </div>
                            </div>               
        <!-- End -->

        <!-- Our Subscribe -->
        <section class="section py-0 position-relative">
            <div class="container position-relative subs-container">
                <div class="row aos-init aos-animate" data-aos="fade-up" data-aos-once="ture" data-aos-duration="700" data-aos-delay="80">
                    <!-- Heading -->
                    <div class="col-md-12 text-center">
                        <h2 class="subs-text text-center">Subscribe Newsletter</h2>
                        <span class="subheading-style-01">Subscribe Now and get more offers</span>
                    </div>
                    <!-- End -->
                    <!-- Subscribe Form -->
                    <div class="col-md-7 offset-md-3 d-flex justify-content-center">
                        <div class="container">
                            <form class="row g-2 g-md-0 pt-3 d-flex justify-content-center align-items-center">
                                <div class="col-md-8">
                                    <label for="inputSubscribe" class="visually-hidden">Subscribe</label>
                                    <input type="text" id="inputSubscribe" class="form-control input-box" placeholder="Subscribe">
                                </div>
                                <div class="col-md-4">
                                    <button type="submit" class="btn btn-primary subs-btn">Subsribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <!-- End -->
                </div>
            </div>
            <img src="assets/img/bg-4.png" alt="" class="position-absolute top-0">
        </section>
        <!-- Our subscribe End -->


    </main>

    <!-- Footer section -->
    <footer class="footer pb-0">
        <div class="container p-4">
            <div class="row g-4 row-cols-1 row-cols-md-2 row-cols-lg-4" data-aos="fade-right" data-aos-once="true" data-aos-duration="500" data-aos-delay="20">
                <!-- Col 1 -->
                <div class="col">
                    <div class="footer__col-one">
                        <!-- Footer Logo -->
                        <a href="#" class="footer-logo">
                            <img src="assets/img/footer-logo.png" alt="">
                        </a>
                        <!-- End -->
                        <p>DEALTECH is your ultimate destination for the fashion. Find everything from ladies, men and kids clothing.</p>
                    </div>
                    <div class="social-links">
                        <a href="https://www.x.com/dealskipper" target="_blank"><i class="bi bi-twitter"></i></a>
                        <a href="https://www.facebook.com/deal.skipper" target="_blank"><i class="bi bi-facebook"></i></a>
                        <a href="https://www.youtube.com/user/dealskipper" target="_blank"><i class="bi bi-youtube"></i></a>
                        <a href="https://www.linkedin.com/company/dealskipper" target="_blank"><i class="bi bi-linkedin"></i></a>
                    </div>
                </div>
                <!-- End -->
                <!-- Col 2 -->
                <div class="col" data-aos="fade-right" data-aos-once="true" data-aos-duration="600" data-aos-delay="40">
                    <h5>Company</h5>
                    <ul class="mt-3">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="blog.html">Blog</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
                <!-- End -->
                <!-- Col 3 -->
                <div class="col" data-aos="fade-right" data-aos-once="true" data-aos-duration="700" data-aos-delay="60">
                    <h5>Support</h5>
                    <ul class="mt-3">
                        <li><a href="shop.html">Products</a></li>
                            </ul>
                </div>
                <!-- End -->
                <!-- Col 4 -->
                <div class="col" data-aos="fade-right" data-aos-once="true" data-aos-duration="800" data-aos-delay="80">
                    <h5>Connect with Us</h5>
                    <address>
                        DEALTECH<br>
                        Upperhill, Nairobi<br>
                        Nairobi, Kenya<br>
                        <strong>Phone No.</strong> +254 703 495 050
                    </address>
                </div>
                <!-- End -->
            </div>
        </div>
        <div class="container">
            <div class="row footer-border-top p-3">
                <div class="col-6 small text-white text-styling">
                    Copyright@2023. All Rights Reserved | Designed by : <a href="https://www.linkedin.com/in/deal-skipper-446bb4103" target="_blank">Deal Skipper</a>
                </div>
            </div>
        </div>
    </footer>
        <!-- Footer End -->

    <!-- Bootstrap js -->
    <script src="assets/js/bootstrap.bundle.min.js"></script>
    <!-- aos.js for animation on scroll -->
    <script src="assets/plugins/aos/aos.js"></script>
    <!-- Swiper slider js -->
    <script src="assets/plugins/Swiper-slider/swiper-bundle.min.js"></script>
    <!-- Glightbox js -->
    <script src="assets/plugins/glightbox/glightbox.min.js"></script>
    <!-- Script for Counter -->
    <script src="assets/plugins/counter/jquery.min.js"></script>
    <script src="assets/plugins/counter/waypoints.min.js"></script>
    <script src="assets/plugins/counter/jquery.counterup.min.js"></script>
    <!-- function.js -->
    <script src="assets/js/function.js"></script>


</body>

</html>
