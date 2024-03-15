"use client";

import React from "react";
import { useRouter } from "next/router";

const verificationCode = ({
  params,
}: {
  params: { verificationCode: string };
}) => {
  console.log(params);

  return <div>verificationCode is {params.verificationCode}</div>;
};

export default verificationCode;
