import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";
import { FormatQuoteOutlined } from "@mui/icons-material";
import "swiper/swiper-bundle.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { CustomDivider } from "../../common/CustomDivider";
import { CommentsItems } from "./../../data/CommentsData";
import { Helmet } from "react-helmet-async";

const Comments = () => {
  return (
    <>
      <Helmet>
        <title>Comments | AmiReza Najari Portfolio</title>
      </Helmet>
      <Box sx={{ p: "2%" }}>
        <CustomDivider title="Comments" />

        <Card sx={{ my: 2 }}>
          <CardContent>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, molestiae dicta facilis aliquid dolorum assumenda
              amet iusto cum at ea exercitationem reprehenderit dolore officia
              explicabo perferendis. Quae sunt enim necessitatibus!
            </Typography>
          </CardContent>
        </Card>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Navigation, Pagination]}
        >
          {CommentsItems.map((item, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  pb: 5,
                  textAlign: "center",
                }}
              >
                <Card>
                  <CardContent>
                    <Avatar
                      src={item.avatar}
                      sx={{ margin: "auto", width: 100, height: 100, mb: 2 }}
                    />
                    <Typography variant="h6" color="#090C16">
                      {item.name}
                    </Typography>
                    <Typography variant="overline" color="#4B90F8">
                      {item.exp}
                    </Typography>
                    <Typography variant="body1" color="#182238">
                      <FormatQuoteOutlined />
                      {item.cm}
                      <FormatQuoteOutlined />
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
};
export default Comments;
