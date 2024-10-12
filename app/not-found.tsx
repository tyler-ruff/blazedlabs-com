import Error from "@/components/error";

export default function Page(){
    return (
        <Error
            code="404"
            title="Uh-oh!"
            description="We can't seem to find that page."
        />
    );
}