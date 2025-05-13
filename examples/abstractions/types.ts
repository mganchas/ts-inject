export type Logger = {
  log: (message: string) => void;
};

export type ApiService = {
  call: () => void;
  email: (userEmail: string) => void;
};
