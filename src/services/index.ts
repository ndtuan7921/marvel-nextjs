import { publish_key, hashed_key } from "../../env.config";

export const getComics = async () => {
  const URL = `http://gateway.marvel.com/v1/public/comics?ts=1&apikey=${publish_key}&hash=${hashed_key}`;
  const res = await fetch(URL);
  let data = await res.json();

  if (data.code === 200 && data.status === "Ok") return data.data.results;
  else
    return {
      message: "failed to fetch data",
    };
};

export const getComicsById = async (id: string) => {
  const URL = `http://gateway.marvel.com/v1/public/comics/${id}?ts=1&apikey=${publish_key}&hash=${hashed_key}`;
  const res = await fetch(URL);
  let data = await res.json();
  if (data.code === 200 && data.status === "Ok") return data.data.results[0];
  else
    return {
      message: "failed to fetch data",
    };
};

export const getComicsByCharacterId = async (id: string) => {
  const URL = `http://gateway.marvel.com/v1/public/characters/${id}/comics?ts=1&apikey=${publish_key}&hash=${hashed_key}`;
  const res = await fetch(URL);
  let data = await res.json();
  return data.data.results;
  if (data.code === 200 && data.status === "Ok") return data.data.results;
  else
    return {
      message: "failed to fetch data",
    };
};

export const getCharacters = async () => {
  const URL = `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${publish_key}&hash=${hashed_key}`;
  const res = await fetch(URL);
  let data = await res.json();
  if (data.code === 200 && data.status === "Ok") return data.data.results;
  else
    return {
      message: "failed to fetch data",
    };
};

export const getCharactersById = async (id: string) => {
  const URL = `http://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=${publish_key}&hash=${hashed_key}`;
  const res = await fetch(URL);
  let data = await res.json();
  if (data.code === 200 && data.status === "Ok") return data.data.results[0];
  else
    return {
      message: "failed to fetch data",
    };
};

export const searchCharacters = async (query: string) => {
  const URL = `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}?ts=1&apikey=${publish_key}&hash=${hashed_key}`;
  const res = await fetch(URL);
  let data = await res.json();
  if (data.code === 200 && data.status === "Ok") return data.data.results[0];
  else
    return {
      message: "failed to fetch data",
    };
};
