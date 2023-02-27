import { useEffect, useState } from "react";

import {
  EmailOutlined,
  Person2Outlined,
  SubjectOutlined,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

import { useFormik } from "formik";

import contactImg from "../../assets/pics/contact/contact.avif";

import ReCAPTCHA from "react-google-recaptcha";
import { ContactValidationSchema } from "../../validation/ContactValidationSchema";
import { CustomDivider } from "../../common/CustomDivider";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const [showRecaptcha, setShowRecaptcha] = useState(false);

  useEffect(() => {
    setShowRecaptcha(true);

    return () => {
      setShowRecaptcha(false);
    };
  }, []);

  const contactInputNames = {
    fullname: "",
    email: "",
    subject: "",
    message: "",
    recaptcha: "",
  };

  const formik = useFormik({
    initialValues: contactInputNames,
    onSubmit: (values) => {
      console.log("Form values", values);
    },
    validationSchema: ContactValidationSchema,
  });
  return (
    <>
      <Helmet>
        <title>Contact | AmiReza Najari Portfolio</title>
      </Helmet>
      <Box sx={{ p: "2%" }}>
        <CustomDivider title="Contact" />

        <Box my={2}>
          <Card>
            <form autoComplete="off" onSubmit={formik.handleSubmit}>
              <CardContent>
                <Grid2 container spacing={2}>
                  <Grid2 xs={0} md={4}>
                    <Avatar
                      src={contactImg}
                      variant="rounded"
                      sx={{ width: "100%", height: "100%" }}
                    />
                  </Grid2>
                  <Grid2 xs={12} md={8}>
                    <Grid2 xs={12}>
                      <TextField
                        name="fullname"
                        fullWidth
                        label="fullname"
                        helperText={
                          formik.touched.fullname
                            ? formik.errors.fullname
                            : null
                        }
                        error={Boolean(
                          formik.touched.fullname && formik.errors.fullname
                        )}
                        value={formik.values?.fullname}
                        onChange={formik.handleChange}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <Person2Outlined />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid2>
                    <Grid2 xs={12}>
                      <TextField
                        fullWidth
                        name="email"
                        label="Email"
                        helperText={
                          formik.touched.email ? formik.errors.email : null
                        }
                        error={Boolean(
                          formik.touched.email && formik.errors.email
                        )}
                        value={formik.values?.email}
                        onChange={formik.handleChange}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <EmailOutlined />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid2>

                    <Grid2 xs={12}>
                      <TextField
                        fullWidth
                        name="subject"
                        label="Subject"
                        helperText={
                          formik.touched.subject ? formik.errors.subject : null
                        }
                        error={Boolean(
                          formik.touched.subject && formik.errors.subject
                        )}
                        value={formik.values?.subject}
                        onChange={formik.handleChange}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <SubjectOutlined />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid2>

                    <Grid2 xs={12}>
                      <TextField
                        fullWidth
                        multiline
                        rows={5}
                        name="message"
                        label="Message"
                        helperText={
                          formik.touched.message ? formik.errors.message : null
                        }
                        error={Boolean(
                          formik.touched.message && formik.errors.message
                        )}
                        value={formik.values?.message}
                        onChange={formik.handleChange}
                      />
                    </Grid2>
                    <Grid2 xs={12}>
                      {showRecaptcha && (
                        <>
                          <ReCAPTCHA
                            sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                            onChange={(value) => {
                              formik.setFieldValue("recaptcha", value);
                            }}
                          />
                          {formik.touched.recaptcha &&
                            formik.errors.recaptcha && (
                              <Typography variant="caption" color="error">
                                {formik.errors.recaptcha}
                              </Typography>
                            )}
                        </>
                      )}
                    </Grid2>
                  </Grid2>
                </Grid2>
              </CardContent>
              <CardActions sx={{ justifyContent: "center", mb: 2 }}>
                <Button type="submit" variant="contained">
                  Send Message
                </Button>
              </CardActions>
            </form>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
