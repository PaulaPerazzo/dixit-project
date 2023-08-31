import { signInWithGoogle } from './authService';

// Exemplo de uso
async function main() {
  try {
    const userCredential = await signInWithGoogle();
    const user = userCredential.user;
    console.log('Usuário logado:', user);
  } catch (error) {
    console.error('Erro ao fazer login:', error);
  }
}

main();