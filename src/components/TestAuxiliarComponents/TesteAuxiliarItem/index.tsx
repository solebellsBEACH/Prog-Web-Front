import { Avatar, Card, CardContent, Typography } from "@material-ui/core";
import { AiFillInfoCircle } from "react-icons/ai";

interface TesteAuxiliarItemProps {
  label: string;
  contentText: string;
  redirectUrl: string;
}

export const TesteAuxiliarItem = ({
  contentText,
  label,
  redirectUrl,
}: TesteAuxiliarItemProps) => {
  return (
    <Card
      onClick={() => {
        window.location.href = redirectUrl;
      }}
      sx={{
        width: 745,
        minHeight: 200,
        display: "flex",
        flexDirection: "column",
        margin: "2vh",
        border: "1px solid black",
        backgroundColor: "#F2CCFF",
      }}
    >
      <CardContent sx={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Avatar sx={{ bgcolor: "green", marginRight: "1vw" }}>
            <AiFillInfoCircle size={20} />
          </Avatar>

          <Typography gutterBottom variant="h5" component="div">
            {label}
          </Typography>
        </div>

        <Typography
          sx={{ fontSize: "20px" }}
          variant="body2"
          color="text.secondary"
        >
          {contentText}
        </Typography>
      </CardContent>
    </Card>
  );
};
