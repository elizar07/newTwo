import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import React, { useState } from 'react'	
import { AiFillInstagram } from 'react-icons/ai'
import { BsAsterisk } from 'react-icons/bs'
import { FaTelegramPlane } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io5'
import { SiGmail } from 'react-icons/si'
import me from '../../Assets/img/photo-me.jpg'


import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-cards'


// import required modules
import { EffectCards } from 'swiper/modules'


const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4
}

const About = () => {
	const [open, setOpen] = useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)
	return (
		<div id='about'>
			<div className='container'>
				<div className='about-me'>
					<h1>
						<span>
							<BsAsterisk />
						</span>
						Обо мне
					</h1>
				</div>
				<div className='about'>
					<div className='about-text'>
						<h1>
							Привет меня зовут Элзар я новичок в мире разработки! <br /> Мои
							первые шаги в программировании <br /> были как попытка понять что
							чувствуют программистом <br />
							когда пишут код. И уже год занимаюсь веб-дизайном, <br /> и
							Фронтенд разработкой и я не собираюсь <br />
							останавливаться, и теперь моя цель - стать <br /> профессиональным
							программистым, писать алгоритмы <br />
							наизусть и исправлять баги на ходу!
						</h1>
						<div className='sots-set'>
							<div className='circle'>
								<a href='https://t.me/elzar07'>
									<FaTelegramPlane className='sots-circle' />
								</a>
							</div>
							<div className='circle'>
								<a href='https://wa.me/qr/SYPZPCNXHOGLF1'>
									<IoLogoWhatsapp className='sots-circle' />
								</a>
							</div>
							<div className='circle'>
								<SiGmail className='sots-circle' />
							</div>
							<div className='circle'>
								<a
									className='sots-circle'
									href='https://www.instagram.com/invites/contact/?i=6ekc29pnxpd9&utm_content=h4au13v'
								>
									<AiFillInstagram className='sots-circle' />
								</a>
							</div>
						</div>
					</div>

					<Button onClick={handleOpen}>
						<img src={me} alt='img' />
					</Button>
					<Modal
						open={open}
						onClose={handleClose}
						aria-labelledby='modal-modal-title'
						aria-describedby='modal-modal-description'
					>
						<>
							<Swiper
								effect={'cards'}
								grabCursor={true}
								modules={[EffectCards]}
								className='mySwiper'
							>
								<SwiperSlide>Slide 1</SwiperSlide>
								<SwiperSlide>Slide 2</SwiperSlide>
								<SwiperSlide>Slide 3</SwiperSlide>
								<SwiperSlide>Slide 4</SwiperSlide>
								<SwiperSlide>Slide 5</SwiperSlide>
								<SwiperSlide>Slide 6</SwiperSlide>
								<SwiperSlide>Slide 7</SwiperSlide>
								<SwiperSlide>Slide 8</SwiperSlide>
								<SwiperSlide>Slide 9</SwiperSlide>
							</Swiper>
						</>
					</Modal>
				</div>
			</div>
		</div>
	)
}

export default About
