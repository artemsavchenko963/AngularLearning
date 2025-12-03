export interface User {
  name: '',
  lastName: '',
  email: '',
  gender: Gender,
  country: Country,
  comment: string,
  agree: boolean,
}

type Gender = 'male' | 'female';
type Country = 'pl' | 'us' | 'de';