import Temp from "@/components/Temp";
import { templetes } from "@/utils/templetes";

export default function SingleTempletePage({ params }) {
    const slug = params.slug;
    const templete = templetes.find((p) => p.slug === slug);

    return (
        <>
        <Temp templete={templete} />
        </>
    )
}