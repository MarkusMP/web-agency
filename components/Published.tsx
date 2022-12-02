import React from "react";
import "moment/locale/sv";
import Moment from "react-moment";
import { useRouter } from "next/router";

interface IProps {
  published: any;
}

const Published = ({ published }: IProps) => {
  const router = useRouter();

  return (
    <span className="text-sm">
      {router.locale === "sv" ? `Publicerades ` : `Published `}
      <Moment locale={router.locale === "sv" ? `sv` : `en`} fromNow>
        {published}
      </Moment>
    </span>
  );
};

export default Published;
