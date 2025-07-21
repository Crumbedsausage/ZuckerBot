import LoginForm from '@/components/auth/LoginForm';

export default function LoginPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
            Sign in to AdIntel
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Access competitor ad insights and AI analysis
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}