export interface ProfileState {
  profile: {
    name: string | null;
    email: string | null;
    token: string | null;
  } | null;
}
