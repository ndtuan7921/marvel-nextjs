import React from "react";
import { getComics } from "@/services";
import ComicsList from "@/components/hotfix/ComicsList";

async function ComicsPage() {
  const comics = await getComics();
  console.log(comics);
  return <ComicsList data={comics} />;
}

// export default withAuth(ComicsPage);

export default ComicsPage;
