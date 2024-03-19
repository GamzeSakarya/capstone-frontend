
import cat1 from "../assets/cat1.jpeg";
import cat2 from "../assets/cat2.jpeg";
import cat3 from "../assets/cat3.jpeg";
import cat4 from "../assets/cat4.jpeg";

function Home() {
  return (
    <div>
      <div className="hero-section">
        <div className="hero-section-div">
          <h5>Lorem, ipsum dolor.</h5>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, animi.</h1>
          <p className="info">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis sunt expedita eius iste praesentium quos debitis velit rerum doloremque laboriosam vel numquam consequatur, veritatis maxime officia labore placeat voluptatibus iusto, eaque suscipit sit quaerat consectetur provident deleniti. Sit excepturi beatae illo aliquam. Nisi soluta, odit doloremque dicta veniam enim quia?
          </p>
          <div id="redirectBtn">
            <p className="alt-info">Button</p>
          </div>
        </div>
        {/* <div className="hero-section-img"> 
          <img src={cat1} />
        </div>  */}
      </div>

      {/* <div className="pet-connection">
        <h1>Connect with Your Pet</h1>
        <div className="pet-connection-innerDiv">
          <p>
            Stay connected with your furry friend through our latest pet
            telehealth updates and informative articles.
            <span>Discover More Pet Insights →</span>{" "}
          </p>
        </div>

        <div className="grid">
          <div className="grid-card">
            <img src={cat2} alt="" />
            <div>
              <span>Pet Care</span>
              <h3>Tips for Keeping Your Cat Healthy</h3>
              <p>
                Learn how to maintain your cats physical and mental health with
                our comprehensive guide. From regular vet check-ups to proper
                nutrition, weve got you covered.
              </p>

              <a>Explore →</a>
            </div>
          </div>
          <div className="grid-card">
            <img src={cat3} alt="" />
            <div>
              <span>Pet Wellness</span>
              <h3>Creating a Wellness Routine for Your Pet</h3>
              <p>
                Establish a routine that promotes your pets overall well-being.
                From daily exercise to mental stimulation, find out how to keep
                your pet happy and healthy.
              </p>
              <a>Explore →</a>
            </div>
          </div>
          <div className="grid-card">
            <img src={cat4} alt="" />
            <div>
              <span>Pet Nutrition</span>
              <h3>Essential Foods for Your Puppy</h3>
              <p>
                Discover the best foods to keep your puppy healthy and happy.
                From premium kibble to homemade treats, well help you make the
                right choices for your furry friend.
              </p>
              <a>Explore →</a>
            </div>
          </div>
        </div>
      </div> */}
      <footer>
        <div className="top-footer">
          <p>
            Veterinary medicine is a profession dedicated to protecting and
            improving the health of animals. Veterinarians diagnose, treat, and
            prevent health issues in both domestic and farm animals. They also
            provide guidance to pet owners on care and nutrition. Veterinary
            medicine is vital for both animal welfare and human health.
          </p>
        </div>
        <div className="bottom-footer">
          <div className="left-side">
            <h3>Contact</h3>

            <a href="mailto:example@example.com">Email</a>
            <a href="tel:+123456789">Phone</a>
            <a href="https://github.com/GamzeSakarya">GitHub</a>
            <a href="https://www.linkedin.com/in/gamze-sakarya-68a2b5269/">LinkedIn</a>
          </div>
          <div className="right-side">
            <h3>Helpful Links</h3>
            <a>Services</a>
            <a>Support</a>
            <a>Terms & Conditions</a>
            <a>Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
