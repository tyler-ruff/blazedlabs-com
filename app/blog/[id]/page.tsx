import SinglePost from "@/components/single";

export default function Page({ params }: { params: { id: string } }) {
    return <SinglePost postId={params.id} />
}