import React, { Component } from 'react';

// Global components
import SectionTitle from '../global/SectionTitle';

// Resume components
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';

// Resume data
import { experience } from './data/experience';
import { education } from './data/education';
import { skills } from './data/skills';

class ResumeLayout extends Component {
	mapExperience() {
		const lastPosition = experience.length - 1;
		return (
			experience.map((position, index) => {
				return (
					<Experience
						title={position.title}
						company={position.company}
						location={position.location}
						dates={position.dates}
						tasks={position.tasks}
						classes={[(index === lastPosition ? '' : 'divider-line')]}
						key={index}
					/>
				);
			})
		);
	}

	mapEducation() {
		return (
			education.map((institution, index) => {
				return (
					<Education
						school={institution.school}
						degrees={institution.degrees}
						years={institution.years}
						key={index}
					/>
				);
			})
		);
	}

	mapSkills() {
		return (
			skills.map((skill, index) => {
				return (
					<Skills
						technical={skill.technical}
						organizational={skill.organizational}
						interests={skill.interests}
						key={index}
					/>
				);
			})
		);
	}

	render() {
		const experience = this.mapExperience();
		const education = this.mapEducation();
		const skills = this.mapSkills();
		return (
			<div id="resume">
				<div className="row margin-bottom-lg section">
					<div className="col-md-12">
						<SectionTitle title="Experience" classes={['inline-block', 'margin-0']}/>
						<form
							className="inline-block pull-right"
							target="_blank"
							method="get"
							action="../../assets/documents/Gutierrez_Mike_Resume_2017.pdf"
						>
							<button className="btn btn-primary" type="submit">Download Resume</button>
						</form>
						{ experience }
					</div>
				</div>
				<div className="row margin-bottom-lg section">
					<div className="col-md-12">
						<SectionTitle title="Education"/>
						{ education }
					</div>
				</div>
				<div className="row margin-bottom-lg section">
					<div className="col-md-12">
						<SectionTitle title="Skills"/>
						{ skills }
					</div>
				</div>
			</div>
		);
	}
}

export default ResumeLayout;
