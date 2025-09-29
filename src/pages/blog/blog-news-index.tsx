import { type ChangeEvent } from "react";
import { useLocation, useNavigate } from "react-router";

interface Author {
  bio: string,
  isInternal: boolean,
  name: string,
}

const Authors:readonly Author[] = Object.seal([
  {
    bio: "Our oldest specialist",
    isInternal: true,
    name: "Ivan Petrov",
  },
  {
    bio: "Our youngest specialist",
    isInternal: true,
    name: "Petr Ivanov",
  },
  {
    bio: "Sport pundit",
    isInternal: false,
    name: "Ivan Ivanov",
  },
  {
    bio: "IT geek and author",
    isInternal: true,
    name: "Maria Maryina",
  },
]);

export default function BlogNewsIndex() {
  const lc = useLocation();
  const navigate = useNavigate();

  const onlyInternal = lc.search !== "";
  const authors = Authors.filter((a) => !onlyInternal || a.isInternal);

  function handleOnlyInternalChange(evt: ChangeEvent<HTMLInputElement>) {
    const searchString = evt.target.checked ? 
      `?internalAuthors=true` :
      ``;
    navigate(`/blog${searchString}`);
  }

  return <>
    <h1>Welcome to our blog</h1>
    <p>Enjoy our best articles written by our team of authors</p>

    <hr />

    <div>
      <label style={{
        userSelect: "none",
      }}>
        <input type="checkbox" checked={onlyInternal} onChange={handleOnlyInternalChange} />&nbsp;Show only internal authors
      </label>
    </div>

    <section style={{
      display: "flex",
      gap: "20px",
      padding: "20px 0",
    }}>
      {authors.map(({bio, name}) => <article style={{
        border: "dotted 1px #999",
        borderRadius: "10px",
        padding: "10px",
      }}>
        <h2 style={{
          margin: "0 0 0.3em",
          padding: 0,
        }}>{name}</h2>
        <p>{bio}</p>
      </article>)}
    </section>
  </>;
}