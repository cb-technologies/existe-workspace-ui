import { Container, Box, Button } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import CarteGeneration from "./CarteGeneration";

export default function CardGenerationPage() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 8 }}>
        <CarteGeneration />
        <Link to="/" style={{textDecoration:'none'}}>
          <Button variant="contained">Go Back</Button>
        </Link>
      </Box>
    </Container>
  );
}
