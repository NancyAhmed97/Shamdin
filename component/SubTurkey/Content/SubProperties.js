import React, { useEffect, useState } from 'react';
import PropCard from './PropCard';
import LinkDivider from '../../../component/common/LinkDivider';
import { Box, Typography } from '@mui/material';
import Dropdown from '../../../component/common/LightDropList';
import SquareBtn from '../../../component/common/SquareBtn';
import { Alert, Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useTranslations } from 'next-intl';

const SubProperties = ({ realStates }) => {
	const router = useRouter();
	const { params = [] } = router.query;
	const [ sortByCity, setSortByCity ] = useState([]);
	const t = useTranslations('general');

	useEffect(
		() => {
			if (router.asPath.search('SubTurkey')) {
				axios({
					method: 'get',
					url: `${process.env.apiUrl}realestates?langCode=${router.locale}&cityId=${params}
  
    `,
					headers: {
						'Content-Type': 'application/json',
						Accept: 'application/json'
					}
				}).then((res) => {
					res;
					setSortByCity(res.data.rows);
				});
			}
		},
		[ params ]
	);

	return (
		<div className="sub_properties">
			{/* <Box
        sx={{
          display: "flex",
          paddingTop: "30px",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "0px 10px 10px 0",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Typography>Properties Found: {foundNO}</Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Typography variant="h6" className="sub_sortBy">
            Sort By:{" "}
          </Typography>
          <SquareBtn selected={false} BtnName="Recently Added" />
          <SquareBtn selected={false} BtnName="Min" />
          <SquareBtn selected={false} BtnName="Max" />
        </Box>
         <Dropdown
          isMulti={false}
          name="Change Currency"
          options={colourOptions}
          marginY="10px 0"
          width="200px"
          placeholder="Change Currency"
        /> 
      </Box> */}

			<Box
				style={{
					padding: '0px',
					margin: '0px',
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: 'space-between'
				}}
			>
				<Container>
					<Row>
						{sortByCity ? sortByCity.length > 0 ? (
							sortByCity.map((sortByCitydet, index) => (
								<Col md={6} key={index}>
									<PropCard
										item={sortByCitydet}
									/>
								</Col>
							))
						) : (
							<Alert className="w-100" severity="error">
								{t('noResultsFound')}
							</Alert>
						) : realStates.length > 0 ? (
							realStates.map((el, index) => (
								<Col md={6} key={index}>
									<PropCard
										item={el}
									/>
								</Col>
							))
						) : (
							<Alert className="w-100" severity="error">
								{t('noResultsFound')}
							</Alert>
						)}
					</Row>
				</Container>
			</Box>
			{/* <LinkDivider /> */}
		</div>
	);
};
export default SubProperties;
