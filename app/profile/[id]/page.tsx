import ViewProfile from "@/components/profile/view";

export default async function Profile({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id;
    return (
      <div>
        <ViewProfile uid={id} />
      </div>
    )
  }  