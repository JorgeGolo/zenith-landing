// src/components/ComingSoonPage.tsx

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 font-sans text-center">
      <div className="bg-white p-8 sm:p-12 rounded-xl shadow-lg max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
          We are almost ready!
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          New App coming soon!
        </p>
        <p>
          <ul>
            <li>
                        <a href="/privacy-policy">
            Privacy Policy
          </a>
            </li>
            <li>
              <a href="/terms-of-service">
                Terms of Service
              </a>
            </li>
          </ul>
          <a href="/privacy-policy">
            Privacy Policy
          </a>
        </p>

        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-md">
          <p className="font-bold">Available at Google Play!</p>
          <p>For Android.</p>
        </div>
      </div>
    </main>
  );
}