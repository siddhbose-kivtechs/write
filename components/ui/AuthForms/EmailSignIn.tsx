"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { signInWithEmail } from "@/utils/auth-helpers/server";
import { handleRequest } from "@/utils/auth-helpers/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "../input";
import { useTranslation } from "@/app/i18n/client";

// Define prop type with allowPassword boolean
interface EmailSignInProps {
  allowPassword: boolean;
  redirectMethod: string;
  disableButton?: boolean;
  lng: string;
}

export default function EmailSignIn({
  allowPassword,
  redirectMethod,
  disableButton,
  lng,
}: EmailSignInProps) {
  const { t } = useTranslation(lng, "common");
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true); // Disable the button while the request is being handled
    await handleRequest(
      e,
      signInWithEmail,
      redirectMethod === "client" ? router : null,
    );
    setIsSubmitting(false);
  };

  return (
    <div className="my-8">
      <form
        noValidate={true}
        className="mb-4"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="grid gap-2">
          <div className="grid gap-1">
            <label htmlFor="email">{t("email-label")}</label>
            <Input
              id="email"
              placeholder={t("email-input-placeholder")}
              type="email"
              name="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
            />
          </div>
          <Button type="submit" className="mt-1" disabled={disableButton}>
            {t("sign-in")}
          </Button>
        </div>
      </form>
      {allowPassword && (
        <>
          <p className="text-center text-sm font-light underline">
            <Link href="/signin/password_signin">
              {t("sign-email-password")}
            </Link>
          </p>
          <p className="space-x-2 text-center text-sm font-light">
            <span>{t("link-text-2")}</span>
            <Link
              href="https://account.peyronnet.group/signin/signup"
              className="underline"
            >
              {t("sign-up")}
            </Link>
          </p>
        </>
      )}
    </div>
  );
}
