"use client";

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

const Descope = dynamic(
  () => import("@descope/nextjs-sdk").then((mod) => mod.Descope),
  { ssr: false }
);

export default function SignInPage() {
  const router = useRouter();

  return (
    <div className="flex justify-center mt-10">
      <Descope
        flowId="sign-up-or-in"
        onSuccess={() => {
          router.push("/");
        }}
        onError={(e) => {
          console.log("Login failed", e);
        }}
      />
    </div>
  );
}




