import Navbar from "../NavBar/Navbar";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";

const Terms = () => {
    return(
        <>
      <Navbar />
      <Hero
        cName="hero-secondary"
        imageName={require("../../Assets/legal.jpg")}
      />
      <h1>Terms and Conditions</h1>
      <div className="content-container">
        <div className="text-container">
          <h2>Introduction</h2>
          <p>
            <br></br>
            The Terms and Conditions written on this webpage shall manage your use of our website, and the websites of our partners.<br></br><br></br>

            These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. You must not use this Website if you disagree with any of these Terms and Conditions.<br></br><br></br>

            This website and its products are provided "as is," and you agree to use our Website and use our partners' services at your own risk. We, nor our partners, are not liable for any damage, indirect or otherwise, that comes to you from your use of our website or from our partners' services.<br></br><br></br>

            People below 13 years old are not allowed to use this Website.<br></br><br></br>
          </p>
        </div>
        <div className="text-container">
          <h2>Restrictions</h2>
          <p>
            You are specifically restricted from all of the following:
            <br></br><br></br>
            selling, sublicensing and/or otherwise commercializing any Website material;<br></br>
            publicly performing and/or showing any Website material;<br></br>
            using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity;<br></br>
            engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website;<br></br>
            using this Website to engage in any advertising or marketing.<br></br>

            Certain areas of this Website are restricted from being access by you and O'Slot may further restrict access by you to any areas of this Website, at any time, in absolute discretion. Any user ID and password you may have for this Website are confidential and you must maintain confidentiality as well.<br></br><br></br>

            Governing Law & Jurisdiction<br></br>
            These Terms will be governed by and interpreted in accordance with the laws of Canada, and you submit to the non-exclusive jurisdiction of the federal courts located in Canada for the resolution of any disputes.
          </p>
        </div>
      </div>
      <Footer />
    </>
    )
}

export default Terms;