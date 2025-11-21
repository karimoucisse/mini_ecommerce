import Fastify from "fastify"

const fastify = Fastify({logger: true});
const port = process.env.PORT || 3000;

fastify.get("/", async (req, res) => {
	return ("Hello world !");
})
fastify.listen({port}, (err, address) => {
	if(err)
	{
		fastify.log.error(err);
		process.exit(1);
	}
	fastify.log.info(`Server is running on ${address}`)
})
