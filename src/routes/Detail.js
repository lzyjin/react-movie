import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export default function Detail() {
  const [loading, setLoading] = useState(true);
  const {id} = useParams();

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <h1>Detail</h1>
  );
}