import { Box, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/material/styles";
import ShareBtns from "../../../component/common/ShareBtns";
import SquareBtn from "../../../component/common/SquareBtn";
const SubOverview = () => {
  return (
    <div>
      <Typography variant="h6" className="over_view_title">
        Sort By:{" "}
      </Typography>

      <div>
        <ul>
          <div className="over_view_liContainer">
            <li className="li-main">
              <a href="#advantages-buy">
                Advantages for Buying Property in Turkey
              </a>
            </li>
            <li className="li-main">
              <a href="#properties-for-sale">Properties for Sale in Turkey</a>
              <ul style={{ padding: "0" }}>
                <li>
                  <a href="#real-estate-investment">
                    Real Estate Investment in Turkey
                  </a>
                </li>
                <li>
                  <a href="#advantages-real-estate">
                    Advantages of real estate investment in Turkey
                  </a>
                </li>
              </ul>
            </li>
          </div>
        </ul>

        <article id="advantages-buy">
          <Typography variant="h6" component="h2" className="over_view_title">
            Advantages for Buying Property in Turkey
          </Typography>

          <Typography
            variant="h6"
            component="h3"
            className="over_view_textContent"
          >
            Turkey s real estate market is one of the most promising real estate
            markets in Europe, given Turkeys strategic location at the
            crossroads of Europe and the Middle East, its rich resources and its
            charming nature which is one of Turkeys most important attractions.
          </Typography>
        </article>

        <article id="properties-for-sale">
          <Typography variant="h6" component="h2" className="over_view_title">
            Properties for Sale in Turkey
          </Typography>
          <Typography
            variant="h6"
            component="h3"
            className="over_view_textContent"
          >
            country offers good opportunities for those wishing to settle,
            secure housing, and gainful investment by selling and buying
            properties in Turkey such as apartments, villas, land, farms, shops,
            commercial offices, stores and all kinds of commercial and
            residential properties. There are open and diverse options to invest
            in Turkeys 2021 real estate. Anyone who wants to own or invest can
            buy property in Turkey according to the available budget.
            Preferably, look for apartments for sale in distinctive
            neighborhoods or houses overlooking the sea, and there are those who
            prefer to buy land, which is already known to be included in the
            planning schemes of the cities or choosing apartments ready for
            housing and then sell at double prices, thus, these many options are
            pleasing, in addition to major urban projects which is really what
            distinguishes the properties of Turkey today.
          </Typography>
          <img
            className="over_view_img"
            src="https://www.imtilak.net/uploads/property_types/image_1632297232_378klKpjYQXKaEgol6x6geIijD93AkIrRjDkZEj0.jpeg"
            alt="Img"
          />
        </article>

        <article id="real-estate-investment">
          <Typography variant="h6" component="h2" className="over_view_title">
            Real Estate Investment in Turkey
          </Typography>
          <Typography
            variant="h6"
            component="h3"
            className="over_view_textContent"
          >
            Real estate investment here has excellent opportunities, especially
            in light of the availability of properties in Turkey for sale at
            prices suitable for wide segments of investors, where the investor
            finds what he or she is looking for in Turkey’s various areas, such
            as coastal areas like Istanbul and Trabzon or other central cities.
            It is possible for the investor to have short or long term lease
            options, or even benefit from the resale profits of the property in
            Turkey, provided that he or she has the necessary long-term patience
            to pursue this type of investment in the immovable property. Real
            estate agents in Turkey, understand the real estate market in Turkey
            to the fullest and help the investor to choose the best Turkish
            property suitable for his needs for investment or even housing and
            stability. The investment in the real estate sector is very safe,
            especially the investment in Turkeys properties for sale. The rate
            of returns is stable. This has been evident in recent years after
            Turkey witnessed huge developments in its major urban projects,
            which, of course, reflected on the Properties of Turkey Services,
            facilities and infrastructure.
          </Typography>
          <img
            className="over_view_img"
            src="https://www.imtilak.net/uploads/property_types/image_1632297292_1D2EmpjwpBOxG0TMhafp5LVdlFHRUzV85TPOQ35t.jpeg"
            alt="Img"
          />
        </article>

        <article id="advantages-real-estate">
          <Typography variant="h6" component="h2" className="over_view_title">
            Advantages of real estate investment in Turkey
          </Typography>
          <Typography
            variant="h6"
            component="h3"
            className="over_view_textContent"
          >
            There are many advantages granted by the Turkish government to
            anyone who wants to buy property in Turkey to foreigners looking for
            properties for sale in the region, in order to encourage them to
            choose the investment in Turkey; the most important of these
            advantages, to offer properties for sale Turkey at affordable
            prices, For real estate investors and then Turkish citizenship in
            accordance with specific legal controls in return for buying a
            property in Turkey.
          </Typography>
        </article>

        <article id="Tags"></article>
      </div>
      <Box>
        <Typography>
          Edited by:{" "}
          <span className="over_view_boldText">Shamdin Real Estate©</span>
        </Typography>
        <ShareBtns margin="15px 0" />
        <Typography variant="h5" className="over_view_title">
          Tags
        </Typography>
        {[...Array(6)].map((el) => (
          <SquareBtn
            key={el}
            BtnName="Tag element"
            selectable={false}
            linkTo="#"
          />
        ))}
      </Box>
    </div>
  );
};
export default SubOverview;
