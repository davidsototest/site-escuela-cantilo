import { Box, useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  "https://images.pexels.com/photos/1476880/pexels-photo-1476880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

interface Props {
  // Define props here
}

const CarouselTwo: React.FC<Props> = (Props) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ width: "100%", flexGrow: 1, position: "relative" }}>
      <div className="text-hero">
        <p className="sub-tittle" style={{ marginBottom: "15px" }}>
          Escuela Padre Rafael Cantilo
        </p>
        <p className="text-hero-paragraph">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias iusto tempore ad doloribus reiciendis magni est animi itaque recusandae similique, id sit inventore incidunt a quasi minima
          reprehenderit laudantium aliquid.
        </p>
      </div>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((img, index) => (
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: {
                    xs: "50vh", // mobile
                    md: "80vh", // desktop
                  },
                  display: "block",
                  overflow: "hidden",
                  width: "100%",
                }}
                src={img}
                alt={img}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
};

export default CarouselTwo;
