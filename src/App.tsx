import "./App.css";

function App() {
  return (
    <>
      <div className="main-layout">
        <header className="full_bg">
          <div className="header">
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                  <div className="full">
                    <div className="center-desk">
                      <div className="logo">
                        <a href="index.html">2Rings</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                  <nav className="navigation navbar navbar-expand-md navbar-dark ">
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarsExample04"
                      aria-controls="navbarsExample04"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                      className="collapse navbar-collapse"
                      id="navbarsExample04"
                    >
                      <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                          <a className="nav-link" href="index.html">
                            Home
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="about.html">
                            About
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="service.html">
                            Service
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="blog.html">
                            Blog
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="contact.html">
                            Contact Us
                          </a>
                        </li>
                      </ul>
                    </div>
                    <ul className="search">
                      <li>
                        <a href="Javascript:void(0)">
                          <i className="fa fa-search" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>

          <section className="banner_main">
            <div
              id="myCarousel"
              className="carousel slide banner"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#myCarousel"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="container">
                    <div className="carousel-caption  banner_po">
                      <div className="row">
                        <div className="col-lg-8 col-md-9 ">
                          <div className="build_box">
                            <h1>
                              Wedding <span className="orang"> Couple</span>
                            </h1>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut
                              laboreLorem ipsum dolor sit amet, consectetur
                              adipiscing elit, sed do eiusmod tempor incididunt
                              ut labore
                            </p>
                            <a
                              className="read_more quote_btn"
                              href="Javascript:void(0)"
                              role="button"
                            >
                              Get A Quote
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="container">
                    <div className="carousel-caption banner_po">
                      <div className="row">
                        <div className="col-lg-8 col-md-9 ">
                          <div className="build_box">
                            <h1>
                              Wedding <span className="orang"> Couple</span>
                            </h1>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut
                              laboreLorem ipsum dolor sit amet, consectetur
                              adipiscing elit, sed do eiusmod tempor incididunt
                              ut labore
                            </p>
                            <a
                              className="read_more quote_btn"
                              href="Javascript:void(0)"
                              role="button"
                            >
                              Get A Quote
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="container">
                    <div className="carousel-caption banner_po">
                      <div className="row">
                        <div className="col-lg-8 col-md-9 ">
                          <div className="build_box">
                            <h1>
                              Wedding <span className="orang"> Couple</span>
                            </h1>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut
                              laboreLorem ipsum dolor sit amet, consectetur
                              adipiscing elit, sed do eiusmod tempor incididunt
                              ut labore
                            </p>
                            <a
                              className="read_more quote_btn"
                              href="Javascript:void(0)"
                              role="button"
                            >
                              Get A Quote
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#myCarousel"
                role="button"
                data-slide="prev"
              >
                <i className="fa fa-angle-left" aria-hidden="true"></i>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#myCarousel"
                role="button"
                data-slide="next"
              >
                <i className="fa fa-angle-right" aria-hidden="true"></i>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </section>
        </header>
      </div>

      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2 col-sm-8 offset-sm-2">
              <div className="play_btn text_align_center">
                <img src="images/play.png" alt="#" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="plane">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="titlepage">
                <h2>Our Plane</h2>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod t dolor in reprehenderit in voluptate{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="plan_bax text_align_center">
                <figure>
                  <img src="images/plan_img.jpg" alt="#" />
                </figure>
                <div id="ho_plan" className="plan_text">
                  <h3>FLOWER DECORATIONS</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod t dolor in reprehenderit in voluptate{" "}
                  </p>
                  <a className="read_more" href="Javascript:void(0)">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="plan_bax text_align_center">
                <figure>
                  <img src="images/plan_img1.jpg" alt="#" />
                </figure>
                <div id="ho_plan" className="plan_text">
                  <h3>BEST RESTAURANT</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod t dolor in reprehenderit in voluptate{" "}
                  </p>
                  <a className="read_more" href="Javascript:void(0)">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="plan_bax text_align_center">
                <figure>
                  <img src="images/plan_img2.jpg" alt="#" />
                </figure>
                <div id="ho_plan" className="plan_text">
                  <h3>HONEYMOON</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod t dolor in reprehenderit in voluptate{" "}
                  </p>
                  <a className="read_more" href="Javascript:void(0)">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="groomsmen">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="titlepage">
                <h2>Bridesmaids And Groomsmen</h2>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod t dolor in reprehenderit in voluptate{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="brid text_align_center">
                <figure>
                  <img src="images/ber_img.jpg" alt="#" />
                </figure>
                <h3> Voluptate </h3>
              </div>
            </div>
            <div className="col-md-4 margin_top70">
              <div className="brid text_align_center">
                <figure>
                  <img src="images/ber_img1.jpg" alt="#" />
                </figure>
                <h3> Voluptate </h3>
              </div>
            </div>
            <div className="col-md-4">
              <div className="brid text_align_center">
                <figure>
                  <img src="images/ber_img2.jpg" alt="#" />
                </figure>
                <h3> Voluptate </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about">
         <div className="container ">
            <div className="row d_flex">
               <div className="col-md-5">
                  <div className="titlepage">
                     <h2>About Our Company</h2>
                     <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</span>
                     <a className="read_more" href="Javascript:void(0)"> Read More</a>
                  </div>
               </div>
               <div className="col-md-7">
                  <div className="about_img">
                     <figure><img src="images/about.png" alt="#"/></figure>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div className="blog">
         <div className="container ">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage">
                     <h2>FROM THE BLOG</h2>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-sm-12">
                  <div className="blog_bg margin_bottom30">
                     <div className="row d_flex">
                        <div className="col-md-6">
                           <div className="blog_img">
                              <figure><img src="images/blog_img1.jpg" alt="#"/></figure>
                              <span>06<br />Feb</span>
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className="marriage_text">
                              <span>Post by : Marriage </span>
                              <h3>Tempor incididunt ut labore et dolore</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                              <h4><strong>Like</strong> <strong className="padd_right">Comment</strong></h4>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-sm-12">
                  <div className="blog_bg">
                     <div className="row d_flex">
                        <div className="col-md-6">
                           <div className="blog_img">
                              <figure><img src="images/blog_img2.jpg" alt="#"/></figure>
                              <span>06<br />Feb</span>
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className="marriage_text">
                              <span>Post by : Marriage </span>
                              <h3>Tempor incididunt ut labore et dolore</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                              <h4><strong>Like</strong> <strong className="padd_right">Comment</strong></h4>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div className="says">
         <div className="container-fluid">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage">
                     <h2>What Is Says Our GROOMS</h2>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-md-12">
                  <div id="proj" className="carousel slide says_ban" data-ride="carousel">
                     <ol className="carousel-indicators">
                        <li data-target="#proj" data-slide-to="0" className="active"></li>
                        <li data-target="#proj" data-slide-to="1"></li>
                        <li data-target="#proj" data-slide-to="2"></li>
                     </ol>
                     <div className="carousel-inner">
                        <div className="carousel-item active">
                           <div className="container">
                              <div className="carousel-caption relative3">
                                 <div className="row">
                                    <div className="col-md-12">
                                       <div className="readert">
                                          <div className="readert_img text_align_center">
                                             <figure><img src="images/saya.png" alt="#"/></figure>
                                          </div>
                                          <div className="readert_text">
                                             <h3>Jacksmith sand</h3>
                                             <p>There are many variations of passages of Lorem Ipsum available, but the <br /> majority have suffered alteration in some form</p>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="carousel-item">
                           <div className="container">
                              <div className="carousel-caption relative3">
                                 <div className="row">
                                    <div className="col-md-12">
                                       <div className="readert">
                                          <div className="readert_img text_align_center">
                                             <figure><img src="images/saya.png" alt="#"/></figure>
                                          </div>
                                          <div className="readert_text">
                                             <h3>Jacksmith sand</h3>
                                             <p>There are many variations of passages of Lorem Ipsum available, but the <br /> majority have suffered alteration in some form</p>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="carousel-item">
                           <div className="container">
                              <div className="carousel-caption relative3">
                                 <div className="row">
                                    <div className="col-md-12">
                                       <div className="readert">
                                          <div className="readert_img text_align_center">
                                             <figure><img src="images/saya.png" alt="#"/></figure>
                                          </div>
                                          <div className="readert_text">
                                             <h3>Jacksmith sand</h3>
                                             <p>There are many variations of passages of Lorem Ipsum available, but the <br /> majority have suffered alteration in some form</p>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <a className="carousel-control-prev" href="#proj" role="button" data-slide="prev">
                        <i className="fa fa-arrow-left" aria-hidden="true"></i>
                        <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#proj" role="button" data-slide="next">
                        <i className="fa fa-arrow-right" aria-hidden="true"></i>
                        <span className="sr-only">Next</span>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="contact">
         <div className="container">
            <div className="row">
               <div className="col-sm-12">
                  <div className="ru_bg">
                     <div className="row">
                        <div className="col-md-3">
                          <a href="index.html"> <img className="logo_fooetr" src="images/logo_footer.png" alt="#"/></a>
                        </div>
                        <div className="col-md-9">
                           <ul className="lacation">
                              <li><i className="fa fa-map-marker" aria-hidden="true"></i> Gb road 123 london Uk </li>
                              <li><i className="fa fa-volume-control-phone" aria-hidden="true"></i> G(+01) 123456789012</li>
                              <li><i className="fa fa-envelope" aria-hidden="true"></i> demo@gmail.com</li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="row d_flex">
               <div className="col-md-6">
                  <div className="col-md-12">
                     <div className="titlepage">
                        <h2>Contact Us</h2>
                     </div>
                  </div>
                  <form id="request" className="main_form">
                     <div className="row">
                        <div className="col-md-12 ">
                           <input className="contactus" placeholder="Name" type="type" name="Name" /> 
                        </div>
                        <div className="col-md-12">
                           <input className="contactus" placeholder="Phone number" type="type" name="Phone number" />                          
                        </div>
                        <div className="col-md-12">
                           <input className="contactus" placeholder="Email" type="type" name="Email" /> 
                        </div>
                        <div className="col-md-12">
                           <textarea className="textarea" placeholder="Message" ></textarea>
                        </div>
                        <div className="col-md-6 col-sm-6">
                           <button className="send_btn">Send</button>
                        </div>
                        <div className="col-md-6 col-sm-6">
                           <ul className="social_icon">
                              <li><a href="Javascript:void(0)"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                              <li><a href="Javascript:void(0)"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                              <li><a href="Javascript:void(0)"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                              <li><a href="Javascript:void(0)"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                           </ul>
                        </div>
                     </div>
                  </form>
               </div>
               <div className="col-md-6">
                  <div className="map_main">
                     <div className="map-responsive">
                        <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Eiffel+Tower+Paris+France" width="600" height="378"  ></iframe>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <footer>
         <div className="footer">
            <div className="copyright">
               <div className="container">
                  <div className="row">
                     <div className="col-md-8 offset-md-2">
                        <p>© 2019 All Rights Reserved. <a href="https://html.design/"> Free Html Templates</a></p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
    </>
  );
}

export default App;
