
import cat1 from "../assets/cat1.jpeg";
import cat2 from "../assets/cat2.jpeg";
import cat3 from "../assets/cat3.jpeg";
import cat4 from "../assets/cat4.jpeg";
import vet from "../assets/vet.jpeg";

function Home() {
  return (
    <div>
      <div className="hero-section">
        <div className="hero-section-div">
          <h1>Welcome to our veterinary clinic</h1>
          <p className="info">
          Whether your pet needs routine vaccinations, regular check-ups, surgical procedures, or dental care, you can trust us to deliver comprehensive and personalized care tailored to their specific needs. We understand the importance of your pet's well-being, and we strive to create a warm and welcoming environment where both you and your furry companions feel comfortable.          </p>
          <div id="redirectBtn">
            <p className="alt-info">FOR MORE</p>
          </div>
        </div>
       <div className="hero-section-img"> 
          <img src={vet} />
        </div>  
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
      </div>  */}
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

            <a href="gamze@gmail.com">Email</a>
            <a href="tel:+05050505055">Phone</a>
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
