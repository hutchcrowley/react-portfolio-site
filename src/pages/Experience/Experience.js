import React from 'react'
import Layout from '../../components/Layout/Layout'
import { SectionTitle, Paragraph } from '../../styles/styles'
import { WorkItem, WorkTitle, JobTitle } from './styles'

const Experience = ({ user }) => {
	return (
		<Layout user={user}>
			<div>
				<SectionTitle>Experience</SectionTitle>
				<ul>
					{user.work.map((work, i) => (
						<WorkItem key={i}>
							<WorkTitle>{work.position}</WorkTitle>
							<div>
								<JobTitle>{work.company}</JobTitle> <span>{work.location}</span>
								<span> &sdot; </span>
								<span>
									{work.start.year} to {work.end.year}
								</span>
							</div>
							<Paragraph>{work.summary}</Paragraph>
						</WorkItem>
					))}
				</ul>
			</div>
		</Layout>
	)
}

export default Experience
