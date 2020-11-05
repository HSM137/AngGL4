import { Personne } from './personne';

export class Liste{
  public static list = [
    new Personne(1,'nom1','prenom1',54,123,'job','assets/images/default-user-image.png'),
    new Personne(2,'nom2','prenom2',52,456,'job2','assets/images/default-user-image.png')
  ]
}
