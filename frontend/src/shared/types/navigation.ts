export type RootStackParamList = {
  Welcome: undefined;
  Dashboard: undefined;
  Profile: {
    userId: string;
  };
  Register: undefined;
  Login: undefined;
  NoteCreate: undefined;
  NoteDetail: {
    noteId: string;
  };
  NoteEdit: {
    noteId: string;
  };
};
