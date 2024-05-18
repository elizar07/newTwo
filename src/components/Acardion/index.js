import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import React, { useState } from 'react'

const Acardion = () => {
	const [expanded, setExpanded] = React.useState(false)

	const handleChange = panel => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false)
	}

	return (
		<div id='acardion'>
			<h1>Часто задаваемые вопросы</h1>
			<div className='container'>
				<Accordion
					sx={{ padding: '20px' }}
					expanded={expanded === 'panel1'}
					onChange={handleChange('panel1')}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel1bh-content'
						id='panel1bh-header'
					>
						<Typography sx={{ width: '33%', flexShrink: 0 }}>
							Как долго ты учишься программированию?
						</Typography>
						<Typography sx={{ color: 'text.secondary' }}>
							I am an accordion
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography className='nulaa'>
							Я не перестаю учиться, в этом вся суть! Но если в имеете виду
							сколько времени я уже учусь то скажу 1 год.
						</Typography>
					</AccordionDetails>
				</Accordion>
				<br />
				<Accordion
					sx={{ padding: '20px' }}
					expanded={expanded === 'panel2'}
					onChange={handleChange('panel2')}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel2bh-content'
						id='panel2bh-header'
					>
						<Typography sx={{ width: '33%', flexShrink: 0 }}>
							Как часто ты пишешь код?
						</Typography>
						<Typography sx={{ color: 'text.secondary' }}>
							You are currently not an owner
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Как новичок я пишу код каждый день. Учеба и работа с клиентами
							позволяют мне постоянно погружаться в различные проекты и
							развивать свои навыки в программировании.
						</Typography>
					</AccordionDetails>
				</Accordion>
				<br />
				<Accordion
					sx={{ padding: '20px' }}
					expanded={expanded === 'panel3'}
					onChange={handleChange('panel3')}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel3bh-content'
						id='panel3bh-header'
					>
						<Typography sx={{ width: '33%', flexShrink: 0 }}>
							Какие проекты ты создаешь?
						</Typography>
						<Typography sx={{ color: 'text.secondary' }}>
							Filtering has been entirely disabled for whole web server
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							я создаю разнообразные виды сайтов, включая корпоративные сайты,
							интернет-магазины, лендинги, блоги, портфолио, веб-приложения и
							другие.
						</Typography>
					</AccordionDetails>
				</Accordion>
				<br />
				<Accordion
					sx={{ padding: '20px' }}
					expanded={expanded === 'panel4'}
					onChange={handleChange('panel4')}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel4bh-content'
						id='panel4bh-header'
					>
						<Typography sx={{ width: '33%', flexShrink: 0 }}>
							Можете ли вы предоставить расчет бюджета на проект?
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Да, я могу предоставить расчет бюджета на проект после того, как
							получу более подробные требования и объем работы.
						</Typography>
					</AccordionDetails>
				</Accordion>
				<br />
				<Accordion
					sx={{ padding: '20px' }}
					expanded={expanded === 'panel5'}
					onChange={handleChange('panel5')}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel5bh-content'
						id='panel5bh-header'
					>
						<Typography sx={{ width: '33%', flexShrink: 0 }}>
							Сколько времени займет разработка?{' '}
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Время разработки зависит от конкретных требований проекта. Давайте
							обсудим вашу идею, чтобы определить объем работы и сроки.
						</Typography>
					</AccordionDetails>
				</Accordion><br />
				<Accordion
					sx={{ padding: '20px' }}
					expanded={expanded === 'panel6'}
					onChange={handleChange('panel6')}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel6bh-content'
						id='panel6bh-header'
					>
						<Typography sx={{ width: '33%', flexShrink: 0 }}>
							Можно ли менять требования в процессе работы над проектом?
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Да, мы готовы вносить изменения в функциональные требования в
							процессе работы над проектом.
						</Typography>
					</AccordionDetails>
				</Accordion>
			</div>
		</div>
	)
}

export default Acardion
