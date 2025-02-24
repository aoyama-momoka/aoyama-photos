import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <main className="flex items-center justify-center bg-gray-900 min-h-screen">
    <div className="bg-gray-700 rounded-lg shadow-lg p-6 w-full max-w-lg">
      <h2 className="text-white text-2xl font-bold mb-4 text-center">Welcome to Aoyama Photos</h2>
      <p className="mb-6 text-lg text-center">
        サインインしてお気に入りの写真をアップロード・保存しましょう
      </p>
      <AuthForm />
    </div>
  </main>
  );
}
