import React from "react";
import { styled } from "styled-components";
import { getGenres } from "../store";

export default function SelectGenre({ genres, type }) {
  return (
    <Select>
      {getGenres.map((genre) => {
        return (
          <option value={genre.id} key={genre.id}>
            {genre.name}
          </option>
        );
      })}
    </Select>
  );
}

const Select = styled.select``;
