import {   
    Card,
    Typography,
    Grid,
  } from "@mui/material";

  import Button from "@mui/material/Button";
  import Link from "next/link";
  import { useTranslations } from 'next-intl';
  import Button1 from "../Buttons/Button1";

function CitizenshipInfoBox() {
	
	const t = useTranslations('general');

	return (
		<Grid item xs={12} md={12} mt={2}>
			<Card className="faq_padding">
				<Typography variant="h5" style={{ fontSize: '1rem', fontWeight: 'bold',color:"#ec94b4" }}>
					{t('allUNeedToKnowAbtCtznship')}
				</Typography>
				<img className="faq_image" src="https://www.imtilak.net/assets/img/turkish-passport.png" alt="img" />
				<Link href="/Citizenship" passHref>
					<Button1 title={t('moreDetails')} />
				</Link>
			</Card>
		</Grid>
	);
}

export default CitizenshipInfoBox;
