import { useParams } from "react-router";

export default function BlogNewsItem() {
  const { newsId } = useParams();

  return <>
    <h1>Новость #{newsId}</h1>
    <p>Под номером {newsId} сегодня удивительная новость</p>
  </>;
}
