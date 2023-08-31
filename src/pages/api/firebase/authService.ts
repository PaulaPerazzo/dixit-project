import { getAuth, GoogleAuthProvider, signInWithPopup, UserCredential } from 'firebase/auth';

//Obtém uma referência para o serviço de autenticação do Firebase
const auth = getAuth();

//Cria o provedor de autenticação do Google
const googleAuthProvider = new GoogleAuthProvider();

//Define o provedor de autenticação para usar a instância do auth
googleAuthProvider.setCustomParameters({
  // Pode ser vazio ou conter parâmetros personalizados
});

//Função para fazer login com o Google
export const signInWithGoogle = async (): Promise<UserCredential> => {
  try {
    const result = await signInWithPopup(auth, googleAuthProvider);

    return result;
  } catch (error) {
    throw error;
  }
};

//Função para pegar o ID do usuário logado
export const getCurrentUserId = (): string | null => {
  const user = auth.currentUser;
  return user ? user.uid : null;
};


