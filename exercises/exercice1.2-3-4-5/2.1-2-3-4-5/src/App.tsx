const App = () => {
  const pageTitle = "Informations sur les films dans les cinémas";

  const cinema1Name = "UGC DeBrouckère";
  const cinema1Movie1Title = "Film 1 - DeBrouckère";
  const cinema1Movie1Director = "Director A";
  const cinema1Movie2Title = "Film 2 - DeBrouckère";
  const cinema1Movie2Director = "Director B";

  const cinema2Name = "UGC Toison d'Or";
  const cinema2Movie1Title = "Film 1 - Toison d'Or";
  const cinema2Movie1Director = "Director C";
  const cinema2Movie2Title = "Film 2 - Toison d'Or";
  const cinema2Movie2Director = "Director D";

  return (
    <div>
      <Header
          title={pageTitle}
          />

      <Cinema 
          cinema={cinema1Name}
          title1={cinema1Movie1Title}
          title2={cinema1Movie2Title}
          director={cinema1Movie1Director}
          director2={cinema1Movie2Director}
      />
      <Cinema 
          cinema={cinema2Name}
          title1={cinema2Movie1Title}
          title2={cinema2Movie2Title}
          director={cinema2Movie1Director}
          director2={cinema2Movie2Director}
      />
    </div>
  );
};

interface FilmProps {
  cinema: string;
  title1: string;
  title2: string;
  director: string;
  director2: string;
}

interface HeaderProps {
  title: string;
}

const Header = (props: HeaderProps) => {
  return <h1>{props.title}</h1>
}

const Cinema = (props: FilmProps) => {
  return(
    <div>
        <h2>{props.cinema}</h2>
        <ul>
          <li>
            <strong>{props.title1}</strong> - Réalisateur :{" "}
            {props.director}
          </li>
          <li>
            <strong>{props.title2}</strong> - Réalisateur :{" "}
            {props.director2}
          </li>
        </ul>
      </div>
  )
}

export default App;
