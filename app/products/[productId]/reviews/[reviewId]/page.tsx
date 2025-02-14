import { notFound } from "next/navigation";

function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
}

export default async function ReviewDetail({
    params: rawParams,
}: {
    params: Promise<{
        productId: string;
        reviewId: string;
    }>;
}) {
    const params = await rawParams; // Await params before using it
    const { productId, reviewId } = params;

    const random = getRandomInt(2);
    if (random === 1) {
        throw new Error("Error loading review");
    }

    if (Number(reviewId) > 1000) {
        notFound();
    }

    return <h1>Review {reviewId} for product {productId}</h1>;
}
