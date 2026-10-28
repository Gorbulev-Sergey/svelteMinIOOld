import { minioClient } from '$lib/minIO';

export async function GET() {
	let buckets = minioClient.listBuckets();
	return new Response(JSON.stringify(await buckets));
}
