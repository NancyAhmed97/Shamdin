import { Card, Typography, Grid } from '@mui/material';

import Button from '@mui/material/Button';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Button1 from '../Buttons/Button1';
import Input from "@mui/material/Input";

function ContactForm({sendData, handleInputChange}) {
	const t = useTranslations('general');

	return (
		<Grid item xs={12} md={12}>
			<Card className="faq_padding">
				<Typography variant="h5">{t('letUsContactToHelp')}</Typography>

				<Grid xs={12} sm={12} mt={1} item>
					<Input name="name" required placeholder={t('name')} onChange={handleInputChange} />
				</Grid>

				<Grid xs={12} sm={12} mt={1} item>
					<Input name="phone" required placeholder={t('phone')} onChange={handleInputChange} />
				</Grid>

				<Grid xs={12} sm={12} mt={1} item>
					<Input name="email" placeholder={t('email')} onChange={handleInputChange} />
				</Grid>

				<Grid xs={12} sm={12} mt={1} item>
					<Input name="description" placeholder={t('realestateDescr')} onChange={handleInputChange} />
				</Grid>

				<Grid xs={12} sm={12} mt={4} item>
					<Button1 title={t('send')} sendData={sendData} />
				</Grid>
			</Card>
		</Grid>
	);
}

export default ContactForm;
