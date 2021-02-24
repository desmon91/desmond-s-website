import React from "react"
import {Link} from 'gatsby'
import styles from "../styles/styles.module.css"
import titleLine from "../images/roles-title-line.svg"
import contactTitleLine from "../images/contact-title-line.svg"
import feRolesImg from "../images/fsd-role.svg"
import deRolesImg from "../images/de-role.svg"
import mlRolesImg from "../images/ml-role.svg"
import linkedinImg from "../images/linkedin.svg"
import instagramImg from "../images/instagram.svg"
import emailImg from "../images/email.svg"


const IndexPage = () => {
  return (
   <div>
   <span id="home" className="anchor"></span>

	<nav id="nav">
		<a href="#home">HOME</a>
		<a href="#roles">ROLES</a>
		<a href="#contact">CONTACT</a>
		<Link to="/blog">BLOG</Link>
	</nav>


	<div className={styles.bodyContainer}>
		<section>
			<div className={styles.header} data-aos="fade-down">
					<span id="home" className={styles.anchor}></span>
					<div className={styles.idCard}>
						<div className={styles.cardContainer}>
							<div className={styles.idProfile}></div>
							<span className={styles.idName}>Hello, I'm Desmond</span>
						</div>
					</div>
			</div>
		</section>
		<section>
			<div className={styles.rolesContainer}>
			<span id="roles" className={styles.anchor}></span>
				<div className={styles.rolesTitleContainer}>
					<img className={styles.rolesTitleLine} src={titleLine} alt=""/>
					<span className={styles.rolesTitle}>My Roles</span>
				</div>
					<div className={styles.rolesCardContainer}>
						<div className={styles.rolesCard} data-aos="fade-right">
							<div className={styles.rolesCardPadding}>
								<img className={styles.rolesImg} src={feRolesImg} alt="Full Stack Engineer" />
								<div className={styles.rolesBody}>
									<span className={styles.rolesSubtitle}>Full Stack Engineer</span>
									<span className={styles.rolesText}>Design, Create and Manage Web Apps all the way from the Front End to the Back End</span>
								</div>
							</div>
						</div>
						<div className={styles.rolesCard} data-aos="fade-left">
							<div className={styles.rolesCardPadding}>
								<img className={styles.rolesImg} src={deRolesImg} alt="Data Engineer" />
								<div className={styles.rolesBody}>
									<span className={styles.rolesSubtitle}>Data Engineer</span>
									<span className={styles.rolesText}>Create a meaningful insight from various data through beautifull dashboard</span>
								</div>
							</div>
						</div>
						<div className={styles.rolesCard} data-aos="fade-right">
							<div className={styles.rolesCardPadding}>
								<img className={styles.rolesImg} src={mlRolesImg} alt="Machine Learning" />
								<div className={styles.rolesBody}>
									<span className={styles.rolesSubtitle}>Machine Learning</span>
									<span className={styles.rolesText}>Make a suitable prediction model to help the user make a decisions</span>
								</div>
							</div>
						</div>
					</div>
			</div>
		</section>
		<section>
			<div className={styles.contactContainer}>
				<span id="contact" className={styles.anchor}></span>
				<div className={styles.contactTitleContainer}>
					<img src={contactTitleLine} className={styles.contactTitleLine} alt=""/>
					<span className={styles.contactTitle}>Hit me up on</span>
				</div>
				<div className={styles.linkContainer}  data-aos="flip-up">
					<div className={styles.linkCard}>
						<a className={styles.linkItem} href="https://www.linkedin.com/in/desmond-kristian-84aa92129/" target="_blank" rel="noopener noreferrer">
							<img src={linkedinImg} className={styles.linkedin} alt="Linkedin"/>
							<span className={styles.linkText}>Linkedin</span>
						</a>
						<a className={styles.linkItem} href="https://www.instagram.com/desmondsiahaan/" target="_blank" rel="noopener noreferrer">
							<img src={instagramImg} className={styles.instagram} alt="Instagram"/>
							<span className={styles.linkText}>Instagram</span>
						</a>
						<a className={styles.linkItem} href="mailto:desmon.kristian@gmail.com" target="_blank" rel="noopener noreferrer">
							<img src={emailImg} className={styles.email} alt="Email"/>
							<span className={styles.linkText}>Email</span>
						</a>
					</div>
				</div>
			</div>
		</section>
		<div className={styles.footer}>
			<span>© Made by Desmond, All rights reserved.</span>
		</div>
	</div>
   </div>
  )
}

export default IndexPage
