import { Avatar, Box, IconButton, Typography } from "@mui/material";
import avatar from "../../assets/pics/sidebar/avatar.jpg";
import { SocialItems } from "../../data/SidebarData";

const SidebarHeader = () => {
  return (
    <>
      <Avatar
        src={avatar}
        sx={{
          width: "50%",
          height: "auto",
          m: "1rem auto",
          border: "10px solid #182238",
        }}
      />
      <Box sx={{ textAlign: "center", my: 2, color: "#F6F9FF" }}>
        <Typography variant="subtitle1">AmirReza Najari</Typography>
        <Typography variant="overline">Front end developer</Typography>
      </Box>

      <Box textAlign="center">
        {SocialItems.map((item, index) => (
          <IconButton
            key={index}
            href={item.href}
            target="_blank"
            sx={{ color: "#F6F9FF" }}
          >
            {item.icon}
          </IconButton>
        ))}
      </Box>
    </>
  );
};
export default SidebarHeader;
