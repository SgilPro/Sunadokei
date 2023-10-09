"use client";

import React from "react";
import Button, { ButtonType } from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartPie, faGear, faUser, faHourglass2 } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const router = useRouter();

  const go = (route?: string) => {
    if (!route) {
      return () => router.push("/");
    } else {
      return () => router.push(`/${route}`);
    }
  };

  return (
    <div className="flex h-16 bg-sd-yellow-1 justify-between items-center px-4">
      <div>
        {/* TODO: change this into logo */}
        <Button type={ButtonType.TEXT} onClick={go()}>
          <FontAwesomeIcon icon={faHourglass2} />
          Sunadokei
        </Button>
      </div>
      <div className="flex gap-2">
        <Button onClick={go("report")}>
          <FontAwesomeIcon icon={faChartPie} />
          Report
        </Button>
        <Button onClick={go("settings")}>
          <FontAwesomeIcon icon={faGear} />
        </Button>
        <Button onClick={go("profile")}>
          <FontAwesomeIcon icon={faUser} />
          Profile
        </Button>
      </div>
    </div>
  );
}
