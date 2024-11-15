import './Utilisateur.css'


interface UtilisateurProps {
  nom: string;
  age: string;
  etat: boolean;
}

const Utilisateur: React.FC<UtilisateurProps> = (props) => {
  return (
    <div className="user-card">
      <h2>{props.nom}</h2>
      <p>Âge: {props.age}</p>
      <p className={props.etat ? 'online' : 'offline'}>
        {props.etat ? 'En ligne' : 'Hors ligne'}
      </p>
    </div>
  );
};

export default Utilisateur;