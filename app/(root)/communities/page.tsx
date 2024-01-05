import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs";

import Searchbar from "@/components/shared/Searchbar";

async function Page() {

  return (
    <section>
      <h1 className="head-text mb-10">Communities</h1>
    </section>
  );
}

export default Page;
