import React from "react";
import { styled } from "styled-components";
import { getGenres } from "../store";

export default function SelectGenre({genres, type}) {
  return <Select>{getGenres.map(

  )}</Select>;
}

const Select = styled.select``;
