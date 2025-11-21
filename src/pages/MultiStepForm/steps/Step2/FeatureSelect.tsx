"use client";

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";

export function FeatureSelect() {
  const [feature, setFeature] = useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setFeature(event.target.value);
  };
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Feature</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={feature}
        label="Feature"
        onChange={handleChange}
      >
        <MenuItem value="feature-1">Feature One</MenuItem>
        <MenuItem value="feature-2">Feature Two</MenuItem>
        <MenuItem value="feature-3">Feature Three</MenuItem>
      </Select>
    </FormControl>
  );
}
