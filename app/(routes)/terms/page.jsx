export const metadata = {
  title: "Terms & Conditions | Service Booking Platform",
};

export default function TermsPage() {
  return (
    <div className="px-6 md:px-36 pt-24 pb-16">
      <h1 className="text-3xl font-bold mb-6">
        Terms & Conditions
      </h1>

      <p className="text-gray-600 leading-7">
        By using our platform, you agree to follow our terms and
        conditions. Users must provide accurate information and respect
        service providers.
      </p>

      <p className="text-gray-600 leading-7 mt-4">
        We reserve the right to suspend accounts that violate our
        policies.
      </p>
    </div>
  );
}