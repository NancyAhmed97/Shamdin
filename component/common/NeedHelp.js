import React, { useState, useRef } from "react";
import { Box, Container, Typography } from "@mui/material";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import Portal from "@mui/material/Portal";
// import ReactPhoneInput from 'react-phone-input-2'
// import 'react-phone-input-2/lib/style.css'
import { makeStyles, alpha } from "@mui/material/styles";
import postData from '../../helpers/postData';


import Alert from "@mui/material/Alert";
import { useRouter } from "next/router";
import { useTranslations } from 'next-intl';

const NeedHelp = () => {
  const [show, setShow] = useState(false);
  const [alert, setAlert] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [problem, setProblem] = useState("");
  const { locale } = useRouter(); 
	const t = useTranslations('general');

  const container = useRef(null);

  const handleClick = () => {
    setShow(!show);
  };
  const saveData = (e) => {
    if (e.target.id === "name") {
      setName(e.target.value);
    } else if (e.target.id === "phone") {
      setPhone(e.target.value);
    } else if (e.target.id === "email") {
      setEmail(e.target.value);
    } else if (e.target.id === "problem") {
      setProblem(e.target.value);
    }
  };
  const sendData = (e) => {
    e.preventDefault();
    if (!problem || !email) {
      setAlert(true);
    } else {
      const body = {
        name: name,
        phone: phone,
        email: email,
        description: problem,
      };
      postData(`contacts?langCode=${locale}`, body).then((res) => {
        if (res) {
          setShow(!show);
          setName("");
          setPhone("");
          setProblem("");
          setEmail("");
          setAlert(false);
        }
      });
    }
  };
  return (
    <section className="help_backBlock">
      <Container maxWidth="lg" className="p-3" style={{ position: "relative" }}>
        <Box
          style={{
            paddingTop: "30px",
          }}
          align={"center"}
        >
          <Box mb={2} style={{ margin: "12px" }}>
            {alert && (
              <Alert severity="error">
                This is an error alert — check it out!
              </Alert>
            )}
            <Typography align={"center"} variant="h6">
              {t('letUsContactToHelp')}
            </Typography>
            <Typography align={"center"}>
              {t('chooseTheBestRE')}
            </Typography>
          </Box>
          {show ? (
            "Add Your Problem"
          ) : (
            <Button
              variant="contained"
              className="help_btn"
              onClick={handleClick}
            >
              {t('applyNow')}
            </Button>
          )}

          {show ? (
            <Portal container={container.current}>
              <form
                className="help_root"
                noValidate
                autoComplete="off"
                onSubmit={sendData}
              >
                <Input
                  required
                  placeholder="Name"
                  id="name"
                  onChange={saveData}
                  inputProps={{ "aria-label": "description" }}
                  style={{ width: "100%", marginTop: "15px" }}
                />
                <Input
                  required
                  placeholder="Phone Number"
                  id="phone"
                  onChange={saveData}
                  inputProps={{ "aria-label": "description" }}
                  style={{ width: "100%", marginTop: "15px" }}
                />
                {/* <PhoneInput
                  name="phoneNumber"

                  country={'tr'}
                  inputExtraProps={{
                    name: "phone",
                    required: true,
                    autoFocus: true
                  }}
                  value="90425652"
                  onChange={phone => ({ phone })}
                /> */}
                <Input
                  placeholder="E-mail"
                  id="email"
                  onChange={saveData}
                  inputProps={{ "aria-label": "description" }}
                  style={{ width: "100%", marginTop: "15px" }}
                />
                <Input
                  placeholder="Your problem..."
                  id="problem"
                  onChange={saveData}
                  inputProps={{ "aria-label": "description" }}
                  style={{ width: "100%", marginTop: "15px" }}
                />
                <Button
                  variant="contained"
                  className="help_btn"
                  style={{ marginTop: "35px" }}
                  type="Submit"
                >
                  {t('send')}
                </Button>
              </form>
            </Portal>
          ) : null}
          <div ref={container} />
        </Box>
      </Container>
    </section>
  );
};
export default NeedHelp;
