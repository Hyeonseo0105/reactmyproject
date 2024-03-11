import {Fragment} from "react";
import {Link} from "react-router-dom";

function Home(){
    return (
        <Fragment>
            <section className="page-section" id="services">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Services</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <div className="row text-center">
                        <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
                        </span>
                            <h4 className="my-3">E-Commerce</h4>
                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                                maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                        </div>
                        <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-laptop fa-stack-1x fa-inverse"></i>
                        </span>
                            <h4 className="my-3">Responsive Design</h4>
                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                                maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                        </div>
                        <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-lock fa-stack-1x fa-inverse"></i>
                        </span>
                            <h4 className="my-3">Web Security</h4>
                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                                maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="page-section bg-light" id="portfolio">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Portfolio</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-sm-6 mb-4">
                            <div className="portfolio-item">
                                <Link className="portfolio-link" data-bs-toggle="modal" to="#portfolioModal1">
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i>
                                        </div>
                                    </div>
                                    <img className="img-fluid" src="assets/img/portfolio/1.jpg" alt="..."/>
                                </Link>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">Threads</div>
                                    <div className="portfolio-caption-subheading text-muted">Illustration</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-4">
                            <div className="portfolio-item">
                                <Link className="portfolio-link" data-bs-toggle="modal" to="#portfolioModal2">
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i>
                                        </div>
                                    </div>
                                    <img className="img-fluid" src="assets/img/portfolio/2.jpg" alt="..."/>
                                </Link>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">Explore</div>
                                    <div className="portfolio-caption-subheading text-muted">Graphic Design</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-4">
                            <div className="portfolio-item">
                                <Link className="portfolio-link" data-bs-toggle="modal" to="#portfolioModal3">
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i>
                                        </div>
                                    </div>
                                    <img className="img-fluid" src="assets/img/portfolio/3.jpg" alt="..."/>
                                </Link>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">Finish</div>
                                    <div className="portfolio-caption-subheading text-muted">Identity</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                            <div className="portfolio-item">
                                <Link className="portfolio-link" data-bs-toggle="modal" to="#portfolioModal4">
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i>
                                        </div>
                                    </div>
                                    <img className="img-fluid" src="assets/img/portfolio/4.jpg" alt="..."/>
                                </Link>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">Lines</div>
                                    <div className="portfolio-caption-subheading text-muted">Branding</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-4 mb-sm-0">
                            <div className="portfolio-item">
                                <Link className="portfolio-link" data-bs-toggle="modal" to="#portfolioModal5">
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i>
                                        </div>
                                    </div>
                                    <img className="img-fluid" src="assets/img/portfolio/5.jpg" alt="..."/>
                                </Link>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">Southwest</div>
                                    <div className="portfolio-caption-subheading text-muted">Website Design</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="portfolio-item">
                                <Link className="portfolio-link" data-bs-toggle="modal" to="#portfolioModal6">
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i>
                                        </div>
                                    </div>
                                    <img className="img-fluid" src="assets/img/portfolio/6.jpg" alt="..."/>
                                </Link>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">Window</div>
                                    <div className="portfolio-caption-subheading text-muted">Photography</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="page-section" id="about">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">About</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <ul className="timeline">
                        <li>
                            <div className="timeline-image"><img className="rounded-circle img-fluid"
                                                                 src="assets/img/about/1.jpg" alt="..."/></div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>2009-2011</h4>
                                    <h4 className="subheading">Our Humble Beginnings</h4>
                                </div>
                                <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis
                                    temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore
                                    laudantium consectetur!</p></div>
                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-image"><img className="rounded-circle img-fluid"
                                                                 src="assets/img/about/2.jpg" alt="..."/></div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>March 2011</h4>
                                    <h4 className="subheading">An Agency is Born</h4>
                                </div>
                                <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis
                                    temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore
                                    laudantium consectetur!</p></div>
                            </div>
                        </li>
                        <li>
                            <div className="timeline-image"><img className="rounded-circle img-fluid"
                                                                 src="assets/img/about/3.jpg" alt="..."/></div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>December 2015</h4>
                                    <h4 className="subheading">Transition to Full Service</h4>
                                </div>
                                <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis
                                    temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore
                                    laudantium consectetur!</p></div>
                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-image"><img className="rounded-circle img-fluid"
                                                                 src="assets/img/about/4.jpg" alt="..."/></div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>July 2020</h4>
                                    <h4 className="subheading">Phase Two Expansion</h4>
                                </div>
                                <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis
                                    temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore
                                    laudantium consectetur!</p></div>
                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-image">
                                <h4>
                                    Be Part
                                    <br/>
                                    Of Our
                                    <br/>
                                    Story!
                                </h4>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="page-section bg-light" id="team">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="team-member">
                                <img className="mx-auto rounded-circle" src="assets/img/team/1.jpg" alt="..."/>
                                <h4>Parveen Anand</h4>
                                <p className="text-muted">Lead Designer</p>
                                <Link className="btn btn-dark btn-social mx-2" to="#!"
                                   aria-label="Parveen Anand Twitter Profile"><i className="fab fa-twitter"></i></Link>
                                <Link className="btn btn-dark btn-social mx-2" to="#!"
                                   aria-label="Parveen Anand Facebook Profile"><i className="fab fa-facebook-f"></i></Link>
                                <Link className="btn btn-dark btn-social mx-2" to="#!"
                                   aria-label="Parveen Anand LinkedIn Profile"><i
                                    className="fab fa-linkedin-in"></i></Link>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="team-member">
                                <img className="mx-auto rounded-circle" src="assets/img/team/2.jpg" alt="..."/>
                                <h4>Diana Petersen</h4>
                                <p className="text-muted">Lead Marketer</p>
                                <Link className="btn btn-dark btn-social mx-2" to="#!"
                                   aria-label="Diana Petersen Twitter Profile"><i className="fab fa-twitter"></i></Link>
                                <Link className="btn btn-dark btn-social mx-2" to="#!"
                                   aria-label="Diana Petersen Facebook Profile"><i
                                    className="fab fa-facebook-f"></i></Link>
                                <Link className="btn btn-dark btn-social mx-2" to="#!"
                                   aria-label="Diana Petersen LinkedIn Profile"><i
                                    className="fab fa-linkedin-in"></i></Link>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="team-member">
                                <img className="mx-auto rounded-circle" src="assets/img/team/3.jpg" alt="..."/>
                                <h4>Larry Parker</h4>
                                <p className="text-muted">Lead Developer</p>
                                <Link className="btn btn-dark btn-social mx-2" to="#!"
                                   aria-label="Larry Parker Twitter Profile"><i className="fab fa-twitter"></i></Link>
                                <Link className="btn btn-dark btn-social mx-2" to="#!"
                                   aria-label="Larry Parker Facebook Profile"><i className="fab fa-facebook-f"></i></Link>
                                <Link className="btn btn-dark btn-social mx-2" to="#!"
                                   aria-label="Larry Parker LinkedIn Profile"><i className="fab fa-linkedin-in"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Lorem ipsum dolor
                            sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad
                            perspiciatis, totam corporis ea, alias ut unde.</p></div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Home
