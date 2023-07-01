const { Configuration, OpenAIApi } = require("openai")
const configuration = new Configuration({
	apiKey: "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",
})
const openai = new OpenAIApi(configuration)
export async function get() {
    const response = await openai.createCompletion({
			model: "gpt-3.5-turbo",
			prompt: "hi",
			// temperature: 0,
			max_tokens: 7,
		})

    console.log(response);
}

// get()

